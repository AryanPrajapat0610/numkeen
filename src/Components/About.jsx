import React from 'react';

const About = () => {
  return (
    <div className='px-4'>
      <div className='flex flex-col justify-center items-center mt-[50px] sm:mt-[100px]'>
        {/* Heading */}
        <h1 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-[45px]'>
          About Us
        </h1>
        
        {/* Image */}
        <img 
          className='w-full h-auto max-w-[300px] sm:max-w-[600px] lg:max-w-[1146px] rounded-lg' 
          src='https://image3.jdomni.in/banner/28122020/34/50/84/1CB02764CDB2FDE7556A26A199_1609155821525.png?output-format=webp' 
          alt='About img'
        />

        {/* Text */}
        <p className='text-sm sm:text-base lg:text-lg text-center max-w-[300px] sm:max-w-[600px] lg:max-w-[1128px] mt-4 sm:mt-6'>
          We, dummy company, situated at area, city, state, prepare different varieties of namkeen & farsan and other
          delicacies such as samosas, pakodas, panipuri, etc. which are famous for their taste and crispness, 
          satisfying the taste buds of the ever so choosy connoisseurs of quality food items. We believe sweet 
          satisfies your cravings, but saltiness is the flavor of life.
        </p>
      </div>
    </div>
  );
};

export default About;










// import React from 'react'

// const About = () => {
//   return (
//     <div className=''>
//       <div className='flex flex-col justify-center items-center mt-[100px]'>
//         <h1 className='text-3xl font-bold mb-[45px]'>About Us</h1>
//         <img className='sm:w-[300px] sm:h-[300px] lg:w-[1146px] lg:h-[438px]' src='https://image3.jdomni.in/banner/28122020/34/50/84/1CB02764CDB2FDE7556A26A199_1609155821525.png?output-format=webp' alt='About img'/>
//         <p className='sm:w-[500px] flex justify-center items-center text-center lg:w-[1128px] mt-2'>We, dummy company, situated at area, city, state, prepare different variety of namkeen & farsan and other 
//             delicacious such as samosas, pakodas, panipuri, etc. which are famous for there taste and crispness, 
//             satisfying the taste buds of the ever so choosy connoisseurs of quality food items. We believe sweet 
//             satisfies your cravings, but saltiness is the flavour of life.</p>
//       </div>
//     </div>
//   )
// }

// export default About