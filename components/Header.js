
import Image from 'next/legacy/image';
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UsersIcon, UserCircleIcon } from '@heroicons/react/24/solid'
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
        <input className='pl-5 transparent outline-none flex-grow text-sm text-gray-600 placeholder-grey-400' type='text' placeholder='Start your search'/>
        <MagnifyingGlassIcon className='h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
      </div>

      {/* Right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'> 
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6' />

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
            <Bars3Icon className='h-6' />
            <UserCircleIcon className='h-6'/>
        </div>
      </div>
      </header>
      
    )
}

export default Header;