"use client";

import Image from "next/image";
import Link from "next/link";
import ScreenImage from "@/assets/screen.png"; // Import the image from assets
import VotingImage from "@/assets/voting-image.png"; // Import the image from assets
import ScreenImage2 from "@/assets/med.png"; // Import the image from assets

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { useRef } from "react";

const PortfolioPage = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleScrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header onServicesClick={handleScrollToServices} />

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900">Our Portfolio</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              At BluCrest, we’re proud to power Raiders Rugby Club with cutting-edge technology. Here’s a glimpse of some of the exciting projects we’ve delivered for the club.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <Image
                src={ScreenImage}
                alt="Team Management App"
                width={400}
                height={300}
                className="w-full h-56 object-contain bg-gray-100 mb-10 pb-2" // Added margin-bottom
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-900">Player Tracking App</h2>
                <p className="mt-3 text-gray-600">
                  A robust app to manage teams, fixtures, and player stats seamlessly.
                </p>
                <Link
                  href="/portfolio/team-management"
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <Image
                src={VotingImage}
                alt="Fan Engagement App"
                width={400}
                height={300}
                className="w-full h-56 object-contain bg-gray-100 mb-10 pb-2" // Added margin-bottom
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-900">Club Engagement App</h2>
                <p className="mt-3 text-gray-600">
                  An interactive web-app to designed to collect information, and gage the opinions of the players and coaches within the club.
                </p>
                <Link
                  href="/portfolio/fan-engagement"
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <Image
                src={ScreenImage2}
                alt="Performance Analytics Dashboard"
                width={400}
                height={300}
                className="w-full h-56 object-contain bg-gray-100 mb-10 pb-2" // Added margin-bottom
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-900">Medical Assistance App</h2>
                <p className="mt-3 text-gray-600">
                  A data-driven dashboard to track player performance and team progress.
                </p>
                <Link
                  href="/portfolio/performance-analytics"
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PortfolioPage;
