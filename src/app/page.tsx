import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import LottieAnimations from "@/components/wavesfull";
export default function Home() {
  return( 
  <> 
        <Header/>
        <LottieAnimations/>
        <Hero/>
        <LogoTicker/>
        <ProductShowcase/>
        <Pricing/>
        <Testimonials/>
        <CallToAction/>
        <Footer/>
  </> );
}
