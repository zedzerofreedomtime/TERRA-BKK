export const allocationTypeOptions = [
  "บ้านสร้างเอง",
  "โครงการจัดสรร",
];

export const categoryOptions = [
  "ขาย",
  "ขายดาวน์",
  "ขายและเช่า",
  "เช่า",
];

export const saleUnitOptions = [
  "บาท",
  "บาท/ตร.วา",
  "บาท/ไร่",
  "บาท/งาน",
];

export const rentalContractOptions = [
  "3 เดือน",
  "6 เดือน",
  "1 ปี",
  "3 ปี",
  "5 ปี",
  "10 ปี",
  "15 ปี",
  "20 ปี",
  "30 ปี",
];

export const rentalStatusOptions = [
  "ไม่มีผู้เช่า",
  "มีผู้เช่า",
];

export const furnitures = [
  "จอมแอร์",
  "ผ้าม่าน",
  "เครื่องปรับอากาศ",
  "เครื่องทำน้ำอุ่น",
  "ชุดครัว",
  "ตู้เสื้อผ้า",
  "เตียง",
  "โซฟา",
  "ตู้เย็น",
  "โทรทัศน์",
  "เครื่องซักผ้า",
  "โทรศัพท์",
  "อินเตอร์เน็ต (WiFi)",
];

export const highlights = [
  "ติดถนน/ซอยหลัก",
  "วิวสระว่ายน้ำ",
  "สระว่ายน้ำส่วนตัว",
  "วิวแม่น้ำ",
  "ใกล้รถไฟฟ้า",
  "เข้าออกได้หลายทาง",
  "ห้องมุม",
  "ตกแต่งใหม่",
];

export const conveniences = [
  "ลิฟต์โดยสาร",
  "สระว่ายน้ำ",
  "สวนสาธารณะ",
  "ร้านสะดวกซื้อ",
  "ฟิตเนส",
  "ระบบรักษาความปลอดภัย",
  "สนามเด็กเล่น",
  "ที่จอดรถ",
];

export const listingSteps = [
  { id: 1, label: "ข้อมูลทั่วไป" },
  { id: 2, label: "รายละเอียด" },
  { id: 3, label: "ที่ตั้งและแผนที่" },
  { id: 4, label: "รูปภาพ" },
  { id: 5, label: "สิ่งอำนวยความสะดวก" },
  { id: 6, label: "สรุป" },
];

export const propertyTypeOptions = [
  "บ้านเดี่ยว",
  "คอนโด",
  "ที่ดิน",
  "ทาวน์เฮ้าส์",
  "โฮมออฟฟิศ",
  "โรงงาน",
  "โกดัง",
  "สำนักงาน",
  "อพาร์ทเม้นท์",
  "โรงแรม/โฮสเทล",
];

export type DynamicField = {
  key: string;
  label: string;
  placeholder?: string;
  type?: "text" | "select";
  options?: string[];
  
};

export const propertyFieldMap: Record<string, DynamicField[]> = {
  "บ้านเดี่ยว": [
    { key: "landAreaSqw", label: "ตร.ว.", placeholder: "พื้นที่ใช้สอย - ตร.ว." },
    { key: "usableAreaSqm", label: "ตร.ม.", placeholder: "พื้นที่ใช้สอย - ตร.ม." },
    { key: "floorCount", label: "จำนวนชั้น", type: "select", options: ["1", "2", "3", "4", "5+"] },
    { key: "bedroomCount", label: "จำนวนห้องนอน", type: "select", options: ["1", "2", "3", "4", "5+"] },
    { key: "bathroomCount", label: "จำนวนห้องน้ำ", type: "select", options: ["1", "2", "3", "4", "5+"] },
    { key: "maidRoomCount", label: "จำนวนห้องแม่บ้าน", type: "select", options: ["0", "1", "2", "3+"] },
    { key: "livingRoomCount", label: "จำนวนห้องนั่งเล่น", type: "select", options: ["0", "1", "2", "3+"] },
    { key: "parkingCount", label: "จำนวนที่จอดรถ", type: "select", options: ["0", "1", "2", "3", "4", "5+"] },
    { key: "yearBuilt", label: "ปีที่สร้างเสร็จ", type: "select", options: ["ปีที่สร้างเสร็จ", "2025", "2024", "2023", "2022", "2021", "2020"] },
    { key: "ownershipYear", label: "ปีที่ซื้อมา", type: "select", options: ["ปีที่ซื้อมา", "2025", "2024", "2023", "2022", "2021", "2020"] },
    { key: "frontDirection", label: "ทิศหน้าบ้าน", type: "select", options: ["ทิศหน้าบ้าน", "เหนือ", "ใต้", "ออก", "ตก", "ตะวันออกเฉียงเหนือ", "ตะวันออกเฉียงใต้", "ตะวันตกเฉียงเหนือ", "ตะวันตกเฉียงใต้"] },
    { key: "buildingCondition", label: "สภาพอาคาร", type: "select", options: ["สภาพอาคาร", "ใหม่", "ดีมาก", "ดี", "พอใช้", "ต้องปรับปรุง"] },
    { key: "houseStyle", label: "ลักษณะบ้าน", type: "select", options: ["ลักษณะบ้าน", "เดี่ยว", "โมเดิร์น", "มินิมอล", "คลาสสิก"] },
  ],

  คอนโด: [
    { key: "usableAreaSqm", label: "ตร.ม.", placeholder: "พื้นที่ใช้สอย - ตร.ม." },
    { key: "floorCount", label: "จำนวนชั้น", type: "select", options: ["1", "2", "3", "4", "5+", "10+", "20+", "30+"] },
    { key: "floorNo", label: "ชั้นที่", type: "select", options: ["ชั้นที่", "1", "2", "3", "4", "5", "10", "15", "20", "25", "30+"] },
    { key: "bedroomCount", label: "จำนวนห้องนอน", type: "select", options: ["สตูดิโอ", "1", "2", "3", "4+"] },
    { key: "bathroomCount", label: "จำนวนห้องน้ำ", type: "select", options: ["1", "2", "3", "4+"] },
    { key: "maidRoomCount", label: "จำนวนห้องแม่บ้าน", type: "select", options: ["0", "1", "2+"] },
    { key: "livingRoomCount", label: "จำนวนห้องนั่งเล่น", type: "select", options: ["0", "1", "2+"] },
    { key: "yearBuilt", label: "ปีที่สร้างเสร็จ", type: "select", options: ["ปีที่สร้างเสร็จ", "2025", "2024", "2023", "2022", "2021", "2020"] },
    { key: "ownershipYear", label: "ปีที่ซื้อมา", type: "select", options: ["ปีที่ซื้อมา", "2025", "2024", "2023", "2022", "2021", "2020"] },
    { key: "frontDirection", label: "ทิศหน้าบ้าน", type: "select", options: ["ทิศหน้าบ้าน", "เหนือ", "ใต้", "ออก", "ตก"] },
    { key: "buildingCondition", label: "สภาพอาคาร", type: "select", options: ["สภาพอาคาร", "ใหม่", "ดีมาก", "ดี", "พอใช้", "ต้องปรับปรุง"] },
  ],

  ที่ดิน: [
    { key: "landAreaRai", label: "ขนาดที่ดิน ไร่", placeholder: "ขนาดที่ดิน ไร่" },
    { key: "ngan", label: "งาน", placeholder: "งาน" },
    { key: "landAreaSqw", label: "ตร.ว.", placeholder: "ขนาดที่ดิน - ตร.ว." },
    { key: "widthMeter", label: "กว้าง (ม.)", placeholder: "กว้าง - ม." },
    { key: "lengthMeter", label: "ยาว (ม.)", placeholder: "ยาว - ม." },
    { key: "yearBuilt", label: "ปีที่สร้างเสร็จ", type: "select", options: ["ปีที่สร้างเสร็จ", "ไม่มี", "2025", "2024", "2023"] },
    { key: "ownershipYear", label: "ปีที่ซื้อมา", type: "select", options: ["ปีที่ซื้อมา", "2025", "2024", "2023", "2022"] },
    { key: "frontDirection", label: "ทิศหน้าบ้าน", type: "select", options: ["ทิศหน้าบ้าน", "เหนือ", "ใต้", "ออก", "ตก"] },
    { key: "buildingCondition", label: "สภาพอาคาร", type: "select", options: ["สภาพอาคาร", "ไม่มีอาคาร", "มีอาคาร", "ต้องถม", "พร้อมใช้งาน"] },
  ],

  ทาวน์เฮ้าส์: [
    { key: "landAreaSqw", label: "ตร.ว.", placeholder: "ขนาดที่ดิน - ตร.ว." },
    { key: "usableAreaSqm", label: "ตร.ม.", placeholder: "พื้นที่ใช้สอย - ตร.ม." },
    { key: "floorCount", label: "จำนวนชั้น", type: "select", options: ["1", "2", "3", "4", "5+"] },
    { key: "bedroomCount", label: "จำนวนห้องนอน", type: "select", options: ["1", "2", "3", "4", "5+"] },
    { key: "bathroomCount", label: "จำนวนห้องน้ำ", type: "select", options: ["1", "2", "3", "4", "5+"] },
    { key: "parkingCount", label: "จำนวนที่จอดรถ", type: "select", options: ["0", "1", "2", "3+"] },
    { key: "maidRoomCount", label: "จำนวนห้องแม่บ้าน", type: "select", options: ["0", "1", "2+"] },
    { key: "livingRoomCount", label: "จำนวนห้องนั่งเล่น", type: "select", options: ["0", "1", "2+"] },
    { key: "yearBuilt", label: "ปีที่สร้างเสร็จ", type: "select", options: ["ปีที่สร้างเสร็จ", "2025", "2024", "2023", "2022"] },
    { key: "ownershipYear", label: "ปีที่ซื้อมา", type: "select", options: ["ปีที่ซื้อมา", "2025", "2024", "2023", "2022"] },
    { key: "frontDirection", label: "ทิศหน้าบ้าน", type: "select", options: ["ทิศหน้าบ้าน", "เหนือ", "ใต้", "ออก", "ตก"] },
    { key: "buildingCondition", label: "สภาพอาคาร", type: "select", options: ["สภาพอาคาร", "ใหม่", "ดีมาก", "ดี", "พอใช้"] },
  ],

  โฮมออฟฟิศ: [
    { key: "landAreaRai", label: "ขนาดที่ดิน ไร่", placeholder: "ขนาดที่ดิน ไร่" },
    { key: "ngan", label: "งาน", placeholder: "งาน" },
    { key: "landAreaSqw", label: "ตร.ว.", placeholder: "ขนาดที่ดิน - ตร.ว." },
    { key: "usableAreaSqm", label: "ตร.ม.", placeholder: "พื้นที่ใช้สอย - ตร.ม." },
    { key: "widthMeter", label: "กว้าง (ม.)", placeholder: "กว้าง - ม." },
    { key: "lengthMeter", label: "ยาว (ม.)", placeholder: "ยาว - ม." },
    { key: "floorCount", label: "จำนวนชั้น", type: "select", options: ["1", "2", "3", "4", "5+"] },
    { key: "bedroomCount", label: "จำนวนห้องนอน", type: "select", options: ["0", "1", "2", "3+"] },
    { key: "bathroomCount", label: "จำนวนห้องน้ำ", type: "select", options: ["1", "2", "3", "4+"] },
    { key: "parkingCount", label: "จำนวนที่จอดรถ", type: "select", options: ["0", "1", "2", "3", "4", "5+"] },
    { key: "maidRoomCount", label: "จำนวนห้องแม่บ้าน", type: "select", options: ["0", "1", "2+"] },
    { key: "livingRoomCount", label: "จำนวนห้องนั่งเล่น", type: "select", options: ["0", "1", "2+"] },
    { key: "yearBuilt", label: "ปีที่สร้างเสร็จ", type: "select", options: ["ปีที่สร้างเสร็จ", "2025", "2024", "2023", "2022"] },
    { key: "ownershipYear", label: "ปีที่ซื้อมา", type: "select", options: ["ปีที่ซื้อมา", "2025", "2024", "2023", "2022"] },
    { key: "frontDirection", label: "ทิศหน้าบ้าน", type: "select", options: ["ทิศหน้าบ้าน", "เหนือ", "ใต้", "ออก", "ตก"] },
    { key: "buildingCondition", label: "สภาพอาคาร", type: "select", options: ["สภาพอาคาร", "ใหม่", "ดีมาก", "ดี", "พอใช้"] },
  ],

  โรงงาน: [
    { key: "landAreaRai", label: "ขนาดที่ดิน ไร่", placeholder: "ขนาดที่ดิน ไร่" },
    { key: "ngan", label: "งาน", placeholder: "งาน" },
    { key: "landAreaSqw", label: "ตร.ว.", placeholder: "ขนาดที่ดิน - ตร.ว." },
    { key: "usableAreaSqm", label: "ตร.ม.", placeholder: "พื้นที่ใช้สอย - ตร.ม." },
    { key: "widthMeter", label: "กว้าง (ม.)", placeholder: "กว้าง - ม." },
    { key: "lengthMeter", label: "ยาว (ม.)", placeholder: "ยาว - ม." },
    { key: "floorCount", label: "จำนวนชั้น", type: "select", options: ["1", "2", "3", "4", "5+"] },
    { key: "yearBuilt", label: "ปีที่สร้างเสร็จ", type: "select", options: ["ปีที่สร้างเสร็จ", "2025", "2024", "2023", "2022"] },
    { key: "ownershipYear", label: "ปีที่ซื้อมา", type: "select", options: ["ปีที่ซื้อมา", "2025", "2024", "2023", "2022"] },
    { key: "frontDirection", label: "ทิศหน้าบ้าน", type: "select", options: ["ทิศหน้าบ้าน", "เหนือ", "ใต้", "ออก", "ตก"] },
    { key: "buildingCondition", label: "สภาพอาคาร", type: "select", options: ["สภาพอาคาร", "ใหม่", "ดีมาก", "ดี", "พอใช้"] },
  ],

  โกดัง: [
    { key: "landAreaRai", label: "ขนาดที่ดิน ไร่", placeholder: "ขนาดที่ดิน ไร่" },
    { key: "ngan", label: "งาน", placeholder: "งาน" },
    { key: "landAreaSqw", label: "ตร.ว.", placeholder: "ขนาดที่ดิน - ตร.ว." },
    { key: "usableAreaSqm", label: "ตร.ม.", placeholder: "พื้นที่ใช้สอย - ตร.ม." },
    { key: "widthMeter", label: "กว้าง (ม.)", placeholder: "กว้าง - ม." },
    { key: "lengthMeter", label: "ยาว (ม.)", placeholder: "ยาว - ม." },
    { key: "floorCount", label: "จำนวนชั้น", type: "select", options: ["1", "2", "3", "4", "5+"] },
    { key: "yearBuilt", label: "ปีที่สร้างเสร็จ", type: "select", options: ["ปีที่สร้างเสร็จ", "2025", "2024", "2023", "2022"] },
    { key: "ownershipYear", label: "ปีที่ซื้อมา", type: "select", options: ["ปีที่ซื้อมา", "2025", "2024", "2023", "2022"] },
    { key: "frontDirection", label: "ทิศหน้าบ้าน", type: "select", options: ["ทิศหน้าบ้าน", "เหนือ", "ใต้", "ออก", "ตก"] },
    { key: "buildingCondition", label: "สภาพอาคาร", type: "select", options: ["สภาพอาคาร", "ใหม่", "ดีมาก", "ดี", "พอใช้"] },
  ],

  สำนักงาน: [
    { key: "landAreaSqw", label: "ตร.ว.", placeholder: "ขนาดที่ดิน - ตร.ว." },
    { key: "usableAreaSqm", label: "ตร.ม.", placeholder: "พื้นที่ใช้สอย - ตร.ม." },
    { key: "floorCount", label: "จำนวนชั้น", type: "select", options: ["1", "2", "3", "4", "5+", "10+"] },
    { key: "parkingCount", label: "จำนวนที่จอดรถ", type: "select", options: ["0", "1", "2", "3", "4", "5+"] },
    { key: "yearBuilt", label: "ปีที่สร้างเสร็จ", type: "select", options: ["ปีที่สร้างเสร็จ", "2025", "2024", "2023", "2022"] },
    { key: "ownershipYear", label: "ปีที่ซื้อมา", type: "select", options: ["ปีที่ซื้อมา", "2025", "2024", "2023", "2022"] },
    { key: "frontDirection", label: "ทิศหน้าบ้าน", type: "select", options: ["ทิศหน้าบ้าน", "เหนือ", "ใต้", "ออก", "ตก"] },
    { key: "buildingCondition", label: "สภาพอาคาร", type: "select", options: ["สภาพอาคาร", "ใหม่", "ดีมาก", "ดี", "พอใช้"] },
  ],

  อพาร์ทเม้นท์: [
    { key: "landAreaRai", label: "ขนาดที่ดิน ไร่", placeholder: "ขนาดที่ดิน ไร่" },
    { key: "ngan", label: "งาน", placeholder: "งาน" },
    { key: "landAreaSqw", label: "ตร.ว.", placeholder: "ขนาดที่ดิน - ตร.ว." },
    { key: "usableAreaSqm", label: "ตร.ม.", placeholder: "พื้นที่ใช้สอย - ตร.ม." },
    { key: "widthMeter", label: "กว้าง (ม.)", placeholder: "กว้าง - ม." },
    { key: "lengthMeter", label: "ยาว (ม.)", placeholder: "ยาว - ม." },
    { key: "floorCount", label: "จำนวนชั้น", type: "select", options: ["1", "2", "3", "4", "5+", "10+"] },
    { key: "bedroomCount", label: "จำนวนห้องนอน", type: "select", options: ["1", "2", "3", "4", "5+"] },
    { key: "bathroomCount", label: "จำนวนห้องน้ำ", type: "select", options: ["1", "2", "3", "4", "5+"] },
    { key: "parkingCount", label: "จำนวนที่จอดรถ", type: "select", options: ["0", "1", "2", "3", "4", "5+"] },
    { key: "yearBuilt", label: "ปีที่สร้างเสร็จ", type: "select", options: ["ปีที่สร้างเสร็จ", "2025", "2024", "2023", "2022"] },
    { key: "ownershipYear", label: "ปีที่ซื้อมา", type: "select", options: ["ปีที่ซื้อมา", "2025", "2024", "2023", "2022"] },
    { key: "frontDirection", label: "ทิศหน้าบ้าน", type: "select", options: ["ทิศหน้าบ้าน", "เหนือ", "ใต้", "ออก", "ตก"] },
    { key: "buildingCondition", label: "สภาพอาคาร", type: "select", options: ["สภาพอาคาร", "ใหม่", "ดีมาก", "ดี", "พอใช้"] },
  ],

  "โรงแรม/โฮสเทล": [
    { key: "landAreaRai", label: "ขนาดที่ดิน ไร่", placeholder: "ขนาดที่ดิน ไร่" },
    { key: "ngan", label: "งาน", placeholder: "งาน" },
    { key: "landAreaSqw", label: "ตร.ว.", placeholder: "ขนาดที่ดิน - ตร.ว." },
    { key: "usableAreaSqm", label: "ตร.ม.", placeholder: "พื้นที่ใช้สอย - ตร.ม." },
    { key: "widthMeter", label: "กว้าง (ม.)", placeholder: "กว้าง - ม." },
    { key: "lengthMeter", label: "ยาว (ม.)", placeholder: "ยาว - ม." },
    { key: "floorCount", label: "จำนวนชั้น", type: "select", options: ["1", "2", "3", "4", "5+", "10+"] },
    { key: "bedroomCount", label: "จำนวนห้องนอน", type: "select", options: ["1", "2", "3", "4", "5+"] },
    { key: "bathroomCount", label: "จำนวนห้องน้ำ", type: "select", options: ["1", "2", "3", "4", "5+"] },
    { key: "parkingCount", label: "จำนวนที่จอดรถ", type: "select", options: ["0", "1", "2", "3", "4", "5+"] },
    { key: "yearBuilt", label: "ปีที่สร้างเสร็จ", type: "select", options: ["ปีที่สร้างเสร็จ", "2025", "2024", "2023", "2022"] },
    { key: "ownershipYear", label: "ปีที่ซื้อมา", type: "select", options: ["ปีที่ซื้อมา", "2025", "2024", "2023", "2022"] },
    { key: "frontDirection", label: "ทิศหน้าบ้าน", type: "select", options: ["ทิศหน้าบ้าน", "เหนือ", "ใต้", "ออก", "ตก"] },
    { key: "buildingCondition", label: "สภาพอาคาร", type: "select", options: ["สภาพอาคาร", "ใหม่", "ดีมาก", "ดี", "พอใช้"] },
  ],

  
};