import React from 'react';
import { FaChargingStation, FaChartLine, FaCommentDollar, FaWhmcs } from "react-icons/fa";
import Styles from './About.module.css';

const AboutBottom = () => {
    return (
        <div className='container mx-auto px-5 md:px-16 lg:px-16'>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 shadow-md px-5 md:px-10 lg:px-16 py-16">
            <div className={`px-5 py-16 border-[1px] flex justify-center items-center flex-col hover:bg-orange-600 hover:text-white hover:transition-all hover:ease-in-out hover:duration-700 ${Styles.aboutbox}`}>
                <FaChargingStation size={50} className={`text-orange-600 ${Styles.aboutInner}`} />
                <h1 className="text-[14px] text-center font-semibold">We Experience <br /> Build</h1>
            </div>
            <div className={`px-5 py-16 border-[1px] flex justify-center items-center flex-col hover:bg-orange-600 hover:text-white hover:transition-all hover:ease-in-out hover:duration-700 ${Styles.aboutbox}`}>
                <FaChartLine size={50} className={`text-orange-600 ${Styles.aboutInner}`} />
                <h1 className="text-[14px] text-center font-semibold">Highest Success <br /> Rates</h1>
            </div>
            <div className={`px-5 py-16 border-[1px] flex justify-center items-center flex-col hover:bg-orange-600 hover:text-white hover:transition-all hover:ease-in-out hover:duration-700 ${Styles.aboutbox}`}>
                <FaWhmcs size={50} className={`text-orange-600 ${Styles.aboutInner}`} />
                <h1 className="text-[14px] text-center font-semibold">Branding strength <br /> Solution</h1>
            </div>
            <div className={`px-5 py-16 border-[1px] flex justify-center items-center flex-col hover:bg-orange-600 hover:text-white hover:transition-all hover:ease-in-out hover:duration-700 ${Styles.aboutbox}`}>
                <FaCommentDollar size={50} className={`text-orange-600 ${Styles.aboutInner}`} />
                <h1 className="text-[14px] text-center font-semibold">Personal & Business <br /> Insurance</h1>
            </div>
            
            
        </div>
        </div>
    );
};

export default AboutBottom;