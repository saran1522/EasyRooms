import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid w-full lg:grid-cols-[16rem_1fr] h-full lg:gap-12">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}
