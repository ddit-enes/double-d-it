import React from "react";
import Logo from "@/components/logo";
import ThemeSwitcher from "@/components/theme-switcher";
import MainMenu from "@/components/main-menu";

export function Header() {
  return (
    <header>
      <div className="container flex justify-between h-20 mx-auto px-6 md:px-10">
        <div className="flex-1 flex items-center">
          <MainMenu />
          <div className="relative">
            <Logo />
          </div>
        </div>
        <div className="sm:flex-grow-1 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
