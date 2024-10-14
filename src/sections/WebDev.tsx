
"use client";
import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'

import cylinderImage from '@/assets/cylinder.png'
import noodleImage from '@/assets/noodle.png'

import Image from 'next/image';
import {motion, useScroll, useTransform, useMotionValueEvent} from 'framer-motion'
import { useRef } from 'react';
import LottieAnimation from '@/components/waves';
import ServicesGrid from '@/components/services_grid';
export const WebDev = () => {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0,1], [150,-150]);

  return (

    <section ref={heroRef} className='mt-4 pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-x-clip'>
      <div className="container">
        <div className='md:flex flex-col items-center'>
        {/* <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">One stop shop</h1> */}
        <div className='md:w-[65%] md:mr-16 text-center'> 
        {/* <div className="tag">Version 2.0 is here</div> */}
        {/* <p className="text-xl text-[#010D3E] tracking-tight mt-6">At BluWave, we offer a comprehensive range of tech services tailored to your needs. Whether it's cloud-based mobile and web applications or advanced data science solutions, we provide everything you need to innovate and grow your business—all in one place.</p> */}
          <p className="text-lg text-[#010D3E] tracking-tight mt-6">
          At BluWave, we provide a full range of tech services tailored to your needs, including cloud-based mobile and web applications, as well as data analytics solutions. We offer everything you need to innovate and grow your business, all in one place.</p>
        
          <h3 className="section-description lg:mt-16 tag-2">Websites</h3>


        </div>
        <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
        {/* <ServicesGrid/> */}
        <section className="py-16 bg-white">
  <div className="container mx-auto px-6 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* First Column: Packages and Features */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Our Packages</h2>
        <div className="space-y-8">
          {/* Package 1 */}
          <div>
            <h3 className="text-xl font-semibold">Basic Package</h3>
            <p className="mt-2 text-gray-600">This package includes essential features to get started.</p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>

          {/* Package 2 */}
          <div>
            <h3 className="text-xl font-semibold">Premium Package</h3>
            <p className="mt-2 text-gray-600">Includes advanced features for growing businesses.</p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
          </div>

          {/* Package 3 */}
          <div>
            <h3 className="text-xl font-semibold">Enterprise Package</h3>
            <p className="mt-2 text-gray-600">Our complete package with all features unlocked.</p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Column: Image */}
      <div className="flex justify-center">
        <Image 
          src="/whatsapp.svg" 
          alt="Packages Image" 
          width={400} 
          height={400} 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


      </div>
      </div> 
      </div>
    </section>
  );
};
