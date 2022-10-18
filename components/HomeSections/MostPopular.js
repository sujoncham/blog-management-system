import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import Author from '../Author';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const MostPopular = () => {
    return (
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='text-center text-3xl font-bold py-5 text-gray-500 uppercase'>Most Popular</h1>
            {/* //slider */}
            <Swiper
                slidesPerView={2}
                loop={true}
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                }}
                
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>{Posts()}</SwiperSlide>
                <SwiperSlide>{Posts()}</SwiperSlide>
                <SwiperSlide>{Posts()}</SwiperSlide>
                <SwiperSlide>{Posts()}</SwiperSlide>
                <SwiperSlide>{Posts()}</SwiperSlide>
                <SwiperSlide>{Posts()}</SwiperSlide>
                <SwiperSlide>{Posts()}</SwiperSlide>
                
            
            </Swiper>
        </section>
    );
};

function Posts(){
    return (
        
            <div>
                <Image src='/images/bg-text.jpg' width={500} height={400} alt='' />
                <div className='flex justify-start items-center gap-1'>
                    <h3 className='text-sm text-sky-500'>Business, Travel</h3>
                    <span className='text-sm text-gray-500'>- October 18, 2022</span>
                </div>
                <div>
                <h1 className='text-xl font-bold text-gray-700 py-5'>dolorem voluptatibus quia omnis enim id commodi</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum cupiditate officiis dolor porro dolorem..</p>
                <Link href={'/'}>
                    <a className='text-sky-500'>read more...</a>
                </Link>
                </div>
                <Author />
            </div>
       
    )
}

export default MostPopular;