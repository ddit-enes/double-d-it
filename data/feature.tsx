import { FeatureTitleSectionType, FeatureType } from "@/types/feature";
import { AudioLines, CodeXml, FileText, HousePlus, MonitorCog, Shield } from "lucide-react";

export const featureTitleSection: FeatureTitleSectionType = {
  title: "Our Features",
  paragraph:
    "We develop customized software and hardware solutions, including barcode scanners, industrial computers, sensors, and labeling systems. We also offer support in Smart home, IT-security, system management, wireless networking, VoIP, and networking certification.",
};

export const features: FeatureType[] = [
  {
    icon: <MonitorCog size={42} />,
    title: "IT-System house",
    paragraph:
      "Your IT system with a security focus and integrated data center. We plan, advise, and optimize your IT area, covering everything from IP telephone system control to speed and print optimization.",
  },
  {
    icon: <CodeXml size={42} />,
    title: "Software Development",
    paragraph:
      "Get inspired by our innovative software solutions. We assist you in planning and implementing your projects, offering consultation, planning, and development services tailored to your needs.",
  },
  {
    icon: <FileText size={42} />,
    title: "Data Logging",
    paragraph:
      "Integration of measuring sensors in regulated sectors with qualification and validation support. We offer you the complete solution from planning to implementation.",
  },
  {
    icon: <HousePlus size={42} />,
    title: "Smart Home",
    paragraph:
      "Get inspired by our ideas. We support you in planning and implementing your Smart home, offering consultation, planning, and provision of intelligent control. You define the expansion stage.",
  },
  {
    icon: <Shield size={42} />,
    title: "Security Technology",
    paragraph:
      "Enhance your security with our advanced technology solutions. We provide comprehensive services including consultation, planning, and implementation to ensure your systems are secure and reliable.",
  },
  {
    icon: <AudioLines size={42} />,
    title: "Voice over IP",
    paragraph:
      "Voice over IP or also called VoIP for short calls the telephone over the Internet. The voice is transmitted via a network intended for data transmission. Put simply, this is Internet telephony.",
  },
];
