import Image from "next/image";

export default function Logo({ image, alt, className }) {
  return <Image src={image} alt={alt} width={200} height={100} className={className} />;
}
