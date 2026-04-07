import { FileText, ShieldCheck } from "lucide-react";

type StepSummaryProps = {
  formData: {
    postType: string;
    propertyType: string;
    price: string;
    province: string;
  };
  servicePoints: number;
};

export default function StepSummary({
  formData,
  servicePoints,
}: StepSummaryProps) {
  return (
    <section className="rounded-[14px] border border-[#ececec] bg-white p-5 shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
      <div className="flex items-center gap-2 border-b border-[#f0f0f0] pb-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] text-[#ef0000]">
          <FileText className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[22px] font-bold text-[#2b2f36]">สรุปรายการ</h3>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-4">
          <div className="rounded-[12px] border border-[#ececec] bg-[#fafafb] p-4">
            <h4 className="mb-3 text-[16px] font-bold text-[#2b2f36]">ข้อมูลประกาศ</h4>

            <SummaryRow label="ประเภทประกาศ" value={formData.postType || "-"} />
            <SummaryRow label="ประเภทอสังหาริมทรัพย์" value={formData.propertyType || "-"} />
            <SummaryRow label="จังหวัด" value={formData.province || "-"} />
            <SummaryRow label="ราคา" value={formData.price ? `${formData.price} บาท` : "-"} />
          </div>

          <div className="rounded-[12px] border border-[#ececec] bg-[#fafafb] p-4">
            <div className="mb-3 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#16a34a]" />
              <h4 className="text-[16px] font-bold text-[#2b2f36]">ข้อกำหนดและเงื่อนไข</h4>
            </div>

            <ol className="space-y-2 text-[12px] leading-6 text-[#596273]">
              <li>1. รายละเอียดทุกข้อมูลต้องเป็นจริงและตรวจสอบได้</li>
              <li>2. สื่อและรูปภาพต้องเกี่ยวข้องกับทรัพย์ที่ลงประกาศ</li>
              <li>3. ราคาต้องระบุชัดเจนและไม่ทำให้ผู้ใช้งานเข้าใจผิด</li>
            </ol>
          </div>
        </div>

        <div className="rounded-[12px] border border-[#ececec] bg-white p-4">
          <h4 className="mb-4 text-[16px] font-bold text-[#2b2f36]">สรุปค่าใช้บริการ</h4>

          <div className="space-y-3 text-[13px] text-[#525b68]">
            <PriceRow label="ค่าบริการลงประกาศ" value="50 พอยท์" />
            <PriceRow label="เพิ่มโปรโมทประกาศ" value="150 พอยท์" />
            <PriceRow label="เพิ่มดันประกาศ" value="20 พอยท์" />
          </div>

          <div className="my-4 border-t border-[#ececec]" />

          <div className="flex items-end justify-between">
            <span className="text-[14px] font-semibold text-[#2b2f36]">ยอดคงเหลือคุณ</span>
            <span className="text-[30px] font-bold text-[#ef0000]">
              {servicePoints}
              <span className="ml-1 text-[12px] font-medium text-[#8f96a3]">พอยท์</span>
            </span>
          </div>

          <div className="mt-4 rounded-[10px] bg-[#effcf3] px-3 py-2 text-[12px] font-medium text-[#16a34a]">
            ✓ ยอดพอยท์ของคุณเพียงพอสำหรับบริการ
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] border-b border-[#ececec] py-2 text-[13px]">
      <span className="text-[#7a8492]">{label}</span>
      <span className="font-medium text-[#2b2f36]">{value}</span>
    </div>
  );
}

function PriceRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <span className="font-semibold text-[#2b2f36]">{value}</span>
    </div>
  );
}