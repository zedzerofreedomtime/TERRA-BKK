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
    <section className="rounded-[16px] border border-[#ececec] bg-white p-4 shadow-[0_4px_16px_rgba(16,24,40,0.05)] md:p-5">
      <div className="flex items-center gap-2 border-b border-[#f0f0f0] pb-4">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] text-[#ef0000]">
          <ImageIcon className="h-3.5 w-3.5" />
        </div>
        <h3 className="text-[20px] font-bold text-[#2b2f36] md:text-[22px]">
          รูปภาพและสื่อ
        </h3>
      </div>

      <div className="mt-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-5 w-[3px] shrink-0 rounded-full bg-[#377dff]" />
            <p className="truncate text-[13px] font-bold text-[#2b2f36]">
              อัปโหลดรูปภาพ
            </p>
          </div>

          <span className="shrink-0 rounded-full bg-[#f5f6f8] px-3 py-1 text-[10px] font-medium text-[#9fa6b2]">
            อัปโหลดได้สูงสุด 9 รูป
          </span>
        </div>

        {images.length > 0 ? (
          <div className="rounded-[14px] border border-dashed border-[#d9dde3] bg-[#fcfcfd] p-4">
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-[10px] border border-[#e5e7eb] bg-white"
                >
                  <img
                    src={src}
                    alt={`preview-${index}`}
                    className="h-full w-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={() => onRemoveImage(index)}
                    className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-[#7b8794] shadow-sm"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}

              {images.length < 9 && (
                <button
                  type="button"
                  onClick={onAddImage}
                  className="flex aspect-square items-center justify-center rounded-[10px] border border-dashed border-[#d5d9df] bg-white text-[#aab2bd] transition hover:bg-[#fafafa]"
                >
                  <span className="text-[22px] leading-none">+</span>
                </button>
              )}
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={onAddImage}
            className="flex w-full flex-col items-center justify-center rounded-[14px] border-2 border-dashed border-[#d9dde3] bg-[#fcfcfd] px-4 py-10 text-center transition hover:bg-[#fafafa]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f6f8] text-[#b4bcc7]">
              <Camera className="h-7 w-7" />
            </div>

            <p className="mt-5 text-[16px] font-bold text-[#4b5563]">
              คลิกเพื่ออัปโหลด หรือ ลากไฟล์มาวางที่นี่
            </p>

            <p className="mt-2 max-w-[240px] text-[11px] leading-5 text-[#9aa3af]">
              รองรับไฟล์ JPG, PNG ขนาดไม่เกิน 5MB ต่อรูป
              <br />
              (เลือกได้หลายรูปพร้อมกัน)
            </p>

            <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-[10px] border border-dashed border-[#d5d9df] bg-white text-[#aab2bd]">
              +
            </div>
          </button>
        )}
      </div>

      {/* ส่วนวิดีโอเผื่อไว้ */}
      <div className="mt-5">
        <p className="text-[12px] font-semibold text-[#4b5563]">
          ลิงก์ Virtual tour (360) <span className="text-[#a0a6b0]">(ถ้ามี)</span>
        </p>

        <input
          type="text"
          placeholder="วางลิงก์วิดีโอหรือ virtual tour"
          className="mt-2 h-[46px] w-full rounded-[12px] border border-[#e5e7eb] bg-white px-3 text-[13px] outline-none placeholder:text-[#b6bcc5] focus:border-[#ff6b6b]"
        />
      </div>
    </section>
  );
}