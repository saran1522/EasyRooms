"use client";
import React, { useState } from "react";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import MobileNav from "./MobileNav";

function Toggler({ session }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  function toggleMobileNav() {
    setShowMobileNav((prev) => !prev);
  }
  return (
    <div className="hidden absolute top-4 right-4 text-gray-800 max-md:block">
      {showMobileNav ? (
        <MdOutlineClose className="z-50 text-4xl" onClick={toggleMobileNav} />
      ) : (
        <MdOutlineMenu className="z-50 text-4xl" onClick={toggleMobileNav} />
      )}
      <MobileNav showMobileNav={showMobileNav} session={session} />
    </div>
  );
}

export default Toggler;
