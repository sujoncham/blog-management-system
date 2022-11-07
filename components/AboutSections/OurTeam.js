import Image from 'next/image';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import ImageModal from './ImageModal';
import { teamData } from './TeamData';

const OurTeam = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div className='container mx-auto px-2 md:px-20 mt-20 mb-16'>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-5'>
                {
                    teamData.map(team => <div key={team.id} className='relative'>
                        <Image src={team.img} alt="" width={700} height={550} className='hover:scale-125 duration-700 ease-in-out' />
                        <div className='flex justify-between items-center bg-sky-300 w-96 mx-auto py-3 px-3 absolute left-9 md:left-20 lg:left-20 bottom-10 hover:scale-100 md:hover:scale-125 lg:hover:scale-125 duration-700 ease-in-out'>
                            <span>
                                <h1 className='text-[#245]'>{team.name} - {team.designation}</h1>
                                <h3 className='text-gray-500'>{team.department}</h3>
                            </span>
                            <div onClick={()=>setOpen(team.id)} className='bg-sky-500 p-5 text-white md:mr-[-30px] cursor-pointer'>
                                <FaPlus  />
                            </div>
                        </div>

                        {team.id === open ? <ImageModal team={team} setOpen={setOpen} /> : ''}
                    </div> 
                    ) }

            </div>
         </div>

           
        </>
    );
};

export default OurTeam;