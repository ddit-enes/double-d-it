import type { Metadata } from "next";
import TitleWithBreadcrumb from "@/components/title-with-breadcrumb";
import Divider from "@/components/divider";
import ContactForm from "@/app/(landing-pages)/contact/_components/contact-form";
import { contactPage } from "@/data/pages";

export const metadata: Metadata = contactPage.metadata;

const Contact = () => {
  return (
    <>
      <TitleWithBreadcrumb item={contactPage} />

      <ContactForm
        title={contactPage.form?.title}
        description={contactPage.form?.description}
        formFields={contactPage.form?.formFields}
        companyContact={contactPage.form?.companyContact}
      />
      <Divider />
    </>
  );
};

export default Contact;
