import React from 'react'
import AccountToggle from '../NavbarComponents/AccountToggle'
import Searchbar from '../Searchbar/Searchbar'
import Router from '../NavbarComponents/Router'
import Plan from '../NavbarComponents/Plan'

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