import Image from "next/image";
import YC from "../../public/YC.png";
import Link from "next/link";
export default function YCFeaturedComponent() {
  return (
    <div className="h-34 border w-1/3 border-orange-600 p-2 rounded-lg mt-5 font-bold text-orange-600">
      <Link
        href={
          "https://www.linkedin.com/feed/update/urn:li:activity:7203452073185542144/"
        }
      >
        <div className="flex justify-between items-center">
          <div className="text-xs">FEATURED ON</div>
          <div className="h-auto w-32">
            <Image src={YC} alt="YC" />
          </div>
        </div>

        <div className="text-center">AS</div>
        <div className="text-center">
          &quot;TOP 100 OPEN SOURCE STARTUPS&quot;
        </div>
      </Link>
    </div>
  );
}
