import Image from 'next/image';
import React from 'react';
import Styles from './LatestBlog.module.css';

const blogs = [
    {
        id: 1,
        title: "Jony Dane", 
        content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa. Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa.",
        designation:"Director Admin",
        img:"/images/post12.jpg",
        author:"/images/client1.jpg"
    },
    {
        id: 2,
        title: "John Smith", 
        content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa. Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa.",
        designation:"Sales Manager",
        img:"/images/post13.jpg",
        author:"/images/client2.jpg"
    },
    {
        id: 3,
        title: "Ben Stokes", 
        content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa. Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa.",
        designation:"Marketing Manager",
        img:"/images/post14.jpg",
        author:"/images/client2.jpg"
    },
    {
        id: 4,
        title: "Ben Stokes", 
        content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa. Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa.",
        designation:"Marketing Manager",
        img:"/images/post15.jpg",
        author:"/images/client3.jpg"
    },
    {
        id: 5,
        title: "Ben Stokes", 
        content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa. Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa.",
        designation:"Marketing Manager",
        img:"/images/post16.jpg",
        author:"/images/client5.jpg"
    },
];

const LatestBlog = () => {

    return (
        <div className='container mx-auto px-5 md:px-16 lg:px-16'>
            <div className='flex items-center flex-col'>
            <div className='flex items-center gap-3 pt-5 pb-2'>
                <div className='w-12 h-[2px] bg-orange-600'></div>
                <h3>Our Articles</h3>
                <div className='w-12 h-[2px] bg-orange-600'></div>
            </div>
            <h2 className='text-3xl font-bold'>Our Latest Blog Post</h2>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8'>
                {
                    blogs.map(blog =><div className={`relative ${Styles.contentHieght}`} key={blog.id}>
                        <Image className='p-0' src={blog.img} width={450} height={320} alt="" />
                        <div className={`bg-gray-200 pl-1 ${Styles.contentWidth} rounded-lg mt-[-30px] z-40 absolute`}>
                            <div className='flex justify-start items-end gap-1 mt-[-15px]'>
                                <Image className='rounded-full border-4 border-gray-300 z-10' width={50} height={50} src={blog.author} alt="" />
                                <div className='flex justify-between items-center gap-2 text-[12px] md:text-[10px] lg:text-[12px]'>
                                    <span className='bg-orange-600 p-2 ml-[-12px] text-white'>12 May, 2022</span>
                                    <span>Posted: <span className='text-orange-600'>Karim</span> -</span>
                                    <span>8 Comments</span>
                                </div>
                            </div>
                            <h3 className='text-xl font-semibold mt-3'>Lorem ipsum dolor sit amet consectetur.</h3>
                            <p className='py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos,</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LatestBlog;