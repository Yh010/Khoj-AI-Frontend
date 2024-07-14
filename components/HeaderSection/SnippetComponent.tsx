"use client";
import { CheckIcon, ClipboardCopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";

/* TODO: USE TYPES AND INTERFACE FOR THE COPY ACTION */
export default function SnippetComponent() {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = () => {
    const text = `pip install khoj-assistant\n khoj`;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess("Copied!");
      })
      .catch((err) => {
        setCopySuccess("Failed to copy!");
        console.error("Failed to copy text: ", err);
      });
    setTimeout;
    setTimeout(() => setCopySuccess(""), 2000);
  };

  return (
    <div>
      <div className="border rounded-lg border-zinc-400 p-2 flex space-x-4 ">
        <div>
          <div>$ pip install khoj-assistant </div>
          <div>$ khoj</div>
        </div>
        <div>
          <button
            onClick={handleCopy}
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            {!copySuccess ? <ClipboardCopyIcon /> : <CheckIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}
