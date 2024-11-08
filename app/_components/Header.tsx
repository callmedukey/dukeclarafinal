import React from "react";

import HeaderLinks from "@/components/HeaderLinks";
// import MobileMenu from "@/components/MobileMenu";

import LeavesText from "./LeavesText";

const Header = () => {
  return (
    <header className="bg-primary-two">
      <div className="flex items-center justify-start xl:justify-center">
        <LeavesText text="JHMC" id="home" />
        {/* <MobileMenu /> */}
      </div>
      <HeaderLinks />
    </header>
  );
};

export default Header;
