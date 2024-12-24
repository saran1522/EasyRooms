"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="p-4 mx-auto lg:mt-36 text-center w-full flex items-center justify-around bg-gray-100 max-sm:gap-1">
      <p>&#9400; EasyRooms</p>
      <p>saransinha205@gmail.com</p>
      <FaGithub
        onClick={() => window.open("https://github.com/saran1522/easyrooms")}
      />
    </footer>
  );
}

export default Footer;
