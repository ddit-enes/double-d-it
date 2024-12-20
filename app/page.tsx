import Hero from "@/app/_components/hero";
import Features from "@/app/_components/features";
import Brands from "@/app/_components/brands";

import { hero } from "@/data/hero";
import { features, featureTitleSection } from "@/data/feature";
import { brands } from "@/data/brands";

const Home = () => {
  return (
    <>
      <Hero item={hero} />
      <Features titleSection={featureTitleSection} features={features} />
      <Brands brands={brands} />
    </>
  );
};

export default Home;
