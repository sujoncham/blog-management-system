import Link from 'next/link';
import React from 'react';
import Styles from './About.module.css';

const AboutHeader = () => {
    return (
    
            <div className={Styles.ourTeam}>
                <div className='text-center lg:text-start lg:flex justify-between items-center bg-[#000] opacity-50 h-full md:py-28 py-10 lg:px-20 xl:px-56'>
                    <div className='mt-5 lg:mt-0'>
                        <h1 className='text-4xl text-white font-semibold'>Team Members</h1>
                    </div>
                    <div className='flex justify-center items-center gap-3 mx-auto lg:mx-0 py-4 mt-10 lg:mt-0 bg-gray-800 w-56'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <div className='flex justify-center items-center text-white gap-3 text-[15px]'>
                            <p><Link href="/">HOME</Link></p>
                            <p>O</p>
                            <p className='underline'>PAGES</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default AboutHeader;