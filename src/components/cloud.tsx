// components/LottieAnimation.js
import Lottie from "lottie-react";
import animationData from '@/assets/cloud-migration.json'

const LottieCloud= () => {
  return (
    <div style={{ width: 600, height: 600 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieCloud;
