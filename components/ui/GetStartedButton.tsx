import Link from "next/link";

export default function GetStartedButton() {
  return (
    <div>
      <div className="border p-2 rounded-lg border-zinc-400 bg-amber-50 shadow-lg">
        <Link href={"https://app.khoj.dev/"}>Get Started</Link>
      </div>
    </div>
  );
}
