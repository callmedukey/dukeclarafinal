import React from "react";

import HeaderLinks from "@/components/HeaderLinks";

import LeavesText from "./LeavesText";

const Header = () => {
  return (
    <header className="bg-primary-two">
      <div className="flex items-center justify-center px-4">
        <LeavesText text="JHMC" id="home" />
      </div>
      <HeaderLinks />
    </header>
  );
};

export default Header;
