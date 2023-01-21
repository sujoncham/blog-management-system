import Image from "next/image";
import React, { useState } from "react";
import data from '../../alldata/images.json';
import Modal from "./Modal";

const GalleryModal =() => {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
  
    const handleClick = (item, index) => {
      setCurrentIndex(index);
      setClickedImg(item.img);
    };
  
    const handelRotationRight = () => {
      const totalLength = data.data.length;
      if (currentIndex + 1 >= totalLength) {
        setCurrentIndex(0);
        const newUrl = data.data[0].img;
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex + 1;
      const newUrl = data.data.filter((item) => {
        return data.data.indexOf(item) === newIndex;
      });
      const newItem = newUrl[0].img;
      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    };
  
    const handelRotationLeft = () => {
      const totalLength = data.data.length;
      if (currentIndex === 0) {
        setCurrentIndex(totalLength - 1);
        const newUrl = data.data[totalLength - 1].img;
        setClickedImg(newUrl);
        return;
      }
      const newIndex = currentIndex - 1;
      const newUrl = data.data.filter((item) => {
        return data.data.indexOf(item) === newIndex;
      });
      const newItem = newUrl[0].img;
      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    };

  return (
    <>
    <div className="container mx-auto px-5">
    <div className="wrapper grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 py-3">
    {data.data.map((item, index) => (
      <div key={index} className="">
        <Image
          src={item.img}
          alt={item.text}
          width={250}
          height={250}
          onClick={() => handleClick(item, index)}
        />
        <h2>{item.text}</h2>
      </div>
    ))}
    </div>
    <div>
      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
        />
      )}
    </div>
  </div>
  </>
  );
}

export default GalleryModal;