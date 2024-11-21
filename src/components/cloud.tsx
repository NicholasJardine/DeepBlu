// components/LottieAnimation.js
import Lottie, { LottieRefCurrentProps } from "lottie-react"; // Import LottieRefCurrentProps for correct typing
import { useRef, useEffect } from "react";
import animationData from '@/assets/cloud-migration.json';

const LottieCloud = () => {
  // Use the correct type for the ref
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5); // Set the animation speed to 50%
    }
  }, []);

  return (
    <div style={{ width: 400, height: 400 }}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        lottieRef={lottieRef} // Assign the ref to the Lottie component
      />
    </div>
  );
};

export default LottieCloud;





// import Lottie, { LottieRefCurrentProps } from "lottie-react";
// import { useRef, useEffect } from "react";
// import animationData from "@/assets/cloud-migration.json";

// const LottieCloud = () => {
//   const lottieRef = useRef<LottieRefCurrentProps | null>(null);

//   useEffect(() => {
//     if (lottieRef.current) {
//       lottieRef.current.setSpeed(0.5); // Set the animation speed to 50%
//     }
//   }, []);

//   return (
//     <div
//       style={{
//         width: "100%",
//         maxWidth: "400px", // Max size on larger screens
//         height: "auto", // Automatically maintain aspect ratio
//         margin: "0 auto", // Center the animation
//       }}
//     >
//       <Lottie 
//         animationData={animationData} 
//         loop={true} 
//         lottieRef={lottieRef} 
//       />
//     </div>
//   );
// };

// export default LottieCloud;
