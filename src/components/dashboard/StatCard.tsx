import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  suffix?: string;
  icon: LucideIcon;
  theme?: "red" | "green";
  actionLabel?: string;
};

export default function StatCard({
  title,
  value,
  suffix,
  icon: Icon,
  theme = "red",
  actionLabel,
}: StatCardProps) {
  const isGreen = theme === "green";

  return (
    <article
      className={`rounded-[12px] border border-[#ececec] px-4 py-4 shadow-[0_2px_8px_rgba(16,24,40,0.04)] ${
        isGreen ? "bg-[#00a96e] text-white" : "bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p
            className={`text-[11px] font-medium ${
              isGreen ? "text-white/90" : "text-[#9ca3af]"
            }`}
          >
            {title}
          </p>

          <div className="mt-2 flex items-end gap-1">
            <span
              className={`text-[38px] font-bold leading-none ${
                isGreen ? "text-white" : "text-[#20242a]"
              }`}
            >
              {value}
            </span>

            {suffix && (
              <span
                className={`pb-1 text-[12px] ${
                  isGreen ? "text-white/90" : "text-[#9ca3af]"
                }`}
              >
                {suffix}
              </span>
            )}
          </div>

          {actionLabel && (
            <p className="mt-2 text-[12px] font-semibold text-white">
              {actionLabel}
            </p>
          )}
        </div>

        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] ${
            isGreen ? "bg-white text-[#e00000]" : "bg-[#b10000] text-white"
          }`}
        >
          <Icon className="h-4 w-4" />
        </div>
      </div>
    </article>
  );
}