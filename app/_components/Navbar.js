import React from "react";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import MobileNav from "./MobileNav";
import Toggler from "./Toggler";

function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-full">
      <Logo />
      <Navigation />
      <MobileNav />
      <div className="hiddne max-md:block">
        <Toggler />
      </div>
    </div>
  );
}

export default Navbar;
