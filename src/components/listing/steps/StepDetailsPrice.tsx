import { List } from "lucide-react";
import { unitTypeOptions } from "@/data/listing";

type StepDetailsPriceProps = {
  formData: {
    price: string;
    unitType: string;
    promo: string;
    area: string;
    bedrooms: string;
    bathrooms: string;
    floors: string;
    parking: string;
    usableArea: string;
    landArea: string;
  };
  onChange: (field: string, value: string) => void;
};

export default function StepDetailsPrice({
  formData,
  onChange,
}: StepDetailsPriceProps) {
  return (
    <section className="rounded-[14px] border border-[#ececec] bg-white p-5 shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
      <div className="flex items-center gap-2 border-b border-[#f0f0f0] pb-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] text-[#ef0000]">
          <List className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[22px] font-bold text-[#2b2f36]">
          รายละเอียดทรัพย์สินและราคา
        </h3>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <Input
          label="ราคา (บาท)"
          required
          placeholder="เช่น 3,500,000"
          value={formData.price}
          onChange={(value) => onChange("price", value)}
        />

        <SelectBox
          label="หน่วยรายการขาย"
          required
          value={formData.unitType}
          onChange={(value) => onChange("unitType", value)}
          options={unitTypeOptions}
        />

        <Input
          label="โปรโมชัน (ถ้ามี)"
          placeholder="เช่น ฟรีค่าส่วนกลาง 10 เดือน"
          value={formData.promo}
          onChange={(value) => onChange("promo", value)}
        />

        <Input
          label="พื้นที่"
          required
          placeholder="ระบุขนาดพื้นที่"
          value={formData.area}
          onChange={(value) => onChange("area", value)}
        />

        <Input
          label="จำนวนห้องนอน"
          placeholder="เช่น 3"
          value={formData.bedrooms}
          onChange={(value) => onChange("bedrooms", value)}
        />

        <Input
          label="ห้องจอดรถ"
          placeholder="เช่น 2"
          value={formData.parking}
          onChange={(value) => onChange("parking", value)}
        />

        <Input
          label="จำนวนห้องน้ำ"
          placeholder="เช่น 2"
          value={formData.bathrooms}
          onChange={(value) => onChange("bathrooms", value)}
        />

        <Input
          label="ชั้นอาคาร"
          placeholder="เช่น 2"
          value={formData.floors}
          onChange={(value) => onChange("floors", value)}
        />

        <Input
          label="พื้นที่ใช้สอย"
          placeholder="เช่น 180 ตร.ม."
          value={formData.usableArea}
          onChange={(value) => onChange("usableArea", value)}
        />

        <Input
          label="ขนาดที่ดิน"
          placeholder="เช่น 50 ตร.ว."
          value={formData.landArea}
          onChange={(value) => onChange("landArea", value)}
        />
      </div>
    </section>
  );
}

type InputProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

function Input({
  label,
  required,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
        {label} {required && <span className="text-[#ef0000]">*</span>}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-[44px] w-full rounded-[10px] border border-[#e5e7eb] px-3 text-[13px] outline-none placeholder:text-[#b6bcc5] focus:border-[#ff6b6b]"
      />
    </div>
  );
}

type SelectBoxProps = {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

function SelectBox({
  label,
  required,
  value,
  onChange,
  options,
}: SelectBoxProps) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
        {label} {required && <span className="text-[#ef0000]">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[44px] w-full rounded-[10px] border border-[#ff6b6b] px-3 text-[13px] outline-none"
      >
        <option value="">เลือกหน่วยรายการขาย</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}