import { Info } from "lucide-react";
import {
  allocationTypeOptions,
  categoryOptions,
  propertyTypeOptions,
} from "@/data/listing";

type StepBasicInfoProps = {
  formData: {
    listingCategory: string;
    serviceType: string;
    propertyType: string;
    postType: string;
    allocationType: string;
    projectName: string;
  };
  onChange: (field: string, value: string) => void;
};

export default function StepBasicInfo({
  formData,
  onChange,
}: StepBasicInfoProps) {
  const showProjectName = formData.allocationType === "โครงการจัดสรร";

  return (
    <section className="rounded-[16px] border border-[#ececec] bg-white p-4 shadow-[0_4px_16px_rgba(16,24,40,0.05)] md:p-5">
      <div className="flex items-center gap-2 border-b border-[#f0f0f0] pb-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] text-[#ef0000]">
          <Info className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[20px] font-bold text-[#2b2f36] md:text-[22px]">
          ข้อมูลทั่วไป
        </h3>
      </div>

      <div className="mt-5 space-y-5">
        {/* ประเภทผู้ประกาศ */}
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
                className={`h-[46px] rounded-[12px] border text-[13px] font-semibold transition
                  ${
                    formData.listingCategory === item
                      ? "border-[#ff5a5a] bg-[#fff7f7] text-[#ef0000]"
                      : "border-[#e5e7eb] bg-white text-[#4b5563]"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* บริการนายหน้า */}
        <div>
          <label className="mb-3 block text-[12px] font-semibold text-[#4b5563]">
            เลือกบริการนายหน้า
          </label>

          <div className="grid grid-cols-2 gap-3">
            {["ต้องการ", "ไม่ต้องการ"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onChange("serviceType", item)}
                className={`h-[46px] rounded-[12px] border text-[13px] font-semibold transition
                  ${
                    formData.serviceType === item
                      ? "border-[#ff5a5a] bg-[#fff7f7] text-[#ef0000]"
                      : "border-[#e5e7eb] bg-white text-[#4b5563]"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* ประเภทอสังหา */}
        <div>
          <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
            ประเภทอสังหาริมทรัพย์ <span className="text-[#ef0000]">*</span>
          </label>

          <select
            value={formData.propertyType}
            onChange={(e) => onChange("propertyType", e.target.value)}
            className="h-[46px] w-full rounded-[12px] border border-[#ff6b6b] bg-white px-3 text-[13px] outline-none"
          >
            <option value="">เลือกประเภทอสังหาริมทรัพย์</option>
            {propertyTypeOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          {!formData.propertyType && (
            <p className="mt-2 text-[11px] text-[#ef0000]">
              กรุณาเลือกประเภทอสังหาริมทรัพย์
            </p>
          )}
        </div>

        {/* ประเภทประกาศ */}
        <div>
          <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
            ประเภทประกาศ <span className="text-[#ef0000]">*</span>
          </label>

          <select
            value={formData.postType}
            onChange={(e) => onChange("postType", e.target.value)}
            className="h-[46px] w-full rounded-[12px] border border-[#ff6b6b] bg-white px-3 text-[13px] outline-none"
          >
            <option value="">เลือกประเภทประกาศ</option>
            {categoryOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          {!formData.postType && (
            <p className="mt-2 text-[11px] text-[#ef0000]">
              กรุณาเลือกประเภทประกาศ
            </p>
          )}
        </div>

        {/* ประเภทจัดสรร */}
        <div>
          <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
            ประเภทจัดสรร
          </label>

          <select
            value={formData.allocationType}
            onChange={(e) => onChange("allocationType", e.target.value)}
            className="h-[46px] w-full rounded-[12px] border border-[#e5e7eb] bg-white px-3 text-[13px] outline-none"
          >
            <option value="">เลือกประเภทจัดสรร</option>
            {allocationTypeOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* ชื่อโครงการ */}
        {showProjectName && (
          <div>
            <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
              ชื่อโครงการ
            </label>

            <input
              value={formData.projectName}
              onChange={(e) => onChange("projectName", e.target.value)}
              placeholder="พิมพ์ชื่อโครงการ"
              className="h-[46px] w-full rounded-[12px] border border-[#e5e7eb] px-3 text-[13px] outline-none"
            />
          </div>
        )}
      </div>
    </section>
  );
}