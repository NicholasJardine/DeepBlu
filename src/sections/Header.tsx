import ArrowRight from "@/assets/arrow-right.svg"
import Logo from '@/assets/BlueWaveLogo.png'
import MenuIcon from '@/assets/menu.svg'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Image from "next/image";
export const Header = () => {
  return (<header className="sticky top-0 backdrop-blur-sm z-20">

<div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
  <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
    <div className="inline-flex gap-1 items-center">
    <p>View our development process</p>
    <ArrowRight className='h-4 w-4 inline-flex justify-center items-center'/>
    </div>
  </div>
  <div className="py-5">
    <div className="container">

    <div className="flex items-center justify-between">
    <Image src={Logo} alt = 'logo' height={116} width={116}/>
    <nav hidden className="md:flex gap-6 text-black/60 items-center">
    <Link href="/"> <a>Home</a></Link>
      <Link href="/about">About Us</Link>
      
      <a href="#">Services</a>
      <a href="#">Contact</a>
      <a href="#">Portfolio</a>
      <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">View Pricing</button>


    </nav>
    <MenuIcon className= "h-5 w-5 md:hidden"/>
    </div>
    </div>


  </div>
  </header> );
};
