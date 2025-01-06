import { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumb";
import Divider from "@/components/divider";
import { breadcrumbAboutPage } from "@/data/breadcrumb";

export const metadata: Metadata = {
  title: "About Us | double-D-IT - IT Systems and Smart Home Solutions",
  description:
    "Learn more about double-D-IT, a Berlin-based company specializing in IT systems, smart homes, measurement technology, hardware and software development, and security technology.",
  // keywords: [
  //   "double-D-IT",
  //   "IT systems",
  //   "smart home solutions",
  //   "security technology",
  //   "measurement technology",
  //   "software development",
  //   "hardware development",
  //   "Berlin IT services",
  // ],
  // openGraph: {
  //   title: "About Us | double-D-IT",
  //   description:
  //     "Discover double-D-IT's history, services, and expertise in IT systems, smart home solutions, and more.",
  //   url: "https://www.double-d-it.de/en/about-us/",
  //   type: "website",
  //   locale: "en_US",
  //   siteName: "double-D-IT",
  // },
};

const About = () => {
  return (
    <>
      <Breadcrumb item={breadcrumbAboutPage} />
      <Divider />
    </>
  );
};

export default About;
