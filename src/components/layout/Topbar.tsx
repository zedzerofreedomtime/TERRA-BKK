import Image from "next/image";
import { CircleUserRound, Globe, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header className="panel soft-shadow flex h-[68px] items-center justify-between border-b bg-white px-4 md:px-6">
      <div className="mobile-sidebar">
        <Image
          src="/terrabkk-logo.png"
          alt="TERRABKK"
          width={160}
          height={42}
          className="h-auto w-[130px]"
          priority
        />
      </div>

      <div className="ml-auto flex items-center gap-2 md:gap-3">
        <button type="button" className="icon-btn h-9 w-9 rounded-full">
          <CircleUserRound className="h-4 w-4" />
        </button>

        <button type="button" className="icon-btn flex h-9 items-center gap-1 rounded-full px-3">
          <Globe className="h-4 w-4" />
          <ChevronDown className="h-3.5 w-3.5" />
        </button>

        <button
          type="button"
          className="red-btn h-9 rounded-md px-4 text-[12px] font-semibold"
        >
          + เพิ่มประกาศ
        </button>
      </div>
    </header>
  );
}