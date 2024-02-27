import Heading from "@/components/Heading";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Heading>Indie Gamer</Heading>

      <p className="pb-3">Only the best indie games, reviewed for you.</p>

      <div className="border rounded shadow w-80 sm:w-full hover:shadow-xl bg-white">
        <Link
          href={{
            pathname: "/reviews/stardew-valley",
          }}
          className="flex flex-col sm:flex-row"
        >
          <img
            src="/images/stardew-valley.jpg"
            alt="Stardw Valley"
            width={320}
            height={180}
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="py-1 sm:px-2 text-center font-semibold font-orbitron">
            Stardew Valley
          </h2>
        </Link>
      </div>
    </>
  );
}
