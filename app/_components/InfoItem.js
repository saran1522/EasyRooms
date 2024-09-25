import React from "react";

function InfoItem({ icon: Icon, text }) {
  return (
    <div className="font rounded-xl flex flex-col items-center gap-2 max-md:text-xl text-center w-full text-primary-500 overflow-hidden">
      <span>
        <Icon className="" size={40} />
      </span>
      <p>{text}</p>
    </div>
  );
}

export default InfoItem;
