import { Button } from "@/components/ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import React from "react";

type ModalProps = {
  children?: React.ReactNode;
  onClose?: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-50 blur-xl"></div>

        <div className="relative z-20 h-auto w-4/5 rounded-2xl bg-white p-6 pt-12">
          <Button
            onClick={onClose}
            className="absolute right-1 top-1"
            size="icon"
            variant="ghost"
          >
            <Cross1Icon className="h-4" />
          </Button>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
