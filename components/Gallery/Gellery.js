import Image from 'next/image';
import React, { useEffect, useState } from 'react';
const portfolio = [
    {
        id:1,
        img: "/images/post1.jpg",
        category: ["all", "others", "frontend", "ux-ui"],
    },
    {
        id:2,
        img: "/images/post2.jpg",
        category: ["all", "frontend", "mobile", "ux-ui"],
    },
    {
        id:3,
        img: "/images/post3.jpg",
        category: ["all", "frontend", "others", "mobile",],
    },
    {
        id:4,
        img: "/images/post4.jpg",
        category: ["all", "others", "frontend", "ux-ui"],
    },
    {
        id:5,
        img: "/images/post5.jpg",
        category: ["all", "others", "ux-ui"],
    },
  ];

const Gallery = () => {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(portfolio);
    }, []);
    
    useEffect(() => {
        setProjects([]);
        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);
    return (
        <div className='container mx-auto px-3 md:px-10 lg:px-16 py-10'>
            <div className="flex justify-start gap-3 py-10">
                <button className='bg-red-500 rounded-md hover:bg-black hover:text-white px-5 py-3' active={filter === '/'} onClick={() => setFilter('all')}>All</button>
                <button className='bg-red-500 rounded-md hover:bg-black hover:text-white px-5 py-3' active={filter === 'frontend'} onClick={() => setFilter('frontend')}>Frontend</button>
                <button className='bg-red-500 rounded-md hover:bg-black hover:text-white px-5 py-3' active={filter === 'mobile'} onClick={() => setFilter('mobile')}>Mobile</button>
                <button className='bg-red-500 rounded-md hover:bg-black hover:text-white px-5 py-3' active={filter === 'ux-ui'} onClick={() => setFilter('ux-ui')}>UX/UI</button>
                <button className='bg-red-500 rounded-md hover:bg-black hover:text-white px-5 py-3' active={filter === 'others'} onClick={() => setFilter('others')}>Others</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 py-3">
                {projects.map(item => item.filtered === true ? (
                    <div className='border-2 px-3 py-2' key={item.id}>
                    <Image src={item.img} alt='' width={350} height={350} />
                    </div>
                ) : '')}
            </div>
            
        </div>
    );
};

export default Gallery;