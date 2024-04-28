'use client'

import { useState } from 'react'

const AnagramChecker = () => {
	const [string1, setString1] = useState<string>('')
	const [string2, setString2] = useState<string>('')
	const [feedback, setFeedback] = useState<string>('')
	const [inputDisabled, setInputDisabled] = useState<boolean>(false)

	const handleString1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setString1(e.target.value)
		setInputDisabled(false)
		setFeedback('')
	}

	const handleString2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setString2(e.target.value)
		setInputDisabled(false)
		setFeedback('')
	}

	const checkAnagram = (e: React.FormEvent) => {
		e.preventDefault()

		const map1: any = {}
		const map2: any = {}

		for (let ch of string1) {
			map1[ch] = map1[ch] !== undefined ? map1[ch] + 1 : 0
		}

		for (let ch of string2) {
			map2[ch] = map2[ch] !== undefined ? map2[ch] + 1 : 0
		}

		if (Object.keys(map1).length !== Object.keys(map2).length) {
			setFeedback('Strings are not anagrams')
			setInputDisabled(true)
			return
		}

		for (let key of Object.keys(map1)) {
			if (map1[key] !== map2[key]) {
				setFeedback('Strings are not anagrams')
				setInputDisabled(true)
				return
			}
		}

		setFeedback('Strings are anagrams')
		setInputDisabled(true)
	}

	return (
		<>
			<form className='grid gap-4' onSubmit={checkAnagram}>
				<div className='grid gap-1'>
					<label htmlFor='string1'>Enter first String</label>
					<input
						type='text'
						id='string1'
						name='string1'
						value={string1}
						onChange={handleString1Change}
					/>
				</div>
				<div className='grid gap-1'>
					<label htmlFor='string2'>Enter second String</label>
					<input
						type='text'
						id='string2'
						name='string2'
						value={string2}
						onChange={handleString2Change}
					/>
				</div>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-150'
					disabled={inputDisabled}
				>
					Check
				</button>
				<p className='text-red-300 font-semibold text-lg text-center'>
					{feedback}
				</p>
			</form>
		</>
	)
}

export default AnagramChecker
