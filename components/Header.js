import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaEyeSlash, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
    const [open, setOpen] = useState(false)
    const navbar = (
        <>
        <Link href={'/'}>
            <a className='font-bold uppercase text-md text-gray-700 hover:text-sky-500'>Home</a>
        </Link>
        <Link href={'/about'}>
            <a className='font-bold uppercase text-md text-gray-700 hover:text-sky-500'>About</a>
        </Link>
        <Link href={'/services'}>
            <a className='font-bold uppercase text-md text-gray-700 hover:text-sky-500'>Services</a>
        </Link>
        <Link href={'/blog'}>
            <a className='font-bold uppercase text-md text-gray-700 hover:text-sky-500'>Blog</a>
        </Link>
        <Link href={'/contact-us'}>
            <a className='font-bold uppercase text-md text-gray-700 hover:text-sky-500'>Contact us</a>
        </Link>
        <Link href={'/contact-us'}>
            <a className='font-bold uppercase text-md text-gray-700 hover:text-sky-500'>Dashboard</a>
        </Link>
        </>
    )
    return (
        <header className='bg-gray-50 px-2 sticky top-0 z-50 shadow-md'>
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className='md:flex-none w-[100%] md:w-[20%] lg:w-[20%] order-2 sm:order-1 flex justify-center items-center gap-3 py-4 sm:py-0 relative'>
                    <span className='cursor-pointer' onClick={()=>setOpen(!open)}>
                        { 
                        open ? <FaBars  size={40} className='p-2 block md:block lg:hidden z-40 text-sky-500' />
                        :
                        <FaEyeSlash  size={40} className='p-2 block md:block lg:hidden z-40 text-sky-500' />
                        }
                    </span>
                    <Link href={'/'}>
                        <a className='font-bold uppercase text-3xl text-sky-500 hidden md:hidden lg:flex'>D</a>
                    </Link>
                    <Link href={'/'}>
                        <a className='font-bold uppercase text-3xl text-sky-500 block md:block lg:hidden'>Design</a>
                    </Link>
                    <input type="text" className='input-text' placeholder='search...' />
                </div>
                <div className='shrink w-[100%] md:w-[60%] lg:w-[60%] sm:order-2 justify-center items-center gap-5 hidden md:hidden lg:flex'>
                    
                    {navbar}
                  
                </div>
                
                <div className='w-[100%] md:w-[20%] lg:w-[20%] order-3 flex justify-center md:justify-end lg:justify-end items-center'>
                    <div className='flex justify-start items-center gap-6'>
                        <Link href={'/'}><a href=""><FaFacebookF className="text-gray-500 hover:text-sky-500" /></a></Link>
                        <Link href={'/'}><a href=""><FaYoutube className="text-gray-500 hover:text-sky-500" /></a></Link>
                        <Link href={'/'}><a href=""><FaTwitter className="text-gray-500 hover:text-sky-500" /></a></Link>
                        <Link href={'/'}><a href=""><FaInstagram className="text-gray-500 hover:text-sky-500" /></a></Link>
                        <Link href={'/login'}><a className='text-sky-500'>LogIn</a></Link>
                    </div>
                </div>
            </div>
            {open ? <div className='w-56 absolute top-0 left-0 flex flex-col gap-3 ml-6 mt-14 bg-gray-200 p-5'> {navbar} </div>: ""}

        </header>
    );
};

export default Header;