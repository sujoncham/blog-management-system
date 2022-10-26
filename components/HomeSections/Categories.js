import Image from 'next/image';
import useSWR from 'swr';
import Author from '../Author';

const fetcher = async() => {
    const res = await fetch('http://localhost:3000/api/posts');
    const data = await res.json();
    return data;
}

const Categories = () => {
    const { data, error } = useSWR('post', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const business = data.filter(category => category.category === 'business')
    const travel = data.filter(category => category.category === 'travel')
    const portfolio = data.filter(category => category.category === 'portfolio')


    return (
        <section className='container mx-auto md:px-20 py-10 px-2'>
            <h1 className='text-center text-3xl font-bold py-5 text-gray-600 uppercase'>Category</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-10'>
                <div className='item'>
                    <h1 className='text-3xl font-bold py-5 text-gray-500 uppercase'>Business</h1>
                    
                        {
                            business.map(category => <div key={category.id} className='flex justify-start gap-5 py-3'>
                            <Image src={category.img} width={100} height={100} alt='' />
                            <div>
                                <div className='flex justify-start items-center gap-1'>
                                    <h3 className='text-sm text-sky-500'>{category.category}</h3>
                                    <span className='text-sm text-gray-500'>- {category.postDated}</span>
                                </div>
                                <div>
                                    <h1 className='text-sm font-bold text-gray-700 '>{category.title}</h1>
                                </div>
                            </div>
                        </div>)
                    }
                   
                </div>
                <div className='item'>
                    <h1 className='text-3xl font-bold py-5 text-gray-500 uppercase'>Travel</h1>
                    {
                        travel.map(category => <div key={category.id} className='flex justify-start gap-5 py-3'>
                            <Image src={category.img} width={100} height={100} alt='' />
                            <div>
                                <div className='flex justify-start items-center gap-1'>
                                    <h3 className='text-sm text-sky-500'>{category.category}</h3>
                                    <span className='text-sm text-gray-500'>- {category.postDated}</span>
                                </div>
                                <div>
                                    <h1 className='text-sm font-bold text-gray-700 '>{category.title}</h1>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
                <div className='item'>
                    <h1 className='text-3xl font-bold py-5 text-gray-500 uppercase'>Portfolio</h1>
                    {
                        portfolio.map(category => <div key={category.id} className='flex justify-start gap-5 py-3'>
                            <Image src={category.img} width={100} height={100} alt='' />
                            <div>
                                <div className='flex justify-start items-center gap-1'>
                                    <h3 className='text-sm text-sky-500'>{category.category}</h3>
                                    <span className='text-sm text-gray-500'>- {category.postDated}</span>
                                </div>
                                <div>
                                    <h1 className='text-sm font-bold text-gray-700 '>{category.title}</h1>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>
    );
};

function Posts(){
    return (
        <div className='flex justify-start gap-5 py-3'>
            <Image src='/images/bg-text.jpg' width={100} height={100} alt='' />
            <div>
            <div className='flex justify-start items-center gap-1'>
                <h3 className='text-sm text-sky-500'>Business, Travel</h3>
                <span className='text-sm text-gray-500'>- October 18, 2022</span>
            </div>
            <div>
                <h1 className='text-md font-bold text-gray-700 '>dolorem voluptatibus quia omnis enim id commodi</h1>
            </div>
            <Author />
            </div>
        </div>
    )
}

export default Categories;