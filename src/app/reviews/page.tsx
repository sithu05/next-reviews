import Link from "next/link";

import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";

export default async function Reviews() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>

      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => {
          return (
            <li
              key={review.slug}
              className="border rounded w-80 shadow hover:shadow-xl bg-white"
            >
              <Link
                href={{
                  pathname: `/reviews/${review.slug}`,
                }}
              >
                <img
                  src={review.image}
                  alt="Hollow Knight"
                  width={320}
                  height={180}
                  className="rounded-t"
                />
                <h2 className="text-center py-1 font-semibold font-orbitron">
                  {review.title}
                </h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
