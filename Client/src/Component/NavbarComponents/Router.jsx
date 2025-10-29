import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUser } from 'react-icons/fi'
import {Link} from 'react-router-dom'

function Router() {
  return (
    <div>
        <Route selected='true' link='/' icon={<FiHome/>} text='Home'/>
        <Route icon={<FiUser/>} text='Team'/>
        <Route icon={<FiPaperclip/>} text='Invoices'/>
        <Route icon={<FiLink/>} text='Integration'/>
        <Route icon={<FiDollarSign/>} text='Finance'/>
    </div>
  )
}

export default Router

const Route = ({
    icon, link, text, selected
}) =>
    {
    return <button  to={`${link}`} className={`flex items-center justify-start gap-2 w-full rounded px-2
    py-1.5 text-sm transition-[box-shadow_background-color_color] ${selected?
        'bg-white text-stone-950 shadow'
        : 'hover:bg-stone-200 bg-transparent text-stone-500 shadow-none'
    }`}>
        <p className={selected? 'text-blue-400': ''}>{icon}</p>
        {text}
    </button>
}