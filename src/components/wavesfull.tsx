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



// "use client";
// import ArrowIcon from '@/assets/arrow-right.svg';
// import Lottie from "lottie-react";
// import animationData from '@/assets/waves.json';

// const LottieAnimations = () => {
//   return (
//     <section
//       style={sectionStyle}
//       className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-hidden"
//     >
//       {/* Text and Buttons */}
//       <div
//         className="absolute z-10 md:w-[478px] text-center md:text-left px-6 md:px-0"
//         style={contentStyle}
//       >
//         <h1
//           className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-8"
//           style={{ lineHeight: "1.2", marginBottom: "1.5rem" }}
//         >
//           Lead the tide with BluWave
//         </h1>
//         <p
//           className="text-xl md:text-xl text-[#010D3E] tracking-tight"
//           style={{
//             lineHeight: "1.6",
//             maxWidth: "700px", // Widened paragraph for desktop
//             marginBottom: "2rem", // Spacing below paragraph
//           }}
//         >
//           In an ocean of technology, let your business stand out. We craft innovative solutions that set you apart from the rest.
//         </p>
//         <div className="flex flex-wrap justify-center md:justify-start gap-1 items-center">
//           <button className="btn btn-primary">Our Services</button>
//           <button className="btn btn-text flex items-center gap-1">
//             <span>Learn More</span> <ArrowIcon className="h-5 w-5" />
//           </button>
//         </div>
//       </div>

//       {/* Full-Screen Lottie Animation */}
//       <Lottie
//         animationData={animationData}
//         loop
//         style={lottieStyle}
//         className="lg:scale-[1.75] md:scale-[1.5] sm:scale-[2.15] scale-[2.3]" // Add extra scaling for very small screens
//       />
//     </section>
//   );
// };

// const sectionStyle: React.CSSProperties = {
//   width: "100%",
//   height: "100vh",
//   position: "relative",
//   display: "flex",
//   justifyContent: "center", // Centers horizontally
//   alignItems: "flex-start", // Aligns content at the top
// };

// const contentStyle: React.CSSProperties = {
//   position: "relative",
//   top: "5%", // Keeps content positioned well
// };

// const lottieStyle: React.CSSProperties = {
//   width: "100vw",
//   height: "100vh",
//   position: "absolute",
//   objectFit: "cover",
//   transformOrigin: "center",
// };

// export default LottieAnimations;




// "use client";
// import ArrowIcon from '@/assets/arrow-right.svg';
// import Lottie from "lottie-react";
// import animationData from '@/assets/waves.json';

// const LottieAnimations = () => {
//   return (
//     <section
//       style={sectionStyle}
//       className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-hidden"
//     >
//       {/* Text and Buttons */}
//       <div
//         className="absolute z-10 md:w-[478px] text-center md:text-left px-6 md:px-0"
//         style={contentStyle}
//       >
//         <h1
//           className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-8"
//           style={{ lineHeight: "1.2", marginBottom: "1.5rem" }}
//         >
//           Lead the tide with BluWave
//         </h1>
//         <p
//           className="text-xl md:text-xl text-[#010D3E] tracking-tight"
//           style={{
//             lineHeight: "1.6",
//             maxWidth: "700px", // Widened paragraph for desktop
//             marginBottom: "2rem", // Spacing below paragraph
//           }}
//         >
//           In an ocean of technology, let your business stand out. We craft innovative solutions that set you apart from the rest.
//         </p>
//         <div className="flex flex-wrap justify-center md:justify-start gap-1 items-center">
//           <button className="btn btn-primary">Our Services</button>
//           <button className="btn btn-text flex items-center gap-1">
//             <span>Learn More</span> <ArrowIcon className="h-5 w-5" />
//           </button>
//         </div>
//       </div>

//       {/* Full-Screen Lottie Animation */}
//       <Lottie
//         animationData={animationData}
//         loop
//         style={lottieStyle}
//         className="absolute inset-0 scale-[2.3] sm:scale-[2.15] md:scale-[1.5] lg:scale-[1.75]"
//       />
//     </section>
//   );
// };

// const sectionStyle: React.CSSProperties = {
//   width: "100%",
//   height: "100vh",
//   position: "relative",
//   display: "flex",
//   justifyContent: "center", // Centers horizontally
//   alignItems: "flex-start", // Aligns content at the top
// };

// const contentStyle: React.CSSProperties = {
//   position: "relative",
//   top: "5%", // Keeps content positioned well
//   zIndex: 10, // Ensure the text appears on top
// };

// const lottieStyle: React.CSSProperties = {
//   width: "100%",
//   height: "100%", // Ensure the animation covers the entire height
//   position: "absolute",
//   top: 0,
//   left: 0,
//   objectFit: "cover",
//   zIndex: 0, // Ensure the animation is behind the content
// };

// export default LottieAnimations;


// Works for mobile but breaks desktop
// "use client";
// import ArrowIcon from '@/assets/arrow-right.svg';
// import Lottie from "lottie-react";
// import animationData from '@/assets/waves.json';

// const LottieAnimations = () => {
//   return (
//     <section
//       style={sectionStyle}
//       className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-hidden"
//     >
//       {/* Text and Buttons */}
//       <div
//         className="absolute z-10 md:w-[478px] text-center md:text-left px-6 md:px-0"
//         style={contentStyle}
//       >
//         <h1
//           className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-8"
//           style={{ lineHeight: "1.2", marginBottom: "1.5rem" }}
//         >
//           Lead the tide with BluWave
//         </h1>
//         <p
//           className="text-xl md:text-xl text-[#010D3E] tracking-tight"
//           style={{
//             lineHeight: "1.6",
//             maxWidth: "700px", // Widened paragraph for desktop
//             marginBottom: "2rem", // Spacing below paragraph
//           }}
//         >
//           In an ocean of technology, let your business stand out. We craft innovative solutions that set you apart from the rest.
//         </p>
//         <div className="flex flex-wrap justify-center md:justify-start gap-1 items-center">
//           <button className="btn btn-primary">Our Services</button>
//           <button className="btn btn-text flex items-center gap-1">
//             <span>Learn More</span> <ArrowIcon className="h-5 w-5" />
//           </button>
//         </div>
//       </div>

//       {/* Full-Screen Lottie Animation */}
//       <Lottie
//         animationData={animationData}
//         loop
//         style={lottieStyle}
//         className="absolute inset-0"
//       />
//     </section>
//   );
// };

// const sectionStyle: React.CSSProperties = {
//   width: "100%",
//   height: "100vh",
//   position: "relative",
//   display: "flex",
//   justifyContent: "center", // Centers horizontally
//   alignItems: "flex-start", // Aligns content at the top
// };

// const contentStyle: React.CSSProperties = {
//   position: "relative",
//   top: "5%", // Keeps content positioned well
//   zIndex: 10, // Ensure the text appears on top
// };

// const lottieStyle: React.CSSProperties = {
//   width: "100vw",
//   height: "100vh", // Always cover the viewport height
//   minWidth: "800px", // Minimum width to ensure coverage on small devices
//   minHeight: "800px", // Minimum height to ensure coverage on small devices
//   position: "absolute",
//   top: 0,
//   left: 0,
//   objectFit: "cover",
//   transformOrigin: "center",
//   zIndex: 0, // Ensure the animation is behind the content
// };

// export default LottieAnimations;



// "use client";
// import React, { useEffect, useState } from "react";
// import ArrowIcon from "@/assets/arrow-right.svg";
// import Lottie from "lottie-react";
// import animationData from "@/assets/waves.json";

// const LottieAnimations = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   // Check screen size on mount
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize); // Listen for resize events

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <section
//       style={sectionStyle}
//       className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-hidden"
//     >
//       {/* Text and Buttons */}
//       <div
//         className="absolute z-10 md:w-[478px] text-center md:text-left px-6 md:px-0"
//         style={contentStyle}
//       >
//         <h1
//           className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-8"
//           style={{ lineHeight: "1.2", marginBottom: "1.5rem" }}
//         >
//           Lead the tide with BluWave
//         </h1>
//         <p
//           className="text-xl md:text-xl text-[#010D3E] tracking-tight"
//           style={{
//             lineHeight: "1.6",
//             maxWidth: "700px", // Widened paragraph for desktop
//             marginBottom: "2rem", // Spacing below paragraph
//           }}
//         >
//           In an ocean of technology, let your business stand out. We craft innovative solutions that set you apart from the rest.
//         </p>
//         <div className="flex flex-wrap justify-center md:justify-start gap-1 items-center">
//           <button className="btn btn-primary">Our Services</button>
//           <button className="btn btn-text flex items-center gap-1">
//             <span>Learn More</span> <ArrowIcon className="h-5 w-5" />
//           </button>
//         </div>
//       </div>

//       {/* Full-Screen Lottie Animation */}
//       <Lottie
//         animationData={animationData}
//         loop
//         style={isMobile ? mobileLottieStyle : desktopLottieStyle} // Conditional rendering
//         className="absolute inset-0"
//       />
//     </section>
//   );
// };

// const sectionStyle: React.CSSProperties = {
//   width: "100%",
//   height: "95vh",
//   position: "relative",
//   display: "flex",
//   justifyContent: "center", // Centers horizontally
//   alignItems: "flex-start", // Aligns content at the top
// };

// const contentStyle: React.CSSProperties = {
//   position: "relative",
//   top: "5%", // Keeps content positioned well
//   zIndex: 10, // Ensure the text appears on top
// };

// const desktopLottieStyle: React.CSSProperties = {
//   width: "100%",
//   height: "100%", // Ensure the animation covers the entire height
//   position: "absolute",
//   top: 0,
//   left: 0,
//   objectFit: "cover",
//   transform: "scale(1.75)", // Desktop-specific scaling
//   transformOrigin: "center",
//   zIndex: 0, // Keeps the animation behind the content
// };

// const mobileLottieStyle: React.CSSProperties = {
//   width: "100vw", // Ensures full-width coverage
//   height: "100vh", // Always cover the viewport height
//   minWidth: "800px", // Minimum width to ensure coverage on small devices
//   minHeight: "800px", // Minimum height to ensure coverage on small devices
//   position: "absolute",
//   top: 0,
//   left: 0,
//   objectFit: "cover",
//   transformOrigin: "center",
//   zIndex: 0, // Keeps the animation behind the content
// };

// export default LottieAnimations;



// "use client";
// import React, { useEffect, useState } from "react";
// import ArrowIcon from "@/assets/arrow-right.svg";
// import Lottie from "lottie-react";
// import animationData from "@/assets/waves.json";
// import { useRouter } from "next/navigation";
// const LottieAnimations = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isGlowing, setIsGlowing] = useState(false);

//   const router = useRouter();

//   const handleAboutClick = () => {
//     setIsGlowing(true); // Start the glow effect
//     setTimeout(() => setIsGlowing(false), 10000); // Remove the glow effect after 1 second
//     router.push("/about");
//   };


//   // const handleButtonClick = () => {

//   // };


//   // Check screen size on mount and on resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize); // Listen for resize events

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const sectionDynamicStyle: React.CSSProperties = {
//     ...sectionStyle,
//     height: isMobile ? "90vh" : "100vh", // Adjust height based on screen size
//   };

//   return (
//     <section
//       style={sectionDynamicStyle}
//       className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-hidden"
//     >
//       {/* Text and Buttons */}
//       <div
//         className="absolute z-10 md:w-[478px] text-center md:text-left px-6 md:px-0"
//         style={contentStyle}
//       >
//         <h1
//           className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-8"
//           style={{ lineHeight: "1.2", marginBottom: "1.5rem" }}
//         >
//           Lead the tide with BluWave
//         </h1>
//         <p
//           className="text-xl md:text-xl text-[#010D3E] tracking-tight"
//           style={{
//             lineHeight: "1.6",
//             maxWidth: "700px", // Widened paragraph for desktop
//             marginBottom: "2rem", // Spacing below paragraph
//           }}
//         >
//           In an ocean of technology, let your business stand out. We craft innovative solutions that set you apart from the rest.
//         </p>
//         <div className="flex flex-wrap justify-center md:justify-start gap-1 items-center">
//           <button className="btn btn-primary">Our Services</button>
//           <button onClick={handleAboutClick} className="btn btn-text flex items-center gap-1">
//             <span>Learn More</span> <ArrowIcon className="h-5 w-5" />
//           </button>
//         </div>
//       </div>

//       {/* Full-Screen Lottie Animation */}
//       <Lottie
//         animationData={animationData}
//         loop
//         style={isMobile ? mobileLottieStyle : desktopLottieStyle} // Conditional rendering
//         className="absolute inset-0"
//       />
//     </section>
//   );
// };

// const sectionStyle: React.CSSProperties = {
//   width: "100%",
//   position: "relative",
//   display: "flex",
//   justifyContent: "center", // Centers horizontally
//   alignItems: "flex-start", // Aligns content at the top
// };

// const contentStyle: React.CSSProperties = {
//   position: "relative",
//   top: "5%", // Keeps content positioned well
//   zIndex: 10, // Ensure the text appears on top
// };

// const desktopLottieStyle: React.CSSProperties = {
//   width: "100%",
//   height: "100%", // Ensure the animation covers the entire height
//   position: "absolute",
//   top: 0,
//   left: 0,
//   objectFit: "cover",
//   transform: "scale(1.75)", // Desktop-specific scaling
//   transformOrigin: "center",
//   zIndex: 0, // Keeps the animation behind the content
// };

// const mobileLottieStyle: React.CSSProperties = {
//   width: "100vw", // Ensures full-width coverage
//   height: "100vh", // Always cover the viewport height
//   minWidth: "800px", // Minimum width to ensure coverage on small devices
//   minHeight: "800px", // Minimum height to ensure coverage on small devices
//   position: "absolute",
//   top: 0,
//   left: 0,
//   objectFit: "cover",
//   transformOrigin: "center",
//   zIndex: 0, // Keeps the animation behind the content
// };

// export default LottieAnimations;




// "use client";
// import React, { useEffect, useState } from "react";
// import ArrowIcon from "@/assets/arrow-right.svg";
// import Lottie from "lottie-react";
// import animationData from "@/assets/waves.json";
// import { useRouter } from "next/navigation";

// const LottieAnimations = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isGlowing, setIsGlowing] = useState(false);
//   const [rippleStyle, setRippleStyle] = useState({});
//   const router = useRouter();

//   const handleAboutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     // Get the click position relative to the button
//     const rect = event.currentTarget.getBoundingClientRect();
//     const rippleX = event.clientX - rect.left;
//     const rippleY = event.clientY - rect.top;

//     // Set ripple effect style
//     setRippleStyle({
//       top: rippleY,
//       left: rippleX,
//       opacity: 1,
//       transform: "scale(0)",
//     });

//     // Trigger ripple effect animation
//     setTimeout(() => {
//       setRippleStyle((prev) => ({ ...prev, transform: "scale(2)", opacity: 0 }));
//     }, 100);

//     // Trigger glow effect
//     setIsGlowing(true);
//     setTimeout(() => setIsGlowing(false), 6000);

//     // Navigate to about page
//     setTimeout(() => router.push("/about"), 1500); // Slight delay for the effect
//   };

//   // Check screen size on mount and on resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize); // Listen for resize events

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const sectionDynamicStyle: React.CSSProperties = {
//     ...sectionStyle,
//     height: isMobile ? "90vh" : "100vh", // Adjust height based on screen size
//   };

//   return (
//     <section
//       style={sectionDynamicStyle}
//       className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-hidden"
//     >
//       {/* Text and Buttons */}
//       <div
//         className="absolute z-10 md:w-[478px] text-center md:text-left px-6 md:px-0"
//         style={contentStyle}
//       >
//         <h1
//           className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-8"
//           style={{ lineHeight: "1.2", marginBottom: "1.5rem" }}
//         >
//           Lead the tide with BluWave
//         </h1>
//         <p
//           className="text-xl md:text-xl text-[#010D3E] tracking-tight"
//           style={{
//             lineHeight: "1.6",
//             maxWidth: "700px", // Widened paragraph for desktop
//             marginBottom: "2rem", // Spacing below paragraph
//           }}
//         >
//           In an ocean of technology, let your business stand out. We craft innovative solutions that set you apart from the rest.
//         </p>
//         <div className="flex flex-wrap justify-center md:justify-start gap-1 items-center">
//           <button className="btn btn-primary">Our Services</button>
//           <button
//             onClick={handleAboutClick}
//             className={`btn btn-text flex items-center gap-1 relative overflow-hidden ${
//               isGlowing ? "animate-pulse" : ""
//             }`}
//           >
//             <span>Learn More</span> <ArrowIcon className="h-5 w-5" />
//             {/* Ripple Effect */}
//             <span
//               className="absolute bg-blue-400 rounded-full"
//               style={{
//                 ...rippleStyle,
//                 position: "absolute",
//                 width: "150px",
//                 height: "150px",
//                 transformOrigin: "center",
//                 transition: "transform 0.4s ease, opacity 0.4s ease",
//                 pointerEvents: "none",
//               }}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Full-Screen Lottie Animation */}
//       <Lottie
//         animationData={animationData}
//         loop
//         style={isMobile ? mobileLottieStyle : desktopLottieStyle} // Conditional rendering
//         className="absolute inset-0"
//       />
//     </section>
//   );
// };

// const sectionStyle: React.CSSProperties = {
//   width: "100%",
//   position: "relative",
//   display: "flex",
//   justifyContent: "center", // Centers horizontally
//   alignItems: "flex-start", // Aligns content at the top
// };

// const contentStyle: React.CSSProperties = {
//   position: "relative",
//   top: "5%", // Keeps content positioned well
//   zIndex: 10, // Ensure the text appears on top
// };

// const desktopLottieStyle: React.CSSProperties = {
//   width: "100%",
//   height: "100%", // Ensure the animation covers the entire height
//   position: "absolute",
//   top: 0,
//   left: 0,
//   objectFit: "cover",
//   transform: "scale(1.75)", // Desktop-specific scaling
//   transformOrigin: "center",
//   zIndex: 0, // Keeps the animation behind the content
// };

// const mobileLottieStyle: React.CSSProperties = {
//   width: "100vw", // Ensures full-width coverage
//   height: "100vh", // Always cover the viewport height
//   minWidth: "800px", // Minimum width to ensure coverage on small devices
//   minHeight: "800px", // Minimum height to ensure coverage on small devices
//   position: "absolute",
//   top: 0,
//   left: 0,
//   objectFit: "cover",
//   transformOrigin: "center",
//   zIndex: 0, // Keeps the animation behind the content
// };

// export default LottieAnimations;



// "use client";
// import React, { useEffect, useState } from "react";
// import ArrowIcon from "@/assets/arrow-right.svg";
// import Lottie from "lottie-react";
// import animationData from "@/assets/waves.json";
// import { useRouter } from "next/navigation";

// const LottieAnimations = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [rippleStyle, setRippleStyle] = useState({});
//   const router = useRouter();

//   const handleAboutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     // Get the click position relative to the button
//     const rect = event.currentTarget.getBoundingClientRect();
//     const rippleX = event.clientX - rect.left;
//     const rippleY = event.clientY - rect.top;

//     // Set ripple effect style
//     setRippleStyle({
//       top: rippleY,
//       left: rippleX,
//       opacity: 1,
//       transform: "scale(0)",
//     });

//     // Trigger ripple effect animation
//     setTimeout(() => {
//       setRippleStyle((prev) => ({ ...prev, transform: "scale(4)", opacity: 0 }));
//     }, 100);

//     // Navigate to about page
//     setTimeout(() => router.push("/about"), 300); // Delay navigation for effect
//   };

//   // Check screen size on mount and on resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize); // Listen for resize events

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const sectionDynamicStyle: React.CSSProperties = {
//     ...sectionStyle,
//     height: isMobile ? "90vh" : "100vh", // Adjust height based on screen size
//   };

//   return (
//     <section
//       style={sectionDynamicStyle}
//       className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-hidden"
//     >
//       {/* Text and Buttons */}
//       <div
//         className="absolute z-10 md:w-[478px] text-center md:text-left px-6 md:px-0"
//         style={contentStyle}
//       >
//         <h1
//           className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-8"
//           style={{ lineHeight: "1.2", marginBottom: "1.5rem" }}
//         >
//           Lead the tide with BluWave
//         </h1>
//         <p
//           className="text-xl md:text-xl text-[#010D3E] tracking-tight"
//           style={{
//             lineHeight: "1.6",
//             maxWidth: "700px", // Widened paragraph for desktop
//             marginBottom: "2rem", // Spacing below paragraph
//           }}
//         >
//           In an ocean of technology, let your business stand out. We craft innovative solutions that set you apart from the rest.
//         </p>
//         <div className="flex flex-wrap justify-center md:justify-start gap-1 items-center">
//           <button className="btn btn-primary">Our Services</button>
//           <button
//             onClick={handleAboutClick}
//             className="btn btn-text flex items-center gap-1 relative overflow-hidden"
//           >
//             <span>Learn More</span> <ArrowIcon className="h-5 w-5" />
//             {/* Ripple Effect */}
//             <span
//               className="absolute bg-blue-400 rounded-full"
//               style={{
//                 ...rippleStyle,
//                 position: "absolute",
//                 width: "150px",
//                 height: "150px",
//                 transformOrigin: "center",
//                 transition: "transform 0.4s ease, opacity 0.4s ease",
//                 pointerEvents: "none",
//               }}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Full-Screen Lottie Animation */}
//       <Lottie
//         animationData={animationData}
//         loop
//         style={isMobile ? mobileLottieStyle : desktopLottieStyle} // Conditional rendering
//         className="absolute inset-0"
//       />
//     </section>
//   );
// };

// const sectionStyle: React.CSSProperties = {
//   width: "100%",
//   position: "relative",
//   display: "flex",
//   justifyContent: "center", // Centers horizontally
//   alignItems: "flex-start", // Aligns content at the top
// };

// const contentStyle: React.CSSProperties = {
//   position: "relative",
//   top: "5%", // Keeps content positioned well
//   zIndex: 10, // Ensure the text appears on top
// };

// const desktopLottieStyle: React.CSSProperties = {
//   width: "100%",
//   height: "100%", // Ensure the animation covers the entire height
//   position: "absolute",
//   top: 0,
//   left: 0,
//   objectFit: "cover",
//   transform: "scale(1.75)", // Desktop-specific scaling
//   transformOrigin: "center",
//   zIndex: 0, // Keeps the animation behind the content
// };

// const mobileLottieStyle: React.CSSProperties = {
//   width: "100vw", // Ensures full-width coverage
//   height: "100vh", // Always cover the viewport height
//   minWidth: "800px", // Minimum width to ensure coverage on small devices
//   minHeight: "800px", // Minimum height to ensure coverage on small devices
//   position: "absolute",
//   top: 0,
//   left: 0,
//   objectFit: "cover",
//   transformOrigin: "center",
//   zIndex: 0, // Keeps the animation behind the content
// };

// export default LottieAnimations;


// "use client";
// import React, { useEffect, useState } from "react";
// import ArrowIcon from "@/assets/arrow-right.svg";
// import Lottie from "lottie-react";
// import animationData from "@/assets/waves.json";
// import { useRouter } from "next/navigation";
// import { useRef } from "react";


// interface LottieAnimationsProps {
//   onServicesClick: () => void;
// }

// const LottieAnimations = () => {
//   const [isMobile, setIsMobile] = useState(false);
  // const [rippleStyle, setRippleStyle] = useState({});
  // const [showRipple, setShowRipple] = useState(false);
  // const router = useRouter();

//   const servicesRef = useRef<HTMLDivElement>(null);  // Create the servicesRef

//   const handleScrollToServices = () => {
//     if (servicesRef.current) {
//       servicesRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

  // const handleAboutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const rect = event.currentTarget.getBoundingClientRect();
  //   const rippleX = event.clientX - rect.left;
  //   const rippleY = event.clientY - rect.top;

  //   // Set ripple effect style
  //   setRippleStyle({
  //     top: rippleY,
  //     left: rippleX,
  //   });
  //   setShowRipple(true);

  //   // Remove ripple effect after animation
  //   setTimeout(() => {
  //     setShowRipple(false);
  //     router.push("/about"); // Navigate after ripple effect
  //   }, 300);
  // };

//   // Check screen size on mount and on resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize); // Listen for resize events

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const sectionDynamicStyle: React.CSSProperties = {
//     ...sectionStyle,
//     height: isMobile ? "90vh" : "100vh", // Adjust height based on screen size
//   };

//   return (
//     <section
//       style={sectionDynamicStyle}
//       className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-hidden"
//     >
//       {/* Text and Buttons */}
//       <div
//         className="absolute z-10 md:w-[478px] text-center md:text-left px-6 md:px-0"
//         style={contentStyle}
//       >
//         <h1
//           className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-8"
//           style={{ lineHeight: "1.2", marginBottom: "1.5rem" }}
//         >
//           Lead the tide with BluWave
//         </h1>
//         <p
//           className="text-xl md:text-xl text-[#010D3E] tracking-tight"
//           style={{
//             lineHeight: "1.6",
//             maxWidth: "700px", // Widened paragraph for desktop
//             marginBottom: "2rem", // Spacing below paragraph
//           }}
//         >
//           In an ocean of technology, let your business stand out. We craft innovative solutions that set you apart from the rest.
//         </p>
//         <div className="flex flex-wrap justify-center md:justify-start gap-1 items-center relative">
//           <button className="btn btn-primary">Our Services</button>
          // <button
          //   onClick={handleAboutClick}
          //   className="btn btn-text flex items-center gap-1 relative overflow-hidden"
          //   style={{ position: "relative" }}
          // >
          //   {showRipple && (
          //     <span
          //       className="absolute rounded-full bg-black/10 animate-ping"
          //       style={{
          //         ...rippleStyle,
          //         width: "100px",
          //         height: "100px",
          //         transform: "translate(-50%, -50%)",
          //         zIndex: 0,
          //       }}
          //     ></span>
          //   )}
          //   <span>Learn More</span> <ArrowIcon className="h-5 w-5" />
          // </button>
//         </div>
//       </div>

//       {/* Full-Screen Lottie Animation */}
//       <Lottie
//         animationData={animationData}
//         loop
//         style={isMobile ? mobileLottieStyle : desktopLottieStyle} // Conditional rendering
//         className="absolute inset-0"
//       />
//     </section>
//   );
// };

// const sectionStyle: React.CSSProperties = {
//   width: "100%",
//   position: "relative",
//   display: "flex",
//   justifyContent: "center", // Centers horizontally
//   alignItems: "flex-start", // Aligns content at the top
// };

// const contentStyle: React.CSSProperties = {
//   position: "relative",
//   top: "5%", // Keeps content positioned well
//   zIndex: 10, // Ensure the text appears on top
// };

// const desktopLottieStyle: React.CSSProperties = {
//   width: "100%",
//   height: "100%", // Ensure the animation covers the entire height
//   position: "absolute",
//   top: 0,
//   left: 0,
//   objectFit: "cover",
//   transform: "scale(1.75)", // Desktop-specific scaling
//   transformOrigin: "center",
//   zIndex: 0, // Keeps the animation behind the content
// };

// const mobileLottieStyle: React.CSSProperties = {
//   width: "100vw", // Ensures full-width coverage
//   height: "100vh", // Always cover the viewport height
//   minWidth: "800px", // Minimum width to ensure coverage on small devices
//   minHeight: "800px", // Minimum height to ensure coverage on small devices
//   position: "absolute",
//   top: 0,
//   left: 0,
//   objectFit: "cover",
//   transformOrigin: "center",
//   zIndex: 0, // Keeps the animation behind the content
// };

// export default LottieAnimations;



"use client";
import React, { useEffect, useState } from "react";
import ArrowIcon from "@/assets/arrow-right.svg";
import Lottie from "lottie-react";
import animationData from "@/assets/waves.json";
import { useRouter } from "next/navigation";
interface LottieAnimationsProps {
  onServicesClick: () => void;
}

const LottieAnimations: React.FC<LottieAnimationsProps> = ({ onServicesClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [rippleStyle, setRippleStyle] = useState({});
  const [showRipple, setShowRipple] = useState(false);
  const router = useRouter();

  const handleAboutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const rippleX = event.clientX - rect.left;
    const rippleY = event.clientY - rect.top;

    // Set ripple effect style
    setRippleStyle({
      top: rippleY,
      left: rippleX,
    });
    setShowRipple(true);

    // Remove ripple effect after animation
    setTimeout(() => {
      setShowRipple(false);
      router.push("/about"); // Navigate after ripple effect
    }, 300);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sectionDynamicStyle: React.CSSProperties = {
    ...sectionStyle,
    height: isMobile ? "90vh" : "100vh",
  };

  return (
    <section
      style={sectionDynamicStyle}
      className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-hidden"
    >
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
            maxWidth: "700px",
            marginBottom: "2rem",
          }}
        >
          In an ocean of technology, let your business stand out. We craft innovative solutions that set you apart from the rest.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-1 items-center">
          <button className="btn btn-primary" onClick={onServicesClick}>
            Our Services
          </button>
          <button
            onClick={handleAboutClick}
            className="btn btn-text flex items-center gap-1 relative overflow-hidden"
            style={{ position: "relative" }}
          >
            {showRipple && (
              <span
                className="absolute rounded-full bg-black/10 animate-ping"
                style={{
                  ...rippleStyle,
                  width: "100px",
                  height: "100px",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              ></span>
            )}
            <span>Learn More</span> <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Lottie
        animationData={animationData}
        loop
        style={isMobile ? mobileLottieStyle : desktopLottieStyle}
        className="absolute inset-0"
      />
    </section>
  );
};

const sectionStyle: React.CSSProperties = {
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
};

const contentStyle: React.CSSProperties = {
  position: "relative",
  top: "5%",
  zIndex: 10,
};

const desktopLottieStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  objectFit: "cover",
  transform: "scale(1.75)",
  transformOrigin: "center",
  zIndex: 0,
};

const mobileLottieStyle: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
  minWidth: "800px",
  minHeight: "800px",
  position: "absolute",
  top: 0,
  left: 0,
  objectFit: "cover",
  transformOrigin: "center",
  zIndex: 0,
};

export default LottieAnimations;
