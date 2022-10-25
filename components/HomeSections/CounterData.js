import { useCountUp } from 'react-countup';

const CounterData = () => {
    useCountUp({ ref: 'counter', end: 687 });
    useCountUp({ ref: 'counter1', end: 2348 });
    useCountUp({ ref: 'counter2', end: 450 });
    useCountUp({ ref: 'counter3', end: 1200 });
    return (
        <section className='container mx-auto md:px-20 py-10 px-2 bg-counter mb-10'>
            <div className='grid md:grid-cols-4 lg:grid-cols-4 gap-10 text-white'>
                <div className='flex justify-center items-center flex-col'>
                    <span className='text-5xl font-bold' id="counter" />
                    <h1 className='text-3xl font-bold'>Happy Clients</h1>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <span className='text-5xl font-bold' id="counter1" />
                    <h1 className='text-3xl font-bold'>Finished Projects</h1>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <span className='text-5xl font-bold' id="counter2" />
                    <h1 className='text-3xl font-bold'>Skilled Experts</h1>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <span className='text-5xl font-bold' id="counter3" />
                    <h1 className='text-3xl font-bold'>Media Posts</h1>
                </div>
              
            </div>
            </section>
    );
};

export default CounterData;