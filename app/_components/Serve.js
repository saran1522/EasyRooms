import Image from "next/image";
import React from "react";
import ServeImage from "./ServeImage";

function Serve() {
  return (
    <div className="flex flex-col justify-center w-full gap-10 relative">
      <div>
        <h2 className="text-6xl max-md:text-4xl w-full text-center text-gray-800 font-semibold">
          We Will Serve You
        </h2>
      </div>
      <div className="overflow-hidden flex justify-center w-full gap-4 relative">
        <ServeImage src="/roombg.jpg" text="350+ Cities" />
        <ServeImage src="/bg1.webp" text="400+ Hotels" />
        <ServeImage src="/about1.jpg" text="850+ Rooms" />
      </div>
    </div>
  );
}

export default Serve;
