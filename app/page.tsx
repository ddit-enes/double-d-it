import type { Metadata } from "next";

import Divider from "@/components/divider";
import Hero from "@/app/_components/hero";
import Figures from "@/app/_components/figures";
import Services from "@/app/_components/services";
import Brands from "@/app/_components/brands";

import { hero } from "@/data/hero";
import { figures } from "@/data/figures";
import { services, servicesTitleSection } from "@/data/services";
import { brands } from "@/data/brands";

export const metadata: Metadata = {};

const Home = () => {
  return (
    <>
      <Hero item={hero} />
      <Divider />

      <Figures data={figures} />
      <Divider />

      <Services titleSection={servicesTitleSection} services={services} />
      <Divider />

      <Brands title="Partners" brands={brands} />
      <Divider />
    </>
  );
};

export default Home;
