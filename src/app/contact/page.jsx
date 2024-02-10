'use client'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

const ContactPage = () => {
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)
	const text = 'Say Sup'

	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()
		setError(false)
		setSuccess(false)

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_PUBLIC_KEY
			)
			.then(
				() => {
					setSuccess(true)
					form.current.reset()
				},
				() => {
					setError(true)
				}
			)
	}

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
				<div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
					<div>
						{text.split('').map((letter, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: index * 0.1,
								}}
							>
								{letter}
							</motion.span>
						))}
						😊
					</div>
				</div>
				<form
					onSubmit={sendEmail}
					ref={form}
					className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'
				>
					<span>Dear GoGagoo,</span>
					<textarea
						rows={6}
						placeholder='Continue your letter...'
						className='bg-transparent border-b-2 border-b-black outline-none resize-none'
						name='user_message'
					/>
					<span>My mail address is:</span>
					<input
						name='user_email'
						type='text'
						placeholder='Type your email'
						className='bg-transparent border-b-2 border-b-black outline-none'
					/>

					<button className='p-4'>
						<a
							class='group rounded font-semibold relative inline-block text-sm text-indigo-600 focus:outline-none focus:ring'
							href='#'
						>
							<span class='p-4 absolute inset-0 translate-x-0 translate-y-0 bg-purple-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5'></span>

							<span class='relative flex items-center justify-center border border-current bg-white px-8 py-3'>
								Send
							</span>
						</a>
					</button>
					{success && (
						<span className='text-green-600 font-semibold'>
							Your message has been sent successfully!
						</span>
					)}
					{error && (
						<span className='text-red-600 font-semibold'>
							Something went wrong!
						</span>
					)}
				</form>
			</div>
		</motion.div>
	)
}

export default ContactPage
