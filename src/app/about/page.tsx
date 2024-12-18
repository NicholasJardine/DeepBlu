// import { Header } from "@/sections/Header";
// import { Footer } from "@/sections/Footer";

// export default function About() {
//   return (
//     <> 
//       <Header />
//       <div className="container mx-auto px-4 py-10">
//         <h1 className="text-4xl font-bold mb-6 text-blue-900">About Us</h1>
//         <p className="mb-4 text-lg">
//           At <strong>BluWave</strong>, we believe that custom software should be accessible and affordable for everyone, especially in the South African market. Our dream is to empower businesses of all sizes with innovative, tailor-made software solutions that don't break the bank.
//         </p>
//         <p className="mb-4 text-lg">
//           <strong>Founded recently</strong>, BluWave is a startup with a big vision—to reshape the software development landscape by offering high-quality, customized software at prices that align with the realities of South African businesses. We understand the challenges faced by local companies, and we're committed to creating solutions that meet their unique needs.
//         </p>
//         <p className="mb-4 text-lg">
//           Our small but dynamic team brings together a broad depth of knowledge and experience in building and deploying software solutions across various industries. From web and mobile apps to cloud migrations and data analytics, our experts have been at the forefront of technology, delivering impactful and efficient solutions.
//         </p>
//         <p className="text-lg">
//           We pride ourselves on our <strong>agile approach</strong>—working closely with our clients to refine their ideas, adapt as we go, and ultimately deliver systems that exceed expectations. At BluWave, your business goals become our mission, and we are dedicated to seeing you succeed.
//         </p>
//       </div>
//       <Footer />
//     </>
//   );
// }


// 'use client'
// import Lottie from "lottie-react";
// import animationData from '@/assets/rocket.json'




// import { useRef } from "react";
// import { Header } from "@/sections/Header";
// import { Footer } from "@/sections/Footer";
// import MyLottie from "@/components/rocketlottie";

// export default function About() {
//   const servicesRef = useRef<HTMLDivElement>(null);  // Create the servicesRef

//   const handleScrollToServices = () => {
//     if (servicesRef.current) {
//       servicesRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <> 
//       <Header onServicesClick={handleScrollToServices} />
//       <div className="container mx-auto px-6 py-8   mt-4">
//         <h1 className="text-5xl font-extrabold mb-4 text-blue-900 text-center">
//           About Us
//         </h1> <div className="flex">
//         <div className="p-8 max-w-[60%]">
//           <p className="mb-6 text-lg leading-relaxed text-gray-700">
//             At <strong className="text-blue-800">BluWave</strong>, we believe that custom software should be accessible and affordable for everyone, especially in the South African market. Our dream is to empower businesses of all sizes with innovative, tailor-made software solutions that don't break the bank.
//           </p>
//           <p className="mb-6 text-lg leading-relaxed text-gray-700">
//             <strong className="text-blue-800">Founded recently</strong>, BluWave is a Johannesburg based startup with a big vision—to reshape the software development landscape by offering high-quality, customized software at prices that align with the realities of South African businesses. We understand the challenges faced by local companies, and we're committed to creating solutions that meet their unique needs.
//           </p>
//           <p className="mb-6 text-lg leading-relaxed text-gray-700">
//             Our small but dynamic team brings together a broad depth of knowledge and experience in building and deploying software solutions across various industries. From web and mobile apps to cloud migrations and data analytics, our experts have been at the forefront of technology, delivering impactful and efficient solutions.
//           </p>
//           <p className="text-lg leading-relaxed text-gray-700">
//             We pride ourselves on our <strong className="text-blue-800">agile approach</strong>—working closely with our clients to refine their ideas, adapt as we go, and ultimately deliver systems that exceed expectations. At BluWave, your business goals become our mission, and we are dedicated to seeing you succeed.
//           </p>
//         </div>
//         <div style={{ width: 500, height: 500 }}>
//             <MyLottie/>
//         </div>
//         </div>

//       </div>
//       <Footer />
//     </>
//   );
// }



// 'use client';
// import { useRef } from "react";
// import { Header } from "@/sections/Header";
// import { Footer } from "@/sections/Footer";
// import MyLottie from "@/components/rocketlottie";

// export default function About() {
//   const servicesRef = useRef<HTMLDivElement>(null);

//   const handleScrollToServices = () => {
//     if (servicesRef.current) {
//       servicesRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       <Header onServicesClick={handleScrollToServices} />
//       <div className="container mx-auto px-6 py-8 mt-4">
//         <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-blue-900 text-center">
//           About Us
//         </h1>
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//           {/* Text Section */}
//           <div className="md:w-[60%] text-center md:text-left p-4 md:p-8">
//             <p className="mb-6 text-lg leading-relaxed text-gray-700">
//               At <strong className="text-blue-800">BluWave</strong>, we believe that custom software should be accessible and affordable for everyone, especially in the South African market. Our dream is to empower businesses of all sizes with innovative, tailor-made software solutions that don't break the bank.
//             </p>
//             <p className="mb-6 text-lg leading-relaxed text-gray-700">
//               <strong className="text-blue-800">Founded recently</strong>, BluWave is a Johannesburg-based startup with a big vision—to reshape the software development landscape by offering high-quality, customized software at prices that align with the realities of South African businesses. We understand the challenges faced by local companies, and we're committed to creating solutions that meet their unique needs.
//             </p>
//             <p className="mb-6 text-lg leading-relaxed text-gray-700">
//               Our small but dynamic team brings together a broad depth of knowledge and experience in building and deploying software solutions across various industries. From web and mobile apps to cloud migrations and data analytics, our experts have been at the forefront of technology, delivering impactful and efficient solutions.
//             </p>
//             <p className="text-lg leading-relaxed text-gray-700">
//               We pride ourselves on our <strong className="text-blue-800">agile approach</strong>—working closely with our clients to refine their ideas, adapt as we go, and ultimately deliver systems that exceed expectations. At BluWave, your business goals become our mission, and we are dedicated to seeing you succeed.
//             </p>
//           </div>
//           {/* Lottie Animation Section */}
//           <div className="flex justify-center items-center w-full md:w-[40%]">
//             <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
//               <MyLottie />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }



'use client';
import { useRef } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import MyLottie from "@/components/rocketlottie";

export default function About() {
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleScrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header onServicesClick={handleScrollToServices} />
      <div className="container mx-auto px-6 py-8 mt-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-blue-900 text-center">
          About Us
        </h1>

        {/* Lottie Animation for Mobile */}
        <div className="block md:hidden mb-8">
          <div className="flex justify-center items-center">
            <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]">
              <MyLottie />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text Section */}
          <div className="md:w-[60%] text-left p-4 md:p-8">
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
             At <strong className="text-blue-800">BluWave</strong>{`, we believe that custom software should be accessible and affordable for everyone, especially in the South African market. Our dream is to empower businesses of all sizes with innovative, tailor-made software solutions that don't break the bank.`}
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              <strong className="text-blue-800">Founded recently</strong>{`, BluWave is a Johannesburg-based startup with a big vision—to reshape the software development landscape by offering high-quality, customized software at prices that align with the realities of South African businesses. We understand the challenges faced by local companies, and we're committed to creating solutions that meet their unique needs.`}
            </p>
            {/* <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Our small but dynamic team brings together a broad depth of knowledge and experience in building and deploying software solutions across various industries. From web and mobile apps to cloud migrations and data analytics, our experts have been at the forefront of technology, delivering impactful and efficient solutions.
            </p> */}
            <p className="text-lg leading-relaxed text-gray-700">
              We pride ourselves on our <strong className="text-blue-800">agile approach</strong>—working closely with our clients to refine their ideas, adapt as we go, and ultimately deliver systems that exceed expectations. At BluWave, your business goals become our mission, and we are dedicated to seeing you succeed.
            </p>
          </div>

          {/* Lottie Animation for Larger Screens */}
          <div className="hidden md:flex justify-center items-center w-full md:w-[40%]">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
              <MyLottie />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
