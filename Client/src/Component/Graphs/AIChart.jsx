import React, { useContext } from 'react'
import { FiGitBranch } from 'react-icons/fi'
import { PowerGridContext } from '../../Context/GraphContext';


function AIChart() {
  const { 
    data, 
    wind, 
    solar, 
    demandBefore, 
    setWind, 
    setSolar, 
    setDemandBefore, 
    addDataPoint 
  } = useContext(PowerGridContext);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addDataPoint()
  }
  
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
            <label htmlFor="solar">Solar</label>
            <input 
              type="number"
              id="solar"
              step="any"
              required
              onChange={(e) => setSolar(e.target.value)}
              value={solar}
              className='border py-1 px-2 rounded' 
            />
          </div>

          <div className='flex gap-2 items-center'>
            <label htmlFor="wind">Wind</label>
            <input 
              type="number"
              id="wind"
              step="any"
              required
              value={wind}
              onChange={(e) => setWind(e.target.value)}
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
                    Demand: {entry.demand} | Solar: {entry.solar} | Wind: {entry.wind} | Time: {entry.timestamp}
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