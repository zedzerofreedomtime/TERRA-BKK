import { X } from "lucide-react";

type PurchaseModalProps = {
  open: boolean;
  title: string;
  description: string;
  price: number;
  points: number;
  icon: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
};

export default function PurchaseModal({
  open,
  title,
  description,
  price,
  points,
  icon,
  onClose,
  onConfirm,
}: PurchaseModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
      <div className="relative w-full max-w-[420px] rounded-[16px] bg-white p-5 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-[#8d96a3]"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="mt-1">{icon}</div>

          <div>
            <h3 className="text-[24px] font-bold text-[#2b2f36]">{title}</h3>
            <p className="mt-2 text-[13px] leading-6 text-[#66707f]">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-[12px] bg-[#f7f7f8] px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-[#6b7280]">ค่าบริการ</span>
            <span className="text-[28px] font-bold text-[#f97316]">
              {price}
              <span className="ml-1 text-[12px] font-medium text-[#a0a6b0]">
                พอยท์
              </span>
            </span>
          </div>
        </div>

        <div className="mt-4 text-[13px] text-[#8b93a0]">
          พอยท์คงเหลือของคุณ:
          <span className="ml-2 font-bold text-[#2b2f36]">{points} พอยท์</span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-[10px] border border-[#d9dde3] bg-white px-4 py-3 text-[14px] font-semibold text-[#6b7280]"
          >
            ยกเลิก
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="rounded-[10px] bg-[#ef0000] px-4 py-3 text-[14px] font-semibold text-white"
          >
            ยืนยันการทำรายการ
          </button>
        </div>
      </div>
    </div>
  );
}