import React, { useState, useEffect } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://image3.jdomni.in/banner/12072022/86/47/47/9E7D0851378372E19AF2BDF807_1657618417292.jpeg?output-format=webp',
    'https://image2.jdomni.in/banner/12072022/21/B4/8B/EB5B3D292300A637A8FC4FC93E_1657617783215.jpeg?output-format=webp',
    'https://image3.jdomni.in/banner/12072022/86/47/47/9E7D0851378372E19AF2BDF807_1657618417292.jpeg?output-format=webp'
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      nextSlide();
    }, 3000); // Slide changes every 3 seconds
    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-[1126px] mx-auto mt-4">
      {/* Image Slider Container */}
      <div className="relative w-full h-[250px] sm:h-[350px] object-contain overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-[400px] object-contain transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {/* <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={prevSlide}
          className="text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
        >
          <IoIosArrowDropleft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
        >
          <IoIosArrowDropright size={28} />
        </button>
      </div> */}

      {/* Dots Indicator */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div> */}
    </div>
  );
}

export default ImageSlider;











// import React, { useState, useEffect } from 'react';
// import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

// function ImageSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     'https://image3.jdomni.in/banner/12072022/86/47/47/9E7D0851378372E19AF2BDF807_1657618417292.jpeg?output-format=webp',
//     'https://image2.jdomni.in/banner/12072022/21/B4/8B/EB5B3D292300A637A8FC4FC93E_1657617783215.jpeg?output-format=webp',
//     'https://image3.jdomni.in/banner/12072022/86/47/47/9E7D0851378372E19AF2BDF807_1657618417292.jpeg?output-format=webp'
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       nextSlide();
//     }, 3000); // Slide changes every 3 seconds
//     return () => clearTimeout(timeoutId);
//   }, [currentIndex]);

//   return (
//     <div className="relative max-w-[1126px] mx-auto mt-2 overflow-hidden">
//       {/* Single Image Display */}
//       <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden md:h-[500px] lg:h-[550px]">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//           >
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Controls */}
//       <div className="absolute inset-0 flex justify-between items-center px-4">
//         <button onClick={prevSlide} className="text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition">
//           <IoIosArrowDropleft size={28} />
//         </button>
//         <button onClick={nextSlide} className="text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition">
//           <IoIosArrowDropright size={28} />
//         </button>
//       </div>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;










// import React, { useState, useEffect } from 'react';
// import { IoIosArrowDropright } from "react-icons/io";
// import { IoIosArrowDropleft } from "react-icons/io";

// import './Slider.css'

// function ImageSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     'https://image3.jdomni.in/banner/12072022/86/47/47/9E7D0851378372E19AF2BDF807_1657618417292.jpeg?output-format=webp',
//     'https://image2.jdomni.in/banner/12072022/21/B4/8B/EB5B3D292300A637A8FC4FC93E_1657617783215.jpeg?output-format=webp',
//     'https://image3.jdomni.in/banner/12072022/86/47/47/9E7D0851378372E19AF2BDF807_1657618417292.jpeg?output-format=webp'
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//   };

//   // Automatic image change functionality
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       nextSlide();
//     }, 2100); // Change image every 3 seconds (adjust as needed)

//     return () => clearTimeout(timeoutId); // Cleanup function to prevent memory leaks
//   }, [currentIndex, images.length]); // Run effect only when currentIndex or images.length changes

//   return (
//     <div className="image-slider max-w-[1126px] mx-auto mt-2">
//       {/* Slider container and image elements */}
//       <div className="slider-container relative w-full h-[300px] sm:h-[400px] overflow-hidden md:h-[500px] lg:h-[550px]">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={index === currentIndex ? 'slide active' : 'slide'}
//           >
//             <img src={image} alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </div>

//       {/* Navigation controls */}
//       {/* <div className="slider-controls">
//         <button onClick={prevSlide}><IoIosArrowDropleft size={28}/></button>
//         <button onClick={nextSlide}><IoIosArrowDropright size={28}/></button>
//       </div> */}
//     </div>
//   );
// }

// export default ImageSlider;