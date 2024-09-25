"use client";
import { FiCalendar, FiUser } from "react-icons/fi";
import { RiHome3Line } from "react-icons/ri";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <RiHome3Line className="h-5 w-5" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <FiCalendar className="h-5 w-5" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <FiUser className="h-5 w-5" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();
  return (
    <nav className="border-r max-md:w-fit border-gray-300">
      <ul className="flex lg:flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 max-md:w-fit px-5 hover:bg-primary-400 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                link.href === pathname ? "bg-primary-500 text-gray-100" : ""
              }`}
              href={link.href}
            >
              <span className="">{link.icon}</span>

              <span className="max-md:hidden">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
