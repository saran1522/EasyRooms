import React from "react";
import { FiCalendar, FiUsers } from "react-icons/fi";
import { RiHome3Line } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import InfoItem from "./InfoItem";

function Infobar() {
  return (
    <div className="max-md:flex-col items-center max-md:text-2xl w-[80%] mx-auto mt-10 lg:mb-28 flex gap-8">
      <InfoItem icon={MdOutlineLocationOn} text="Select Location" />
      <InfoItem icon={FiCalendar} text="Select Arrival" />
      <InfoItem icon={FiCalendar} text="Select Departure" />
      <InfoItem icon={FiUsers} text="Select Guests" />
      <InfoItem icon={RiHome3Line} text="Book Rooms" />
    </div>
  );
}

export default Infobar;
