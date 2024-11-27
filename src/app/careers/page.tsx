"use client";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { useRef } from "react";
import CheckIcon from "@/assets/check.svg"; // Import the check icon

const CareersPage = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleScrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header onServicesClick={handleScrollToServices} />

      <section
        className="py-16"
        style={{
          background: "radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 86%)",
        }}
      >
        <div className="container mx-auto px-6 lg:px-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Careers</h1>
          </div>

          {/* Learnership Section */}
          <div className="bg-gray-50 rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Learnership Opportunities</h2>
            <p className="text-lg text-gray-800 mb-6">
              While we are not hiring at the moment, BluCrest is proud to offer learnership opportunities to unemployed youth. This program is designed to build your CV, teach essential tech skills, and help you excel in the tech industry.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">What You'll Learn:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <span className="text-gray-800">
                  <strong>Software Testing:</strong> Master tools and techniques to ensure quality in software development.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <span className="text-gray-800">
                  <strong>Flutter:</strong> Build cross-platform mobile applications with stunning UI/UX.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <span className="text-gray-800">
                  <strong>Next.js:</strong> Develop modern web applications with server-side rendering and performance optimization.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="h-6 w-6 text-blue-500" />
                <span className="text-gray-800">
                  <strong>Basics of AWS:</strong> Gain foundational knowledge of cloud computing with AWS services.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CareersPage;
