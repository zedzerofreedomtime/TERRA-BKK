import { Info } from "lucide-react";
import {
  categoryOptions,
  propertyTypeOptions,
} from "@/data/listing";

type StepBasicInfoProps = {
  formData: {
    listingCategory: string;
    serviceType: string;
    propertyType: string;
    postType: string;
  };
  onChange: (field: string, value: string) => void;
};

export default function StepBasicInfo({
  formData,
  onChange,
}: StepBasicInfoProps) {
  return (
    <section className="rounded-[14px] border border-[#ececec] bg-white p-5 shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
      <div className="flex items-center gap-2 border-b border-[#f0f0f0] pb-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] text-[#ef0000]">
          <Info className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[22px] font-bold text-[#2b2f36]">ข้อมูลทั่วไป</h3>
      </div>

      <div className="mt-5 grid gap-6">
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="mb-3 block text-[12px] font-semibold text-[#4b5563]">
              ประเภทผู้ประกาศ
            </label>

            <div className="grid grid-cols-2 gap-3">
              {["เจ้าของ", "ตัวแทน"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => onChange("listingCategory", item)}
                  className={`rounded-[10px] border px-4 py-3 text-[13px] font-semibold transition
                    ${
                      formData.listingCategory === item
                        ? "border-[#ff6b6b] bg-[#fff7f7] text-[#ef0000]"
                        : "border-[#e5e7eb] bg-white text-[#4b5563]"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-3 block text-[12px] font-semibold text-[#4b5563]">
              เลือกบริการแทนหน้า
            </label>

            <div className="grid grid-cols-2 gap-3">
              {["ต้องการ", "ไม่ต้องการ"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => onChange("serviceType", item)}
                  className={`rounded-[10px] border px-4 py-3 text-[13px] font-semibold transition
                    ${
                      formData.serviceType === item
                        ? "border-[#ff6b6b] bg-[#fff7f7] text-[#ef0000]"
                        : "border-[#e5e7eb] bg-white text-[#4b5563]"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
              ประเภทอสังหาริมทรัพย์ <span className="text-[#ef0000]">*</span>
            </label>
            <select
              value={formData.propertyType}
              onChange={(e) => onChange("propertyType", e.target.value)}
              className="h-[44px] w-full rounded-[10px] border border-[#ff6b6b] px-3 text-[13px] outline-none"
            >
              <option value="">เลือกประเภทอสังหาริมทรัพย์</option>
              {propertyTypeOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
              ประเภทประกาศ <span className="text-[#ef0000]">*</span>
            </label>
            <select
              value={formData.postType}
              onChange={(e) => onChange("postType", e.target.value)}
              className="h-[44px] w-full rounded-[10px] border border-[#ff6b6b] px-3 text-[13px] outline-none"
            >
              <option value="">เลือกประเภทประกาศ</option>
              {categoryOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}