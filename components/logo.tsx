import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getHomePath } from "@/utils/path";

const Logo = () => {
  return (
    <Link href={getHomePath()}>
      <Image
        src="/double-d-it-logo.png"
        alt="Double D IT logo"
        width={140}
        height={40}
        priority
        loading="eager"
      />
    </Link>
  );
};
export default Logo;
