import Heading from "@/components/Heading";
import Link from "next/link";
import { getFeaturedReview } from "@/lib/reviews";

export default async function Home() {
  const review = await getFeaturedReview();

  return (
    <>
      <Heading>Indie Gamer</Heading>

      <p className="pb-3">Only the best indie games, reviewed for you.</p>

      <div className="border rounded shadow w-80 sm:w-full hover:shadow-xl bg-white">
        <Link
          href={{
            pathname: `/reviews/${review.slug}`,
          }}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={review.image}
            alt="Stardw Valley"
            width={320}
            height={180}
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="py-1 sm:px-2 text-center font-semibold font-orbitron">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
