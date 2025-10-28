import React from 'react'
import AccountToggle from './AccountToggle'
import Searchbar from './Searchbar'
import Router from './Router'
import Plan from './Plan'

function Sidebar() {
  return (
    <div className='max-sm:hidden'>
        <div className=' overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
            <AccountToggle/>
            <Searchbar/>
            <Router/>
        </div>
        <Plan/>
    </div>
  )
}

export default Sidebar