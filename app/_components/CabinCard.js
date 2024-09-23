import { FiUsers } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col p-2 overflow-hidden w-[330px] shadow-[0px_0px_10px_rgba(0,0,0,0.155)] rounded-xl ">
      <div className="">
        <Image
          src={image}
          // fill
          width={400}
          height={400}
          alt={`Cabin ${name}`}
          className="object-fill h-40 w-full rounded-lg z-20"
        />
      </div>

      <div className="flex-auto">
        <div className="py-2">
          <h3 className="text-primary-400 font-semibold text-2xl mb-3">
            Room {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <FiUsers className="h-5 w-5" />
            <p className="text-lg ">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 items-baseline">
            {discount > 0 ? (
              <>
                <span className="font-semibold">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="">/ night</span>
          </p>
        </div>

        <div className="">
          <Link
            href={`/cabins/${id}`}
            className="py-4 w-[100%] rounded-lg transition-all inline-block text-center text-gray-100 bg-primary-400"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
