import React, { useContext } from 'react'
import { FiUser } from 'react-icons/fi'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { PowerGridContext } from '../../Context/GraphContext';


function ActivityGraph() {
  const { data } = useContext(PowerGridContext);

  return (
    <div className='col-span-8 overflow-hidden rounded border border-stone-300'>
      <div className='p-4'>
        <h1 className='flex items-center gap-1.5 font-medium'>
          <FiUser size={18} /> Power Grid Analysis
        </h1>
      </div>
      
      <div className='p-4'>
        {data.length === 0 ? (
          <p className='text-stone-500 text-sm'>No data yet. Add measurements to see the graph.</p>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="timestamp" 
                className='text-xs' 
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis className='text-xs' label={{ value: 'Power (MW)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="wind" stroke="#10b981" strokeWidth={2} name="Wind Power" />
              <Line type="monotone" dataKey="solar" stroke="#f59e0b" strokeWidth={2} name="Solar Power" />
              <Line type="monotone" dataKey="demand" stroke="#ef4444" strokeWidth={2} name="Demand" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}

export default ActivityGraph