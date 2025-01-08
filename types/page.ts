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
};

export type Field = {
  inputType: string;
  fieldName: string;
  placeholder: string;
  label: string;
  required: boolean;
  questions?: string[];
  minLength?: number;
  regex?: string;
};

export type Contact = {
  name: string;
  address: string;
  place: string;
  country: string;
  phone: string;
  fax: string;
  email: string;
};
