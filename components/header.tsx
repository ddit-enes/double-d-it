import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-center">
      <div className="container flex justify-between items-center h-14">
        <SidebarTrigger />
        <div className="relative">
          <Image
            src="/double-d-it-logo.png"
            alt="Double D IT logo"
            width={140}
            height={40}
            priority
            loading="eager"
          />
        </div>
      </div>
    </header>
  );
}
