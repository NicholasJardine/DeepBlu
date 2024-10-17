// "use client";
// import LottieCloud from '@/components/cloud';
// import Image from 'next/image';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import DesignLottie from '@/components/designani';
// import LottieTesting from '@/components/testing';

// export const DesignAndQA = () => {
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });

//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

//   return (
//     <section ref={heroRef} className="bg-white overflow-x-clip">
//       <div className="container mx-auto px-6 py-16">
//         <div className="space-y-16">

//           {/* Design Services Section */}
//           <div className="md:flex items-center gap-10">
//             <div className="md:w-1/2">
//               <h1 className="text-3xl font-bold mb-6">Design Services</h1>
//               <div className="space-y-4">
//                 <div className="flex gap-4 items-start">
//                   <span>🎨</span>
//                   <p className="text-gray-600">
//                     <strong>Flat Rate:</strong> All design services are priced at <strong>R2500</strong> per project.
//                   </p>
//                 </div>
//                 <div className="flex gap-4 items-start">
//                   <span>📝</span>
//                   <p className="text-gray-600">
//                     Includes: UX/UI design, wireframes, and design mockups ready for development.
//                   </p>
//                 </div>
//                 <div className="flex gap-4 items-start">
//                   <span>🚀</span>
//                   <p className="text-gray-600">
//                     Quick delivery timelines for most small to medium projects.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="relative flex justify-center items-center">
//                 <motion.div style={{ translateY }}>
//                   <DesignLottie />
//                 </motion.div>
//               </div>
//           </div>

//           {/* QA Services Section */}
//           <div className="md:flex items-center gap-10">
//             <div className="md:w-1/2">
//               <h1 className="text-3xl font-bold mb-6">QA Services</h1>
//               <div className="space-y-4">
//                 <div className="flex gap-4 items-start">
//                   <span>🛠️</span>
//                   <p className="text-gray-600">
//                     <strong>Hourly Rate:</strong> R150 per hour, per tester.
//                   </p>
//                 </div>
//                 <div className="flex gap-4 items-start">
//                   <span>📋</span>
//                   <p className="text-gray-600">
//                     Comprehensive testing services, including functional, regression, and performance testing.
//                   </p>
//                 </div>
//                 <div className="flex gap-4 items-start">
//                   <span>🔄</span>
//                   <p className="text-gray-600">
//                     Flexible hours to suit your project timeline and deadlines.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="relative flex justify-center items-center">
//                 <motion.div style={{ translateY }}>
//                   <LottieTesting />
//                 </motion.div>
//               </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



"use client";
import DashLottie from '@/components/dashboardani';
import DesignLottie from '@/components/designani';
import LottieTesting from '@/components/testing';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const DesignAndQA = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const translateYagain = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={heroRef} className="bg-white overflow-x-clip">
      <div className="container mx-auto px-6 lg:px-16 py-16">
        <div className="space-y-8">

          {/* QA Services Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
            <div className="max-w-[90%]">
              <h1 className="text-3xl font-bold mb-6">QA Services</h1>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <span>🛠️</span>
                  <p className="text-gray-600">
                    <strong>Hourly Rate:</strong> R250 per hour, per tester.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <span>📋</span>
                  <p className="text-gray-600">
                    Comprehensive testing services, including <strong>functional</strong>, <strong>regression</strong>, and <strong>performance</strong> testing.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <span>🔄</span>
                  <p className="text-gray-600">
                    <strong>Flexible</strong> hours to suit your project timeline and deadlines.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <span>✅</span>
                  <p className="text-gray-600">
                    <strong>Automated Testing:</strong> Reduce errors and save time with automated test suites.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <span>🕵️‍♂️</span>
                  <p className="text-gray-600">
                    <strong>Bug Reporting and Tracking:</strong> Detailed reports and tracking to ensure issues are resolved quickly.
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

          {/* Design Services Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
            <div className="max-w-[90%]">
              <h1 className="text-3xl font-bold mb-6">Design Services</h1>
              <div className="space-y-8">
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


          <div className="flex flex-col lg:flex-row justify-items-center items-center gap-12">
  {/* Column 1: Text Content */}
  <div className="max-w-[90%] lg:w-3/5">
    <h1 className="text-3xl font-bold mb-6">Data Analytics and Dashboarding</h1>
    <div className="space-y-8">
      <div className="flex gap-4 items-start">
        <span>📊</span>
        <p className="text-gray-600">
          <strong>Basic Analytics:</strong> Starting at <strong>R3000</strong>, get custom dashboards and basic reporting on key metrics.
        </p>
      </div>

      <div className="flex gap-4 items-start">
        <span>🔍</span>
        <p className="text-gray-600">
          Includes: Data visualization, up to 3 data sources, monthly reports, and Google Analytics integration.
        </p>
      </div>

      <div className="flex gap-4 items-start">
        <span>🚀</span>
        <p className="text-gray-600">
          <strong>Advanced Analytics:</strong> Starting at <strong>R6000</strong>, advanced insights with machine learning predictions and real-time updates.
        </p>
      </div>
      <div className="flex gap-4 items-start">
  <span>🔧</span>
  <p className="text-gray-600">
    <strong>Custom Dashboards:</strong> Tailored dashboards with multi-source data integration, designed to meet your specific business needs.
  </p>
</div>
<div className="flex gap-4 items-start">
  <span>🌐</span>
  <p className="text-gray-600">
    <strong>Real-Time Monitoring:</strong> Stay ahead with real-time tracking and alerts on key performance indicators for your business.
  </p>
</div>


    </div>
  </div>

  {/* Column 2: Animation/Image */}
  <div>
    <motion.div>
    <DashLottie/>
    </motion.div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
};
