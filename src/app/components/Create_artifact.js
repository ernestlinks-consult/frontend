import Image from "next/image";
import side from "../Images/create_artifact1.png";
import "@/app/css/index.css";
import "@/app/css/mediaQueries.css";

export default function Create_artifact() {
  return (
    <>
      <Image src={side} alt="artifact" className="sideimage" />
    </>
  );
}
