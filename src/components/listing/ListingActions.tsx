type ListingActionsProps = {
  isFirstStep: boolean;
  isLastStep: boolean;
  onBack: () => void;
  onNext: () => void;
};

export default function ListingActions({
  isFirstStep,
  isLastStep,
  onBack,
  onNext,
}: ListingActionsProps) {
  return (
    <div className="mt-4 rounded-[14px] border border-[#ececec] bg-white px-4 py-4 shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={isFirstStep}
          className="rounded-[10px] border border-[#ececec] bg-[#f7f8fa] px-7 py-3 text-[13px] font-medium text-[#b4bac3] disabled:cursor-not-allowed"
        >
          ‹ ย้อนกลับ
        </button>

        <button
          type="button"
          onClick={onNext}
          className="rounded-[10px] bg-[#ef0000] px-8 py-3 text-[13px] font-semibold text-white transition hover:bg-[#d90000]"
        >
          {isLastStep ? "ยืนยันรายการ" : "ถัดไป  ›"}
        </button>
      </div>
    </div>
  );
}