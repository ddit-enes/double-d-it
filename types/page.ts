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
};
