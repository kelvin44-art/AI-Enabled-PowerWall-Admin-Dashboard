import React, { useCallback, useState } from 'react'
import { FiGitBranch } from 'react-icons/fi'

function AIChart() {
  const [data, setData] = useState([])
  const [input, setInput] = useState('')
  const [windSolar, setWindSolar] = useState('')
  const [demandBefore, setDemandBefore] = useState('')
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const newEntry = {
      input: parseFloat(input), 
      windSolar: parseFloat(windSolar), 
      demandBefore: parseFloat(demandBefore)
    }
    setData(d => [...d, newEntry]) // Append to array
    setDemandBefore('')
    setInput('')
    setWindSolar('')
    
  }, [input, demandBefore, windSolar, data]) 
  
  return (
    <div className='col-span-12 p-4 rounded border border-stone-300'>
        <div className='mb-4 flex items-center justify-between'>
            <h1 className='flex items-center gap-1.5 font-medium'>
                <FiGitBranch/>
                AI Analysis    
            </h1>
        </div>
        <form onSubmit={handleSubmit} className='flex max-sm:flex-col sm:flex-row flex-col gap-2'>

          <div className='flex gap-2 items-center'>
            <label htmlFor="demandBefore">Demand Before</label>
            <input 
              type="number"
              id="demandBefore"
              step="any"
              required
              onChange={(e) => setDemandBefore(e.target.value)}
              value={demandBefore}
              className='border py-1 px-2 rounded' 
            />
          </div>

          <div className='flex gap-2 items-center'>
            <label htmlFor="windSolar">Wind Solar</label>
            <input 
              type="number"
              id="windSolar"
              step="any"
              required
              onChange={(e) => setWindSolar(e.target.value)}
              value={windSolar}
              className='border py-1 px-2 rounded' 
            />
          </div>

          <div className='flex gap-2 items-center'>
            <label htmlFor="input">Input</label>
            <input 
              type="number"
              id="input"
              step="any"
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='border py-1 px-2 rounded' 
            />
          </div>
          
          <button 
            type='submit'
            className='border-2 border-gray-700 py-1 px-4 rounded-2xl bg-gray-500 text-white hover:bg-gray-600 transition-colors'>
            Analyse
          </button>
        </form>

        {/* Display collected data */}
        {data.length > 0 && (
          <div className='mt-4'>
            <h2 className='font-medium mb-2'>Analysis Results:</h2>
            <div className='space-y-2'>
              {data.map((entry, index) => (
                <div key={index} className='p-2 bg-gray-50 rounded border'>
                  <span className='text-sm'>
                    Demand: {entry.demandBefore} | Wind/Solar: {entry.windSolar} | Input: {entry.input}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  )
}

export default AIChart