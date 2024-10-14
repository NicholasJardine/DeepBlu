'use client'
import Lottie from "lottie-react";
import animationData from '@/assets/rocket.json'
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import MyLottie from "@/components/rocketlottie";
import CheckIcon from '@/assets/check.svg'
import {twMerge} from 'tailwind-merge'
import {motion} from 'framer-motion'

import Image from 'next/image';

const pricingTiers = [
  {
    title: "Basic",
    monthlyPrice: 12500,
    buttonText: "View prices on credit",
    popular: false,
    inverse: false,
    features: [
      "Basic cross platform APP (Android and iOS)",
      "Static content (content remains unchanged)",
      "Basic login functionality",
      "Basic support",
    ],
  },
  {
    title: "Middle",
    monthlyPrice: 30000,
    buttonText: "View prices on credit",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 36000,
    buttonText: "View prices on credit",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];


export default function Pricing() {
  return (
    <> 
      <Header />

        <section className="py-24 bg-white">
    <div className="container">
      <div className="section-heading">
      <h2 className="section-title">Pricing</h2>
      <p className="section-description mt-5">Affordable always. Choose from packages at varying prices for advanced features and great value. Please note all packages are available on credit. Businesses of all sizes welcome 
      <span style={{ display: 'inline-flex', verticalAlign: 'middle', marginLeft: '5px' }}><Image src={'/smiley.svg'} width={24} height={24} className="ml-2" alt="smiley" />
      </span>
      </p>
      </div>
      <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
      {pricingTiers.map(({title, monthlyPrice, buttonText, popular,inverse, features})=>(
              <div className={twMerge('card', inverse === true && 'border-black bg-black text-white')}>
              <div className='flex justify-between'>
              <h3 className={twMerge('text-lg font-bold text-black/50', inverse === true && 'text-white/60')}>{title}</h3>
              {popular ===true && (
              <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                <motion.span
                animate={{
                  backgroundPositionX:"100%"
                }}
                transition={{
                  duration:1,
                  repeat:Infinity,
                  ease: 'linear',
                  repeatType: 'loop'
                }}
                className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium'>Popular</motion.span>
              </div>
              )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className='text-4xl font-bold tracking-tighter leading-none'>R {monthlyPrice}</span>
                {/* <span className='tracking-tight font-bold text-black/50'>/month</span> */}
              </div>
              <button className={twMerge('btn btn-primary w-full mt-[30px]', inverse === true && 'bg-white text-black')}>{buttonText}</button>
              <ul className='flex flex-col gap-5 mt-8'>
                {features.map((feature)=> (
                  <li className='text-sm flex items-center gap-4'> <CheckIcon className='h-6 w-6'/> <span>{feature}</span></li>
                ))}
              </ul>
            </div>
      ))}

    </div>
    </div>

  </section>

      <Footer />
    </>
  );
}
