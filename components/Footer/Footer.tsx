import Image from "next/image";

import logo from "../../public/image.png";
import Link from "next/link";
export default function Footer() {
  return (
    <div className=" border-t border-zinc-400 p-3 bg-amber-50 shadow-md">
      <div className="flex ">
        <div className="w-1/4 flex justify-center text-center">
          <Link href={"https://khoj.dev/"}>
            <div>
              <Image
                alt="logo"
                src={logo}
                className="h-14 w-16 border-zinc-400 shadow-lg"
              />
            </div>
          </Link>
        </div>
        <div className="w-3/4 text-center m-6">
          <div className="grid grid-cols-3">
            <div className="text-2xl">Product</div>
            <div className="text-2xl">Company</div>
            <div className="text-2xl">Contact</div>
            <div className="mt-6 space-y-3">
              <div>
                <Link href={"https://docs.khoj.dev/#/"}>Documentation</Link>
              </div>
              <div>Changelog</div>
            </div>
            <div className="mt-6 space-y-3">
              <div>About</div>
              <div>Careers</div>
              <div>
                <Link href={"https://blog.khoj.dev/"}>Blog</Link>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div>
                <Link href={" https://discord.com/invite/BDgyabRM6e"}>
                  Discord
                </Link>
              </div>
              <div>
                <Link href={"https://github.com/khoj-ai/khoj"}>Github</Link>
              </div>
              <div>Email</div>
              <div>
                <Link href={"https://twitter.com/khoj_ai"}>Twitter</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div>Designed by Yash Hegde</div>
      </div>
    </div>
  );
}
