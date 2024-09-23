import Image from "next/image";
import { getCabins } from "@/app/_lib/data-service";
import Link from "next/link";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();
  const noOfCabins = cabins.length;
  return (
    <div className="grid lg:grid-cols-5 p-4 lg:gap-x-24 gap-y-12 lg:gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 font-medium">Welcome to EasyRooms</h1>

        <div className="space-y-8 leading-9">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Mussoorie, Drass, Dalhousie, Kullu,
            Shimla, Nainital and many more, this is your paradise away from
            home. But it&apos;s not just about the luxury rooms. It&apos;s about
            the experience of reconnecting with nature and enjoying simple
            pleasures with family.
          </p>
          <p>
            Our luxury rooms provide a cozy base, but the real freedom and peace
            you&apos;ll find in the surrounding mountains. Wander through lush
            forests, breathe in the fresh air, and watch the stars twinkle above
            from the warmth of a campfire or your hot tub.
          </p>
        </div>
      </div>

      <div className="lg:relative lg:aspect-square lg:col-span-2">
        <Image
          src="/about1.jpg"
          fill
          alt="Family sitting around a fire pit in front of cabin"
          className="object-cover mx-auto max-md:hidden"
        />
      </div>

      <div className="relative aspect-square w-full col-span-2">
        <Image
          src="/about2.jpg"
          fill
          alt="Family that manages The Wild Oasis"
          className="object-cover max-md:mx-auto max-md:-translate-x-12 max-md:h-40 max-md:w-40"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 font-medium">
          Managed by our group since 2020
        </h1>

        <div className="space-y-6 leading-9">
          <p>
            Since 2020, The Easyrooms has been a cherished group-managed
            retreat. Started by our dedicated team, this haven has been nurtured
            with professionalism and care, evolving through the years as a
            testament to our commitment to creating a warm, welcoming
            environment.
          </p>
          <p>
            Here, you&apos;re not just a guest; you&apos;re a valued member of
            our extended community. Join us at The Easyrooms soon, where our
            collaborative spirit meets tranquility, and every visit feels like a
            return to a familiar, comforting space.
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 px-8 py-5 text-lg font-semibold bg-primary-500 transition-all text-gray-100"
            >
              Explore our luxury rooms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
