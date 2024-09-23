import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";
import Filter from "./Filter";

export default async function CabinsList({ filter }) {
  const cabins = await getCabins();
  let displayCabins;
  if (filter === "small")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  else if (filter === "medium")
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  else if (filter === "large")
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  else displayCabins = cabins;

  return (
    cabins.length > 0 && (
      <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 xl:gap-14 m-auto">
        {displayCabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    )
  );
}
