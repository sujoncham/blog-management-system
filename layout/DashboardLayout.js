import Link from 'next/link';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const DashboardLayout = ({children}) => {
    return (
        <>
        <Header />
        <div className=''>
        <div className='flex gap-5'>
            <div className='w-[20%] bg-blue-500'>
                <ul className='flex flex-col'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/'}>Blog</Link></li>
                    <Link href='/dashboard/addStudent'>Contact</Link>
                    <li><Link href={'/'}>Services</Link></li>
                </ul>
            </div>
            <div className=''>
                {children}
                
            </div>
        </div>
        </div>
        <Footer />
        </>
    );
};

export default DashboardLayout;