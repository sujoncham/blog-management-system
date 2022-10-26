import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from 'swr';
import Author from '../Author';

// // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
const fetcher = async() => {
    const res = await fetch('http://localhost:3000/api/posts');
    const data = await res.json();
    return data;
}

const MostPopular = () => {

    const { data, error } = useSWR('post', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

   
    return (
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='text-center text-3xl font-bold py-5 text-gray-600 uppercase'>Most Popular</h1>
            {/* //slider */}
            <Swiper
                slidesPerView={4}
                spaceBetween={35}
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
                data.map(post => <SwiperSlide className='px-2' key={post.id}>
                    
                    <Image src={post.img} width={550} height={400} alt='' />
                    <div className='flex justify-start items-center gap-1'>
                        <h3 className='text-sm text-sky-500'>{post.category}</h3>
                        <span className='text-sm text-gray-500'>- {post.postDated}</span>
                    </div>
                    <div className='py-5'>
                        <h1 className='text-lg font-bold text-gray-500 py-2'>{post.title}</h1>
                        <p className='text-gray-500'>{post.description.slice(0, 80)}</p>
                        <Link href={'/'}>
                            <a className='text-sky-500'>read more...</a>
                        </Link>
                    </div>
                    <Author />
                
                </SwiperSlide>)
                }
              
                
            
            </Swiper>
        </section>
    );
};



export default MostPopular;