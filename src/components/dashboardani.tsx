// components/LottieAnimation.js
import Lottie, { LottieRefCurrentProps } from "lottie-react"; // Import LottieRefCurrentProps for correct typing
import { useRef, useEffect } from "react";
import animationData from '@/assets/dashboard2.json';

const DashLottie = () => {
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
        lottieRef={lottieRef} 
        style={lottieStyle}// Assign the ref to the Lottie component
      />
    </div>
  );
};

export default DashLottie;



const sectionStyle: React.CSSProperties = {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "black",
    position: "relative",
  };
  
  const lottieStyle: React.CSSProperties = {
    // width: "100vw", // Explicitly set to viewport width
    // height: "100vh", // Explicitly set to viewport height
    // position: "absolute",
    transform: "scaley(1.2)",
    transformOrigin: "center", 
    objectFit: "cover", // Ensure the animation scales to cover the entire area
    overflow: "hidden",
  };