import { FaCrosshairs, FaMailBulk, FaShareSquare } from "react-icons/fa";

const AboutTop = () => {
    return (
        <div className="container mx-auto px-2 md:px-20 lg:px-20 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-16">
                <div className="flex justify-between items-center gap-3 p-5 border-[1px]">
                    <div className="flex justify-start items-center gap-5">
                    <FaCrosshairs size={50} className='text-orange-600' />
                    <h1 className="text-[14px] md:text-[16px] lg:text-3xl font-semibold">Build Your Business With Right Way</h1>
                    </div>
                    <FaShareSquare size={50} className='bg-orange-600 p-3 text-white' />
                </div>
                <div className="flex justify-between items-center gap-3 p-5 border-[1px]">
                    <div className="flex justify-start items-center gap-5">
                        <FaMailBulk size={50} className='text-orange-600' />
                        <h1 className="text-[14px] md:text-[16px] lg:text-3xl font-semibold">We Take Care and Growth Your Business</h1>
                    </div>
                    <FaShareSquare size={50} className='bg-orange-600 p-3 text-white' />

                </div>
            </div>
        </div>
    );
};

export default AboutTop;