// "use client";
// import ArrowIcon from '@/assets/arrow-right.svg'

// import Lottie from "lottie-react";
// import LottieAnimation from './waves';
// // import animationData from '@/assets/waves.json'
// import animationData from '@/assets/waves.json'

// const LottieAnimations = () => {
  
//   return (
//     <section style={sectionStyle} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-x-hidden'>
//               <div className='md:w-[478px] md:mr-16'> 
//         <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-8">Lead the tide with BluWave</h1>
//         <p className="text-xl text-[#010D3E] tracking-tight mt-6">In an ocean of technology, let your business stand out. We craft innovative solutions that set you apart from the rest.</p>
//         <div className="flex gap-1 items-center mt-[30px]">
//           <button className="btn btn-primary">Our Services</button>
//           <button className="btn btn-text gap-1"><span>Learn More</span> <ArrowIcon className='h-5 w-5'/></button>
//         </div>
//         </div>
//         {/* <LottieAnimation/> */}
//       <Lottie 
//         animationData={animationData} 
//         loop 
//         style={lottieStyle}
//       />
//     </section>
//   );
// };

// const sectionStyle: React.CSSProperties = {
//   width: "100%",
//   height: "100vh",
//   display: "flex",
//   alignItems: "flex-start",
//   justifyContent: "center",
//   overflow: "hidden",
//   backgroundColor: "black",
//   position: "relative",
// };

// const lottieStyle: React.CSSProperties = {
//   width: "100vw", // Explicitly set to viewport width
//   height: "100vh", // Explicitly set to viewport height
//   position: "absolute",
//   transform: "scale(1.75)",
//   transformOrigin: "center", 
//   objectFit: "cover", // Ensure the animation scales to cover the entire area
//   overflow: "hidden",
// };

// export default LottieAnimations;



"use client";
import ArrowIcon from '@/assets/arrow-right.svg';
import Lottie from "lottie-react";
import animationData from '@/assets/waves.json';

const LottieAnimations = () => {
  return (
    <section
      style={sectionStyle}
      className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-hidden"
    >
      {/* Text and Buttons */}
      <div
        className="absolute z-10 md:w-[478px] text-center md:text-left px-6 md:px-0"
        style={contentStyle}
      >
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-8"
          style={{ lineHeight: "1.2", marginBottom: "1.5rem" }}
        >
          Lead the tide with BluWave
        </h1>
        <p
          className="text-xl md:text-xl text-[#010D3E] tracking-tight"
          style={{
            lineHeight: "1.6",
            maxWidth: "700px", // Widened paragraph for desktop
            marginBottom: "2rem", // Spacing below paragraph
          }}
        >
          In an ocean of technology, let your business stand out. We craft innovative solutions that set you apart from the rest.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-1 items-center">
          <button className="btn btn-primary">Our Services</button>
          <button className="btn btn-text flex items-center gap-1">
            <span>Learn More</span> <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Full-Screen Lottie Animation */}
      <Lottie
        animationData={animationData}
        loop
        style={lottieStyle}
        className="lg:scale-[1.75] md:scale-[1.5] sm:scale-[2.15] scale-[2.3]" // Add extra scaling for very small screens
      />
    </section>
  );
};

const sectionStyle: React.CSSProperties = {
  width: "100%",
  height: "100vh",
  position: "relative",
  display: "flex",
  justifyContent: "center", // Centers horizontally
  alignItems: "flex-start", // Aligns content at the top
};

const contentStyle: React.CSSProperties = {
  position: "relative",
  top: "5%", // Keeps content positioned well
};

const lottieStyle: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
  position: "absolute",
  objectFit: "cover",
  transformOrigin: "center",
};

export default LottieAnimations;
