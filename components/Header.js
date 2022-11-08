
import Image from 'next/legacy/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Search } from '@mui/icons-material';

function Header() {
    return ( 
        // Left
      <header className='sticky top-0 z-50 my-auto grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <div className='relative flex items-center h-10 cursor-pointer'>
      <Image src={"https://links.papareact.com/qd3"} layout="fill" objectFit='contain' objectPosition='left'/>

      </div>
      {/* Middle = Search */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input className='pl-5 transparent outline-none flex-grow' type='text' placeholder='Start your search'/>
        <MagnifyingGlassIcon className='h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex'/>

      </div>
      </header>
      
    )
}

export default Header;