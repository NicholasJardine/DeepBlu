"use client";
import LottieCloud from '@/components/cloud';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import DesignLottie from '@/components/designani';
import LottieTesting from '@/components/testing';

export const DesignAndQA = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={heroRef} className="bg-white overflow-x-clip">
      <div className="container mx-auto px-6 py-16">
        <div className="space-y-16">

          {/* Design Services Section */}
          <div className="md:flex items-center gap-10">
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold mb-6">Design Services</h1>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span>🎨</span>
                  <p className="text-gray-600">
                    <strong>Flat Rate:</strong> All design services are priced at <strong>R2500</strong> per project.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <span>📝</span>
                  <p className="text-gray-600">
                    Includes: UX/UI design, wireframes, and design mockups ready for development.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <span>🚀</span>
                  <p className="text-gray-600">
                    Quick delivery timelines for most small to medium projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
                <motion.div style={{ translateY }}>
                  <DesignLottie />
                </motion.div>
              </div>
          </div>

          {/* QA Services Section */}
          <div className="md:flex items-center gap-10">
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold mb-6">QA Services</h1>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span>🛠️</span>
                  <p className="text-gray-600">
                    <strong>Hourly Rate:</strong> R150 per hour, per tester.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <span>📋</span>
                  <p className="text-gray-600">
                    Comprehensive testing services, including functional, regression, and performance testing.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <span>🔄</span>
                  <p className="text-gray-600">
                    Flexible hours to suit your project timeline and deadlines.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
                <motion.div style={{ translateY }}>
                  <LottieTesting />
                </motion.div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
