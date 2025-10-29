import React, { useCallback, useState } from 'react'
import { FiGitBranch } from 'react-icons/fi'

function AIChart() {
  const [input, setInput] = useState(0)
  const [windSolar, setWindSolar] = useState([])
  const [demandBefore, setDemandBefore] = useState(0)
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault() // Prevent page refresh
    console.log( windSolar)
    console.log(demandBefore);
    console.log(input);
    
    
  }, [input, demandBefore, windSolar]) 
  
  return (
    <div className='col-span-12 p-4 rounded border border-stone-300'>
        <div className='mb-4 flex items-center justify-between'>
            <h1 className='flex items-center gap-1.5 font-medium'>
                <FiGitBranch/>
                Ai Analysis    
            </h1>
        </div>
        <form onSubmit={handleSubmit} className='flex max-sm:flex-row flex-col gap-2'>

          <div className='flex gap-2'>
            <label htmlFor="">Demand Before</label>
            <input type="text"
            onChange={(e)=>setDemandBefore(e.target.value)}
            value={demandBefore}
            className='border py-1' />
          </div>

          <div className='flex gap-2'>
            <label htmlFor="">Wind Solar</label>
            <input type="text"
            onChange={(e)=>setWindSolar(e.target.value)}
            value={windSolar}
            className='border py-1' />
          </div>

          <div className='flex gap-2'>
            <label htmlFor="">Input</label>
            <input type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className='border py-1' />
          </div>
          
          <button 
          type='submit'
          className='border-3 border-gray-700 py-1 px-4 rounded-2xl bg-gray-500 hover:bg-gray-600'>
            Analyse
          </button>
        </form>
    </div>
  )
}

export default AIChart