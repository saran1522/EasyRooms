import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import Toggler from "./Toggler";
import MobileNav from "./MobileNav";
import { auth } from "@/app/_lib/auth";
async function Header() {
  const session = await auth();
  return (
    <header className="px-8 flex items-center max-w-full justify-between ">
      <Logo />
      <Navigation />
      <Toggler session={session} />
    </header>
  );
}

export default Header;
