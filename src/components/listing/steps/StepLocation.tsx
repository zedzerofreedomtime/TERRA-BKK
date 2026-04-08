import { MapPin } from "lucide-react";
import GoogleMapEmbed from "@/components/maps/GoogleMapEmbed";

type StepLocationProps = {
  formData: {
    houseNumber: string;
    road: string;
    province: string;
    district: string;
    subdistrict: string;
    postcode: string;
    lat?: string;
    lng?: string;
  };
  onChange: (field: string, value: string) => void;
};

export default function StepLocation({
  formData,
  onChange,
}: StepLocationProps) {
  const mapQuery = [
    formData.houseNumber,
    formData.road,
    formData.subdistrict,
    formData.district,
    formData.province,
    formData.postcode,
    "Thailand",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="rounded-[14px] border border-[#ececec] bg-white p-5 shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
      <div className="flex items-center gap-2 border-b border-[#f0f0f0] pb-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] text-[#ef0000]">
          <MapPin className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[22px] font-bold text-[#2b2f36]">ที่ตั้งและแผนที่</h3>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <Field
          label="บ้านเลขที่"
          placeholder="เช่น 123/45"
          value={formData.houseNumber}
          onChange={(value) => onChange("houseNumber", value)}
        />
        <Field
          label="ถนน"
          placeholder="เช่น สุขุมวิท"
          value={formData.road}
          onChange={(value) => onChange("road", value)}
        />
        <Field
          label="จังหวัด"
          required
          placeholder="เช่น กรุงเทพมหานคร"
          value={formData.province}
          onChange={(value) => onChange("province", value)}
        />
        <Field
          label="อำเภอ/เขต"
          required
          placeholder="เช่น วัฒนา"
          value={formData.district}
          onChange={(value) => onChange("district", value)}
        />
        <Field
          label="ตำบล/แขวง"
          required
          placeholder="เช่น คลองเตยเหนือ"
          value={formData.subdistrict}
          onChange={(value) => onChange("subdistrict", value)}
        />
        <Field
          label="รหัสไปรษณีย์"
          placeholder="เช่น 10110"
          value={formData.postcode}
          onChange={(value) => onChange("postcode", value)}
        />
      </div>

      <div className="mt-6">
        <p className="mb-2 text-[12px] font-semibold text-[#4b5563]">
          ตำแหน่งแผนที่
        </p>

        <GoogleMapEmbed
          query={mapQuery}
          lat={formData.lat}
          lng={formData.lng}
        />
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

function Field({
  label,
  required,
  placeholder,
  value,
  onChange,
}: FieldProps) {
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