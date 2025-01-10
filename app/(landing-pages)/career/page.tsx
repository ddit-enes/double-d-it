import type { Metadata } from "next";
import TitleWithBreadcrumb from "@/components/title-with-breadcrumb";
import Divider from "@/components/divider";
import CareerCard from "@/app/(landing-pages)/career/_components/career-card";
import { careerPage } from "@/data/pages";

export const metadata: Metadata = careerPage.metadata;

const Career = () => {
  return (
    <>
      <TitleWithBreadcrumb item={careerPage} />
      <Divider />

      <CareerCard careers={careerPage.careers} />
      <Divider />
    </>
  );
};

export default Career;
