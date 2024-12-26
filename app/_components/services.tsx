"use client";

import { type FC, ReactNode } from "react";
import Link from "next/link";
import { AudioLines, CodeXml, FileText, HousePlus, MonitorCog, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Service, ServicesTitleSection } from "@/types/feature";
import { getHomePath } from "@/utils/path";
import { primaryColorHEX } from "@/constants/colors";

const serviceIconConfig: Record<Service["icon"], ReactNode> = {
  "it-system-house": <MonitorCog size={32} />,
  "software-development": <CodeXml size={32} />,
  "data-logging": <FileText size={32} />,
  "smart-home": <HousePlus size={32} />,
  "security-technology": <Shield size={32} />,
  "voice-over-ip": <AudioLines size={32} />,
};

const Service = (props: { service: Service }) => {
  const { service } = props;

  return (
    <div className="flex flex-col h-full relative rounded-sm shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center text-primary">
          {serviceIconConfig[service.icon]}
        </div>
        <p className="text-lg font-semibold">{service.title}</p>
      </div>
      <p className="mb-6 flex-1">{service.paragraph}</p>
      <Button size="lg" className="text-base shadow-none w-full" asChild>
        <Link href={getHomePath()}>Read more</Link>
      </Button>
    </div>
  );
};

type Props = {
  titleSection: ServicesTitleSection;
  services: Service[];
};
const Services: FC<Props> = ({ titleSection, services }) => {
  const { title } = titleSection;

  return (
    <section className="relative z-10 pt-16 pb-10 md:pt-28">
      <div className="container mx-auto">
        <div className="mx-6">
          <h2 className="md:text-center md:mb-14">{title}</h2>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Service key={index} service={service} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={primaryColorHEX} />
              <stop offset="1" stopColor={primaryColorHEX} stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={primaryColorHEX} />
              <stop offset="1" stopColor={primaryColorHEX} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Services;
