import CountUp from 'react-countup';

const CounterData = () => {
    return (
        <section className='container mx-auto md:px-20 py-10 px-2 bg-counter mb-10'>
            <div className='grid md:grid-cols-4 lg:grid-cols-4 gap-10 text-white'>
                <div className='flex justify-center items-center flex-col'>
                    <CountUp className='text-4xl font-bold' end={687} duration={4} />
                    <h1 className='text-3xl font-bold'>Happy Clients</h1>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <CountUp className='text-4xl font-bold' end={2348} duration={4} />
                    <h1 className='text-3xl font-bold'>Finished Projects</h1>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <CountUp className='text-4xl font-bold' end={450} duration={4} />
                    <h1 className='text-3xl font-bold'>Skilled Experts</h1>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <CountUp className='text-4xl font-bold' end={1200} duration={4} />
                    <h1 className='text-3xl font-bold'>Media Posts</h1>
                </div>
              
            </div>
            </section>
    );
};

export default CounterData;