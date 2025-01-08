import type { Metadata } from "next";
import TitleWithBreadcrumb from "@/components/title-with-breadcrumb";
import Divider from "@/components/divider";
import { contactPage } from "@/data/pages";
import ContactForm from "@/app/(landing-pages)/contact/_components/contact-form";

export const metadata: Metadata = contactPage.metadata;

const Contact = () => {
  return (
    <>
      <TitleWithBreadcrumb item={contactPage} />
      {/*<Divider />*/}

      <ContactForm />
      <Divider />
    </>
  );
};

export default Contact;
