'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ link }) => {
	const pathName = usePathname()

	return (
		<Link
			className={`rounded p-1 hover:bg-white hover:text-black transition ${
				pathName === link.url &&
				'bg-black text-white font-bold hover:bg-white hover:text-black transition'
			}`}
			href={link.url}
		>
			{link.title}
		</Link>
	)
}

export default NavLink
