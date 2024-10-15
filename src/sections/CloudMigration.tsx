"use client";
import ArrowIcon from '@/assets/arrow-right.svg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LottieCloud from '@/components/cloud';

export const CloudMigration = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={heroRef} className="bg-white overflow-x-clip">
      <div className="container mx-auto px-6 py-16">
        <div className="md:flex items-center gap-10">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
              {/* Left Column: Pricing Information */}
              <div>
                <h1 className="text-3xl font-bold mb-6">Cloud Migration Pricing</h1>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <span>💸</span>
                    <p className="text-gray-600">
                      <strong>Starting at R2500:</strong> Covers basic setups with minimal complexity.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span>⚙️</span>
                    <p className="text-gray-600">
                      <strong>Complexity-Based Pricing:</strong> The final cost depends on the system's size and complexity.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span>📈</span>
                    <p className="text-gray-600">
                      <strong>Scalable Packages:</strong> Add services such as multi-cloud setups and automated backups as needed.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span>🚀</span>
                    <p className="text-gray-600">
                      <strong>Fast-Track Migration:</strong> Expedite your migration for a premium, with faster delivery times.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span>🔧</span>
                    <p className="text-gray-600">
                      <strong>Support Plans Available:</strong> Choose between standard and advanced support, depending on your needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Lottie Cloud Animation */}
              <div className="relative flex justify-center items-center">
                <motion.div style={{ translateY }}>
                  <LottieCloud />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
