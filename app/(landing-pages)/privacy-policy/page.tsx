import type { Metadata } from "next";
import TitleWithBreadcrumb from "@/components/title-with-breadcrumb";
import Divider from "@/components/divider";
import { privacyPolicyPage } from "@/data/pages";

export const metadata: Metadata = privacyPolicyPage.metadata;

const PrivacyPolicy = () => {
  return (
    <>
      <TitleWithBreadcrumb item={privacyPolicyPage} />
      <Divider />
    </>
  );
};

export default PrivacyPolicy;
