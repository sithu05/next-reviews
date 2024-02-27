import Heading from "@/components/Heading";

export default function HollowKnight() {
  return (
    <>
      <Heading>Hollow Knight</Heading>

      <img
        src="/images/hollow-knight.jpg"
        alt="Hollow Knight"
        width={640}
        height={360}
        className="mb-2 rounded"
      />

      <p>This will be the review of Hollow Knight.</p>
    </>
  );
}
