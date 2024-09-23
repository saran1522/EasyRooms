import React from "react";

function InfoItem({ icon: Icon, text }) {
  return (
    <div className="font rounded-xl flex flex-col items-center gap-2 max-md:text-3xl text-center w-full shadow-[0_0_15px_rgba(0,0,0,0.1)] px-3 py-6 overflow-hidden">
      <span>
        <Icon className="" size={60} />
      </span>
      <p>{text}</p>
    </div>
  );
}

export default InfoItem;
