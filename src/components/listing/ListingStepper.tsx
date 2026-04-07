import { Check } from "lucide-react";
import { listingSteps } from "@/data/listing";

type ListingStepperProps = {
  currentStep: number;
};

export default function ListingStepper({
  currentStep,
}: ListingStepperProps) {
  return (
    <div className="mb-6">
      <div className="relative flex items-start justify-between gap-2">
        {/* เส้นด้านหลัง */}
        <div className="absolute left-0 right-0 top-[14px] h-[2px] bg-[#dde1e6]" />

        {/* เส้นสีแดงตาม step */}
        <div
          className="absolute left-0 top-[14px] h-[2px] bg-[#ef0000] transition-all duration-300"
          style={{
            width: `${((currentStep - 1) / (listingSteps.length - 1)) * 100}%`,
          }}
        />

        {listingSteps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <div
              key={step.id}
              className="relative z-10 flex min-w-0 flex-1 flex-col items-center"
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
                className={`mt-2 text-center text-[10px] font-medium ${
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
  );
}