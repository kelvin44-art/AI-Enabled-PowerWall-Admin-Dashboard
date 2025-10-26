import React from 'react'
import { FiCalendar } from 'react-icons/fi'

function Topbar() {
  return (
    <div className='border-b px-4 mb-4 mt-2 pb-4 border-stone-300'>
        <div className='flex items-center justify-between p-0.5'>
            <div className=''>
                <span className='text-sm font-bold block'>
                    Good Morning, Kelvin
                </span>
                <span className='text-xs block text-stone-500 '>
                    Tuesday, 28th October 2025
                </span>
            </div>
            <button className='flex text-sm items-center gap-2 
            bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 
            rounded'>
                <FiCalendar/>
                <span>Prev 6 months</span>
            </button>

        </div>

    </div>
  )
}

export default Topbar