import { Page } from "@/types/page";

export const aboutPage: Page = {
  title: "About us",
  description:
    "We are an aspiring company, young at heart, who offers you a far-reaching, interdisciplinary wealth of experience in technology, knowledge sharing and information.",
  metadata: {
    title: "About us",
    description:
      "We are an aspiring company, young at heart, who offers you a far-reaching, interdisciplinary wealth of experience in technology, knowledge sharing and information.",
    keywords: ["about", "us", "company", "technology", "knowledge", "sharing", "information"],
    openGraph: {
      title: "About us",
      description:
        "We are an aspiring company, young at heart, who offers you a far-reaching, interdisciplinary wealth of experience in technology, knowledge sharing and information.",
      url: "https://double-d-it.com/about",
      type: "website",
      locale: "en_US",
      siteName: "double-D-IT",
    },
  },
};

export const careerPage: Page = {
  title: "Career",
  description:
    "We are always looking for new talents to join our team. Find out more about our job offers and apply now.",
  metadata: {
    title: "Career",
    description:
      "We are always looking for new talents to join our team. Find out more about our job offers and apply now.",
    keywords: ["career", "job", "offers", "apply", "talents", "team"],
    openGraph: {
      title: "Career",
      description:
        "We are always looking for new talents to join our team. Find out more about our job offers and apply now.",
      url: "https://double-d-it.com/career",
      type: "website",
      locale: "en_US",
      siteName: "double-D-IT",
    },
  },
};

export const contactPage: Page = {
  title: "Contact",
  description: "Do you have any questions or suggestions? We are looking forward to your message.",
  metadata: {
    title: "Contact",
    description:
      "Do you have any questions or suggestions? We are looking forward to your message.",
    keywords: ["contact", "questions", "suggestions", "message"],
    openGraph: {
      title: "Contact",
      description:
        "Do you have any questions or suggestions? We are looking forward to your message.",
      url: "https://double-d-it.com/contact",
      type: "website",
      locale: "en_US",
      siteName: "double-D-IT",
    },
  },
  formFields: [
    {
      inputType: "TEXT",
      fieldName: "name",
      placeholder: "John Doe",
      label: "Name",
      required: true,
      minLength: 4,
    },
    {
      inputType: "TEXT",
      fieldName: "company",
      placeholder: "Double D IT",
      label: "Company",
      required: false,
    },
    {
      inputType: "EMAIL",
      fieldName: "email",
      placeholder: "info@example.com",
      label: "Email",
      required: true,
    },
    {
      inputType: "TEXT",
      fieldName: "phone",
      placeholder: "490123456789",
      label: "Phone number",
      required: true,
      minLength: 8,
      regex: "^\\+?[1-9]\\d{8,14}$",
    },
  ],
  companyContact: {
    name: "double-D-IT",
    address: "Bismarckstraße 18a",
    place: "12169 Berlin-Steglitz",
    country: "Germany",
    phone: "+49 (0) 30-30328677-0",
    fax: "+49 (0) 30-30328677-999",
    email: "info(at)double-d-it.de",
  },
};

export const legalNoticePage: Page = {
  title: "Legal Notice",
  description: "Find out more about the legal information of double-D-IT.",
  metadata: {
    title: "Legal Notice",
    description: "Find out more about the legal information of double-D-IT.",
    keywords: ["legal", "notice", "information"],
    openGraph: {
      title: "Legal Notice",
      description: "Find out more about the legal information of double-D-IT.",
      url: "https://double-d-it.com/legal-notice",
      type: "website",
      locale: "en_US",
      siteName: "double-D-IT",
    },
  },
};

export const privacyPolicyPage: Page = {
  title: "Privacy Policy",
  description: "Learn more about how we handle your data and protect your privacy.",
  metadata: {
    title: "Privacy Policy",
    description: "Learn more about how we handle your data and protect your privacy.",
    keywords: ["privacy", "policy", "data", "protection"],
    openGraph: {
      title: "Privacy Policy",
      description: "Learn more about how we handle your data and protect your privacy.",
      url: "https://double-d-it.com/privacy-policy",
      type: "website",
      locale: "en_US",
      siteName: "double-D-IT",
    },
  },
};
