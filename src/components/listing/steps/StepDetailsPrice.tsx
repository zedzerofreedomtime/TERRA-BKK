import { List } from "lucide-react";
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
  const isSale = formData.postType === "ขาย" || formData.postType === "ขายดาวน์";
  const isSaleAndRent = formData.postType === "ขายและเช่า";

  return (
    <section className="rounded-[14px] border border-[#ececec] bg-white p-5 shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
      <div className="flex items-center gap-2 border-b border-[#f0f0f0] pb-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] text-[#ef0000]">
          <List className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[22px] font-bold text-[#2b2f36]">รายละเอียดทรัพย์สินและราคา</h3>
      </div>

      <div className="mt-5 grid gap-4">
        {(isSale || isSaleAndRent) && (
          <div className="grid gap-4 md:grid-cols-3">
            <Input
              label="ราคาขาย"
              value={formData.salePrice || ""}
              placeholder="ราคาขาย"
              onChange={(value) => onChange("salePrice", value)}
            />

            <SelectBox
              label="หน่วยราคาขาย"
              value={formData.salePriceUnit || ""}
              options={saleUnitOptions}
              defaultLabel="หน่วยราคาขาย"
              onChange={(value) => onChange("salePriceUnit", value)}
            />

            <div className="flex items-end">
              <button
                type="button"
                className="h-[44px] w-full rounded-[8px] bg-[#a92d2d] text-[14px] font-semibold text-white"
              >
                ตรวจสอบราคาตลาด
              </button>
            </div>
          </div>
        )}

        {(isRent || isSaleAndRent) && (
          <div className="grid gap-4 md:grid-cols-4">
            <Input
              label="ราคาให้เช่าต่อเดือน"
              value={formData.monthlyRentPrice || ""}
              placeholder="ราคาให้เช่า"
              onChange={(value) => onChange("monthlyRentPrice", value)}
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
                className="h-[44px] w-full rounded-[8px] bg-[#a92d2d] text-[14px] font-semibold text-white"
              >
                ตรวจสอบราคาตลาด
              </button>
            </div>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-4">
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
    </section>
  );
}

type InputProps = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

function Input({ label, value, placeholder, onChange }: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-[44px] w-full rounded-[8px] border border-[#cfd5dc] px-3 text-[13px] outline-none focus:border-[#ef0000]"
      />
    </div>
  );
}

type SelectBoxProps = {
  label: string;
  value: string;
  options: string[];
  defaultLabel: string;
  onChange: (value: string) => void;
};

function SelectBox({
  label,
  value,
  options,
  defaultLabel,
  onChange,
}: SelectBoxProps) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[44px] w-full rounded-[8px] border border-[#cfd5dc] px-3 text-[13px] outline-none focus:border-[#ef0000]"
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