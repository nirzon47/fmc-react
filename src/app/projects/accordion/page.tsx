'use client'

import { useState } from 'react'

const AccordionItems = ({
	title,
	desc,
	isOpened,
	toggleAccordion,
}: {
	title: string
	desc: string
	isOpened: boolean
	toggleAccordion: () => void
}) => {
	return (
		<div className='mb-4'>
			<div className='flex justify-between items-center gap-4'>
				<h2 className='text-xl font-bold text-blue-400'>{title}</h2>
				<p
					className='text-slate-300 text-xl cursor-pointer'
					onClick={toggleAccordion}
				>
					{isOpened ? '-' : '+'}
				</p>
			</div>
			<p style={{ display: isOpened ? 'block' : 'none' }} className='w-96'>
				{desc}
			</p>
		</div>
	)
}

const Accordion = () => {
	const [openedIndex, setOpenedIndex] = useState<number>(-1)

	const toggleAccordion = (index: number) => {
		setOpenedIndex(openedIndex === index ? -1 : index)
	}

	return (
		<div>
			<AccordionItems
				title={'Do I have to allow the use of cookies?'}
				desc={
					'Unicorn vinyl poutine brooklyn, next level direct trade iceland.'
				}
				isOpened={openedIndex === 0}
				toggleAccordion={() => toggleAccordion(0)}
			/>
			<AccordionItems
				title={'How do I change my My Page password?'}
				desc={'Coloring book forage photo booth gentrify lumbersexual.'}
				isOpened={openedIndex === 1}
				toggleAccordion={() => toggleAccordion(1)}
			/>
			<AccordionItems
				title={'What is BankID?'}
				desc={'Enamel pin fam sustainable woke whatever venmo.'}
				isOpened={openedIndex === 2}
				toggleAccordion={() => toggleAccordion(2)}
			/>
			<AccordionItems
				title={'Whose birth number can I use?'}
				desc={
					'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid.'
				}
				isOpened={openedIndex === 3}
				toggleAccordion={() => toggleAccordion(3)}
			/>
		</div>
	)
}

export default Accordion
