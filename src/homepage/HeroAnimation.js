import React from "react";
import Lottie from "react-lottie";
import animData from "./pakkit_hero_animation.json";

export default function LottieAnimation(width, height) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
}
