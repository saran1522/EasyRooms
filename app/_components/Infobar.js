import React from "react";
import { FiCalendar, FiUsers, FiSearch } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";
import InfoItem from "./InfoItem";

function Infobar() {
  return (
    <div className="max-md:flex-col items-center max-md:text-2xl w-[80%] mx-auto mt-10 lg:mb-28 flex gap-4">
      <InfoItem icon={MdOutlineLocationOn} text="Select Location" />
      <InfoItem icon={FiCalendar} text="Select Arrival" />
      <InfoItem icon={FiCalendar} text="Select Departure" />
      <InfoItem icon={FiUsers} text="Select Guests" />
      <InfoItem icon={RiHome3Line} text="Book Rooms" />
    </div>
  );
}

export default Infobar;
