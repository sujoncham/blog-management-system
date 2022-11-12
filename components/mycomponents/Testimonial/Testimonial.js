import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper";

const Testimonial = () => {
    const clients = [
        {
            id: 1,
            title: "Jony Dane", 
            content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa. Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa.",
            designation:"Director Admin",
            img:"/images/client1.jpg"
        },
        {
            id: 2,
            title: "John Smith", 
            content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa. Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa.",
            designation:"Sales Manager",
            img:"/images/client2.jpg"
        },
        {
            id: 3,
            title: "Ben Stokes", 
            content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa. Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa.",
            designation:"Marketing Manager",
            img:"/images/client3.jpg"
        },
        {
            id: 4,
            title: "Mike Hase", 
            content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa. Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa.",
            designation:"Marketing Manager",
            img:"/images/client4.jpg"
        },
        {
            id: 5,
            title: "Trend Bault", 
            content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa. Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa.",
            designation:"Marketing Manager",
            img:"/images/client5.jpg"
        },
        {
            id: 5,
            title: "Micheal Clark", 
            content: "Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa. Consectetur pariatur proident irure proident ea laboris ut do do quis consequat sed officia dolore consequat ut deserunt ea sit sit culpa.",
            designation:"Marketing Manager",
            img:"/images/client6.jpg"
        },
    ];
    return (
        <div className='container mx-auto px-5 md:px-16 lg:px-16'>
        <div className='flex items-center flex-col'>
            <div className='flex items-center gap-3 pt-5 pb-5'>
                <div className='w-12 h-[2px] bg-orange-600'></div>
                <h3>Testimonial</h3>
                <div className='w-12 h-[2px] bg-orange-600'></div>
            </div>
            <h2 className='text-3xl font-bold'>What Saying Our Client</h2>
        </div>
        <div className='py-16'>
        <Swiper
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1320: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        modules={[ Pagination, Autoplay]}
        className="mySwiper"
      >
        {clients.map(data =><SwiperSlide className="border-2 px-5 py-5" key={data.id}>
                
                    <div className='flex justify-start text-orange-600'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <p className="text-[14px] mb-5 text-justify">{data.content}</p>
                    <div className="flex justify-start items-center gap-3">
                        <Image className="p-1" src={data.img} width={50} height={50} alt="" />
                        <div className="">
                            <h1 className="text-[16px] md:text-[16px] lg:text-xl font-bold">{data.title}</h1>
                            <h3 className="text-[14px]">{data.designation}</h3>
                        </div>
                    </div>
            </SwiperSlide>)}
      </Swiper>
        </div>
        </div>
    );
};

export default Testimonial;