import React from 'react'
import { FiCalendar, FiMoon, FiSun } from 'react-icons/fi'

function Topbar() {
    const now = new Date();
    console.log(now)
    const hour = now.getHours();
    console.log(hour)
    const date = now.getDate()
    const minutes = now.getMinutes()
    console.log(minutes);
    const seconds= now.getSeconds()
  return (
    <div className='border-b px-4 mb-4 mt-2 pb-4 border-stone-300'>
        <div className='flex items-center justify-between p-0.5'>
            <div className=''>
                <span className='text-sm flex font-bold'>
                    {hour < 12 ? 
                     (<p className='flex gap-1 items-center '> <FiSun className='text-[#FFD700] shadow-4xl shadow-amber-100 '/> GoodMorning </p> )
                     :
                     (<p className='flex gap-1 items-center '> <FiMoon   className='text-black shadow-4xl shadow-amber-100 '/> Good Afternoon</p> )} Kelvin
                </span>
                <span className='text-xs block text-stone-500 '>
                    Tuesday, {date}th October 2025 
                </span>
                
            </div>
            <button className='flex text-sm items-center gap-2 
            bg-stone-100 transition-colors hover:bg-blue-100 hover:text-blue-700 px-3 py-1.5 
            rounded'>
                <FiCalendar/>
                <span>Prev 6 months</span>
            </button>

        </div>

    </div>
  )
}

export default Topbar