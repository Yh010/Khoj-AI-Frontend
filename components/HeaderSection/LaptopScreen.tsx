import Image from "next/image";
import Laptop from "../../public/Laptop.png";
export default function LaptopScreen() {
  return (
    <div className="text-center text-balance space-y-4">
      <div className=" text-5xl font-bold mb-4">
        Find and build on top of your personal data.{" "}
      </div>
      <div>
        You can interact with Khoj on your computer from Emacs, Obsidian or your
        web browser.
      </div>
      <div className="flex justify-center">
        <div>
          <Image src={Laptop} alt="laptop" />
        </div>
      </div>
    </div>
  );
}
