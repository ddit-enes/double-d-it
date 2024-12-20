"use client";

import { FC, useState } from "react";
import { ChevronRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import NavLink from "@/components/nav-link";
import { type Menu as MenuType } from "@/types/menu";

type Props = {
  items: MenuType[];
};
const MainMenu: FC<Props> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [accordionValues, setAccordionValues] = useState(items.map((item) => item.label));

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <Button variant="ghost" size="icon" asChild className="-ml-2.5 mr-2.5">
        <SheetTrigger>
          <span className="sr-only">Main Menu</span>
          <Menu className="h-6 w-6" />
        </SheetTrigger>
      </Button>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-left">Double D IT</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full pt-6 pb-[max(calc(env(safe-area-inset-bottom)+0.75rem),1rem)]">
          <Accordion
            className="overflow-y-scroll"
            type="multiple"
            defaultValue={accordionValues}
            onValueChange={setAccordionValues}
          >
            {items.map((item, index) => (
              <AccordionItem key={index} value={item.label}>
                <AccordionTrigger className="font-bold !no-underline pr-2.5">
                  {item.label}
                </AccordionTrigger>
                <AccordionContent>
                  {item.pages.map((page, index) => (
                    <NavLink
                      key={index}
                      className="flex items-center gap-2 py-1.5 pl-4 transition-all duration-100 group"
                      href={page.permalink}
                      onClick={() => setIsOpen(false)}
                    >
                      <ChevronRight className="w-4 h-4 group-focus:translate-x-0.5 transition-all" />
                      <span>{page.title}</span>
                    </NavLink>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MainMenu;
