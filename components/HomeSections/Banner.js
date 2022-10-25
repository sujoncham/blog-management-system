import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import Author from '../Author';

const Banner = () => {

   

    return (
        <section className='py-10'>
            <div className='container mx-auto md:px-20'>
                <div>
                    <h1 className='text-2xl md:text-5xl text-center py-10 text-gray-600 uppercase'>Trending</h1>
                </div>
                
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    }}
                    
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>{Trendding()}</SwiperSlide>
                    <SwiperSlide>{Trendding()}</SwiperSlide>
                    <SwiperSlide>{Trendding()}</SwiperSlide>
                    <SwiperSlide>{Trendding()}</SwiperSlide>
                    <SwiperSlide>{Trendding()}</SwiperSlide>
                
                </Swiper>

            </div>
        </section>
    );
};

function Trendding(){
    // const bg={
    //     backgroundImage:"url('/images/bg-text.jpg')",
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat'
    // }
    return (
        <div className='grid md:grid-cols-2'>
            <div>
                <Image src='/images/wall.jpg' width={800} height={500} alt='' />
            </div>
            <div className='flex justify-start flex-col px-10'>
                <div className='mb-10'>
                <h3 className='font-bold text-gray-700 text-3xl md:text-4xl py-5'>Business and Travel</h3>
                <h2 className='text-gray-500 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate architecto quibusdam reiciendis dicta commodi perferendis velit consequuntur animi corporis!</h2>
                </div>
                <Author />
            </div>
        </div>
    )
}

export default Banner;