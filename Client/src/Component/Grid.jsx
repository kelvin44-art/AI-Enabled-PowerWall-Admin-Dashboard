
import ActivityGrapth from './ActivityGrapth'
import AIChart from './AIChart'
import StatsCard from './StatsCard'
import UsageRadar from './UsageRadar'

function Grid() {
  return (
    <div className='px-4 grid gap-3 grid-cols-12'>
        <StatsCard/>
        <ActivityGrapth/>
        <UsageRadar/>
        <AIChart/>
    </div>
  )
}

export default Grid