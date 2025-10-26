import React from 'react'
import { FiEye } from 'react-icons/fi';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];
function UsageRadar() {
  return (
    <div className='col-span-4 overflow-hidden rounded border border-stone-300'>
        <div className='p-4'>
            <h1 className='flex items-center gap-1.5 font-bold'>
                <FiEye/>
                Usage
            </h1>
            
                <RadarChart
                style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
                responsive
                outerRadius="80%"
                data={data}
                >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Mike" dataKey="A" stroke="#e43be4" fill="#f4aaf4" fillOpacity={0.6} />
                <Radar name="Lily" dataKey="B" stroke="#635f5f" fill="#ccc1c1" fillOpacity={0.6} />
                <Legend />
                </RadarChart>
            
        </div>
    </div>
  )
}

export default UsageRadar