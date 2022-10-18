import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
    return (
        <header className='bg-gray-50'>
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
                    <input type="text" className='input-text' placeholder='search...' />
                </div>
                <div className='shrink w-80 sm:order-2'>
                    <Link href={'/'}>
                        <a className='font-bold uppercase text-3xl text-gray-700'>Design</a>
                    </Link>
                </div>
                <div className='w-96 order-3 flex justify-center'>
                    <div className='flex gap-6'>
                        <a href=""><FaFacebookF color='#888' /></a>
                        <a href=""><FaYoutube color='#888' /></a>
                        <a href=""><FaTwitter color='#888' /></a>
                        <a href=""><FaInstagram color='#888' /></a>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;