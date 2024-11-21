// // components/LottieAnimation.js
// import Lottie, { LottieRefCurrentProps } from "lottie-react"; // Import LottieRefCurrentProps for correct typing
// import { useRef, useEffect } from "react";
// import animationData from '@/assets/QA.json';

// const LottieTesting = () => {
//   // Use the correct type for the ref
//   const lottieRef = useRef<LottieRefCurrentProps | null>(null);

//   useEffect(() => {
//     if (lottieRef.current) {
//       lottieRef.current.setSpeed(0.5); // Set the animation speed to 50%
//     }
//   }, []);

//   return (
//     <div style={{ width: 400, height: 400 }}>
//       <Lottie 
//         animationData={animationData} 
//         loop={true} 
//         lottieRef={lottieRef} // Assign the ref to the Lottie component
//       />
//     </div>
//   );
// };

// export default LottieTesting;



import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useEffect } from "react";
import animationData from "@/assets/QA.json";

const LottieTesting = () => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5); // Set the animation speed to 50%
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px", // Ensure it doesn't exceed 400px on larger screens
        height: "auto", // Maintain aspect ratio
        margin: "0 auto", // Center horizontally
      }}
    >
      <Lottie 
        animationData={animationData} 
        loop={true} 
        lottieRef={lottieRef} 
      />
    </div>
  );
};

export default LottieTesting;
