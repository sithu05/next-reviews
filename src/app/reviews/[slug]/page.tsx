import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import type { Metadata } from "next";

import ShareLinkButton from "@/components/ShareLinkButton";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const review = await getReview(params.slug);

  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params }: Props) {
  const review = await getReview(params.slug);

  return (
    <>
      <Heading>{review.title}</Heading>

      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>

        <ShareLinkButton />
      </div>

      <img
        src={review.image}
        alt="Stardw Valley"
        width={640}
        height={360}
        className="mb-2 rounded"
      />

      <article
        className="prose prose-slate max-w-screen-sm"
        dangerouslySetInnerHTML={{ __html: review.body }}
      />
    </>
  );
}
