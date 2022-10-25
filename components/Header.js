import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaStream, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
    const navbar = (
        <>
        <Link href={'/'}>
            <a className='font-bold uppercase text-md text-gray-700'>Home</a>
        </Link>
        <Link href={'/about'}>
            <a className='font-bold uppercase text-md text-gray-700'>About</a>
        </Link>
        <Link href={'/services'}>
            <a className='font-bold uppercase text-md text-gray-700'>Services</a>
        </Link>
        <Link href={'/blog'}>
            <a className='font-bold uppercase text-md text-gray-700'>Blog</a>
        </Link>
        <Link href={'/contact-us'}>
            <a className='font-bold uppercase text-md text-gray-700'>Contact us</a>
        </Link>
        <Link href={'/contact-us'}>
            <a className='font-bold uppercase text-md text-gray-700'>Dashboard</a>
        </Link>
        </>
    )
    return (
        <header className='bg-gray-50 px-2 sticky top-0 z-40 shadow-md'>
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className='md:flex-none w-[20%] order-2 sm:order-1 flex justify-center items-center gap-3 py-4 sm:py-0'>
                    <Link href={'/'}>
                        <a className='font-bold uppercase text-3xl text-gray-700 hidden md:hidden lg:flex'>D</a>
                    </Link>
                    <Link href={'/'}>
                        <a className='font-bold uppercase text-3xl text-gray-700 block md:block lg:hidden'>Design</a>
                    </Link>
                    <input type="text" className='input-text' placeholder='search...' />
                </div>
                <div className='shrink w-[60%] sm:order-2 justify-center items-center gap-5 hidden md:hidden lg:flex'>
                    
                    {navbar}
                  
                </div>
                    <FaStream size={40} className='p-2 block md:block lg:hidden' />
                <div className='w-[20%] order-3 flex justify-center md:justify-end lg:justify-end items-center'>
                    <div className='flex gap-6'>
                        <Link href={'/'}><a href=""><FaFacebookF color='#888' /></a></Link>
                        <Link href={'/'}><a href=""><FaYoutube color='#888' /></a></Link>
                        <Link href={'/'}><a href=""><FaTwitter color='#888' /></a></Link>
                        <Link href={'/'}><a href=""><FaInstagram color='#888' /></a></Link>
                        <Link href={'/'}><a href="">LogIn</a></Link>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;