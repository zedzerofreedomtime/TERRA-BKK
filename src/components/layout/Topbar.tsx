"use client";

import { useState } from "react";
import {
  Bell,
  CircleUserRound,
  Globe,
  Menu,
  ChevronDown,
} from "lucide-react";
import MobileSidebarDrawer from "@/components/layout/MobileSidebarDrawer";

export default function Topbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <header className="flex h-[64px] items-center justify-between border-b border-[#ececec] bg-white px-4 md:h-[68px] md:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpenSidebar(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ececec] text-[#5f6672] xl:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1">
            <span className="text-[18px] font-extrabold tracking-tight text-[#d13a2f]">
              TERRA
            </span>
            <span className="text-[18px] font-light tracking-tight text-[#6d6d6d]">
              BKK
            </span>
            <span className="ml-1 inline-block h-3 w-3 rotate-45 rounded-[2px] bg-[#c40000]" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-full border border-[#f1e4d2] bg-[#fff7ed] px-3 py-1.5">
            <span className="text-[12px] font-bold text-[#d97706]">🪙 500</span>
          </div>

          <button
            type="button"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#ececec] text-[#5f6672] sm:flex"
          >
            <Bell className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="hidden h-9 items-center gap-1 rounded-full border border-[#ececec] px-3 text-[#5f6672] sm:flex"
          >
            <Globe className="h-4 w-4" />
            <ChevronDown className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ececec] text-[#5f6672]"
          >
            <CircleUserRound className="h-4 w-4" />
          </button>
        </div>
      </header>

      <MobileSidebarDrawer
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
      />
    </>
  );
}