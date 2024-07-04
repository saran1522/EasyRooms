import Image from "next/image";
import bg1 from "@/public/bg1.jpg";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg1}
        fill
        quality={100}
        placeholder="blur"
        alt="Mountains and forests with two cabins"
        className="object-cover"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to EasyRooms
        </h1>
        <a
          href="/cabins"
          className="bg-btn-700  px-8 py-6 text-primary-50 text-lg font-semibold hover:bg-btn-750 transition-all"
        >
          Explore luxury rooms
        </a>
      </div>
    </main>
  );
}
