import Image from "next/image";
import KhojScreen from "../../public/khojScreen.png";
export default function JumpToContextSection() {
  return (
    <div className="flex justify items-center  bg-gradient-to-r from-amber-50  via-amber-100 to-amber-50 shadow-md p-10">
      <div className="pt-10 ">
        <div className="text-5xl font-bold text-center">
          Jump straight into context
        </div>
        <div className="flex justify-center">
          <div className="mt-16 ml-16 mr-16 ">
            <Image src={KhojScreen} alt="khojscreen" className="h-96" />
          </div>
          <div className="text-start text-3xl w-1/2 mt-16 align-middle flex flex-col justify-center ">
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
