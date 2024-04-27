'use client'

import { useState } from 'react'

const Counter = () => {
	const [counter, setCounter] = useState<number>(0)

	const decreaseCounter = () => {
		setCounter((prev) => prev - 1)
	}

	const increaseCounter = () => {
		setCounter((prev) => prev + 1)
	}

	const resetCounter = () => {
		setCounter(0)
	}

	return (
		<>
			<h2 className='text-7xl text-center mb-8'>{counter}</h2>
			<div className='flex gap-8'>
				<button
					className='bg-red-500 w-12 rounded-md text-2xl hover:scale-105 hover:bg-red-700 duration-150 py-1'
					onClick={decreaseCounter}
				>
					-
				</button>
				<button
					className='bg-green-500 w-12 rounded-md text-2xl hover:scale-105 hover:bg-green-700 duration-150 py-1'
					onClick={increaseCounter}
				>
					+
				</button>
			</div>
			<button
				className='mt-8 bg-blue-500 rounded-md hover:scale-105 hover:bg-blue-700 duration-150 py-2'
				onClick={resetCounter}
			>
				Reset
			</button>
		</>
	)
}

export default Counter
