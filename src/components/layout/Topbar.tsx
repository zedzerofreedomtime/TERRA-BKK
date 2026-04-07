import {
  CircleUserRound,
  Globe,
  ChevronDown,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="panel soft-shadow flex h-[68px] items-center justify-between border-b bg-white px-4 md:px-6">
      {/* ซ้าย: โลโก้สำหรับจอเล็ก */}
      <div className="mobile-sidebar flex items-center gap-1">
        <span className="text-[18px] font-extrabold tracking-tight text-[#d13a2f]">
          TERRA
        </span>
        <span className="text-[18px] font-light tracking-tight text-[#6d6d6d]">
          BKK
        </span>
        <span className="ml-1 inline-block h-3 w-3 rotate-45 rounded-[2px] bg-[#c40000]" />
      </div>

      {/* ขวา */}
      <div className="ml-auto flex items-center gap-2 md:gap-3">
        <button
          type="button"
          className="icon-btn h-9 w-9 rounded-full"
          aria-label="user"
        >
          <CircleUserRound className="h-4 w-4" />
        </button>

        <button
          type="button"
          className="icon-btn flex h-9 items-center gap-1 rounded-full px-3"
          aria-label="language"
        >
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