"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const DevelopmentProcess: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={heroRef} className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="section-heading text-5xl font-bold text-blue-900">Our Development Process</h1>
          <p className="max-w-[60%] mx-auto mt-4 text-gray-600 pb-16">
            From initial consultation to final deployment, here's how we turn your ideas into a reality.
          </p>
        </div>

        {/* Development Process Steps */}
        <div className="space-y-24">
          {/* Step 1: Discovery */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900">1. Discovery</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We start by understanding your business, goals, and challenges. Our team analyzes your objectives to create a tailored strategy that meets your needs and goals. This ensures that your vision is fully captured.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <Image src="/discovery-icon.svg" alt="Discovery Icon" width={200} height={200} />
            </div>
          </div>

          {/* Step 2: Design */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900">2. Design</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our design team creates wireframes and prototypes to bring your vision to life. The goal is to ensure that the user experience is seamless and enjoyable across all devices. We work closely with you to ensure that the design aligns with your brand identity.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <Image src="/design-icon.svg" alt="Design Icon" width={200} height={200} />
            </div>
          </div>

          {/* Step 3: Development */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900">3. Development</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We write clean, scalable code using the latest technologies, ensuring that performance, security, and maintainability are prioritized. Our development approach ensures that your project is built to scale as your business grows.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <Image src="/development-icon.svg" alt="Development Icon" width={200} height={200} />
            </div>
          </div>

          {/* Step 4: Testing */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900">4. Testing</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our QA team conducts rigorous testing to ensure your product is bug-free and runs smoothly. We perform multiple rounds of testing to ensure your product works on all platforms and devices.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <Image src="/testing-icon.svg" alt="Testing Icon" width={200} height={200} />
            </div>
          </div>

          {/* Step 5: Deployment */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900">5. Deployment</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                After thorough testing, we handle the deployment process to ensure a smooth and successful launch. We work with you to minimize downtime and provide full support during and after the launch.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <Image src="/deployment-icon.svg" alt="Deployment Icon" width={200} height={200} />
            </div>
          </div>

          {/* Step 6: Ongoing Support */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900">6. Ongoing Support</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We offer ongoing support and maintenance, ensuring your project stays up-to-date and continues to run smoothly. Our team is available to help with any updates or fixes that may be required.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <Image src="/support-icon.svg" alt="Support Icon" width={200} height={200} />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-blue-900 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-800 transition">
            Get Started on Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;

