import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import {
  FigmaLogoIcon,
  FramerLogoIcon,
  LinkedInLogoIcon,
  ModulzLogoIcon,
  NotionLogoIcon,
  TwitterLogoIcon,
  VercelLogoIcon,
} from "@radix-ui/react-icons";

export default function CompaniesMarquee() {
  return (
    <div className="mb-16">
      <div className="pb-20 text-3xl">
        Trusted and loved by teams, and businesses of all sizes
      </div>
      <div className="flex justify-center items-center w-88">
        <Marquee
          className="gap-[3rem] [--duration:10s]"
          innerClassName="gap-[3rem] [--gap:3rem]"
          fade={true}
        >
          <div>
            <ModulzLogoIcon className="h-16 w-16" />
          </div>
          <div>
            <FigmaLogoIcon className="h-16 w-16" />
          </div>
          <div>
            <FramerLogoIcon className="h-16 w-16" />
          </div>
          <div>
            <TwitterLogoIcon className="h-16 w-16" />
          </div>
          <div>
            <VercelLogoIcon className="h-16 w-16" />
          </div>
          <div>
            <NotionLogoIcon className="h-16 w-16" />
          </div>
          <div>
            <LinkedInLogoIcon className="h-16 w-16" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
