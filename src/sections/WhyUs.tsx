"use client";
import ArrowIcon from '@/assets/arrow-right.svg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LottieAnimation from '@/components/waves';

export const WhyUs = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="mt-4 pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Why BluWave?
            </h1>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start gap-3">
                <Image src="/cost-effective.svg" alt="Cost Icon" width={40} height={40} />
                <div>
                  <strong>Cost Effective:</strong> Our lean team structure ensures overhead costs are kept to a minimum. You get high-quality development without the bloated expenses that come with big corporate firms.
                </div>
              </li>
              {/* <li className="flex items-start gap-3">
                <Image src="/icons/experience.svg" alt="Experience Icon" width={24} height={24} />
                <div>
                  <strong>Experience:</strong> We started as a small consulting team, coding our way out of a garage two decades ago. Though the names and places have changed, our passion remains as strong as the day we set out to build transformative software solutions.
                </div>
              </li> */}
              {/* <li className="flex items-start gap-3">
                <Image src="/icons/agile.svg" alt="Agile Icon" width={24} height={24} />
                <div>
                  <strong>Agile Approach:</strong> You may not have all the answers now, and that’s okay. Our agile approach means you get a Proof of Concept (POC) early on, giving you the freedom to shape your vision as you see it evolve.
                </div>
              </li> */}
              <li className="flex items-start gap-3">
                <Image src="/transparency.svg" alt="Transparency Icon" width={24} height={24} />
                <div>
                  <strong>Transparency:</strong> We believe in clear communication and straightforward pricing. No hidden fees, no surprises—just honest collaboration, so you know exactly what you’re getting and when.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image src="/innovation.svg" alt="Innovation Icon" width={40} height={40} />
                <div>
                  <strong>Innovation:</strong> We don’t just build software; we create solutions. Our team thrives on challenging the status quo, using the latest technology to turn your ideas into cutting-edge systems.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image src="/flexible.svg" alt="Flexibility Icon" width={40} height={40} />
                <div>
                  <strong>Flexibility:</strong> Unlike larger firms, we adapt to your needs and pivot when necessary. Whether it’s scaling up your app or making last-minute changes, we’re here to make sure your project stays on track and meets your goals.
                </div>
              </li>
            </ul>
            {/* <div className="flex gap-4 items-center mt-10">
              <button className="btn btn-primary">Pricing</button>
              <button className="btn btn-text flex items-center gap-1">
                <span>Learn More</span> <ArrowIcon className="h-5 w-5" />
              </button>
            </div> */}
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center items-center relative">
            <motion.div style={{ translateY }}>
              <LottieAnimation />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
