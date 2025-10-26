import React from 'react'
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi'

function StatsCard() {
  return (
    <>

     <Card
     title={'Direct self-use'}
     pilltext={'2.75'}
     trend={'down'}
     value={'37.230kwh'}/>
     <Card
     title={'Yield energy'}
     pilltext={'2.75'}
     trend={'up'}
     value={'57.200kwh'}/>
     <Card
     title={'Grid Consumption'}
     pilltext={'2.75'}
     trend={'down'} 
     value={'10.600kwh'}/>
     
    </>
  )
}

export default StatsCard

const Card = ({
  title,
  period,
  pilltext,
  trend,
  value,
}) => {
  return<div className='p-4  col-span-4 border rounded border-stone-300'>
    <div className='flex mb-8 items-start justify-between'>
      <div>
        <h1 className='text-stone-500 mb-2 text-sm'>{title}</h1>
        <p className='text-3xl font-bold'>{value}</p>
      </div>
     <span className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
       {
        trend === 'up'? <FiTrendingUp/> : <FiTrendingDown/>
      }
      {pilltext}
     </span>

    </div>
  </div>
}