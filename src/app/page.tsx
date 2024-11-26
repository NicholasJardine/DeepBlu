// import { Header } from "@/sections/Header";
// import { Hero } from "@/sections/Hero";
// import { LogoTicker } from "@/sections/LogoTicker";
// import { ProductShowcase } from "@/sections/ProductShowcase";
// import { Pricing } from "@/sections/Pricing";
// import { Testimonials } from "@/sections/Testimonials";
// import { CallToAction } from "@/sections/CallToAction";
// import { Footer } from "@/sections/Footer";
// import LottieAnimations from "@/components/wavesfull";
// import { WhyUs } from "@/sections/WhyUs";
// import InvertedWaves from "@/components/wavesinverted";
// export default function Home() {
//   return( 
//   <> 
//         <Header/>
//         <LottieAnimations/>
//         {/* <InvertedWaves/> */}

//         <Hero/>
//         <WhyUs/>
//         {/* <LogoTicker/>
//         <ProductShowcase/>
//         <Pricing/>
//         <Testimonials/>
//         <CallToAction/> */}
//         <Footer/>
//   </> );
// }



// import { Header } from "@/sections/Header";
// import { Hero } from "@/sections/Hero";
// import { LogoTicker } from "@/sections/LogoTicker";
// import { ProductShowcase } from "@/sections/ProductShowcase";
// import { Pricing } from "@/sections/Pricing";
// import { Testimonials } from "@/sections/Testimonials";
// import { CallToAction } from "@/sections/CallToAction";
// import { Footer } from "@/sections/Footer";
// import LottieAnimations from "@/components/wavesfull";
// import { WhyUs } from "@/sections/WhyUs";
// import InvertedWaves from "@/components/wavesinverted";
// import { useRef } from "react";

// export default function Home() {
//   const servicesRef = useRef<HTMLDivElement>(null);

//   const scrollToServices = () => {
//     if (servicesRef.current) {
//       servicesRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <Header onServicesClick={scrollToServices} />
//       <LottieAnimations />
//       {/* <InvertedWaves/> */}

//       <Hero servicesRef={servicesRef} />
//       <WhyUs />
//       {/* <LogoTicker/>
//       <ProductShowcase/>
//       <Pricing/>
//       <Testimonials/>
//       <CallToAction/> */}
//       <Footer />
//     </>
//   );
// }


// "use client"
// import { Header } from "@/sections/Header";
// import { Hero } from "@/sections/Hero";
// import { Footer } from "@/sections/Footer";
// import LottieAnimations from "@/components/wavesfull";
// import { useRef } from "react";
// import { WhyUs } from "@/sections/WhyUs";

// export default function Home() {
//   const servicesRef = useRef<HTMLDivElement>(null);  // Create the servicesRef

//   const handleScrollToServices = () => {
//     if (servicesRef.current) {
//       servicesRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return( 
//     <> 
//       {/* Pass handleScrollToServices to the Header and servicesRef to Hero */}
//       <Header onServicesClick={handleScrollToServices} />
//       <LottieAnimations onServicesClick={handleScrollToServices} />
//       <Hero servicesRef={servicesRef} />  {/* Pass the servicesRef here */}
//       <WhyUs />

//       <Footer />
//     </> 
//   );
// }


// "use client"
// import { Header } from "@/sections/Header";
// import { Hero } from "@/sections/Hero";
// import { Footer } from "@/sections/Footer";
// import LottieAnimations from "@/components/wavesfull";
// import { useRef } from "react";
// import { WhyUs } from "@/sections/WhyUs";

// export default function Home() {
//   const servicesRef = useRef<HTMLDivElement>(null);  // Create the servicesRef

//   const handleScrollToServices = () => {
//     if (servicesRef.current) {
//       servicesRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return( 
//     <> 
//       {/* Pass handleScrollToServices to the Header and servicesRef to Hero */}
//       <Header onServicesClick={handleScrollToServices} />
//       <LottieAnimations onServicesClick={handleScrollToServices}/>
//       <Hero servicesRef={servicesRef} />  {/* Pass the servicesRef here */}
//       <WhyUs />
//       <Footer />
//     </> 
//   );
// }



"use client";

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import LottieAnimations from "@/components/wavesfull";
import { useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { WhyUs } from "@/sections/WhyUs";

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null); // Create the servicesRef
  const searchParams = useSearchParams(); // Access query parameters

  const handleScrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Automatically scroll to the services section if the URL contains `scrollTo=services`
  useEffect(() => {
    if (searchParams.get("scrollTo") === "services") {
      handleScrollToServices();
    }
  }, [searchParams]);

  return (
    <>
      {/* Pass handleScrollToServices to the Header and LottieAnimations */}
      <Header onServicesClick={handleScrollToServices} />
      <LottieAnimations onServicesClick={handleScrollToServices} />
      <Hero servicesRef={servicesRef} /> {/* Pass the servicesRef here */}
      <WhyUs />
      <Footer />
    </>
  );
}
