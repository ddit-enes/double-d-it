import { Career } from "@/types/career";
import { Field } from "@/types/field";
import { Contact } from "@/types/contact";

export type Page = {
  title: string;
  description: string;
  metadata: {
    title: string;
    description: string;
    keywords?: string[];
    openGraph?: {
      title: string;
      description: string;
      url: string;
      type: string;
      locale: string;
      siteName: string;
    };
  };
  form?: {
    title: string;
    description: string;
    formFields?: Field[];
    companyContact?: Contact;
  };
  careers?: Career[];
};
