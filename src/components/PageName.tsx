'use client'

import { usePathname } from 'next/navigation'

const PageName = () => {
	const path = usePathname().split('/').pop()

	return (
		<h1 className='capitalize text-2xl md:text-3xl font-semibold'>{path}</h1>
	)
}

export default PageName
