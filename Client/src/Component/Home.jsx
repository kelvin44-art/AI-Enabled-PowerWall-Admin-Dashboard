

import Dashboard from './DashBoard/Dashboard'
import Sidebar from './NavBars/Sidebar'

function Home() {
  return (
    <main className='grid gap-4 p-4 grid-cols-[220px_1fr] bg-[#e7e6e6]'>
        <Sidebar/>
        <Dashboard/>
    </main>
  )
}

export default Home