'use client';

import React from 'react'
import Link from 'next/link'
import { AiOutlineIssuesClose } from "react-icons/ai";
import { usePathname } from 'next/navigation';
// import { Herr_Von_Muellerhoff } from 'next/font/google';

const NavBar = () => {
    const currentPath = usePathname();
    // console.log(currentPath);

    const links = [
        {label:'Dashboard',href:'/'},
        {label:'Issues',href:'/issues'}
    ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/">
            <AiOutlineIssuesClose />
        </Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
            <Link 
            key={link.href} 
            className={`${currentPath===link.href ?  'text-zinc-900' :'text-zinc-500'} hover:text-zinc-900 transition-colors`}
            href={link.href}>
                {link.label}
            </Link>
            )}
            
        </ul>

    </nav>
  )
}

export default NavBar