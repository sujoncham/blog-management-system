import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from 'swr';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const fetcher = async() => {
    const res = await fetch('http://localhost:3000/api/trending');
    const data = await res.json();
    return data;
}

const Trending = () => {
    const { data, error } = useSWR('trending', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
   

    return (
        <section className='py-10'>
            <div className='container mx-auto md:px-20'>
                <div className='mb-5'>
                    <h1 className='text-2xl md:text-5xl text-center text-gray-600 uppercase'>Trending</h1>
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
                    {
                      data.map(trending => <SwiperSlide key={trending.id}>
                        <div className='grid md:grid-cols-2'>
                            <div>
                                <Image src={trending.img} width={950} height={500} alt='' />
                            </div>
                            <div className='flex justify-start flex-col px-10'>
                                <div className='mb-10'>
                                <h3 className='font-bold text-gray-600 text-3xl md:text-3xl py-5'>{trending.trending}</h3>
                                <h2 className='text-gray-500 text-md text-justify'>{trending.description}</h2>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                    }
                   
                
                </Swiper>

            </div>
        </section>
    );
};



export default Trending;