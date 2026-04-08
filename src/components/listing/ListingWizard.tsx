"use client";

import { useState } from "react";
import { ArrowUp, Clock3, Star } from "lucide-react";

import ListingStepper from "@/components/listing/ListingStepper";
import ListingActions from "@/components/listing/ListingActions";
import PurchaseModal from "@/components/listing/PurchaseModal";

import StepBasicInfo from "@/components/listing/steps/StepBasicInfo";
import StepDetailsPrice from "@/components/listing/steps/StepDetailsPrice";
import StepLocation from "@/components/listing/steps/StepLocation";
import StepMedia from "@/components/listing/steps/StepMedia";
import StepFeatures from "@/components/listing/steps/StepFeatures";
import StepSummary from "@/components/listing/steps/StepSummary";

type ModalType = "boost" | "extend" | "promote" | null;

export default function ListingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [servicePoints] = useState(500);
  const [modalType, setModalType] = useState<ModalType>(null);

  const [formData, setFormData] = useState({
    listingCategory: "เจ้าของ",
    serviceType: "ไม่ต้องการ",
    propertyType: "",
    postType: "",
    allocationType: "",
    projectName: "",

    salePrice: "",
    salePriceUnit: "",
    monthlyRentPrice: "",
    rentalStatus: "",
    leaseTerm: "",
    marketPrice: "",

    price: "",
    unitType: "",
    promo: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    floors: "",
    parking: "",
    usableArea: "",
    landArea: "",

    houseNumber: "",
    road: "",
    province: "",
    district: "",
    subdistrict: "",
    postcode: "",
  });

  const [selectedFurnitures, setSelectedFurnitures] = useState<string[]>([]);
  const [selectedHighlights, setSelectedHighlights] = useState<string[]>([]);
  const [selectedConveniences, setSelectedConveniences] = useState<string[]>([]);

  const [images, setImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
  ]);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleArrayValue = (
    field: "selectedFurnitures" | "selectedHighlights" | "selectedConveniences",
    value: string
  ) => {
    if (field === "selectedFurnitures") {
      setSelectedFurnitures((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }

    if (field === "selectedHighlights") {
      setSelectedHighlights((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }

    if (field === "selectedConveniences") {
      setSelectedConveniences((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  const handleAddImage = () => {
    const mockImages = [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=600&auto=format&fit=crop",
    ];

    const nextImage = mockImages[images.length % mockImages.length];

    if (images.length < 9) {
      setImages((prev) => [...prev, nextImage]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const goNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const goBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const getModalConfig = () => {
    if (modalType === "boost") {
      return {
        title: "ดันประกาศขึ้นบนสุด",
        description:
          "การดันประกาศที่ใช้จะทำให้ประกาศของคุณขึ้นไปอยู่ด้านบนสุด ช่วยเพิ่มโอกาสในการมองเห็นให้แก่ผู้ค้นหา",
        price: 20,
        iconType: "boost" as const,
      };
    }

    if (modalType === "promote") {
      return {
        title: "โปรโมทประกาศ (30 วัน)",
        description:
          "ประกาศของคุณที่เลือกเล่นจะโดดเด่นเป็นพิเศษ ช่วยเพิ่มโอกาสในการขาย/เช่ามากกว่าเดิม",
        price: 150,
        iconType: "promote" as const,
      };
    }

    if (modalType === "extend") {
      return {
        title: "ต่ออายุประกาศ (30 วัน)",
        description:
          "เพิ่มอายุประกาศของคุณต่อไปอีก 30 วันนับจากวันที่ปัจจุบัน เพื่อไม่ให้ประกาศถูกปิดใช้งานตามอายุ",
        price: 30,
        iconType: "extend" as const,
      };
    }

    return null;
  };

  const renderModalIcon = (iconType: "boost" | "promote" | "extend") => {
    if (iconType === "boost") {
      return <ArrowUp className="h-6 w-6 text-[#3b82f6]" />;
    }

    if (iconType === "promote") {
      return <Star className="h-6 w-6 text-[#f59e0b]" />;
    }

    return <Clock3 className="h-6 w-6 text-[#22c55e]" />;
  };

  const modalConfig = getModalConfig();

  return (
    <>
      <section className="px-4 py-5 md:px-6 xl:px-7">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-[32px] font-extrabold tracking-tight text-[#20242a]">
                ลงประกาศอสังหาริมทรัพย์
              </h1>
              <p className="mt-1 text-[13px] text-[#9aa3af]">
                กรอกข้อมูลทีละขั้นตอนเพื่อให้ได้ประกาศที่สมบูรณ์ที่สุด
              </p>
            </div>

            <div className="rounded-[14px] border border-[#f1e4d2] bg-[#fff7ed] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#ef0000]">
                  ◎
                </div>

                <div>
                  <p className="text-[11px] font-medium text-[#9aa3af]">
                    พอยท์คงเหลือของคุณ
                  </p>
                  <p className="text-[30px] font-extrabold text-[#ef0000]">
                    {servicePoints}
                    <span className="ml-1 text-[12px] font-medium text-[#8f96a3]">
                      พอยท์
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ListingStepper currentStep={currentStep} />

          {currentStep === 1 && (
            <StepBasicInfo formData={formData} onChange={updateField} />
          )}

          {currentStep === 2 && (
            <StepDetailsPrice formData={formData} onChange={updateField} />
          )}

          {currentStep === 3 && (
            <StepLocation formData={formData} onChange={updateField} />
          )}

          {currentStep === 4 && (
            <StepMedia
              images={images}
              onAddImage={handleAddImage}
              onRemoveImage={handleRemoveImage}
            />
          )}

          {currentStep === 5 && (
            <StepFeatures
              selectedFurnitures={selectedFurnitures}
              selectedHighlights={selectedHighlights}
              selectedConveniences={selectedConveniences}
              onToggle={toggleArrayValue}
            />
          )}

          {currentStep === 6 && (
            <div className="space-y-4">
              <StepSummary formData={formData} servicePoints={servicePoints} />

              <div className="grid gap-3 md:grid-cols-3">
                <button
                  type="button"
                  onClick={() => setModalType("boost")}
                  className="rounded-[12px] border border-[#ececec] bg-white p-4 text-left shadow-[0_2px_8px_rgba(16,24,40,0.04)]"
                >
                  <h4 className="text-[16px] font-bold text-[#2b2f36]">
                    ดันประกาศขึ้นบนสุด
                  </h4>
                  <p className="mt-2 text-[12px] text-[#66707f]">
                    ช่วยเพิ่มโอกาสในการมองเห็น
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setModalType("promote")}
                  className="rounded-[12px] border border-[#ececec] bg-white p-4 text-left shadow-[0_2px_8px_rgba(16,24,40,0.04)]"
                >
                  <h4 className="text-[16px] font-bold text-[#2b2f36]">
                    โปรโมทประกาศ
                  </h4>
                  <p className="mt-2 text-[12px] text-[#66707f]">
                    ทำให้ประกาศเด่นเป็นพิเศษ
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setModalType("extend")}
                  className="rounded-[12px] border border-[#ececec] bg-white p-4 text-left shadow-[0_2px_8px_rgba(16,24,40,0.04)]"
                >
                  <h4 className="text-[16px] font-bold text-[#2b2f36]">
                    ต่ออายุประกาศ
                  </h4>
                  <p className="mt-2 text-[12px] text-[#66707f]">
                    เพิ่มวันใช้งานให้ประกาศ
                  </p>
                </button>
              </div>
            </div>
          )}

          <ListingActions
            isFirstStep={currentStep === 1}
            isLastStep={currentStep === 6}
            onBack={goBack}
            onNext={goNext}
          />
        </div>
      </section>

      {modalConfig && (
        <PurchaseModal
          open={true}
          title={modalConfig.title}
          description={modalConfig.description}
          price={modalConfig.price}
          points={servicePoints}
          icon={renderModalIcon(modalConfig.iconType)}
          onClose={() => setModalType(null)}
          onConfirm={() => setModalType(null)}
        />
      )}
    </>
  );
}