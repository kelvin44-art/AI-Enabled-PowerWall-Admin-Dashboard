import Grid from './Grid'
import Topbar from './Topbar'

function Dashboard() {
  return (
    <div className='bg-white rounded-lg pb-4 h-[200vh]'>
      <Topbar/>
      <Grid/>
      
    </div>
  )
}

export default Dashboard