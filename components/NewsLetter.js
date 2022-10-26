import React from 'react';

const NewsLetter = () => {
    
    return (
        <div className='mb-10 border-b-2'>
            <h1 className='text-2xl font-bold text-center text-gray-500'>Subscribes NewsLetter</h1>
            <div className='py-5 flex flex-col justify-center items-center gap-5'>
                <input type="text" className='w-96 shadow rounded-lg py-3 px-3 text-gray-700 focus:outline-sky-500' placeholder='enter your email' />
                <button className='bg-sky-500 w-56 px-20 py-3 text-gray-300 rounded-full'>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;