import { useLottie } from "lottie-react";
import loadingAnimation from "../../assets/images/loading.json";

const Loading = () => {
  const options = {
    animationData: loadingAnimation,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className="flex items-center justify-center">
      <div className="w-[150px] h-[150px] mt-[100px]">{View}</div>
    </div>
  );
};

export default Loading;
