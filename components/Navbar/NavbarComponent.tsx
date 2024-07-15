import Image from "next/image";
import logo from "../../public/image.png";
import Link from "next/link";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
export default function NavbarComponent() {
  return (
    <div className="flex justify-around items-center border-b border-zinc-400 p-3 bg-amber-50 shadow-md">
      <Link href={"https://khoj.dev/"}>
        <div className="border shadow-lg rounded-xl ">
          <Image alt="logo" src={logo} className="h-14 w-16 border-zinc-400" />
        </div>
      </Link>

      <div className="flex space-x-4 border rounded-2xl shadow-md p-1">
        <div className="hover:border-zinc-400 border-transparent border w-14 text-center p-2 rounded-2xl hover:bg-amber-100">
          <Link href={"https://khoj.dev/whatsapp"}>Docs</Link>
        </div>
        <div className="hover:border-zinc-400 border-transparent border w-18 text-center p-2 rounded-2xl hover:bg-amber-100">
          <Link href={"https://khoj.dev/pricing"}>Pricing</Link>
        </div>
        <div className="hover:border-zinc-400 border-transparent border w-18 text-center p-2 rounded-2xl hover:bg-amber-100">
          <Link href={"https://khoj.dev/whatsapp"}>Whatsapp</Link>
        </div>
        <div className="hover:border-zinc-400 border-transparent border w-14 text-center p-2 rounded-2xl hover:bg-amber-100">
          <Link href={"https://blog.khoj.dev/"}>Blog</Link>
        </div>
      </div>

      <div className="flex space-x-14">
        <div>
          <Link href={"https://discord.com/invite/BDgyabRM6e"}>
            <DiscordLogoIcon className="h-8 w-8" />
          </Link>
        </div>
        <div className="group text-center">
          <Link
            className="flex space-x-1 items-center"
            href={"https://github.com/khoj-ai/khoj"}
          >
            <GitHubLogoIcon className="h-8 w-8" />
            <div className="w-16 group-hover:hidden">12k</div>
            <div className="w-16 hidden group-hover:block text-sm">Star us</div>
          </Link>
        </div>
        <div className="">
          <Link href={"https://twitter.com/khoj_ai"}>
            <Button>
              <div className="">Book a demo</div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
