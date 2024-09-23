import Image from "next/image";
import Infobar from "./_components/Infobar";
import Serve from "./_components/Serve";

export default function Page() {
  return (
    <main className="w-full">
      <div className="flex p-4 w-full max-md:flex-col max-md:gap-10">
        <div className="relative lg:w-[40%] z-10 text-center flex justify-center items-center flex-col">
          <h1 className="text-6xl max-md:text-5xl max-md:leading-snug font-semibold leading-tight tracking-wider mb-4 lg:mb-10">
            Find Your Perfect
            <span className="underline text-primary-500"> Stay</span>,
            Effortlessly
          </h1>
          <a
            href="/cabins"
            className="bg-[#6b66ff] px-6 py-4 rounded-lg text-lg font-semibold hover:bg-btn-750 transition-all text-gray-100"
          >
            Explore Rooms &rarr;
          </a>
        </div>
        <div className="lg:w-[60%] flex justify-center items-center ">
          <Image
            src="/photo-grid.png"
            alt="Mountains and forests with two cabins"
            height={800}
            width={850}
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 lg:mt-24 mt-10 leading-8 ">
        <h3 className="text-center lg:text-5xl text-2xl font-semibold">
          Unforgettable Memories
        </h3>
        <h3 className="text-center lg:text-5xl text-2xl font-semibold">
          Unparalleled Comfort
        </h3>
        <p className="text-center lg:text-lg lg:w-[70%] mx-auto">
          Experience Ultimate travel comfort with our innovative hotel booking
          app. Explore a curated collection of collective hotels for an
          unforgettable accomodation experience.
        </p>
      </div>
      <Infobar />
      <div className="w-full my-10">
        <Serve />
      </div>
    </main>
  );
}
