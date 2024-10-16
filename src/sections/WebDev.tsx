
// "use client";
// import ArrowIcon from '@/assets/arrow-right.svg'
// import cogImage from '@/assets/cog.png'

// import cylinderImage from '@/assets/cylinder.png'
// import noodleImage from '@/assets/noodle.png'

// import Image from 'next/image';
// import {motion, useScroll, useTransform, useMotionValueEvent} from 'framer-motion'
// import { useRef } from 'react';
// import LottieAnimation from '@/components/waves';
// import ServicesGrid from '@/components/services_grid';
// export const WebDev = () => {
//   const heroRef = useRef(null);
//   const {scrollYProgress} = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"]
//   });

//   const translateY = useTransform(scrollYProgress, [0,1], [150,-150]);

//   return (

//     <section ref={heroRef} className='mt-4 pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-x-clip'>
//       <div className="container">
//         <div className='md:flex flex-col items-center'>
//         {/* <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">One stop shop</h1> */}
//         <div className='md:w-[65%] md:mr-16 text-center'> 
//         {/* <div className="tag">Version 2.0 is here</div> */}
//         {/* <p className="text-xl text-[#010D3E] tracking-tight mt-6">At BluWave, we offer a comprehensive range of tech services tailored to your needs. Whether it's cloud-based mobile and web applications or advanced data science solutions, we provide everything you need to innovate and grow your business—all in one place.</p> */}
//           <p className="text-lg text-[#010D3E] tracking-tight mt-6">
//           At BluWave, we provide a full range of tech services tailored to your needs, including cloud-based mobile and web applications, as well as data analytics solutions. We offer everything you need to innovate and grow your business, all in one place.</p>
            
//           <h3 className="section-description lg:mt-16 tag-2 mb-16">Websites</h3>


//         </div>
//         <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
//         {/* <ServicesGrid/> */}
//         <section className="py-16 bg-transparent">
//   <div className="container mx-auto px-6 lg:px-16">
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//       {/* First Column: Packages and Features */}
//       <div>
//         <h1 className="text-3xl font-bold mb-6">Our Packages</h1>
//         <div className="space-y-8">
//   {/* Package 1: Basic Package */}
//   <div className="bg-black text-white p-6 rounded-lg shadow-lg">
//     <h3 className="text-xl font-semibold">Basic Package</h3>
//     <h4>R 2500</h4>
//     <p className="mt-2 text-gray-300">
//       This package includes essential features to get started.
//     </p>
//     <ul className="mt-4 list-disc list-inside space-y-2">
//       <li>Max 3 pages</li>
//       <li>Static Content</li>
//       <li>Contact page with email integration</li>
//     </ul>
//   </div>

//   {/* Package 2: Extended Package */}
//   <div className="bg-black text-white p-6 rounded-lg shadow-lg">
//     <h3 className="text-xl font-semibold">Extended Package</h3>
//     <p className="mt-2 text-gray-300">
//       Includes advanced features for growing businesses.
//     </p>
//     <ul className="mt-4 list-disc list-inside space-y-2">
//       <h2 className="text-lg font-bold text-white">Starts at R5000</h2>
//       <li>User management</li>
//       <li>5 pages max</li>
//       <li>Feature 3</li>
//       <li>Feature 4</li>
//     </ul>
//   </div>

//   {/* Package 3: Custom Package */}
//   <div className="bg-black text-white p-6 rounded-lg shadow-lg">
//     <h3 className="text-xl font-semibold">Custom Package</h3>
//     <p className="mt-2 text-gray-300">
//       Our complete package with all features unlocked.
//     </p>
//     <ul className="mt-4 list-disc list-inside space-y-2">
//       <h2 className="text-lg font-bold text-white">Starts at R8000</h2>
//       <li>5+ pages</li>
//       <li>User management</li>
//       <li>Cloud-based file systems and storage</li>
//       <li>API integration and database</li>
//       <li>Feature 5</li>
//     </ul>
//   </div>
// </div>

//       </div>

//       {/* Second Column: Image */}
//       <div className="relative flex justify-center ">
//   {/* SVG Image */}
//   <Image
//     src="/computer-2.svg"
//     alt="Computer Screen"
//     width={320}
//     height={320}
//     className="rounded-lg"
//   />

//   {/* Superimposed Package Content */}
//   <div
//     className="absolute inset-0 flex items-center justify-center"
//     style={{
//       padding: '10%',   // Adds padding to fit the content neatly inside the SVG screen
//       overflow: 'hidden',  // Ensures no content spills out
//       clipPath: 'inset(10% 10% 20% 10%)',  // Constrains the content to the SVG screen
//     }}
//   >
//     <div className="bg-transparent p-4 rounded-md shadow-lg w-full h-full overflow-auto">
//     <h3 className="text-xl font-semibold">Custom Package</h3>
//             {/* <p className="mt-2 text-gray-600">Our complete package with all features unlocked.</p> */}
//             <ul className="mt-2 list-disc list-inside text-sm space-y-1">
//             <h2>starts at R8000</h2> 

//               <li>5+ pages</li>
//               <li>User management</li>
//               <li>Cloud based file systems and storage</li>
//               <li>API integration and databse</li>
//             </ul>
//     </div>
//   </div>
// </div>


// <div className="relative flex justify-center ">
//   {/* SVG Image */}
//   <Image
//     src="/computer-3.svg"
//     alt="Computer Screen"
//     width={320}
//     height={320}
//     className="rounded-lg"
//   />

//   {/* Superimposed Package Content */}
//   <div
//     className="absolute inset-0 flex items-center justify-center"
//     style={{
//       padding: '10%',   // Adds padding to fit the content neatly inside the SVG screen
//       overflow: 'hidden',  // Ensures no content spills out
//       clipPath: 'inset(10% 10% 20% 10%)',  // Constrains the content to the SVG screen
//     }}
//   >
//     <div className="bg-transparent p-4 rounded-md shadow-lg w-full h-full overflow-auto">
//       <h3 className="text-lg font-bold text-center truncate">Extended Package</h3>
//       <p className="mt-2 text-gray-600 text-sm text-center">
//         Starts at R5000
//       </p>
//       <ul className="mt-2 list-disc list-inside text-sm space-y-1">
//         <li>User management</li>
//         <li>5 pages max</li>
//         <li>Feature 3</li>
//         <li>Feature 4</li>
//       </ul>
//     </div>
//   </div>
// </div>

// <div className="relative flex justify-center ">
//   {/* SVG Image */}
//   <Image
//     src="/computer.svg"
//     alt="Computer Screen"
//     width={320}
//     height={320}
//     className="rounded-lg"
//   />

//   {/* Superimposed Package Content */}
//   <div
//     className="absolute inset-0 flex items-center justify-center"
//     style={{
//       padding: '10%',   // Adds padding to fit the content neatly inside the SVG screen
//       overflow: 'hidden',  // Ensures no content spills out
//       clipPath: 'inset(10% 10% 20% 10%)',  // Constrains the content to the SVG screen
//     }}
//   >
//     <div className="bg-transparent p-4 rounded-md shadow-lg w-full h-full overflow-auto">
//     <h3 className="text-xl font-semibold">Basic Package</h3>
//             <h4>R 2500</h4>
//             {/* <p className="mt-2 text-gray-600">This package includes essential features to get started.</p> */}
//             <ul className="mt-2 list-disc list-inside text-sm space-y-1">              <li>Max 3 pages</li>
//               <li>Static Content</li>
//               <li>Contact page with email integration</li>
//             </ul>

//     </div>
//   </div>
// </div>

//     </div>
//   </div>
// </section>


//       </div>
//       </div> 
//       </div>
//     </section>
//   );
// };


"use client";
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const WebDev = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="mt-4 pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-x-clip"
    >
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <h2 className="section-title text-4xl font-extrabold text-center mb-10 lg:mb-20 lg:mt-12">
          Our Web Development Packages
        </h2>

        <div className="space-y-16">
          {/* Row 1: Basic Package */}
          <div className="flex flex-col md:flex-row md: justify-around items-center">
            <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full md:w-1/2 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">Basic Package</h3>
              <h4 className="text-xl text-[#4480db]">R 2500</h4>
              <p className="mt-2 text-gray-300">
                This package includes essential features to get your website up and running.
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Up to 3 static pages</li>
                <li>Basic design customization</li>
                <li>Mobile responsive layout</li>
                <li>Contact form with email integration</li>
                <li>Basic SEO setup</li>
              </ul>
            </div>

            <div className="relative flex justify-center mt-8 md:mt-0">
              <Image
                src="/computer.svg"
                alt="Computer Screen"
                width={320}
                height={320}
                className="rounded-lg"
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  padding: '10%',
                  overflow: 'hidden',
                  clipPath: 'inset(10% 10% 20% 10%)',
                }}
              >
                <div className="bg-transparent p-4 rounded-md shadow-lg w-full h-full overflow-auto">
                  <h3 className="text-xl font-semibold text-[#4480db]">Basic Package</h3>
                  {/* Retained Original Text */}
                  <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                    <li>Max 3 pages</li>
                    <li>Static Content</li>
                    <li>Contact page with email integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Extended Package */}
          <div className="flex flex-col md:flex-row justify-around items-center gap-12">
            <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full md:w-1/2 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">Extended Package</h3>
              <h4 className="text-xl text-[#4480db]">Starts at R5000</h4>
              <p className="mt-2 text-gray-300">
                Perfect for growing businesses looking to scale their online presence.
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>User management system</li>
                <li>Up to 5 pages</li>
                <li>Custom features like e-commerce integration</li>
                <li>Enhanced SEO setup</li>
                <li>Custom design tailored to your brand</li>
              </ul>
            </div>

            <div className="relative flex justify-center mt-8 md:mt-0">
              <Image
                src="/computer-2.svg"
                alt="Computer Screen"
                width={320}
                height={320}
                className="rounded-lg"
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  padding: '10%',
                  overflow: 'hidden',
                  clipPath: 'inset(10% 10% 20% 10%)',
                }}
              >
                <div className="bg-transparent p-4 rounded-md shadow-lg w-full h-full overflow-auto">
                  <h3 className="text-xl font-semibold text-[#4480db]">Extended Package</h3>
                  {/* Retained Original Text */}
                  <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                    <li>User management</li>
                    <li>5 pages max</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                    <li>Feature 5</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Custom Package */}
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full md:w-1/2 transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">Custom Package</h3>
              <h4 className="text-xl text-[#4480db]">Starts at R8000</h4>
              <p className="mt-2 text-gray-300">
                The ultimate package with all advanced features included.
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-sm">
                <li>Unlimited pages</li>
                <li>Cloud-based storage integration</li>
                <li>API integration for third-party services</li>
                <li>Advanced SEO optimization</li>
                <li>Full e-commerce setup</li>
              </ul>
            </div>

            <div className="relative flex justify-center mt-8 md:mt-0">
              <Image
                src="/computer-3.svg"
                alt="Computer Screen"
                width={320}
                height={320}
                className="rounded-lg"
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  padding: '10%',
                  overflow: 'hidden',
                  clipPath: 'inset(10% 10% 20% 10%)',
                }}
              >
                <div className="bg-transparent p-4 rounded-md shadow-lg w-full h-full overflow-auto">
                  <h6 className="text-xl font-semibold text-[#4480db]">Custom Package</h6>
                  {/* Retained Original Text */}
                  <ul className=" list-disc list-inside space-y-1 text-sm">
                    <li>5+ pages</li>
                    <li>User management</li>
                    <li>Cloud-based file systems and storage</li>
                    <li>API integration and database</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <p className="tag text-white mt-8 text-center max-w-[60%]">
            Instead of charging a hosting fee as others might, we offer you the opportunity to pay for your hosting and associated cloud costs directly as this works out cheaper for you! Please note, to integrate a payment portal into your application for an e-commerce purposes is an additional R2500.
          </p>

        </div>
      </div>
    </section>
  );
};
