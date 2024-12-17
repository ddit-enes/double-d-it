"use client";

import { Home, Info, Settings } from "lucide-react";

import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";
import { NavCollapsible } from "@/components/nav-collapsible";

const navigation = [
  {
    title: "Double D IT",
    icon: Home,
    isActive: true,
    items: [
      {
        title: "Home",
        url: "/",
      },
    ],
  },
  {
    title: "Services",
    icon: Settings,
    isActive: true,
    items: [
      {
        title: "IT-System house",
        url: "system-house",
      },
      {
        title: "Smart home",
        url: "smart-home",
      },
      {
        title: "Data logging",
        url: "data-logging",
      },
      {
        title: "Security Technology",
        url: "security-technology",
      },
      {
        title: "Software Development",
        url: "software-development",
      },
      {
        title: "Voice over IP",
        url: "voip",
      },
    ],
  },
  {
    title: "Info",
    icon: Info,
    isActive: true,
    items: [
      {
        title: "Legal Notice",
        url: "legal-notice",
      },
      {
        title: "Privacy Policy",
        url: "privacy-policy",
      },
      {
        title: "About Us",
        url: "about",
      },
      {
        title: "Careers",
        url: "careers",
      },
      {
        title: "Contact",
        url: "contact",
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavCollapsible items={navigation} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
