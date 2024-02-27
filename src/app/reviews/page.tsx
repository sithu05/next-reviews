import Link from "next/link";

import Heading from "@/components/Heading";

export default function Reviews() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul>
        <li>
          <Link
            href={{
              pathname: "/reviews/hollow-knight",
            }}
          >
            Hollow Knight
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/reviews/stardew-valley",
            }}
          >
            Stardew Valley
          </Link>
        </li>
      </ul>
    </>
  );
}
