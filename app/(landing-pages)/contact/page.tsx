import type { Metadata } from "next";
import TitleWithBreadcrumb from "@/components/title-with-breadcrumb";
import Divider from "@/components/divider";
import { contactPage } from "@/data/pages";

export const metadata: Metadata = contactPage.metadata;

const Contact = () => {
  return (
    <>
      <TitleWithBreadcrumb item={contactPage} />
      <Divider />
    </>
  );
};

export default Contact;
