import { GitHubLogoIcon } from "@radix-ui/react-icons";
import SnippetComponent from "../HeaderSection/SnippetComponent";
import { Button } from "../ui/button";
import Link from "next/link";

export default function RunSectionComponent() {
  return (
    <div className="flex justify items-center  bg-gradient-to-r from-amber-50  via-amber-100 to-amber-50 shadow-md p-10 ">
      <div className="p-20 flex justify-between w-full ml-24   ">
        <div className="w-1/2">
          <div className="text-5xl font-semibold">And, we are open-source.</div>
          <div className="mt-10 mb-14">
            Khoj is fully open-source, allowing for complete customization and
            self-hosting on your own machine. You can switch between offline or
            online chat models, run it on air-gapped machines, or on your own
            servers. Modify Khoj’s code or configuration to suit your needs.
          </div>
          <div className="mt-4 mb-10">
            <Link href={"https://github.com/khoj-ai/khoj"}>
              <Button>
                <GitHubLogoIcon />
                <div className="p-2">Check us on Github</div>
              </Button>
            </Link>
          </div>
          <div className="flex items-center space-x-16 text-3xl font-semibold">
            <div>
              <div>12k+</div>
              <div className="text-lg font-light">Stars</div>
            </div>
            <div>
              <div>362</div>
              <div className="text-lg font-light">PRs Closed</div>
            </div>
            <div>
              <div>60+</div>
              <div className="text-lg font-light">Contributors</div>
            </div>
          </div>
        </div>

        <div className="flex justify-end"></div>
      </div>
    </div>
  );
}
