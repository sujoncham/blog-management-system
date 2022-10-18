import Image from 'next/image';
import React from 'react';

const Author = () => {
    return (
        <div className='flex justify-start items-center gap-2 py-5'>
            <Image className='rounded-full' src='/images/author.png' width={50} height={50} alt='' />
            <div>
                <h3 className='text-md font-bold text-gray-700'>Smith John</h3>
                <span className='text-gray-500'>CEO, Amazon Marketing</span>
            </div>
        </div>
    );
};

export default Author;