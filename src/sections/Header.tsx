// import ArrowRight from "@/assets/arrow-right.svg"
// import Logo from '@/assets/BlueWaveLogo.png'
// import MenuIcon from '@/assets/menu.svg'
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// import Image from "next/image";
// export const Header = () => {
//   return (<header className="sticky top-0 backdrop-blur-sm z-20">

// <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
//   <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
//     <div className="inline-flex gap-1 items-center">
//     <p>View our development process</p>
//     <ArrowRight className='h-4 w-4 inline-flex justify-center items-center'/>
//     </div>
//   </div>
//   <div className="py-5">
//     <div className="container">

//     <div className="flex items-center justify-between">
//     <Image src={Logo} alt = 'logo' height={116} width={116}/>
//     <nav hidden className="md:flex gap-6 text-black/60 items-center">
//     <Link href="/">Home</Link>
//     <Link href="/about">About Us</Link>
      
//       <a href="#">Services</a>
//       <Link href="/contact">Contact </Link>
//       <a href="#">Portfolio</a>
//       <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">View Pricing</button>


//     </nav>
//     <MenuIcon className= "h-5 w-5 md:hidden"/>
//     </div>
//     </div>


//   </div>
//   </header> );
// };

// "use client"
// import ArrowRight from "@/assets/arrow-right.svg";
// import Logo from '@/assets/BlueWaveLogo.png';
// import MenuIcon from '@/assets/menu.svg';
// import Link from 'next/link';
// import Image from "next/image";
// import React from "react";
// import { useRouter } from "next/navigation";

// export const Header = () => {
//   const router = useRouter();
//   const handlePriceingClick = () => {
//     router.push('/pricing')

//   }

//   const handleDevProcessClick = () => {
//     router.push('/devprocess')

//   }
//   return (
//     <header className="sticky top-0 backdrop-blur-sm z-20">
//       <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
//         <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
//         <div className="inline-flex gap-1 items-center">
//           <p onClick={handleDevProcessClick}>View our development process</p>
//           <ArrowRight onClick={handleDevProcessClick} className='h-4 w-4 inline-flex justify-center items-center'/>
//         </div>
//       </div>
//       <div className="py-5">
//         <div className="container">
//           <div className="flex items-center justify-between">
//             <Image src={Logo} alt='logo' height={116} width={116}/>
//             <nav className="hidden md:flex gap-6 text-black/60 items-center">
//               <Link href="/" className="hover:text-black hover:border-b-4 hover:border-blue-500 transition-all">Home</Link>
//               <Link href="/about" className="hover:text-black hover:border-b-4 hover:border-blue-500 transition-all">About Us</Link>
//               <a href="#" className="hover:text-black hover:border-b-4 hover:border-blue-500 transition-all">Services</a>
//               <Link href="/contact" className="hover:text-black hover:border-b-4 hover:border-blue-500 transition-all">Contact</Link>
//               <a href="#" className="hover:text-black hover:border-b-4 hover:border-blue-500 transition-all">Portfolio</a>
//               <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight" onClick={handlePriceingClick}>View Pricing</button>
//             </nav>
//             <MenuIcon className="h-5 w-5 md:hidden"/>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };


"use client"
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from '@/assets/BlueWaveLogo.png';
import MenuIcon from '@/assets/menu.svg';
import Link from 'next/link';
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onServicesClick: () => void;  // Add the prop to handle the Services click
}

export const Header: React.FC<HeaderProps> = ({ onServicesClick }) => {
  const router = useRouter();

  const handlePricingClick = () => {
    router.push('/pricing');
  };

  const handleDevProcessClick = () => {
    router.push('/devprocess');
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p onClick={handleDevProcessClick}>View our development process</p>
          <ArrowRight onClick={handleDevProcessClick} className='h-4 w-4 inline-flex justify-center items-center'/>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt='logo' height={116} width={116} />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="/" className="hover:text-black hover:border-b-4 hover:border-blue-500 transition-all">Home</Link>
              <Link href="/about" className="hover:text-black hover:border-b-4 hover:border-blue-500 transition-all">About Us</Link>
              <a href="#" onClick={onServicesClick} className="hover:text-black hover:border-b-4 hover:border-blue-500 transition-all">Services</a> {/* Added onClick for Services */}
              <Link href="/contact" className="hover:text-black hover:border-b-4 hover:border-blue-500 transition-all">Contact</Link>
              <a href="#" className="hover:text-black hover:border-b-4 hover:border-blue-500 transition-all">Portfolio</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight" onClick={handlePricingClick}>View Pricing</button>
            </nav>
            <MenuIcon className="h-5 w-5 md:hidden"/>
          </div>
        </div>
      </div>
    </header>
  );
};
