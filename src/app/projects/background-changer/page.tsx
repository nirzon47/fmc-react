'use client'

import { useState } from 'react'

const BackgroundChanger = () => {
	const [bg, setBg] = useState('white')
	const colors = [
		'red',
		'green',
		'blue',
		'aqua',
		'cyan',
		'hotpink',
		'beige',
		'orange',
		'white',
		'black',
	]

	const getRandomColor = () => {
		return colors[Math.floor(Math.random() * colors.length)]
	}

	const changeColor = () => {
		setBg(getRandomColor())
	}

	return (
		<div
			className='h-96 w-screen flex justify-center items-center'
			style={{ backgroundColor: bg }}
		>
			<button onClick={changeColor}>Change Background</button>
		</div>
	)
}

export default BackgroundChanger
