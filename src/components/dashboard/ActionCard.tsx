import type { LucideIcon } from "lucide-react";

type ActionCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ActionCard({
  title,
  description,
  icon: Icon,
}: ActionCardProps) {
  return (
    <article className="overflow-hidden rounded-[12px] border border-[#ececec] bg-white shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
      <div className="flex min-h-[88px] items-center justify-center bg-[#ef0000] text-white">
        <Icon className="h-9 w-9" strokeWidth={2.2} />
      </div>

      <div className="p-4">
        <h3 className="text-[13px] font-bold text-[#c10000]">{title}</h3>
        <p className="mt-2 text-[11px] leading-6 text-[#5f6672]">
          {description}
        </p>
      </div>
    </article>
  );
}