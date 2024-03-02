"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <button
      className="border flex gap-1 items-center px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
      type="button"
      onClick={handleClick}
    >
      <LinkIcon className="w-4 h-4" />
      {copied ? "Link copied!" : "Share Link"}
    </button>
  );
}
