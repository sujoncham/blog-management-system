import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const portfolio = [
    {
        id:1,
        name: "My best client",
        category: ["all", "frontend", "ux-ui"],
    },
    {
        id:2,
        name: "My favorite case",
        category: ["all", "mobile", "ux-ui"],
    },
    {
        id:3,
        name: "A old job",
        category: ["all", "frontend"],
    },
    {
        id:4,
        name: "It is a really cool website",
        category: ["all", "frontend", "ux-ui"],
    },
    {
        id:5,
        name: "Something more",
        category: ["all", "others"],
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
            <div className="flex justify-start gap-3">
                <Link className='bg-red-500 p-3' to="/" active={filter === 'all'} onClick={() => setFilter('all')}>All</Link>
                <Link className='bg-red-500 p-3' to="/" active={filter === 'frontend'} onClick={() => setFilter('frontend')}>Frontend</Link>
                <Link className='bg-red-500 p-3' to="/" active={filter === 'mobile'} onClick={() => setFilter('mobile')}>Mobile</Link>
                <Link className='bg-red-500 p-3' to="/" active={filter === 'ux-ui'} onClick={() => setFilter('ux-ui')}>UX/UI</Link>
                <Link className='bg-red-500 p-3' to="/" active={filter === 'others'} onClick={() => setFilter('others')}>Others</Link>
            </div>
            <div className="flex justify-start gap-5">
                {projects.map(item => item.filtered === true ? (
                    <div className='border-2 px-3 py-2' key={item.id}>
                    {item.name}
                    </div>
                ) : '')}
            </div>
            
        </div>
    );
};

export default Gallery;