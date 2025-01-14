import React from "react";
import Logo from "@/components/logo";
import ThemeSwitcher from "@/components/theme-switcher";
import MainMenu from "@/components/main-menu";
import { menu_links } from "@/data/menu-links";

const Header = () => {
  return (
    <header>
      <div className="container flex justify-between h-20 mx-auto px-6">
        <div className="flex-1 flex items-center">
          <MainMenu items={menu_links} />
          <div className="relative">
            <Logo />
          </div>
        </div>
        <div className="sm:flex-grow-1 flex items-center justify-end -mr-2.5">
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
