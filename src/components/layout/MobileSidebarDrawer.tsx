"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Briefcase,
  CircleUserRound,
  FileText,
  HeartHandshake,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  Settings,
  Shield,
  Tags,
  X,
} from "lucide-react";

type MobileSidebarDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const menuSections = [
  {
    title: "MAIN",
    items: [
      { label: "หน้าเว็บไซต์ของคุณ", href: "/", icon: CircleUserRound },
      { label: "Dashboard", href: "/", icon: LayoutDashboard },
      { label: "โปรไฟล์", href: "/profile", icon: CircleUserRound },
      { label: "ข้อความ", href: "/messages", icon: MessageSquare, badge: "0" },
      { label: "พอร์ต", href: "/wallet", icon: Tags },
      { label: "รายการกำกับสิทธิ์", href: "/permissions", icon: FileText },
      { label: "เอเย่น", href: "/agent", icon: Shield },
      { label: "ผู้ติดต่อใช้งาน", href: "/contacts", icon: CircleUserRound },
    ],
  },
  {
    title: "LISTINGS",
    items: [
      { label: "ประกาศของคุณ", href: "/my-listings", icon: FileText },
      { label: "รายงานประกาศของคุณ", href: "/listing-reports", icon: Activity },
      { label: "ทรัพย์ที่สนใจ", href: "/favorites", icon: HeartHandshake },
      { label: "เพิ่มประกาศ", href: "/add-listing", icon: Megaphone },
    ],
  },
  {
    title: "TERRAAGENT",
    items: [
      { label: "ตัวของฉัน", href: "/me", icon: Briefcase },
      { label: "ประวัติการลงทะเบียน", href: "/register-history", icon: FileText },
    ],
  },
  {
    title: "SETTINGS",
    items: [{ label: "ลบบัญชีผู้ใช้", href: "/settings", icon: Settings }],
  },
];

export default function MobileSidebarDrawer({
  open,
  onClose,
}: MobileSidebarDrawerProps) {
  const pathname = usePathname();

  return (
    <>
      {/* ฉากดำด้านหลัง */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* ตัว drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[272px] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex h-[64px] items-center justify-between border-b border-[#ececec] px-4">
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-extrabold text-[#d53b2f]">TERRA</span>
            <span className="text-[18px] font-light text-[#5f6672]">BKK</span>
            <span className="h-3 w-3 rotate-45 rounded-[2px] bg-[#c40000]" />
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ececec] text-[#5f6672]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto px-0 py-3">
          {menuSections.map((section) => (
            <div key={section.title} className="mb-5">
              <div className="px-4 pb-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a6acb5]">
                  {section.title}
                </p>
              </div>

              <div>
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-4 py-3 text-[13px] transition ${
                        isActive
                          ? "bg-[#f4f4f4] font-semibold text-[#20242a]"
                          : "text-[#5f6672]"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="truncate">{item.label}</span>

                      {"badge" in item && item.badge ? (
                        <span className="ml-auto inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b30000] px-1.5 text-[10px] text-white">
                          {item.badge}
                        </span>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-[#ececec] px-4 py-4 text-[10px] leading-5 text-[#b0b4bc]">
          © TERRABKK 2026.
          <br />
          ALL RIGHTS RESERVED.
        </div>
      </aside>
    </>
  );
}