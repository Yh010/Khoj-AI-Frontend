import Image from "next/image";
import YCBacked from "../../public/YCBacked.png";
import elevenlabs from "../../public/elevenlabs.png";

export default function BackedBy() {
  return (
    <div className="relative flex justify-center items-center pt-10 pb-10">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <div>
        <div className="text-center">Backed by Incredible Investors from</div>
        <div className="mt-6 flex justify-center items-center">
          <div className="w-1/4 h-1/4">
            <Image src={YCBacked} alt="backed by YC" />
          </div>
          <div className="w-1/4 border shadow-lg p-6 rounded-2xl ">
            <Image src={elevenlabs} alt="backed by eleven labs" />
          </div>
        </div>
      </div>
    </div>
  );
}
