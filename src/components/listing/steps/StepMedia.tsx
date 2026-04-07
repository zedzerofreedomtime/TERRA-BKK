import { Camera, ImageIcon, X } from "lucide-react";

type StepMediaProps = {
  images: string[];
  onAddImage: () => void;
  onRemoveImage: (index: number) => void;
};

export default function StepMedia({
  images,
  onAddImage,
  onRemoveImage,
}: StepMediaProps) {
  return (
    <section className="rounded-[14px] border border-[#ececec] bg-white p-5 shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
      <div className="flex items-center gap-2 border-b border-[#f0f0f0] pb-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] text-[#ef0000]">
          <ImageIcon className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[22px] font-bold text-[#2b2f36]">รูปภาพและสื่อ</h3>
      </div>

      <div className="mt-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-5 w-[3px] rounded-full bg-[#377dff]" />
            <p className="text-[14px] font-bold text-[#2b2f36]">อัปโหลดรูปภาพ</p>
            {images.length === 0 && (
              <span className="rounded-full bg-[#fff1f1] px-2 py-1 text-[10px] font-semibold text-[#ef0000]">
                กรุณาอัปโหลดรูป
              </span>
            )}
          </div>

          <span className="rounded-full bg-[#f5f6f8] px-3 py-1 text-[11px] font-medium text-[#9fa6b2]">
            อัปโหลดได้สูงสุด 9 รูป
          </span>
        </div>

        {images.length > 0 ? (
          <div className="rounded-[12px] border border-dashed border-[#d7dbe1] p-4">
            <div className="flex flex-wrap gap-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative h-[94px] w-[94px] overflow-hidden rounded-[10px] border border-[#e5e7eb]"
                >
                  <img
                    src={src}
                    alt={`preview-${index}`}
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => onRemoveImage(index)}
                    className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-[#7b8794]"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={onAddImage}
                className="flex h-[94px] w-[94px] items-center justify-center rounded-[10px] border border-dashed border-[#d5d9df] text-[#aab2bd]"
              >
                +
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={onAddImage}
            className="flex h-[270px] w-full flex-col items-center justify-center rounded-[14px] border-2 border-dashed border-[#e34b4b] bg-[#fcfcfd] text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f6f8] text-[#b4bcc7]">
              <Camera className="h-7 w-7" />
            </div>

            <p className="mt-5 text-[18px] font-bold text-[#4b5563]">
              คลิกเพื่ออัปโหลด หรือ ลากไฟล์มาวางที่นี่
            </p>
            <p className="mt-2 text-[12px] text-[#9aa3af]">
              รองรับไฟล์ JPG, PNG ขนาดไม่เกิน 5MB ต่อรูป
            </p>

            <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-[8px] border border-dashed border-[#d5d9df] text-[#aab2bd]">
              +
            </div>
          </button>
        )}
      </div>
    </section>
  );
}