import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="/double-d-it-logo.png"
      alt="Double D IT logo"
      width={140}
      height={40}
      priority
      loading="eager"
    />
  );
};
export default Logo;
