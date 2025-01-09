import type { Metadata } from "next";
import TitleWithBreadcrumb from "@/components/title-with-breadcrumb";
import Divider from "@/components/divider";
import { legalNoticePage } from "@/data/pages";

export const metadata: Metadata = legalNoticePage.metadata;

const LegalNotice = () => {
  return (
    <>
      <TitleWithBreadcrumb item={legalNoticePage} />
      <Divider />
    </>
  );
};

export default LegalNotice;
