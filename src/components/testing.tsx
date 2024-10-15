// components/LottieAnimation.js
import Lottie, { LottieRefCurrentProps } from "lottie-react"; // Import LottieRefCurrentProps for correct typing
import { useRef, useEffect } from "react";
import animationData from '@/assets/QA.json';

const LottieTesting = () => {
  // Use the correct type for the ref
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5); // Set the animation speed to 50%
    }
  }, []);

  return (
    <div style={{ width: 300, height: 300 }}>
      <Lottie 
        animationData={animationData} 
        loop={true} 
        lottieRef={lottieRef} // Assign the ref to the Lottie component
      />
    </div>
  );
};

export default LottieTesting;
