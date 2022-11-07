import React from 'react';
import { FaTwitch } from "react-icons/fa";
import Styles from './Advisor.module.css';
import AdvisorAccordian from './AdvisorAccordian';
import AdvisorPromo from './AdvisorPromo';
import AdvisorVideo from './AdvisorVideo';

const FinancialAdvisor = ({show, setShow}) => {
    return (
        <div className='container mx-auto px-2 md:px-20 lg:px-20'>
            <div className={`${Styles.bgAdvisor} flex justify-center items-center relative`}>
                <AdvisorPromo show={show} setShow={setShow} />
                <div className='bg-white px-5 py-5 absolute bottom-0 left-2 w-56'>
                    <h3 className='py-3'>We are commited to trusted financial advisors</h3>
                    <p className='text-orange-500'>get started</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row gap-10 py-16 bg-gray-200'>
                <div className='w-[100%] md:w-[60%] lg:w-[65%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                    
                    <div className='bg-white p-3'>
                        <p className='mb-3 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia et culpa cum nulla eligendi consequatur eveniet,</p>
                        <div className='flex justify-between items-center'>
                            <span>
                                <p>Business</p>
                                <h3 className='text-xl'>App Development</h3>
                            </span>
                            <div className='bg-orange-600 w-10 h-12 flex justify-center items-center'>
                                <FaTwitch className='text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white p-3'>
                        <p className='mb-3 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia et culpa cum nulla eligendi consequatur eveniet,</p>
                        <div className='flex justify-between items-center'>
                            <span>
                                <p>Business</p>
                                <h3 className='text-xl'>App Development</h3>
                            </span>
                            <div className='bg-orange-600 w-10 h-12 flex justify-center items-center'>
                                <FaTwitch className='text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white p-3'>
                        <p className='mb-3 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia et culpa cum nulla eligendi consequatur eveniet,</p>
                        <div className='flex justify-between items-center'>
                            <span>
                                <p>Business</p>
                                <h3 className='text-xl'>App Development</h3>
                            </span>
                            <div className='bg-orange-600 w-10 h-12 flex justify-center items-center'>
                                <FaTwitch className='text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white p-3'>
                        <p className='mb-3 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia et culpa cum nulla eligendi consequatur eveniet,</p>
                        <div className='flex justify-between items-center'>
                            <span>
                                <p>Business</p>
                                <h3 className='text-xl'>App Development</h3>
                            </span>
                            <div className='bg-orange-600 w-10 h-12 flex justify-center items-center'>
                                <FaTwitch className='text-white' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] md:w-[40%] lg:w-[35%]'>
                    <AdvisorAccordian />
                </div>
            </div>
            {show ? <AdvisorVideo setShow={setShow} /> : ""}
        </div>
    );
};

export default FinancialAdvisor;