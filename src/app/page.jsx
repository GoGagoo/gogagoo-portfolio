'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Homepage = () => {
	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
				{/* IMAGE CONTAINER */}
				<div className='h-1/2 lg:h-full lg:w-1/2 relative'>
					<Image src='/hero.png' alt='' fill className='object-contain' />
				</div>
				<div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
					<h1 className='text-4xl md:text-6xl font-bold'>
						Hello! I&apos;m Gagik Antonyan ֍ Frontend Developer
					</h1>
					<div className='w-full flex gap-4'>
						<button className='p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-transparent hover:text-black'>
							<a
								target='_blank'
								href='https://docs.google.com/document/d/1u2_Yyq7YaitSyuOR8RCmgHEaNwZDi2idPId-R0adEms/edit?usp=sharing'
							>
								View My CV
							</a>
						</button>
						<button className='p-4 rounded-lg ring-1 ring-black hover:bg-black hover:text-white'>
							<a href='/contact'>Contact Me</a>
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Homepage
