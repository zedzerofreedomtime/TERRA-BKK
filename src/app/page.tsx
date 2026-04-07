import type { LucideIcon } from "lucide-react";
import {
  Activity,
  CircleDollarSign,
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
    value: "500",
    icon: CircleDollarSign,
  },
  {
    title: "อายุการเป็นสมาชิก",
    value: "10",
    suffix: "เดือน",
    icon: Star,
  },
  {
    title: "",
    value: "",
    icon: Pin,
    theme: "green",
    actionLabel: "เพิ่มพอร์ต",
  },
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
    <main className="app-shell">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main area */}
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />

          <section className="px-4 py-5 md:px-6 xl:px-7">
            <div className="mx-auto max-w-[1180px]">
              {/* title */}
              <div className="mb-4">
                <h1 className="dashboard-title text-[26px]">แดชบอร์ด</h1>
              </div>

              {/* profile card */}
              <ProfileCard
                name="Chanathip Changkaew"
                subtitle="ประกาศโดยใช้ : สมาชิกทั่วไป      เพิ่มเมื่อเป็นสมาชิก"
              />

              {/* stats row */}
              <section className="mt-4 grid gap-3 xl:grid-cols-[1fr_1fr_1fr_1.15fr]">
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

              {/* middle content */}
              <section className="mt-4 grid gap-4 xl:grid-cols-[1.45fr_0.75fr]">
                {/* left table */}
                <article className="panel soft-shadow rounded-[8px] bg-white p-0">
                  <div className="flex items-center justify-between border-b border-[#efefef] px-4 py-3">
                    <div>
                      <p className="text-[14px] font-bold text-[#ea0000]">
                        แพ็กเกจโปรโมชันสำหรับประกาศของคุณ
                      </p>
                    </div>
                    <p className="text-[11px] text-[#a7acb5]">
                      คุณยังไม่ได้ใช้สิทธิ์การประกาศเพิ่มเติม
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-b-[8px]">
                    <div className="table-head grid grid-cols-[70px_1.4fr_1fr] px-4 py-3 text-[12px] font-semibold">
                      <span>#</span>
                      <span>ชื่อแพ็กเกจ</span>
                      <span>วันหมดอายุ</span>
                    </div>

                    <div className="flex min-h-[96px] items-center justify-center px-4 text-[12px] text-[#a9aeb7]">
                      ไม่มีแพ็กเกจที่ใช้งานอยู่
                    </div>
                  </div>
                </article>

                {/* right latest news */}
                <article className="panel soft-shadow rounded-[8px] bg-white">
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
                  <h2 className="text-[18px] font-bold text-[#f00000]">
                    ตัวช่วยสำหรับจัดการขาย
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}