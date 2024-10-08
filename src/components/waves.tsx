// components/LottieAnimation.js
import Lottie from "lottie-react";
import animationData from '@/assets/waves.json'

const LottieAnimation = () => {
  return (
    <div style={{ width: 400, height: 400 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
