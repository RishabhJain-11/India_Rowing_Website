import React from 'react'

const Filter = () => {
    return (
        <div className='flex justify-around'>
            <div className=''>Active Jobs</div>

            {/* <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Hire with us.</button> */}
            <button className='ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl'>Apply Filters</button>

        </div>
    )
}

export default Filter