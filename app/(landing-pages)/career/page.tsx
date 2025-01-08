import type { Metadata } from "next";
import TitleWithBreadcrumb from "@/components/title-with-breadcrumb";
import Divider from "@/components/divider";
import { careerPage } from "@/data/pages";

export const metadata: Metadata = careerPage.metadata;

const Career = () => {
  return (
    <>
      <TitleWithBreadcrumb item={careerPage} />
      <Divider />
    </>
  );
};

export default Career;
