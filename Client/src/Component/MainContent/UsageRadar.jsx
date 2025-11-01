import React, { useContext } from 'react'
import { FiEye } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PowerGridContext } from '../../Context/GraphContext';


function UsageRadar() {
  const { data } = useContext(PowerGridContext);

  return (
    <div className='col-span-4 overflow-hidden rounded border border-stone-300'>
        <div className='p-4'>
            <h1 className='flex items-center gap-1.5 font-bold mb-4'>
                <FiEye/>
                Usage
            </h1>
            
            {data.length === 0 ? (
              <p className='text-stone-500 text-sm'>No data yet. Add measurements to see the chart.</p>
            ) : (
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={data}
                  margin={{
                    top: 20,
                    right: 10,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="timestamp" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    className='text-xs'
                  />
                  <YAxis width={50} className='text-xs' />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="wind" fill="#67fe47" name="Wind Power" />
                  <Bar dataKey="solar" fill="#9ca3af" name="Solar Power" />
                  <Bar dataKey="demand" fill="#3b82f6" name="Demand" />
                </BarChart>
              </ResponsiveContainer>
            )}
        </div>
    </div>
  )
}

export default UsageRadar