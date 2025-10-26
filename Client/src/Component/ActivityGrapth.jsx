import React from 'react'
import { FiUser } from 'react-icons/fi'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// #endregion



function ActivityGrapth() {
  return (
    <div className='col-span-8 overflow-hidden rounded border border-stone-300'>
        <div className='p-4'>
            <h1 className='flex items-center gap-1.5 font-medium'> <FiUser/> Analysis</h1>

        </div>
         <LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" className='text-xs font-bold' padding={{ left: 30, right: 30 }} />
      <YAxis width="auto" className='text-xs font-bold'/>
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#18181b" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#5b21b6" />
    </LineChart>
    </div>
  )
}

export default ActivityGrapth