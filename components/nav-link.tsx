"use client";

import { HTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

type NavLink = HTMLAttributes<HTMLAnchorElement> & LinkProps;
const NavLink = ({ children, className, href, ...rest }: NavLink) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (!href) {
    return null;
  }

  return (
    <Link
      href={href}
      className={cn(`flex items-center ${isActive && "text-primary text-lg font-bold"}`, className)}
      {...rest}
    >
      {children}
    </Link>
  );
};
export default NavLink;
