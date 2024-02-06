import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AccountRadioProps = {
  radios: AccountRadio[];
  onClick: (value: string) => void;
  value: string;
};

export type AccountRadio = {
  label: {
    title: string;
    avatar: string;
  };
  value: string;
};

const AccountRadio = ({ radios, onClick, value }: AccountRadioProps) => {
  return (
    <RadioGroup value={value} onValueChange={onClick}>
      {radios.map((radio) => (
        <motion.div
          key={radio.value}
          onClick={() => onClick(radio.value)}
          className={cn(
            "flex cursor-pointer items-center justify-between rounded-2xl px-4 py-2",
            {
              "bg-gray-100": value === radio.value,
            },
          )}
        >
          <div className="flex items-center gap-x-2">
            <img src={radio.label.avatar} />
            <Label className="text-sm" htmlFor={radio.value}>
              {radio.label.title}
            </Label>
          </div>
          <RadioGroupItem value={radio.value} />
        </motion.div>
      ))}
    </RadioGroup>
  );
};

export default AccountRadio;
