import {FiChevronDown, FiChevronUp} from 'react-icons/fi'

function AccountToggle() {
  return (
    <div className='border-b border-stone-300 mb-4 pb-4 mt-2'>
        <button className='flex p-0.5
         hover:bg-stone-100 rounded
          transition-colors relative
          gap-2 w-full items-center'>
            <img src="https://api.dicebear.com/9.x/notionists/svg?seed=JD"
             alt="Avatar Image"
             className='size-8 rounded shrink-0 bg-violet-500 shadow' />
             <div className='text-start'>
                <span className='text-sm font-bold block'>Kelvin Waruinge</span>
                <span className='text-xs block text-stone-400'>wark@gmail.com</span>
             </div>
             <FiChevronUp className='absolute right-2 top-1/2 translate-y-[calc(-50%)] text-xs'/>
             <FiChevronDown className='absolute right-2 top-1/2 translate-y-[calc(-50%-4)] text-xs'/>

        </button>
    </div>
  )
}

export default AccountToggle