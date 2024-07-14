import { Snippet } from "next/font/google";
import YCFeaturedComponent from "../YCFeatured/YCFeaturedComponent";
import SnippetComponent from "./SnippetComponent";
import GetStartedButton from "../ui/GetStartedButton";

export default function HeaderSectionComponent() {
  return (
    <div className="space-y-24">
      <div className="flex justify-center">
        <YCFeaturedComponent />
      </div>

      <div className="space-y-4">
        <div className="text-center text-8xl font-bold">Merge AI</div>
        <div className="text-center text-8xl ">with your brain</div>
        <div className="p-8">
          Khoj is the open-source, AI copilot for search. Easily get answers
          without having to sift through online results or your own notes.
        </div>
      </div>

      <div className="flex justify-center space-x-6 items-center">
        <SnippetComponent />
        <GetStartedButton />
      </div>
    </div>
  );
}
