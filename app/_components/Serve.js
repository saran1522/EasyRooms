import Image from "next/image";
import React from "react";

function Serve() {
  return (
    <div className="flex justify-center w-full gap-4 mb-10 relative">
      <div className="absolute lg:-bottom-40 max-md:top-24 mx-auto max-md:h-32 max-md:w-full h-96 w-[85%] bg-primary-400">
        <div className="lg:absolute max-md:mt-10 flex font-bold justify-between bottom-2 p-10 w-full">
          <p className=" text-gray-100 lg:text-4xl max-w-[250px]">
            We Will Serve You In
          </p>
          <div className="flex max-w-[450px]">
            <p className=" text-gray-100 p-0 text-center lg:text-4xl">
              350+ Cities
            </p>
            <p className=" text-gray-100 text-center lg:text-4xl">
              100+ Hotels
            </p>
            <p className=" text-gray-100 text-center lg:text-4xl">300+ Rooms</p>
          </div>
        </div>
      </div>
      <Image
        src="/roombg.jpg"
        width={300}
        height={300}
        alt="Mountains and forests with two cabins"
        className="rounded-full max-md:w-[100px] lg:w-[300px] z-20 h-[500px] max-md:h-[200px]"
        // className="w-[80%] mx-auto"
      />
      <Image
        src="/bg1.webp"
        width={300}
        height={400}
        alt="Mountains and forests with two cabins"
        className="rounded-full max-md:w-[100px] lg:w-[300px] z-20"
        // className="w-[80%] mx-auto"
      />
      <Image
        src="/about1.jpg"
        width={300}
        height={400}
        alt="Mountains and forests with two cabins"
        className="rounded-full max-md:w-[100px] lg:w-[300px] z-20"
        // className="w-[80%] mx-auto"
      />
    </div>
  );
}

export default Serve;
