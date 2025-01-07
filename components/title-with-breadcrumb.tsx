"use client";

import { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Slash } from "lucide-react";
import { usePathname } from "next/navigation";
import { type Page } from "@/types/page";
import { getHomePath } from "@/utils/path";
import { primaryColorHEX } from "@/constants/colors";

type Props = {
  item: Page;
};

const SVGBackground = () => (
  <>
    <div>
      <span className="absolute left-0 top-0 z-[-1]">
        <svg
          width="287"
          height="254"
          viewBox="0 0 287 254"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
            fill="url(#paint0_linear_111:578)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_111:578"
              x1="-40.5"
              y1="117"
              x2="301.926"
              y2="-97.1485"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={primaryColorHEX} />
              <stop offset="1" stopColor={primaryColorHEX} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="absolute right-0 top-0 z-[-1]">
        <svg
          width="628"
          height="258"
          viewBox="0 0 628 258"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
            fill="url(#paint0_linear_0:1)"
          />
          <path
            opacity="0.1"
            d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
            fill="url(#paint1_linear_0:1)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0:1"
              x1="644"
              y1="221"
              x2="429.946"
              y2="37.0429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={primaryColorHEX} />
              <stop offset="1" stopColor={primaryColorHEX} stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0:1"
              x1="18.3648"
              y1="166.016"
              x2="105.377"
              y2="32.3398"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={primaryColorHEX} />
              <stop offset="1" stopColor={primaryColorHEX} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  </>
);

const TitleWithBreadcrumb: FC<Props> = ({ item }) => {
  const { title, description } = item;
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  const capitalize = (path: string, index: number) => {
    const href = `/${pathNames.slice(0, index + 1).join("/")}`;
    const itemLink = path[0].toUpperCase() + path.slice(1);
    return { href, itemLink };
  };

  return (
    <section className="relative z-10 overflow-hidden py-10 sm:py-28 md:py-36">
      <div className="container mx-auto">
        <div className="mx-6 md:-mt-12 mb-12">
          <Breadcrumb className="w-full md:w-4/12 lg:w-3/12">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={getHomePath()}>Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              {pathNames.map((path, index) => {
                const { href, itemLink } = capitalize(path, index);
                return (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink asChild>
                      <Link href={href}>{itemLink}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="mx-6">
          <div className="w-full">
            <div className="mx-auto max-w-[800px] md:text-center">
              <h1>{title}</h1>
              <p className="!leading-relaxed sm:text-lg md:text-xl">{description}</p>
            </div>
          </div>
        </div>
      </div>

      <SVGBackground />
    </section>
  );
};

export default TitleWithBreadcrumb;