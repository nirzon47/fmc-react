'use client'

import Image from 'next/image'
import { useState } from 'react'

const ImageGallery = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null)
	return (
		<>
			<div className='flex gap-4'>
				<Image
					src={'/cat-1.jpg'}
					alt='cat'
					width={300}
					height={300}
					onClick={() => setSelectedImage('/cat-1.jpg')}
					className='w-24 h-24 object-cover rounded-md hover:scale-110 duration-200 cursor-pointer'
				/>
				<Image
					src={'/cat-2.jpg'}
					alt='cat'
					width={300}
					height={300}
					onClick={() => setSelectedImage('/cat-2.jpg')}
					className='w-24 h-24 object-cover rounded-md hover:scale-110 duration-200 cursor-pointer'
				/>
				<Image
					src={'/cat-3.jpg'}
					alt='cat'
					width={300}
					height={300}
					onClick={() => setSelectedImage('/cat-3.jpg')}
					className='w-24 h-24 object-cover rounded-md hover:scale-110 duration-200 cursor-pointer'
				/>
				<Image
					src={'/cat-4.jpg'}
					alt='cat'
					width={300}
					height={300}
					onClick={() => setSelectedImage('/cat-4.jpg')}
					className='w-24 h-24 object-cover rounded-md hover:scale-110 duration-200 cursor-pointer'
				/>
			</div>
			<div className='mt-24'>
				<Image
					src={selectedImage || '/cat-1.jpg'}
					alt='cat'
					width={600}
					height={600}
					className='w-96 h-96 object-cover rounded-md'
				/>
			</div>
		</>
	)
}

export default ImageGallery
