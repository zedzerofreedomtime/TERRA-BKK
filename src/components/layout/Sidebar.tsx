"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BookOpen,
  Briefcase,
  ChevronDown,
  CircleUserRound,
  FileText,
  Globe,
  HeartHandshake,
  LayoutDashboard,
  Megaphone,
  Newspaper,
  Settings,
  Shield,
  Tags,
  MessageSquare,
} from "lucide-react";

type MenuItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  hasDropdown?: boolean;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const sections: MenuSection[] = [
  {
    title: "MAIN",
    items: [
      { label: "หน้าเว็บไซต์ของคุณ", href: "/", icon: Globe },
      { label: "Dashboard", href: "/", icon: LayoutDashboard },
      { label: "โปรไฟล์", href: "/profile", icon: CircleUserRound },
      { label: "ข้อความ", href: "/messages", icon: MessageSquare, badge: "0" },
      { label: "พอร์ต", href: "/wallet", icon: Tags },
      { label: "รายการกำกับสิทธิ์", href: "#", icon: BookOpen, hasDropdown: true },
      { label: "เอเย่น", href: "/agent", icon: Shield },
      { label: "ผู้ติดต่อใช้งาน", href: "#", icon: CircleUserRound, hasDropdown: true },
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
      { label: "ประวัติการลงทะเบียน", href: "/register-history", icon: Newspaper },
    ],
  },
  {
    title: "SETTINGS",
    items: [{ label: "ลบบัญชีผู้ใช้", href: "/settings", icon: Settings }],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="desktop-sidebar panel soft-shadow h-[calc(100vh-1px)] w-[240px] border-r bg-white">
      <div className="flex h-[68px] items-center border-b border-[#ececec] px-5">
        <Link href="/" className="block">
          <Image
            src="/terrabkk-logo.png"
            alt="TERRABKK"
            width={180}
            height={48}
            className="h-auto w-[150px]"
            priority
          />
        </Link>
      </div>

      <div className="h-[calc(100vh-68px)] overflow-y-auto px-0 py-3">
        {sections.map((section) => (
          <div key={section.title} className="mb-5">
            <div className="px-4 pb-2">
              <p className="section-label">{section.title}</p>
            </div>

            <div>
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = item.href !== "#" && pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`sidebar-item ${isActive ? "active" : ""}`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{item.label}</span>
                    {item.badge && <span className="dot-badge">{item.badge}</span>}
                    {item.hasDropdown && <ChevronDown className="ml-auto h-4 w-4" />}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}