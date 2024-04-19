import React from 'react';
import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';



const Navbar = () => {

    return (
         <nav className='flex items-center bg-blue-400 bg-opacity-30 p-2 m-3 rounded h-16'>
            
            <Link href='/'>
                <HomeIcon size={24} />
            </Link>

            <div className='flex flex-1'/>

            <div className='flex fle gap-3'>
                <Link href='/new'>
                Create task
                </Link>
            </div>
         </nav>
    );  
}

export default Navbar;