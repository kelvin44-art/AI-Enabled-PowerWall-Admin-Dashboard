import React from 'react'
import { FiGitBranch } from 'react-icons/fi'

function AIChart() {
  return (
    <div className='col-span-12 p-4 rounded border border-stone-300'>
        <div className='mb-4 flex items-center justify-between'>
            <h1 className='flex items-center gap-1.5 font-medium'>
                <FiGitBranch/>
                Ai Analysis
                
            </h1>
        </div>
        <div className='space-y-5'>
                <input type="text" placeholder='How can we help you today?'
                 name="userInput" id="userInput" 
                 className='placeholder:text-stone-300 focus:outline-none w-full text-wrap h-auto overflow-clip' />
                 <div>
                    <button className='bg-stone-700 text-white text-sm px-3 py-1 rounded '>Analyse</button>
                 </div>
        </div>
    </div>
  )
}

export default AIChart