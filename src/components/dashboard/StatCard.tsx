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
      className={`stat-card flex min-h-[84px] items-center justify-between gap-3 ${
        isGreen ? "bg-[#00a96e] text-white" : ""
      }`}
    >
      <div>
        <p
          className={`text-[11px] font-medium ${
            isGreen ? "text-white/90" : "text-[#9ca3af]"
          }`}
        >
          {title}
        </p>

        <div className="mt-1 flex items-end gap-1">
          <span className={`text-[36px] font-bold leading-none ${isGreen ? "text-white" : "text-[#262b33]"}`}>
            {value}
          </span>

          {suffix && (
            <span className={`pb-1 text-[12px] ${isGreen ? "text-white/90" : "text-[#9ca3af]"}`}>
              {suffix}
            </span>
          )}
        </div>

        {actionLabel && (
          <p className="mt-2 text-[12px] font-semibold text-white">{actionLabel}</p>
        )}
      </div>

      <div
        className={`${
          isGreen
            ? "flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#d60000]"
            : "stat-icon-box"
        }`}
      >
        <Icon className="h-4 w-4" />
      </div>
    </article>
  );
}