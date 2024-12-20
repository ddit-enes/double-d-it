import Hero from "@/app/_components/hero";
import Features from "@/app/_components/features";

import { hero } from "@/data/hero";
import { features, featureTitleSection } from "@/data/feature";

const Home = () => {
  return (
    <>
      <Hero item={hero} />
      <Features titleSection={featureTitleSection} features={features} />
    </>
  );
};

export default Home;
