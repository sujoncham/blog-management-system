import { FaAngleDoubleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from './Casework.module.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import Image from "next/image";
import { Autoplay, FreeMode, Pagination } from "swiper";


const casesData = [
    {
        id:1,
        title: "Business Growth",
        description: "Lorem ipsum dolor",
        image:"/images/post5.jpg"
    },
    {
        id:2,
        title: "Business Growth",
        description: "Lorem ipsum dolor",
        image:"/images/post6.jpg"
    },
    {
        id:3,
        title: "Business Growth",
        description: "Lorem ipsum dolor",
        image:"/images/post7.jpg"
    },
    {
        id:4,
        title: "Business Growth",
        description: "Lorem ipsum dolor",
        image:"/images/post8.jpg"
    },
    {
        id:5,
        title: "Business Growth",
        description: "Lorem ipsum dolor",
        image:"/images/post9.jpg"
    },
    {
        id:6,
        title: "Business Growth",
        description: "Lorem ipsum dolor",
        image:"/images/post10.jpg"
    },
]

const CaseWork = () => {
    return (
        <div className="py-16">
            <div className='container mx-auto px-5 md:px-16 lg:px-16'>
            <div className="flex justify-between items-end py-10">
                <div>
                    <div className="flex items-center gap-3">
                        <h3>our case</h3>
                        <div className="w-8 bg-orange-600 h-[1px]"></div>
                    </div>
                    <h1 className="text-4xl font-bold">Amazing Work Showcase</h1>
                </div>
                <div className="bg-orange-600 px-3 py-2 text-white rounded-full flex justify-start items-center gap-3 cursor-pointer">
                    <span >All Showcase</span>
                    <FaAngleDoubleRight />
                </div>
            </div>
            </div>
      <Swiper
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 2,
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
        freeMode={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {casesData.map(data =><SwiperSlide key={data.id}>
                <div className={`relative h-[450px] ${Styles.hoverContent}`}>
                    <Image className="z-[1] absolute top-0" src={data.image} width={450} height={400} alt="" />
                
                    <div className={`w-64 md:w-56 lg:w-72 mx-auto h-[60px] bg-white shadow-md py-3 px-5 z-40 absolute left-28 md:left-44 lg:left-10 bottom-20 ${Styles.showContent} hover:transition-all hover:ease-in-out hover:duration-700`}>
                        <div className=" flex justify-between items-center">
                            <div>
                            <h1 className="text-[14] md:text-[16px] lg:text-xl font-bold">{data.title}</h1>
                            <p className="text-[14px]">{data.description}</p>
                            </div>
                            <div className="bg-orange-500 rounded-full w-10 h-10 text-white flex justify-center items-center cursor-pointer">
                                <FaAngleDoubleRight />
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>)}
      </Swiper>
    </div>
    );
};

export default CaseWork;