import React, { useState } from 'react';
import Slide1 from '../../assets/slide/slide-1.jpg';
import Slide2 from '../../assets/vita-kartica.jpg';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Slideshow = () => {
  /* Placeholder images */
  const [images, setImages] = useState([
    {src: Slide1, alt: "UltraProst za prehranu"},
    {src: Slide2, alt: "Vita kartica za lakše plaćanje"},
  ]);

  /* Current slide image in focus */
  const [slidePos, setSlidePos] = useState(0);


  let interval = null;
  let n = 0;
  let img = null;

  const onLeftArrow = () => {

    /* Left animation if the first image is in focus */
    if (slidePos === 0) {
      setImages([
        images[images.length - 1],
        ...images.slice(0, images.length - 1),
      ]);

      clearInterval(interval);
      interval = setInterval(animate, 10);
      n = 0;

      img = document.getElementsByClassName("slide-image");
      function animate() {
        if (n >= img[0].width) clearInterval(interval);
        else {
          for (let i = 0; i < img.length; i++) {
            n += 8;
            img[i].style.left = -img[i].width + n + "px";
          }
        }
      }
    } else {
      
      /* Left animation for any other image that is not the first image */
      img = document.getElementsByClassName("slide-image");
      n = img[0].width * slidePos;

      setSlidePos(slidePos - 1);

      clearInterval(interval);
      interval = setInterval(animate, 10);

      function animate() {
        if (n <= img[0].width * (slidePos - 1)) clearInterval(interval);
        else {
          for (let i = 0; i < img.length; i++) {
            n -= 8;
            img[i].style.left = -n + "px";
          }
        }
      }
    }
  }

  const onRightArrow = () => {
    
    /* Right animation if the last image is in focus */
    if (slidePos === images.length - 1) {
      setImages([
        ...images.slice(1, images.length),
        images[0],
      ]);

      img = document.getElementsByClassName("slide-image");

      clearInterval(interval);
      interval = setInterval(animate, 10);

      n = img[0].width;

      function animate() {
        if (n <= 0) clearInterval(interval);
        else {
          for (let i = 0; i < img.length; i++) {
            n -= 8;
            img[i].style.left = -img[i].width + n + "px";
          }
        }
      }
    } else {

      /* Right animation for any other image that is not the last one */
      clearInterval(interval);
      interval = setInterval(animate, 10);
      img = document.getElementsByClassName("slide-image");

      n = img[0].width * slidePos;
      setSlidePos(slidePos + 1);
  
      function animate() {
        if (n >= img[0].width) clearInterval(interval);
        else {
          for (let i = 0; i < img.length; i++) {
            n += 8;
            img[i].style.left = -n + "px";
          }
        }
      }
    }
  }

  return (
    <div className="w-full sm:h-fit h-[80vh] flex overflow-hidden">
      <button 
        className="absolute left-[40px] top-[400px] bg-zelena text-white z-10
        text-lg w-[32px] h-[32px] sm:flex hidden items-center justify-center rounded-full hover:text-[#CCCCCC] active:text-zelena active:bg-siva"
        onClick = {onLeftArrow}
      >
        <AiOutlineLeft />
      </button>
      <button 
        className="absolute right-[40px] top-[400px] bg-zelena text-white z-10
        text-lg w-[32px] h-[32px] sm:flex hidden items-center justify-center rounded-full hover:text-[#CCCCCC] active:text-zelena active:bg-siva"
        onClick = {onRightArrow}
      >
        <AiOutlineRight />
      </button>
      {images?.map((e, key) => 
          (<img 
            src={e.src}
            alt={e.alt}
            key={key}
            className="relative slide-image w-full h-auto object-cover"
          />)
        )}
    </div>
  )
}

export default Slideshow;