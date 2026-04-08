import { BellRing, FilePenLine, ShieldAlert, User } from "lucide-react";

type ProfileCardProps = {
  name: string;
  subtitle: string;
};

export default function ProfileCard({
  name,
  subtitle,
}: ProfileCardProps) {
  return (
    <section className="rounded-[12px] bg-gradient-to-b from-[#b60000] to-[#980000] p-4 text-white shadow-[0_6px_18px_rgba(182,0,0,0.18)] md:p-5">
      <div className="flex flex-col gap-4">
        {/* ส่วนบน */}
        <div className="flex items-start gap-4">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[8px] bg-white">
            <User className="h-8 w-8 text-[#b7bec8]" />
          </div>

          <div className="min-w-0">
            <h2 className="text-[18px] font-bold leading-6 sm:text-[20px]">
              {name}
            </h2>
            <p className="mt-1 text-[11px] text-[#ffd9d9] sm:text-[12px]">
              {subtitle}
            </p>
          </div>
        </div>

        {/* ปุ่มล่าง */}
        <div className="grid gap-2">
          <button
            type="button"
            className="flex items-center gap-2 rounded-[6px] bg-[#850000] px-3 py-2 text-left text-[12px] font-medium"
          >
            <BellRing className="h-3.5 w-3.5" />
            ประกาศทั้งหมด - 0
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-[6px] bg-[#850000] px-3 py-2 text-left text-[12px] font-medium"
          >
            <FilePenLine className="h-3.5 w-3.5" />
            โปรโมท (ฟรีเด่น) - 0
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-[6px] bg-[#850000] px-3 py-2 text-left text-[12px] font-medium"
          >
            <ShieldAlert className="h-3.5 w-3.5" />
            หน้าปรับของคุณ
          </button>
        </div>
      </div>
    </section>
  );
}