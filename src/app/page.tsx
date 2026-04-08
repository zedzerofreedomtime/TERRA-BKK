import type { LucideIcon } from "lucide-react";
import {
  Activity,
  CircleDollarSign,
  Coins,
  Heart,
  MapPinned,
  Pin,
  Star,
  BarChart3,
} from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import ProfileCard from "@/components/dashboard/ProfileCard";
import StatCard from "@/components/dashboard/StatCard";
import ActionCard from "@/components/dashboard/ActionCard";

type StatItem = {
  title: string;
  value: string;
  suffix?: string;
  icon: LucideIcon;
  theme?: "red" | "green";
  actionLabel?: string;
};

const stats: StatItem[] = [
  {
    title: "ประกาศที่ออนไลน์",
    value: "0",
    icon: Activity,
  },
  {
    title: "พอร์ตของคุณ",
    value: "0",
    icon: CircleDollarSign,
  },
  {
    title: "อายุการเป็นสมาชิก",
    value: "0",
    suffix: "เดือน",
    icon: Star,
  },
  {
  title: "",
  value: "",
  icon: Coins,
  theme: "green",
  actionLabel: "เพิ่มพอยท์",
}
];

const actions = [
  {
    title: "ตัวช่วยสำหรับจัดการสถานที่",
    description:
      "สร้างโอกาสที่ดีกว่าสำหรับข้อมูลประกาศของคุณ พร้อมพื้นที่และรายละเอียดให้เห็นได้ชัดมากขึ้น",
    icon: MapPinned,
  },
  {
    title: "แสดงวิเคราะห์สถิติ",
    description:
      "พร้อมบอกประสิทธิภาพการใช้งานในช่วงเวลาต่าง ๆ และตรวจสอบแนวโน้มของประกาศได้สะดวก",
    icon: BarChart3,
  },
  {
    title: "การันตีความน่าเชื่อถือ",
    description:
      "การกำหนดข้อมูลที่เหมาะสมและภาพรวมที่อ่านง่าย ช่วยให้ผู้ใช้งานเห็นรายละเอียดได้ครบถ้วน",
    icon: Heart,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      <div className="flex min-h-screen">
        {/* sidebar ฝั่ง desktop เท่านั้น */}
        <div className="hidden xl:block">
          <Sidebar />
        </div>

        {/* main */}
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />

          <section className="px-4 py-4 md:px-6 xl:px-7">
            <div className="mx-auto w-full max-w-[1180px]">
              {/* หัวข้อ */}
              <div className="mb-4">
                <h1 className="text-[22px] font-extrabold text-[#20242a] md:text-[26px]">
                  แดชบอร์ด
                </h1>
              </div>

              {/* โปรไฟล์ */}
              <ProfileCard
                name="Chanathip Changkaew"
                subtitle="ประกาศโดยใช้ : สมาชิกทั่วไป      เพิ่มเมื่อเป็นสมาชิก"
              />

              {/* stat cards
                 mobile = 1 คอลัมน์
                 tablet = 2 คอลัมน์
                 desktop = 4 คอลัมน์
              */}
              <section className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1.15fr]">
                {stats.map((item, index) => (
                  <StatCard
                    key={index}
                    title={item.title}
                    value={item.value}
                    suffix={item.suffix}
                    icon={item.icon}
                    theme={item.theme}
                    actionLabel={item.actionLabel}
                  />
                ))}
              </section>

              {/* กลางหน้า
                 mobile = เรียงบนลงล่าง
                 desktop = ซ้าย/ขวา
              */}
              <section className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[1.45fr_0.75fr]">
                {/* table package */}
                <article className="rounded-[12px] border border-[#ececec] bg-white shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
                  <div className="flex flex-col gap-2 border-b border-[#efefef] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[14px] font-bold text-[#ea0000]">
                      แพ็กเกจโปรโมชันสำหรับประกาศของคุณ
                    </p>

                    <p className="text-[11px] text-[#a7acb5]">
                      คุณยังไม่ได้ใช้สิทธิ์การประกาศเพิ่มเติม
                    </p>
                  </div>

                  {/* desktop/tablet table */}
                  <div className="hidden sm:block">
                    <div className="grid grid-cols-[70px_1.4fr_1fr] bg-[#162033] px-4 py-3 text-[12px] font-semibold text-white">
                      <span>#</span>
                      <span>ชื่อแพ็กเกจ</span>
                      <span>วันหมดอายุ</span>
                    </div>

                    <div className="flex min-h-[96px] items-center justify-center px-4 text-[12px] text-[#a9aeb7]">
                      ไม่มีแพ็กเกจที่ใช้งานอยู่
                    </div>
                  </div>

                  {/* mobile card style */}
                  <div className="block p-4 sm:hidden">
                    <div className="rounded-[10px] border border-[#ececec] bg-[#fafafa] p-4">
                      <p className="text-[12px] font-semibold text-[#20242a]">
                        ไม่มีแพ็กเกจที่ใช้งานอยู่
                      </p>
                      <p className="mt-1 text-[11px] text-[#98a1ad]">
                        เมื่อมีแพ็กเกจที่ใช้งาน ระบบจะแสดงรายละเอียดตรงนี้
                      </p>
                    </div>
                  </div>
                </article>

                {/* ข่าวล่าสุด */}
                <article className="rounded-[12px] border border-[#ececec] bg-white shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
                  <div className="flex items-center gap-2 border-b border-[#efefef] px-4 py-3">
                    <Pin className="h-4 w-4 text-[#f04c4c]" />
                    <h3 className="text-[15px] font-bold text-[#2a2f38]">
                      ข่าวความล่าสุด
                    </h3>
                  </div>

                  <div className="flex min-h-[133px] items-center justify-center px-4 text-[12px] text-[#a9aeb7]">
                    ไม่มีข่าวมาใหม่
                  </div>
                </article>
              </section>

              {/* action cards */}
              <section className="mt-5">
                <div className="mb-3">
                  <h2 className="text-[17px] font-bold text-[#f00000] md:text-[18px]">
                    ตัวช่วยสำหรับจัดการขาย
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {actions.map((item) => (
                    <ActionCard
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                    />
                  ))}
                </div>
              </section>

              {/* เพิ่มพื้นที่ล่างนิดหน่อย กันชิดขอบบนมือถือ */}
              <div className="h-6" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}