import React from "react";

type HeaderProps = {
  children: React.ReactNode;
  title: string;
};

const Header = ({ title, children }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center gap-x-2">{children}</div>
    </header>
  );
};

export default Header;
