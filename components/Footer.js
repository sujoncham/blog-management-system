
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import NewsLetter from "./NewsLetter";

const Footer = () => {
    const bg= {
        backgroundImage: "url('/images/bg1.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom left',
        backgroundSize: '20%'
    }
    return (
        <footer className='bg-gray-300' style={bg}>
            <div className='container mx-auto md:px-20 py-16 flex justify-center items-center'>
                <div className='w-full'>
                    <NewsLetter />
                    <div className='flex justify-center items-center gap-6 py-5'>
                        <Link href={'/'}><a href=""><FaFacebookF className="text-gray-500 hover:text-sky-500" /></a></Link>
                        <Link href={'/'}><a href=""><FaYoutube className="text-gray-500 hover:text-sky-500" /></a></Link>
                        <Link href={'/'}><a href=""><FaTwitter className="text-gray-500 hover:text-sky-500" /></a></Link>
                        <Link href={'/'}><a href=""><FaInstagram className="text-gray-500 hover:text-sky-500" /></a></Link>
                    </div>
                    <p className="text-center text-gray-500">Copyright &copy;2022 All right reserved | This template is made with by <Link href={'/'}><a>Travel&Tour</a></Link></p>
                    <p className="text-center text-sky-500">Terms & Conditions</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;