import { Suspense } from "react";
import CabinsList from "../_components/CabinsList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// export const revalidate = 3600;

export const metadata = {
  title: "Rooms",
};

export default async function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className="p-4">
      <h1 className="text-4xl mb-5 text-primary-400 font-medium">
        Our Luxury Rooms
      </h1>
      <p className="text-lg mb-10">
        Cozy yet luxurious rooms, located in several cities in India. Imagine
        waking up to beautiful mountain views, spending your days exploring the
        dark forests around, or just relaxing in your private hot tub under the
        stars. Enjoy nature&apos;s beauty in your own little home away from
        home. The perfect spot for a peaceful, calm vacation. Welcome to
        paradise.
      </p>
      <div className="flex justify-end mb-4 ">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinsList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
