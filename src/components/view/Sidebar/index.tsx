"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

// Components
import Logo from "../Logo";

import SidebarItem from "./SidebarItem";

// Icons
import {
  CaretRightIcon,
  ComponentInstanceIcon,
  LightningBoltIcon,
  MinusCircledIcon,
  PersonIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

const navItems = [
  {
    title: "Invoice",
    icon: PlusCircledIcon,
    path: "/invoice",
    isNew: false,
  },
  {
    title: "Pay",
    icon: MinusCircledIcon,
    path: "/pay",
    isNew: true,
  },

  {
    title: "Financing",
    icon: LightningBoltIcon,
    path: "/financing",
    isNew: false,
  },
  {
    title: "Contancts",
    icon: PersonIcon,
    path: "/contacts",
    isNew: false,
  },
  {
    title: "Plugins",
    icon: ComponentInstanceIcon,
    path: "/plugins",
    isNew: false,
  },
];

const Sidebar = () => {
  const path = usePathname();
  const router = useRouter();

  return (
    <nav className="min-h-screen min-w-60 w-60 border-r border-gray-200 py-4 flex flex-col justify-between">
      <AnimatePresence>
        <div className="flex flex-col items-start gap-y-2">
          <SidebarItem
            isSelected={path === "/"}
            path="/"
            onClick={() => router.push("/")}
          >
            <div className="flex items-center justify-between w-full">
              <Logo />
              <CaretRightIcon />
            </div>
          </SidebarItem>
          {navItems.map((item, index) => (
            <SidebarItem
              key={index}
              path={item.path}
              isSelected={path === item.path}
              onClick={() => {
                router.push(item.path);
              }}
              isNew={item.isNew}
            >
              <>
                <div className="flex items-center justify-center gap-x-2">
                  <item.icon className={cn("w-4 h-4", "text-gray-500")} />
                  <span className={cn("text-gray-500")}>{item.title}</span>
                </div>
              </>
            </SidebarItem>
          ))}
        </div>
      </AnimatePresence>
    </nav>
  );
};

export default Sidebar;
