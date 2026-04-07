import { Check } from "lucide-react";
import {
  conveniences,
  furnitures,
  highlights,
} from "@/data/listing";

type StepFeaturesProps = {
  selectedFurnitures: string[];
  selectedHighlights: string[];
  selectedConveniences: string[];
  onToggle: (
    field: "selectedFurnitures" | "selectedHighlights" | "selectedConveniences",
    value: string
  ) => void;
};

export default function StepFeatures({
  selectedFurnitures,
  selectedHighlights,
  selectedConveniences,
  onToggle,
}: StepFeaturesProps) {
  return (
    <section className="rounded-[14px] border border-[#ececec] bg-white p-5 shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
      <div className="flex items-center gap-2 border-b border-[#f0f0f0] pb-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] text-[#ef0000]">
          <Check className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[22px] font-bold text-[#2b2f36]">สิ่งอำนวยความสะดวก</h3>
      </div>

      <Section
        title="เฟอร์นิเจอร์"
        color="bg-[#ef0000]"
        items={furnitures}
        selected={selectedFurnitures}
        onToggle={(value) => onToggle("selectedFurnitures", value)}
      />

      <Section
        title="จุดเด่น"
        color="bg-[#ef0000]"
        items={highlights}
        selected={selectedHighlights}
        onToggle={(value) => onToggle("selectedHighlights", value)}
      />

      <Section
        title="สิ่งอำนวยความสะดวก"
        color="bg-[#11b981]"
        items={conveniences}
        selected={selectedConveniences}
        onToggle={(value) => onToggle("selectedConveniences", value)}
      />
    </section>
  );
}

type SectionProps = {
  title: string;
  color: string;
  items: string[];
  selected: string[];
  onToggle: (value: string) => void;
};

function Section({
  title,
  color,
  items,
  selected,
  onToggle,
}: SectionProps) {
  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center gap-2">
        <span className={`h-5 w-[3px] rounded-full ${color}`} />
        <h4 className="text-[15px] font-bold text-[#2b2f36]">{title}</h4>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const active = selected.includes(item);

          return (
            <button
              key={item}
              type="button"
              onClick={() => onToggle(item)}
              className={`rounded-[9px] border px-4 py-3 text-left text-[12px] font-medium transition
                ${
                  active
                    ? "border-[#ef0000] bg-[#fff5f5] text-[#ef0000]"
                    : "border-[#e5e7eb] bg-white text-[#4b5563]"
                }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}