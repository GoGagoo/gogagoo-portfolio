'use client'
import { GradientText } from '@/components/gradient-text'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const items = [
	{
		id: 1,
		color: 'from-red-300 to-blue-300',
		title: 'GoGagoo CV',
		desc: 'My minimalist CV page',
		img: '/images/1.jpg',
		link: 'https://gogagoo-cv.vercel.app/',
		gitUrl: 'https://github.com/GoGagoo/cv',
	},
	{
		id: 2,
		color: 'from-blue-300 to-violet-300',
		title: 'GitHub Ninja',
		desc: 'Small site, thanks to which can get a Github user profile',
		img: '/images/2.jpg',
		link: 'https://github-ninja.vercel.app/',
		gitUrl: 'https://github.com/GoGagoo/github-ninja',
	},
	{
		id: 3,
		color: 'from-violet-300 to-purple-300',
		title: 'Search Input',
		desc: 'Simple page with pretty input',
		img: '/images/3.jpg',
		link: 'https://gogagoo-react-input.vercel.app/',
		gitUrl: 'https://github.com/GoGagoo/react-test-task/',
	},
	{
		id: 4,
		color: 'from-purple-300 to-red-300',
		title: 'Pizza Mizza',
		desc: 'Not hard pizza delivery site with auth and shopping cart',
		img: '/images/4.jpg',
		link: 'https://pizza-mizza-app.vercel.app/',
		gitUrl: 'https://github.com/GoGagoo/pizza-mizza-app',
	},
]

const PortfolioPage = () => {
	const ref = useRef()

	const { scrollYProgress } = useScroll({ target: ref })
	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className='h-[600vh] relative' ref={ref}>
				<div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
					<GradientText />
				</div>
				<div className='sticky top-0 flex h-screen gap-4 items-center'>
					<motion.div style={{ x }} className='flex'>
						<div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
						{items.map((item) => (
							<div
								className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
								key={item.id}
							>
								<div className='flex flex-col gap-4.5 text-white'>
									<h1 className='text-xl mb-3 font-bold md:text-4xl lg:text-6xl xl:text-8xl'>
										{item.title}
									</h1>
									<div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
										<Image src={item.img} alt='' fill />
									</div>
									<p className='w-80 mt-3 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]'>
										{item.desc}
									</p>
									<div className='flex mt-3 justify-between'>
										<Link target='_blank' href={item.gitUrl} className=''>
											<button className='p-2 text-sm md:p-4 md:text-md lg:p-3 lg:text-lg bg-white text-gray-600 font-semibold rounded-lg hover:bg-black hover:text-white'>
												See Code
											</button>
										</Link>
										<Link target='_blank' href={item.link}>
											<button className='p-2 text-sm md:p-4 md:text-md lg:p-3 lg:text-lg bg-white text-gray-600 font-semibold rounded-lg hover:bg-black hover:text-white'>
												See Demo
											</button>
										</Link>
									</div>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</motion.div>
	)
}

export default PortfolioPage
