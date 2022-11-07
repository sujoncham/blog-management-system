import React from 'react';
import { FaPlay } from "react-icons/fa";

const AdvisorPromo = ({show, setShow}) => {
    return (
        <div className='relative'>
            <span className='cursor-pointer' onClick={()=>setShow(!show)} >
                <div className="absolute -z-1 top-0 left-0 -mr-1 -mt-1 w-16 h-16 rounded-full bg-orange-600 md:bg-orange-600 animate-ping">
                </div>
                <FaPlay className='absolute text-white z-40 ml-2 mt-3 pl-5' size={35} />
                <div className="absolute -z-1 top-0 left-0 -mr-1 -mt-1 w-16 h-16 rounded-full bg-orange-500 md:bg-orange-600">
                    
                </div>
            </span>
        </div>
    );
};

export default AdvisorPromo;