import type { Metadata } from "next";

import Divider from "@/components/divider";
import HeroBlock from "@/app/_components/hero-block";
import FiguresBlock from "@/app/_components/figures-block";
import ServicesBlock from "@/app/_components/services-block";
import Brands from "@/app/_components/brands";

import { hero } from "@/data/hero";
import { figure } from "@/data/figures";
import { service } from "@/data/services";
import { brands } from "@/data/brands";

export const metadata: Metadata = {};

const Home = () => {
  return (
    <>
      <HeroBlock hero={hero} />
      <Divider />

      <FiguresBlock figure={figure} />
      <Divider />

      <ServicesBlock service={service} />
      <Divider />

      <Brands title="Partners" brands={brands} />
      <Divider />
    </>
  );
};

export default Home;
