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
    <section className="rounded-[14px] border border-[#ececec] bg-white p-5 shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
      <div className="flex items-center gap-2 border-b border-[#f0f0f0] pb-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] text-[#ef0000]">
          <Info className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[22px] font-bold text-[#2b2f36]">ข้อมูลทั่วไป</h3>
      </div>

      <div className="mt-5 grid gap-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
              ประเภทผู้ประกาศ
            </label>
            <select
              value={formData.listingCategory}
              onChange={(e) => onChange("listingCategory", e.target.value)}
              className="h-[44px] w-full rounded-[10px] border border-[#e5e7eb] px-3 text-[13px] outline-none"
            >
              <option value="">ประเภทผู้ประกาศ</option>
              <option value="เจ้าของ">เจ้าของ</option>
              <option value="ตัวแทน">ตัวแทน</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
              เลือกบริการนายหน้า
            </label>
            <select
              value={formData.serviceType}
              onChange={(e) => onChange("serviceType", e.target.value)}
              className="h-[44px] w-full rounded-[10px] border border-[#e5e7eb] px-3 text-[13px] outline-none"
            >
              <option value="">บริการนายหน้า</option>
              <option value="ต้องการ">ต้องการ</option>
              <option value="ไม่ต้องการ">ไม่ต้องการ</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
              ประเภทอสังหาริมทรัพย์
            </label>
            <select
              value={formData.propertyType}
              onChange={(e) => onChange("propertyType", e.target.value)}
              className="h-[44px] w-full rounded-[10px] border border-[#e5e7eb] px-3 text-[13px] outline-none"
            >
              <option value="">ประเภทอสังหาริมทรัพย์</option>
              {propertyTypeOptions.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
              ประเภทประกาศ
            </label>
            <select
              value={formData.postType}
              onChange={(e) => onChange("postType", e.target.value)}
              className="h-[44px] w-full rounded-[10px] border border-[#e5e7eb] px-3 text-[13px] outline-none"
            >
              <option value="">ประเภทประกาศ</option>
              {categoryOptions.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
              ประเภทจัดสรร
            </label>
            <select
              value={formData.allocationType}
              onChange={(e) => onChange("allocationType", e.target.value)}
              className="h-[44px] w-full rounded-[10px] border border-[#e5e7eb] px-3 text-[13px] outline-none"
            >
              <option value="">ประเภทจัดสรร</option>
              {allocationTypeOptions.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>

          {showProjectName && (
            <div>
              <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
                ชื่อโครงการ
              </label>
              <input
                value={formData.projectName}
                onChange={(e) => onChange("projectName", e.target.value)}
                placeholder="พิมพ์ชื่อโครงการ"
                className="h-[44px] w-full rounded-[10px] border border-[#e5e7eb] px-3 text-[13px] outline-none"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}