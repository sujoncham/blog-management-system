import Image from 'next/image';
import React from 'react';
import { FaEmpire, FaSortAmountUp } from "react-icons/fa";
import aboutImg from '/public/images/trending2.jpg';

const AboutUs = () => {
    return (
        <div className='container mx-auto px-5 md:px-16 lg:px-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-16'>
            <div className='w-[100%] md:w-[100%] lg:w-[100%]'>
                <div className='relative'>
                    <Image className='w-[530px] h-[650px]' src={aboutImg} alt="" />
                    <div className='bg-orange-600 px-3 py-5 w-28 text-white absolute top-0 right-0 z-40'>
                    <p>10<sup>+</sup> years Experience</p>
                    </div>
                    <div className='bg-orange-600 px-3 py-5 w-44 text-white absolute bottom-0 right-0 z-40'>
                        <p className='text-3xl'>12k<sup>+</sup> <br /> Projects <br /> Complete</p>
                    </div>
                </div>
            </div>
            <div className='w-[100%] md:w-[100%] lg:w-[100%] ml-0 md:ml-10 lg:ml-10'>
                <div className='flex items-center gap-3 pt-5 pb-5'>
                    <h3>About Us</h3>
                    <div className='w-12 h-[2px] bg-orange-600'></div>
                </div>
                <h1 className='text-3xl font-bold pb-5'>We are more than you <br /> Imazine</h1>
                <div className='flex justify-between gap-3 py-5'>
                    <div>
                        <FaEmpire size={40} className='text-orange-600' />
                        <h2 className='text-xl font-semibold'>Brand Solution</h2>
                        <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia</p>
                    </div>
                    <div>
                        <FaSortAmountUp size={40} className='text-orange-600' />
                        <h2 className='text-xl font-semibold'>Our Mision</h2>
                        <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia</p>
                    </div>
                    
                </div>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi hic, alias corrupti aliquam unde qui cumque aperiam repellat possimus aut.</p>
                <div className='flex justify-start gap-3 py-5'>
                    <div className='flex justify-start items-center gap-3 border-2 border-dotted border-orange-600 p-2'>
                        <span className='text-3xl font-bold'>12<sup>+</sup></span>
                        <p className='font-bold'>Years of <br /> Experience</p>
                    </div>
                    <div className='flex justify-start items-center gap-3 border-2 border-dotted border-orange-600 p-2'>
                        <span className='text-3xl font-bold'>70<sup>k</sup></span>
                        <p className='font-bold'>Clients <br /> Indivisual</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;