import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Modal = ({
    clickedImg,
    setClickedImg,
    handelRotationRight,
    handelRotationLeft
  }) => {

    const handleClick = (e) => {
      if (e.target.classList.contains("dismiss")) {
        console.log(e.target.classList);
        setClickedImg(null);
      }
    };
  
    return (
      <>
        <div className="container mx-auto">
        <div className="overlay dismiss" onClick={handleClick}>
        
          <Image src={clickedImg} className='border-2 border-red-500' alt="bigger pic" width={850} height={550} />
         
          <span className="dismiss z-40 text-red-500 mt-24" onClick={handleClick}>
            X
          </span>
          <div onClick={handelRotationLeft} className="overlay-arrows_left cursor-pointer">
          
              <FaArrowLeft />
           
          </div>
          <div onClick={handelRotationRight} className="overlay-arrows_right cursor-pointer">
            
              <FaArrowRight />
            
          </div>
        </div>
        </div>
      </>
    );
  };
  
  export default Modal;