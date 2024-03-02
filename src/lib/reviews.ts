import { readFile, readdir } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

type Review = {
  title: string;
  date: string;
  image: string;
  body: string;
  slug: string;
};

export async function getFeaturedReview() {
  const reviews = await getReviews();

  return reviews[0];
}

export async function getReview(slug: string) {
  const text = await readFile(`./src/content/reviews/${slug}.md`, "utf-8");

  const {
    content,
    data: { title, date, image },
  } = matter(text);

  const body = marked(content);

  return { title, date, image, body, slug } as Review;
}

export async function getReviews() {
  const reviews: Review[] = [];

  const slugs = await getSlugs();

  for (const slug of slugs) {
    const review = await getReview(slug);

    reviews.push(review);
  }

  reviews.sort((a, b) => b.date.localeCompare(a.date));

  return reviews;
}

export async function getSlugs() {
  const files = await readdir("./src/content/reviews");

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
