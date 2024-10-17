"use client";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import DashLottie from '@/components/dashboardani';

export const DataAnalytics = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="bg-white overflow-x-clip"
    >
      <div className="container mx-auto px-6 py-16">
        <div className="md:flex items-center gap-10">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#183EC2] mt-6">
              Data Analytics and Dashboarding
            </h1>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start gap-3">
                <Image src="/analytics-icon.svg" alt="Analytics Icon" width={40} height={40} />
                <div className="text-[#4A5568]">
                  <strong className="text-[#183EC2]">Basic Analytics:</strong> Starting at <strong>R3000</strong>, get custom dashboards and basic reporting on key metrics.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image src="/data-visualization.svg" alt="Data Visualization Icon" width={40} height={40} />
                <div className="text-[#4A5568]">
                  <strong className="text-[#183EC2]">Data Visualization:</strong> Includes visualization, up to 3 data sources, monthly reports, and Google Analytics integration.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image src="/advanced-analytics.svg" alt="Advanced Analytics Icon" width={40} height={40} />
                <div className="text-[#4A5568]">
                  <strong className="text-[#183EC2]">Advanced Analytics:</strong> Starting at <strong>R6000</strong>, advanced insights with machine learning predictions and real-time updates.
                </div>
              </li>
            </ul>
          </div>

          {/* Animation Content */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center items-center relative">
            <motion.div style={{ translateY }}>
              <DashLottie /> {/* Your animation or dashboard Lottie component */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
