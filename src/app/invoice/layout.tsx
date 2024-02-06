import { Button } from "@/components/ui/button";
import Header from "@/components/view/Header";
import { SearchIcon } from "lucide-react";
import React from "react";

const InvoiceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-6">
      <Header title="Home">
        <Button variant="ghost" size="icon">
          <SearchIcon className="text-gray-500" />
        </Button>
      </Header>
      {children}
    </div>
  );
};

export default InvoiceLayout;
