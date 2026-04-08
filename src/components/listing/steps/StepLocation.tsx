import { MapPin } from "lucide-react";

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
    fullAddress?: string;
  };
  onChange: (field: string, value: string) => void;
};

export default function StepLocation({
  formData,
  onChange,
}: StepLocationProps) {
  return (
    <section className="rounded-[16px] border border-[#ececec] bg-white p-4 shadow-[0_4px_16px_rgba(16,24,40,0.05)] md:p-5">
      <div className="flex items-center gap-2 border-b border-[#f0f0f0] pb-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] text-[#ef0000]">
          <MapPin className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[20px] font-bold text-[#2b2f36] md:text-[22px]">
          ที่ตั้งและแผนที่
        </h3>
      </div>

      <div className="mt-5 space-y-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

        <div>
          <label className="mb-2 block text-[12px] font-semibold text-[#4b5563]">
            ที่อยู่จากแผนที่
          </label>
          <div className="min-h-[46px] rounded-[12px] border border-[#e5e7eb] bg-[#fafafa] px-3 py-3 text-[13px] text-[#66707f]">
            {formData.fullAddress || "ยังไม่ได้เลือกตำแหน่งบนแผนที่"}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[12px] font-semibold text-[#4b5563]">
            ตำแหน่งแผนที่
          </p>

          <div className="overflow-hidden rounded-[14px] border border-[#ececec]">
            <div className="flex h-[260px] items-center justify-center bg-[linear-gradient(135deg,#eee6d6,#ddd2bb,#d4ddc5)] text-center text-[13px] text-[#7a7f87] md:h-[320px]">
              <div className="px-4">
                <p className="font-semibold text-[#5d636c]">พื้นที่แสดงแผนที่</p>
                <p className="mt-1 text-[12px] text-[#8f96a3]">
                  เดี๋ยวค่อยเสียบ Google Maps แบบ interactive ตรงนี้
                </p>
              </div>
            </div>
          </div>
        </div>
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
        className="h-[46px] w-full rounded-[12px] border border-[#e5e7eb] bg-white px-3 text-[13px] outline-none placeholder:text-[#b6bcc5] focus:border-[#ff6b6b]"
      />
    </div>
  );
}