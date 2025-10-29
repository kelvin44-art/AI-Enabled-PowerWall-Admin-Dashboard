import StatsCard from "../../Cards/StatsCard"
import ActivityGrapth from "../Graphs/ActivityGrapth"
import AIChart from "../Graphs/AIChart"
import UsageRadar from "./UsageRadar"



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