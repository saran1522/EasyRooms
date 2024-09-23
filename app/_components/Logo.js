import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image
        src="/logo2.png"
        quality={100}
        height="100"
        width="200"
        alt="The Wild Oasis logo"
        className="invert-0"
      /> */}
      <span className="text-xl p-4 font-semibold text-primary-800">
        EasyRooms
      </span>
    </Link>
  );
}

export default Logo;
