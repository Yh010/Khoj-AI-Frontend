import Image from "next/image";
import KhojScreen from "../../public/khojScreen.png";
export default function JumpToContextSection() {
  return (
    <div className="flex justify-center bg-amber-50 h-">
      <div className="pt-10">
        <div className="text-5xl font-bold text-center">
          Jump straight into context
        </div>
        <div className="flex h-auto">
          <div className="mt-16 ml-16 mr-16 h-auto">
            <Image src={KhojScreen} alt="khojscreen" className="h-2/3" />
          </div>
          <div className="text-start text-3xl w-1/2 mt-16 h-auto ">
            <div>
              Khoj allows you to leverage AI to make better sense of your notes
              and documents.
            </div>
            <div className="mt-24">
              Many of us spend hours a day looking up, collating and organizing
              our information. Khoj saves you time by naturally parsing your own
              data and merging it with online info.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
