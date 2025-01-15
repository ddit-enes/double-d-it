import type { Metadata } from "next";

import Divider from "@/components/divider";
import HeroBlock from "@/app/_components/hero-block";
import FiguresBlock from "@/app/_components/figures-block";
import Services from "@/app/_components/services";
import Brands from "@/app/_components/brands";

import { hero } from "@/data/hero";
import { figure } from "@/data/figures";
import { services, servicesTitleSection } from "@/data/services";
import { brands } from "@/data/brands";

export const metadata: Metadata = {};

const Home = () => {
  return (
    <>
      <HeroBlock hero={hero} />
      <Divider />

      <FiguresBlock figure={figure} />
      <Divider />

      <Services titleSection={servicesTitleSection} services={services} />
      <Divider />

      <Brands title="Partners" brands={brands} />
      <Divider />
    </>
  );
};

export default Home;
