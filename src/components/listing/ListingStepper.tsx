import { Check } from "lucide-react";
import { listingSteps } from "@/data/listing";

type ListingStepperProps = {
  currentStep: number;
};

export default function ListingStepper({
  currentStep,
}: ListingStepperProps) {
  return (
    <div className="mb-5 overflow-x-auto pb-1">
      <div className="relative mx-auto min-w-[560px]">
        {/* เส้นพื้นหลัง */}
        <div className="absolute left-[28px] right-[28px] top-[14px] h-[2px] bg-[#dfe3e8]" />

        {/* เส้นแดงความคืบหน้า */}
        <div
          className="absolute left-[28px] top-[14px] h-[2px] bg-[#ef0000] transition-all duration-300"
          style={{
            width: `calc(((100% - 56px) * ${(currentStep - 1) / (listingSteps.length - 1)}))`,
          }}
        />

        <div className="relative z-10 flex items-start justify-between">
          {listingSteps.map((step) => {
            const isCompleted = step.id < currentStep;
            const isActive = step.id === currentStep;

            return (
              <div
                key={step.id}
                className="flex w-[86px] shrink-0 flex-col items-center text-center"
              >
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-bold transition-all
                  ${
                    isCompleted
                      ? "border-[#ef0000] bg-[#ef0000] text-white"
                      : isActive
                      ? "border-[#ef0000] bg-white text-[#ef0000]"
                      : "border-[#d5d9df] bg-[#f8f9fb] text-[#a9afb8]"
                  }`}
                >
                  {isCompleted ? <Check className="h-4 w-4" /> : step.id}
                </div>

                <span
                  className={`mt-2 text-[10px] font-medium leading-4 ${
                    isCompleted || isActive ? "text-[#ef0000]" : "text-[#adb3bc]"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}