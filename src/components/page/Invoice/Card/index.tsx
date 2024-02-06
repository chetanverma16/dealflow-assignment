import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className={cn(
        "relative flex h-[600px] max-h-[600px] w-96 flex-col items-center overflow-y-scroll rounded-2xl bg-white shadow-xl",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
