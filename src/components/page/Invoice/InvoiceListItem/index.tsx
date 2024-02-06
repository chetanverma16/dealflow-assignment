import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export type ListItemProps = {
  id: number;
  name: string;
  company: string;
  status: string;
  amount: string;
  isSelected?: boolean;
  showSelection?: boolean;
  onSelect?: (id: number) => void;
};

const ListItem = ({
  id,
  name,
  company,
  status,
  amount,
  isSelected,
  showSelection,
  onSelect,
}: ListItemProps) => {
  return (
    <motion.div
      className={cn("flex flex-col gap-y-2 px-4 py-2 rounded-2xl", {
        "bg-gray-100": isSelected,
      })}
      animate={{
        scale: isSelected ? 1.05 : 1,
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-x-2">
          <img src="/avatar.svg" />
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-xs text-gray-500">{company}</p>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Badge variant={status === "Paid" ? "success" : "alert"}>
            {status}
          </Badge>
          <h4 className="text-sm font-medium">{amount}</h4>
          {showSelection ? (
            <Checkbox
              checked={isSelected}
              onCheckedChange={() => {
                if (onSelect) onSelect(id);
              }}
            />
          ) : (
            <Button variant="ghost">
              <ChevronRightIcon className="h-4" />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ListItem;
