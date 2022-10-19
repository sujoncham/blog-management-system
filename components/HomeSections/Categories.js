import Image from 'next/image';
import Author from '../Author';

const Categories = () => {
    return (
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='text-center text-3xl font-bold py-5 text-gray-500 uppercase'>Category</h1>
            <div className='grid lg:grid-cols-2 gap-10'>
                <div className='item'>
                    <h1 className='text-3xl font-bold py-5 text-gray-500 uppercase'>Business</h1>
                    {Posts()}
                    {Posts()}
                    {Posts()}
                    {Posts()}
                </div>
                <div className='item'>
                <h1 className='text-3xl font-bold py-5 text-gray-500 uppercase'>Travel</h1>
                    {Posts()}
                    {Posts()}
                    {Posts()}
                    {Posts()}

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