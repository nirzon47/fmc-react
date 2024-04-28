'use client'

import { useState } from 'react'

const QuoteGenerator = () => {
	const [quote, setQuote] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)

	const getQuote = async () => {
		setLoading(true)
		try {
			const response = await fetch('https://api.quotable.io/quotes/random')
			const data = await response.json()

			setQuote(data[0].content)
		} catch (error) {
			setQuote('An error occurred. Please try again later.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='flex flex-col items-center'>
			<h2 className='px-4 w-full sm:w-10/12 md:w-2/3 lg:w-1/2 text-center text-xl font-light mb-4 h-64 italic'>
				{quote}
			</h2>
			<button onClick={getQuote} disabled={loading}>
				{loading ? 'Loading...' : 'Get Quote'}
			</button>
		</div>
	)
}

export default QuoteGenerator
