import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/logo.png"
        quality={100}
        height="100"
        width="200"
        alt="The Wild Oasis logo"
        // className="rounded-full"
      />
      {/* <span className="text-xl font-semibold text-primary-100">EasyRooms</span> */}
    </Link>
  );
}

export default Logo;
