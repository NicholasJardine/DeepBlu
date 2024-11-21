
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


// "use client";
// import Image from 'next/image';
// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export const WebDev = () => {
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ['start end', 'end start'],
//   });

//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

//   return (
//     <section
//       ref={heroRef}
//       // className="mt-4 pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-x-clip"
//       className="mt-4 pt-8 pb-20 md:pt-5 md:pb-10 bg-white overflow-x-clip"
//     >
//       <div className="container mx-auto px-6 lg:px-16">
//         {/* Section Title */}
//         <h2 className="section-title text-4xl font-extrabold text-center mb-10 lg:mb-20 lg:mt-12">
//           Our Web Development Packages
//         </h2>

//         <div className="space-y-16">
//           {/* Row 1: Basic Package */}
//           <div className="flex flex-col md:flex-row md: justify-around items-center">
//             <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full md:w-1/2 transition-transform duration-300 transform hover:scale-105">
//               <h3 className="text-2xl font-bold mb-2">Basic Package</h3>
//               <h4 className="text-xl text-[#4480db]">R 2500</h4>
//               <p className="mt-2 text-gray-300">
//                 This package includes essential features to get your website up and running.
//               </p>
//               <ul className="mt-4 list-disc list-inside space-y-2">
//                 <li>Up to 3 static pages</li>
//                 <li>Basic design customization</li>
//                 <li>Mobile responsive layout</li>
//                 <li>Contact form with email integration</li>
//                 <li>Basic SEO setup</li>
//               </ul>
//             </div>

//             <div className="relative flex justify-center mt-8 md:mt-0">
//               <Image
//                 src="/computer.svg"
//                 alt="Computer Screen"
//                 width={320}
//                 height={320}
//                 className="rounded-lg"
//               />
//               <div
//                 className="absolute inset-0 flex items-center justify-center"
//                 style={{
//                   padding: '10%',
//                   overflow: 'hidden',
//                   clipPath: 'inset(10% 10% 20% 10%)',
//                 }}
//               >
//                 <div className="bg-transparent p-4 rounded-md shadow-lg w-full h-full overflow-auto">
//                   <h3 className="text-xl font-semibold text-[#4480db]">Basic Package</h3>
//                   {/* Retained Original Text */}
//                   <ul className="mt-2 list-disc list-inside text-sm space-y-1">
//                     <li>Max 3 pages</li>
//                     <li>Static Content</li>
//                     <li>Contact page with email integration</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Row 2: Extended Package */}
//           <div className="flex flex-col md:flex-row justify-around items-center gap-12">
//             <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full md:w-1/2 transition-transform duration-300 transform hover:scale-105">
//               <h3 className="text-2xl font-bold mb-2">Extended Package</h3>
//               <h4 className="text-xl text-[#4480db]">Starts at R5000</h4>
//               <p className="mt-2 text-gray-300">
//                 Perfect for growing businesses looking to scale their online presence.
//               </p>
//               <ul className="mt-4 list-disc list-inside space-y-2">
//                 <li>User management system</li>
//                 <li>Up to 5 pages</li>
//                 <li>Custom features like e-commerce integration</li>
//                 <li>Enhanced SEO setup</li>
//                 <li>Custom design tailored to your brand</li>
//               </ul>
//             </div>

//             <div className="relative flex justify-center mt-8 md:mt-0">
//               <Image
//                 src="/computer-2.svg"
//                 alt="Computer Screen"
//                 width={320}
//                 height={320}
//                 className="rounded-lg"
//               />
//               <div
//                 className="absolute inset-0 flex items-center justify-center"
//                 style={{
//                   padding: '10%',
//                   overflow: 'hidden',
//                   clipPath: 'inset(10% 10% 20% 10%)',
//                 }}
//               >
//                 <div className="bg-transparent p-4 rounded-md shadow-lg w-full h-full overflow-auto">
//                   <h3 className="text-xl font-semibold text-[#4480db]">Extended Package</h3>
//                   {/* Retained Original Text */}
//                   <ul className="mt-2 list-disc list-inside text-sm space-y-1">
//                     <li>User management</li>
//                     <li>5 pages max</li>
//                     <li>Feature 3</li>
//                     <li>Feature 4</li>
//                     <li>Feature 5</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Row 3: Custom Package */}
//           <div className="flex flex-col md:flex-row justify-around items-center">
//             <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full md:w-1/2 transition-transform duration-300 transform hover:scale-105">
//               <h3 className="text-2xl font-bold mb-2">Custom Package</h3>
//               <h4 className="text-xl text-[#4480db]">Starts at R8000</h4>
//               <p className="mt-2 text-gray-300">
//                 The ultimate package with all advanced features included.
//               </p>
//               <ul className="mt-4 list-disc list-inside space-y-2 text-sm">
//                 <li>Unlimited pages</li>
//                 <li>Cloud-based storage integration</li>
//                 <li>API integration for third-party services</li>
//                 <li>Advanced SEO optimization</li>
//                 <li>Full e-commerce setup</li>
//               </ul>
//             </div>

//             <div className="relative flex justify-center mt-8 md:mt-0">
//               <Image
//                 src="/computer-3.svg"
//                 alt="Computer Screen"
//                 width={320}
//                 height={320}
//                 className="rounded-lg"
//               />
//               <div
//                 className="absolute inset-0 flex items-center justify-center"
//                 style={{
//                   padding: '10%',
//                   overflow: 'hidden',
//                   clipPath: 'inset(10% 10% 20% 10%)',
//                 }}
//               >
//                 <div className="bg-transparent p-4 rounded-md shadow-lg w-full h-full overflow-auto">
//                   <h6 className="text-xl font-semibold text-[#4480db]">Custom Package</h6>
//                   {/* Retained Original Text */}
//                   <ul className=" list-disc list-inside space-y-1 text-sm">
//                     <li>5+ pages</li>
//                     <li>User management</li>
//                     <li>Cloud-based file systems and storage</li>
//                     <li>API integration and database</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//           </div>
//           <p className="tag text-white mt-8 text-center max-w-[60%]">
//             Instead of charging a hosting fee as others might, we offer you the opportunity to pay for your hosting and associated cloud costs directly as this works out cheaper for you! Please note, to integrate a payment portal into your application for an e-commerce purposes is an additional R2500.
//           </p>

//         </div>
//       </div>
//     </section>
//   );
// };






// "use client";
// import Image from "next/image";
// import { useRef } from "react";
// import { motion } from "framer-motion";

// export const WebDev = () => {
//   const heroRef = useRef(null);

//   return (
//     <section
//       ref={heroRef}
//       className="mt-4 pt-8 pb-20 md:pt-12 md:pb-16 bg-gradient-to-b from-blue-900 via-white to-blue-50"
//     >
//       <div className="container mx-auto px-6 lg:px-16">
//         {/* Section Title */}
//         <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-white mb-10 lg:mb-20">
//           Our Web Development Packages
//         </h2>

//         <div className="space-y-16">
//           {/* Package Rows */}
//           {[
//             {
//               title: "Basic Package",
//               price: "R 2500",
//               description:
//                 "This package includes essential features to get your website up and running.",
//               features: [
//                 "Up to 3 static pages",
//                 "Basic design customization",
//                 "Mobile responsive layout",
//                 "Contact form with email integration",
//                 "Basic SEO setup",
//               ],
//               image: "/computer.svg",
//             },
//             {
//               title: "Extended Package",
//               price: "Starts at R 5000",
//               description:
//                 "Perfect for growing businesses looking to scale their online presence.",
//               features: [
//                 "User management system",
//                 "Up to 5 pages",
//                 "Custom features like e-commerce integration",
//                 "Enhanced SEO setup",
//                 "Custom design tailored to your brand",
//               ],
//               image: "/computer-2.svg",
//               reverse: true,
//             },
//             {
//               title: "Custom Package",
//               price: "Starts at R 8000",
//               description:
//                 "The ultimate package with all advanced features included.",
//               features: [
//                 "Unlimited pages",
//                 "Cloud-based storage integration",
//                 "API integration for third-party services",
//                 "Advanced SEO optimization",
//                 "Full e-commerce setup",
//               ],
//               image: "/computer-3.svg",
//             },
//           ].map(({ title, price, description, features, image, reverse }, index) => (
//             <div
//               key={index}
//               className={`flex flex-col ${
//                 reverse ? "md:flex-row-reverse" : "md:flex-row"
//               } items-center gap-8 md:gap-12`}
//             >
//               {/* Text Section */}
//               <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg w-full md:w-1/2 transform transition-transform duration-300 hover:scale-105">
//                 <h3 className="text-2xl font-bold mb-2">{title}</h3>
//                 <h4 className="text-xl text-[#00E4FF]">{price}</h4>
//                 <p className="mt-2 text-gray-200">{description}</p>
//                 <ul className="mt-4 list-disc list-inside space-y-2">
//                   {features.map((feature, i) => (
//                     <li key={i} className="text-sm">
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Image Section */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="w-full md:w-1/2 flex justify-center"
//               >
//                 <Image
//                   src={image}
//                   alt={`${title} Illustration`}
//                   width={320}
//                   height={320}
//                   className="rounded-lg shadow-md"
//                 />
//               </motion.div>
//             </div>
//           ))}

//           {/* Call-to-Action */}
//           <div className="text-center mt-16">
//             <p className="text-gray-700 mb-4">
//               Instead of charging a hosting fee as others might, we offer you the
//               opportunity to pay for your hosting and associated cloud costs
//               directly as this works out cheaper for you!
//             </p>
//             <p className="text-gray-700 mb-6">
//               Please note, integrating a payment portal into your application for
//               e-commerce purposes is an additional R2500.
//             </p>
//             <button className="bg-blue-900 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-800 transition">
//               Contact Us to Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




// "use client";

// import { twMerge } from "tailwind-merge";
// import CheckIcon from "@/assets/check.svg";

// const webDevTiers = [
//   {
//     title: "Basic Package",
//     price: 2500,
//     features: [
//       "Up to 3 static pages",
//       "Basic design customization",
//       "Mobile responsive layout",
//       "Contact form with email integration",
//       "Basic SEO setup",
//     ],
//   },
//   {
//     title: "Extended Package",
//     price: 5000,
//     features: [
//       "User management system",
//       "Up to 5 pages",
//       "Custom features like e-commerce integration",
//       "Enhanced SEO setup",
//       "Custom design tailored to your brand",
//     ],
//   },
//   {
//     title: "Custom Package",
//     price: 8000,
//     features: [
//       "Unlimited pages",
//       "Cloud-based storage integration",
//       "API integration for third-party services",
//       "Advanced SEO optimization",
//       "Full e-commerce setup",
//     ],
//   },
// ];

// export const WebDev = () => {
//   return (
//     <section className="py-24 bg-[#1A1A1A] text-white">
//       <div className="container mx-auto px-6 lg:px-16">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="section-title text-4xl font-bold text-white">
//             Web Development Packages
//           </h2>
//           <p className="mt-4 text-gray-400">
//             Choose a package that suits your business needs, from simple static websites to fully integrated custom platforms.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="flex flex-col gap-6 items-center lg:flex-row lg:items-end lg:justify-center">
//           {webDevTiers.map(({ title, price, features }) => (
//             <div
//               key={title}
//               className="card bg-[#333333] text-white p-8 rounded-lg shadow-lg w-full max-w-md transition-transform duration-300 transform hover:scale-105"
//             >
//               <h3 className="text-lg font-bold mb-4">{title}</h3>
//               <h4 className="text-2xl font-semibold text-[#4480db] mb-4">
//                 R {price}
//               </h4>
//               <ul className="mt-4 space-y-3">
//                 {features.map((feature) => (
//                   <li key={feature} className="flex items-center gap-3">
//                     <CheckIcon className="h-6 w-6 text-[#4480db]" />
//                     <span className="text-gray-300">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };





// "use client";

// import { twMerge } from "tailwind-merge";
// import CheckIcon from "@/assets/check.svg";

// const webDevTiers = [
//   {
//     title: "Basic Package",
//     price: 2500,
//     features: [
//       "Up to 3 static pages",
//       "Basic design customization",
//       "Mobile responsive layout",
//       "Contact form with email integration",
//       "Basic SEO setup",
//     ],
//   },
//   {
//     title: "Extended Package",
//     price: 5000,
//     features: [
//       "User management system",
//       "Up to 5 pages",
//       "Custom features like e-commerce integration",
//       "Enhanced SEO setup",
//       "Custom design tailored to your brand",
//     ],
//   },
//   {
//     title: "Custom Package",
//     price: 8000,
//     features: [
//       "Unlimited pages",
//       "Cloud-based storage integration",
//       "API integration for third-party services",
//       "Advanced SEO optimization",
//       "Full e-commerce setup",
//     ],
//   },
// ];

// export const WebDev = () => {
//   return (
//     <section className="py-24 bg-[#0E0E0E] text-white">
//       <div className="container mx-auto px-6 lg:px-16">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-extrabold text-white">Web Development Packages</h2>
//           <p className="mt-4 text-gray-400">
//             Select the package that fits your needs, from basic websites to advanced custom platforms.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="flex flex-col gap-6 items-center lg:flex-row lg:items-end lg:justify-center">
//           {webDevTiers.map(({ title, price, features }) => (
//             <div
//               key={title}
//               className="card bg-[#1A1A1A] border border-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md transition-transform duration-300 transform hover:scale-105"
//             >
//               <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
//               <h4 className="text-3xl font-semibold text-[#4480DB] mb-4">R {price}</h4>
//               <ul className="mt-6 space-y-4">
//                 {features.map((feature) => (
//                   <li key={feature} className="flex items-center gap-4">
//                     <CheckIcon className="h-6 w-6 text-[#4480DB]" /> {/* Uniform tick size */}
//                     <span className="text-gray-300">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };





// "use client";

// import { twMerge } from "tailwind-merge";
// import CheckIcon from "@/assets/check.svg";

// const webDevTiers = [
//   {
//     title: "Basic Package",
//     price: 2500,
//     features: [
//       "Up to 3 static pages",
//       "Basic design customization",
//       "Mobile responsive layout",
//       "Contact form with email integration",
//       "Basic SEO setup",
//     ],
//   },
//   {
//     title: "Extended Package",
//     price: 5000,
//     features: [
//       "User management system",
//       "Up to 5 pages",
//       "Custom features",
//       // "Custom features like e-commerce integration",

//       "Enhanced SEO setup",
//       "Custom design tailored to your brand",
//     ],
//   },
//   {
//     title: "Custom Package",
//     price: 8000,
//     features: [
//       "Unlimited pages",
//       "Cloud-based storage integration",
//       "API integration for third-party services",
//       "Advanced SEO optimization",
//       "Full e-commerce setup",
//     ],
//   },
// ];

// export const WebDev = () => {
//   return (
//     <section className="py-12 bg-[#0E0E0E] text-white">
//       <div className="container mx-auto px-4 lg:px-16">
//         {/* Section Title */}
//         <div className="text-center mb-8 lg:mb-12">
//           <h2 className="text-4xl font-extrabold text-white leading-snug sm:text-5xl">
//             Web Development Packages
//           </h2>
//           <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-md mx-auto">
//             Select the package that fits your needs, from basic websites to advanced custom platforms.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-center">
//           {webDevTiers.map(({ title, price, features }) => (
//             <div
//               key={title}
//               className="bg-[#1A1A1A] border border-gray-700 p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
//             >
//               <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
//               <h4 className="text-3xl font-semibold text-[#4480DB] mb-4">R {price}</h4>
//               <ul className="mt-6 space-y-4">
//                 {features.map((feature) => (
//                   <li key={feature} className="flex items-center gap-4">
//                     <CheckIcon className="h-6 w-6 text-[#4480DB]" /> {/* Uniform tick size */}
//                     <span className="text-gray-300">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



"use client";

import { twMerge } from "tailwind-merge";
import CheckIcon from "@/assets/check.svg";

const webDevTiers = [
  {
    title: "Basic Package",
    price: 2500,
    features: [
      "Up to 3 static pages",
      "Basic design customization",
      "Mobile responsive layout",
      "Contact form with email integration",
      "Basic SEO setup",
    ],
  },
  {
    title: "Extended Package",
    price: 5000,
    features: [
      "User management system",
      "Up to 5 pages",
      "Custom features like e-commerce integration",
      "Enhanced SEO setup",
      "Custom design tailored to your brand",
    ],
  },
  {
    title: "Custom Package",
    price: 8000,
    features: [
      "Unlimited pages",
      "Cloud-based storage integration",
      "API integration for third-party services",
      "Advanced SEO optimization",
      "Full e-commerce setup",
    ],
  },
];

export const WebDev = () => {
  return (
    <section className="py-12 bg-[#0E0E0E] text-white">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-4xl font-extrabold text-white leading-snug sm:text-5xl">
            Web Development Packages
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-md mx-auto">
            Select the package that fits your needs, from basic websites to advanced custom platforms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-center">
          {webDevTiers.map(({ title, price, features }) => (
            <div
              key={title}
              className="bg-[#1A1A1A] border border-gray-700 p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
              <h4 className="text-3xl font-semibold text-[#4480DB] mb-4">R {price}</h4>
              <ul className="mt-6 space-y-4">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-[#4480DB]" />
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
