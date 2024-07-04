import Image from "next/image";
import Link from "next/link";
import { auth } from "@/app/_lib/auth";

export default async function Navigation() {
  const session = await auth();
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-primary-400 text-accent-600 transition-colors"
          >
            Rooms
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-primary-400 text-accent-600 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user ? (
            <Link
              href="/account"
              className="hover:text-primary-400 text-accent-600 transition-colors"
            >
              <img
                src={session.user.image}
                alt="profile"
                className="rounded-full h-10"
              />
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-primary-400 text-accent-600 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
