import Image from "next/image";
import React from "react";

function ServeImage({ src, text }) {
  return (
    <div className="h-auto flex gap-10 max-md:gap-5 flex-col items-center">
      <Image
        src={src}
        width={400}
        height={400}
        alt="Mountains and forests with two cabins"
        className="rounded-full object-cover max-md:h-[200px] h-[400px] w-[300px]"
      />
      <p className="text-primary-500 lg:w-40 text-center max-md:text-3xl text-5xl font-bold">
        {text}
      </p>
    </div>
  );
}

export default ServeImage;
