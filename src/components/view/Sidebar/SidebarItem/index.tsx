import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

type SidebarItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
  path: string;
  isNew?: boolean;
};

const SidebarItem = ({
  children,
  onClick,
  isSelected,
  path,
  isNew,
}: SidebarItemProps) => {
  return (
    <li
      role="button"
      onClick={onClick}
      className="flex items-center w-full transition-all duration-100 ease-in-out cursor-pointer relative"
    >
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="absolute w-4 h-6 -left-2 bg-primary rounded-md"
        />
      )}
      <div
        className={cn(
          "w-full flex items-center mx-5 rounded-2xl p-3 px-3 hover:bg-gray-200/50 text-gray-500 relative",
          isSelected && "bg-gray-200/50 text-gray-900"
        )}
      >
        {children}
        {isSelected && path !== "/" && (
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0,
            }}
            className="absolute h-2 w-2 bg-primary rounded-full right-3"
          ></motion.div>
        )}
        {isNew && !isSelected && (
          <Badge className="absolute right-4">New</Badge>
        )}
      </div>
    </li>
  );
};

export default SidebarItem;
