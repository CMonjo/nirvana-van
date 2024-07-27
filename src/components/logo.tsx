import Image from "next/image";

export default function Logo({
  color = "black",
}: {
  color?: "white" | "black";
}) {
  const width = 268;
  const height = 61;

  return (
    <Image
      src={`/logo_${color}.png`}
      width={width * 0.5}
      height={height * 0.5}
      alt="Picture of the author"
    />
  );
}
