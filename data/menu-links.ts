// components/main-menu.ts
import { MenuType } from "@/types/menu";

export const menu_links: MenuType[] = [
  {
    label: "Main",
    pages: [
      {
        title: "Home",
        permalink: "/",
      },
    ],
  },
  {
    label: "Services",
    pages: [
      {
        title: "IT-System house",
        permalink: "/system-house",
      },
      {
        title: "Smart home",
        permalink: "/smart-home",
      },
      {
        title: "Data logging",
        permalink: "/data-logging",
      },
      {
        title: "Security Technology",
        permalink: "/security-technology",
      },
      {
        title: "Software Development",
        permalink: "/software-development",
      },
      {
        title: "Voice over IP",
        permalink: "/voip",
      },
    ],
  },
  {
    label: "Info",
    pages: [
      {
        title: "Legal Notice",
        permalink: "/legal-notice",
      },
      {
        title: "Privacy Policy",
        permalink: "/privacy-policy",
      },
      {
        title: "About Us",
        permalink: "/about",
      },
      {
        title: "Career",
        permalink: "/career",
      },
      {
        title: "Contact",
        permalink: "/contact",
      },
    ],
  },
];
