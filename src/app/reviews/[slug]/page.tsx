import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";

export async function generateStaticParams() {
  const slugs = await getSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ReviewPage({
  params,
}: {
  params: { slug: string };
}) {
  const review = await getReview(params.slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.date}</p>

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
