import Heading from "@/components/Heading";

export default function StardewValley() {
  return (
    <>
      <Heading>Stardew Valley</Heading>

      <img
        src="/images/stardew-valley.jpg"
        alt="Stardw Valley"
        width={640}
        height={360}
        className="mb-2 rounded"
      />

      <p>This will be the review of Stardew Valley.</p>
    </>
  );
}
