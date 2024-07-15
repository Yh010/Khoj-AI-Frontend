import Image from "next/image";

import logo from "../../public/image.png";
export default function Footer() {
  return (
    <div className=" border-t border-zinc-400 p-3 bg-amber-50 shadow-md">
      <div className="flex ">
        <div className="w-1/4 flex justify-center text-center">
          <div>
            <Image
              alt="logo"
              src={logo}
              className="h-14 w-16 border-zinc-400"
            />
          </div>
        </div>
        <div className="w-3/4 text-center m-6">
          <div className="grid grid-cols-3">
            <div className="text-2xl">Product</div>
            <div className="text-2xl">Company</div>
            <div className="text-2xl">Contact</div>
            <div className="mt-6 space-y-3">
              <div>Documentation</div>
              <div>Changelog</div>
            </div>
            <div className="mt-6 space-y-3">
              <div>About</div>
              <div>Careers</div>
              <div>Blog</div>
            </div>
            <div className="mt-6 space-y-3">
              <div>Discord</div>
              <div>Github</div>
              <div>Email</div>
              <div>Twitter</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div>Copyright © 2023 Realm Software Inc. All rights reserved.</div>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
      </div>
    </div>
  );
}
