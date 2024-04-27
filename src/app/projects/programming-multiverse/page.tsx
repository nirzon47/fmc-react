import languagesData from './data'

const ProgrammingMultiverse = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8 items-center px-8'>
			{languagesData.map((language) => (
				<div
					key={language.name}
					className='flex flex-col shadow-lg ring-1 dark:ring-slate-600 ring-slate-800 dark:shadow-slate-800 rounded-md p-4 cursor-pointer hover:-translate-y-0.5 duration-150'
				>
					<h2 className='text-xl font-bold text-blue-400 mb-4'>
						{language.name}
					</h2>
					<p>Created in {language.year}</p>
					<p>Creator: {language.creator}</p>
					<p>Use case: {language.usecase}</p>
				</div>
			))}
		</div>
	)
}

export default ProgrammingMultiverse
