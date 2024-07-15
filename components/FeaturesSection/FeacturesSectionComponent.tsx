import {
  BackpackIcon,
  DesktopIcon,
  IdCardIcon,
  LightningBoltIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  QuestionMarkIcon,
} from "@radix-ui/react-icons";
import { Layers2Icon } from "lucide-react";

export default function FeaturesSectionComponent() {
  return (
    <div className="flex justify-center items-center pt-10 pb-10">
      <div>
        <div className="flex justify-center">
          <Layers2Icon />
        </div>
        <div className="text-center mt-4">
          <div className="font-bold text-lg">
            Everything you need-All in one platform.
          </div>
          <div className="font-light">
            Easily get answers without having to sift through online results or
            your own notes.
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-4 border-t border-b border-zinc-300 m-4 w-3/4 p-10">
            <div>
              <div className="shadow-lg border border-zinc-300 p-4">
                <div className="flex  items-center space-x-2">
                  <div>
                    <BackpackIcon />
                  </div>

                  <div className="font-semibold">Connect your knowledge</div>
                </div>

                <div className="text-balance flex items-center font-light">
                  Optionally, Khoj can understand your PDFs, markdown,
                  plaintext, GitHub, and Notion, with more in the works. Connect
                  files directly from your computer using our Desktop
                  Application. They will automatically stay in sync.
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-lg border border-zinc-300 p-4 h-full">
                <div className="flex  items-center space-x-2">
                  <div>
                    <DesktopIcon />
                  </div>

                  <div className="font-semibold">Engage anytime, anywhere</div>
                </div>

                <div className="text-balance flex items-center font-light">
                  Use our native desktop app on any OS. Or use our first-party
                  clients for Emacs, Obsidian or Whatsapp to stay within your
                  existing workflow.
                </div>
              </div>
            </div>
            <div>
              <div className="border shadow-lg border-zinc-300 p-4 h-full">
                <div className="flex  items-center space-x-2">
                  <div>
                    <PersonIcon />
                  </div>

                  <div className="font-semibold">Work hands-free</div>
                </div>

                <div className="text-balance flex items-center font-light">
                  We support speech-to-text, meaning you can talk directly into
                  your mic and Khoj will understand your voice (in your native
                  tongue!).
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-lg border border-zinc-300 p-4 h-full">
                <div className="flex  items-center space-x-2">
                  <div>
                    <MagnifyingGlassIcon />
                  </div>

                  <div className="font-semibold">
                    Replace your search engine
                  </div>
                </div>

                <div className="text-balance flex items-center font-light">
                  Khoj performs internet searches on your behalf, so you can
                  stay focused on your work. It has access to the freshest
                  information online, so you do not have to switch tabs or
                  devices, or sift through links, to get the information you
                  need.
                </div>
              </div>
            </div>
            <div>
              <div className=" shadow-lg border border-zinc-300 p-4 h-full">
                <div className="flex  items-center space-x-2">
                  <div>
                    <LightningBoltIcon />
                  </div>

                  <div className="font-semibold">
                    Get a village&apos;s worth of help
                  </div>
                </div>

                <div className="text-balance flex items-center font-light">
                  Khoj gives you access to custom AI agents that can help with
                  more specific tasks. Think, personal doctor, therapist,
                  professor. You can see all of them in the Agents page.
                </div>
              </div>
            </div>
            <div>
              <div className="shadow-lg border border-zinc-300 p-4 h-full">
                <div className="flex  items-center space-x-2">
                  <div>
                    <IdCardIcon />
                  </div>

                  <div className="font-semibold">Are you a student?</div>
                </div>

                <div className="text-balance flex items-center font-light">
                  We have special pricing for students. Check it out.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
