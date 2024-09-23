import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import TextExpander from "@/app/_components/TextExpander";

export default function Cabin({ cabin }) {
  //   const { id, name, maxCapacity, regularPrice, discount, image, description } =
  const { name, maxCapacity, image, description } = cabin;
  return (
    <div className="grid grid-cols-[3fr_4fr] max-md:grid-cols-1 gap-2 lg:gap-20 py-3 px-1 max-md:place-items-center lg:px-10 mb-24">
      <div className="">
        <Image
          src={image}
          height={200}
          width={200}
          // fill
          className="object-cover h-[300px] w-[500px]"
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h2 className="text-primary-400 max-md:text-6xl text-7xl font-semibold mb-5 lg:translate-y-3 lg:translate-x-[-154px] bg-primary-950 p-2 lg:p-6 pb-1 w-fit">
          Room {name}
        </h2>

        <p className="text-lg mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <FiUsers className="h-5 w-5" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MdOutlineLocationOn className="h-5 w-5 " />
            <span className="text-lg">
              Located in the heart of the Indian Hills
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <FaRegEyeSlash className="h-5 w-5" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
