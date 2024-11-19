// // components/LottieAnimation.js
// import Lottie from "lottie-react";
// import animationData from '@/assets/coder2.json'

// const LottieAnimation = () => {
//   return (
//     <div style={{ width: 500, height: 500 }}>
//       <Lottie animationData={animationData} loop={true} />
//     </div>
//   );
// };

// export default LottieAnimation;


import Lottie from "lottie-react";
import animationData from '@/assets/coder2.json';

const LottieAnimation = () => {
  return (
    <div
      style={{
        width: '100%', // Default: full width
        maxWidth: 500, // Maximum width for larger screens
        height: 'auto', // Maintain aspect ratio
      }}
      className="sm:w-[200px] sm:h-[200px] md:w-[400px] md:h-[400px]" // Tailwind for responsive sizes
    >
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
