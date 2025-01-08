import type { Metadata } from "next";
import TitleWithBreadcrumb from "@/components/title-with-breadcrumb";
import Divider from "@/components/divider";
import { aboutPage } from "@/data/pages";

export const metadata: Metadata = aboutPage.metadata;

const About = () => {
  return (
    <>
      <TitleWithBreadcrumb item={aboutPage} />
      <Divider />
    </>
  );
};

export default About;
