import {
  BellRing,
  FilePenLine,
  ShieldAlert,
  User,
} from "lucide-react";

type ProfileCardProps = {
  name: string;
  subtitle: string;
};

export default function ProfileCard({
  name,
  subtitle,
}: ProfileCardProps) {
  return (
    <section className="profile-card px-5 py-6 md:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* avatar + text */}
        <div className="flex items-center gap-4">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[6px] bg-white shadow-sm">
            <User className="h-8 w-8 text-[#b5bcc7]" />
          </div>

          <div>
            <h2 className="text-[18px] font-bold leading-tight">{name}</h2>
            <p className="mt-1 text-[12px] text-[#ffd7d7]">{subtitle}</p>
          </div>
        </div>

        {/* ปุ่มล่าง */}
        <div className="flex flex-wrap gap-2 lg:ml-6">
          <button type="button" className="profile-chip">
            <BellRing className="h-3.5 w-3.5" />
            ประกาศทั้งหมด - 0
          </button>

          <button type="button" className="profile-chip">
            <FilePenLine className="h-3.5 w-3.5" />
            โปรโมท (ฟรีปกติ) - 0
          </button>

          <button type="button" className="profile-chip">
            <ShieldAlert className="h-3.5 w-3.5" />
            หน้าประวัติของคุณ
          </button>
        </div>
      </div>
    </section>
  );
}