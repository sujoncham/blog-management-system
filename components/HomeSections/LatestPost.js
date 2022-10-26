import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import Author from '../Author';

const fetcher = async() => {
    const res = await fetch('http://localhost:3000/api/posts');
    const data = await res.json();
    return data;
}

const LatestPost = () => {

    const { data, error } = useSWR('post', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='text-center text-3xl font-bold py-5 text-gray-600 uppercase'>Latest post </h1>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-10 px-2'>
            { 
            data.map(post => <div key={post.id}>
                <Image className='rounded-md' src={post.img} width={500} height={350} alt='' />
                <div className='flex justify-start items-center gap-1'>
                    <h3 className='text-sm text-sky-500'>{post.category}</h3>
                    <span className='text-sm text-gray-500'>- {post.postDated}</span>
                </div>
                <div className='py-5'>
                <h1 className='text-xl font-bold text-gray-700 py-5'>{post.title}</h1>
                <p className='text-gray-500'>{post.description}</p>
                <Link href={'/'}>
                    <a className='text-sky-500'>read more...</a>
                </Link>
                </div>
                <Author />
            </div>) 
            }
           </div>
        </section>
    );
};

export default LatestPost;


