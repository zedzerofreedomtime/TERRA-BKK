import { List, WalletCards } from "lucide-react";
import {
  propertyFieldMap,
  rentalContractOptions,
  rentalStatusOptions,
  saleUnitOptions,
} from "@/data/listing";

type StepDetailsPriceProps = {
  formData: Record<string, string>;
  onChange: (field: string, value: string) => void;
};

export default function StepDetailsPrice({
  formData,
  onChange,
}: StepDetailsPriceProps) {
  const selectedFields = propertyFieldMap[formData.propertyType] || [];

  const isRent = formData.postType === "เช่า";
  const isSale =
    formData.postType === "ขาย" || formData.postType === "ขายดาวน์";
  const isSaleAndRent = formData.postType === "ขายและเช่า";

  return (
    <section className="rounded-[16px] border border-[#ececec] bg-white p-4 shadow-[0_4px_16px_rgba(16,24,40,0.05)] md:p-5">
      <div className="flex items-center gap-2 border-b border-[#f0f0f0] pb-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] text-[#ef0000]">
          <List className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[20px] font-bold text-[#2b2f36] md:text-[22px]">
          รายละเอียดทรัพย์สินและราคา
        </h3>
      </div>

      <div className="mt-5 space-y-5">
        {/* กลุ่มราคาขาย */}
        {(isSale || isSaleAndRent) && (
          <div className="space-y-4 rounded-[14px] border border-[#f1f1f1] bg-[#fcfcfc] p-4">
            <div className="flex items-center gap-2">
              <WalletCards className="h-4 w-4 text-[#ef0000]" />
              <p className="text-[13px] font-bold text-[#2b2f36]">ข้อมูลราคาขาย</p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Input
                label="ราคา (บาท)"
                required
                placeholder="เช่น 3,500,000"
                value={formData.salePrice || ""}
                onChange={(value) => onChange("salePrice", value)}
                icon="฿"
              />

              <SelectBox
                label="หน่วยราคาขาย"
                required
                value={formData.salePriceUnit || ""}
                options={saleUnitOptions}
                defaultLabel="เลือกหน่วยราคาขาย"
                onChange={(value) => onChange("salePriceUnit", value)}
              />

              <div className="flex items-end">
                <button
                  type="button"
                  className="h-[46px] w-full rounded-[12px] bg-[#a92d2d] px-4 text-[13px] font-semibold text-white transition hover:bg-[#922525]"
                >
                  ตรวจสอบราคาตลาด
                </button>
              </div>
            </div>
          </div>
        )}

        {/* กลุ่มราคาเช่า */}
        {(isRent || isSaleAndRent) && (
          <div className="space-y-4 rounded-[14px] border border-[#f1f1f1] bg-[#fcfcfc] p-4">
            <div className="flex items-center gap-2">
              <WalletCards className="h-4 w-4 text-[#ef0000]" />
              <p className="text-[13px] font-bold text-[#2b2f36]">ข้อมูลราคาเช่า</p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <Input
                label="ราคาให้เช่าต่อเดือน"
                required
                placeholder="ราคาให้เช่า"
                value={formData.monthlyRentPrice || ""}
                onChange={(value) => onChange("monthlyRentPrice", value)}
                icon="฿"
              />

              <SelectBox
                label="สถานะการเช่า"
                value={formData.rentalStatus || ""}
                options={rentalStatusOptions}
                defaultLabel="สถานะการเช่า"
                onChange={(value) => onChange("rentalStatus", value)}
              />

              <SelectBox
                label="ระยะเวลาสัญญาเช่า"
                value={formData.leaseTerm || ""}
                options={rentalContractOptions}
                defaultLabel="ระยะเวลาสัญญาเช่า"
                onChange={(value) => onChange("leaseTerm", value)}
              />

              <div className="flex items-end">
                <button
                  type="button"
                  className="h-[46px] w-full rounded-[12px] bg-[#a92d2d] px-4 text-[13px] font-semibold text-white transition hover:bg-[#922525]"
                >
                  ตรวจสอบราคาตลาด
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ฟิลด์ตามประเภททรัพย์ */}
        <div className="space-y-4">
          <div>
            <p className="text-[13px] font-bold text-[#2b2f36]">
              รายละเอียดเพิ่มเติม
            </p>
            <p className="mt-1 text-[11px] text-[#98a1ad]">
              ช่องด้านล่างจะเปลี่ยนตามประเภทอสังหาริมทรัพย์ที่เลือกไว้
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {selectedFields.map((field) =>
              field.type === "select" ? (
                <SelectBox
                  key={field.key}
                  label={field.label}
                  value={formData[field.key] || ""}
                  options={field.options || []}
                  defaultLabel={field.label}
                  onChange={(value) => onChange(field.key, value)}
                />
              ) : (
                <Input
                  key={field.key}
                  label={field.label}
                  value={formData[field.key] || ""}
                  placeholder={field.placeholder || field.label}
                  onChange={(value) => onChange(field.key, value)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

type InputProps = {
  label: string;
  required?: boolean;
  value: string;
  placeholder?: string;
  icon?: string;
  onChange: (value: string) => void;
};

function Input({
  label,
  required,
  value,
  placeholder,
  icon,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
        {label} {required && <span className="text-[#ef0000]">*</span>}
      </label>

      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[14px] text-[#9aa3af]">
            {icon}
          </span>
        )}

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`h-[46px] w-full rounded-[12px] border border-[#e5e7eb] bg-white px-3 text-[13px] outline-none placeholder:text-[#b6bcc5] focus:border-[#ff6b6b] ${
            icon ? "pl-8" : ""
          }`}
        />
      </div>
    </div>
  );
}

type SelectBoxProps = {
  label: string;
  required?: boolean;
  value: string;
  options: string[];
  defaultLabel: string;
  onChange: (value: string) => void;
};

function SelectBox({
  label,
  required,
  value,
  options,
  defaultLabel,
  onChange,
}: SelectBoxProps) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
        {label} {required && <span className="text-[#ef0000]">*</span>}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[46px] w-full rounded-[12px] border border-[#e5e7eb] bg-white px-3 text-[13px] outline-none focus:border-[#ff6b6b]"
      >
        <option value="">{defaultLabel}</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}