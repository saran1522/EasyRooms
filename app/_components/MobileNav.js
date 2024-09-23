import React from "react";
import Link from "next/link";
function MobileNav({ showMobileNav, session }) {
  return (
    <div
      className={`${
        showMobileNav ? "w-full" : "w-0"
      } z-30 top-15 right-0 bg-primary-400 transition-all fixed h-screen`}
    >
      <ul className="flex mt-10 font-semibold text-gray-100 flex-col w-full h-screen gap-16 items-center">
        <li>
          <Link href="/cabins">Rooms</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          {session?.user ? (
            <Link href="/account">
              <img
                src={session.user.image}
                alt="profile"
                className="rounded-full h-10"
              />
            </Link>
          ) : (
            <Link href="/account">Guest area</Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
