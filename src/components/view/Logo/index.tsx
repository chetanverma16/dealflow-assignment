import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <img src="/avatar.svg" alt="avatar" className="w-6 h-6 rounded-full" />
      <span>Dealflow</span>
    </div>
  );
};

export default Logo;
