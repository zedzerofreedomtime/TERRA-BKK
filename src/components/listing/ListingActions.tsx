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
    <div className="mt-4 rounded-[14px] border border-[#ececec] bg-white px-4 py-4 shadow-[0_4px_16px_rgba(16,24,40,0.05)]">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={isFirstStep}
          className="inline-flex h-[46px] min-w-[120px] items-center justify-center rounded-[12px] border border-[#ececec] bg-[#f7f8fa] px-5 text-[13px] font-semibold text-[#b4bac3] disabled:cursor-not-allowed"
        >
          ‹ ย้อนกลับ
        </button>

        <button
          type="button"
          onClick={onNext}
          className="inline-flex h-[46px] min-w-[120px] items-center justify-center rounded-[12px] bg-[#ef0000] px-6 text-[13px] font-semibold text-white transition hover:bg-[#da0000]"
        >
          {isLastStep ? "ยืนยันรายการ" : "ถัดไป ›"}
        </button>
      </div>
    </div>
  );
}