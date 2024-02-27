import Link from "next/link";

import Heading from "@/components/Heading";

export default function Reviews() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-3">
        <li className="border rounded w-80 shadow hover:shadow-xl bg-white">
          <Link
            href={{
              pathname: "/reviews/hollow-knight",
            }}
          >
            <img
              src="/images/hollow-knight.jpg"
              alt="Hollow Knight"
              width={320}
              height={180}
              className="rounded-t"
            />
            <h2 className="text-center py-1 font-semibold font-orbitron">
              Hollow Knight
            </h2>
          </Link>
        </li>
        <li className="border rounded w-80 shadow hover:shadow-xl bg-white">
          <Link
            href={{
              pathname: "/reviews/stardew-valley",
            }}
          >
            <img
              src="/images/stardew-valley.jpg"
              alt="Stardw Valley"
              width={320}
              height={180}
              className=" rounded-t"
            />
            <h2 className="py-1 text-center font-semibold font-orbitron">
              Stardew Valley
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
