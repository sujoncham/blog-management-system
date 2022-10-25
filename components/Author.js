import Image from 'next/image';
import React from 'react';

const Author = () => {
    return (
        <div className='flex justify-start items-center gap-2'>
            <Image className='rounded-full' src='/images/author.png' width={40} height={40} alt='' />
            <div>
                <h3 className='text-sm md:text-md font-bold text-gray-700'>Smith John</h3>
                <span className='text-sm md:text-md text-gray-500'>CEO, Amazon Marketing</span>
            </div>
        </div>
    );
};

export default Author;