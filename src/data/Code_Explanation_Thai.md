# เว็บไซต์ E-Learning - การอธิบายโค้ด

## ภาพรวมของโปรเจกต์

นี่คือแอปพลิเคชัน Next.js ที่สร้างด้วย TypeScript ซึ่งนำไปใช้เป็นแพลตฟอร์ม e-learning ที่ครอบคลุมสำหรับนักศึกษาสาขาวิทยาการคอมพิวเตอร์ แอปพลิเคชันนี้ปฏิบัติตามแนวทางการพัฒนาเว็บสมัยใหม่โดยเน้นที่ประสิทธิภาพ ความสามารถในการเข้าถึง และประสบการณ์ของผู้ใช้

## สแต็กเทคโนโลยี

- **Next.js 15** - React framework พร้อม App Router
- **TypeScript** - JavaScript ที่มีระบบตรวจสอบประเภท
- **CSS3** - การจัดรูปแบบแบบกำหนดเองโดยไม่ใช้ framework ภายนอก
- **React Context API** - การจัดการสถานะ
- **React Hooks** - ตรรกะของ Component

## โครงสร้างโปรเจกต์

```
src/
├── app/                    # หน้า App Router
│   ├── layout.tsx         # เลย์เอาต์รากพร้อมข้อมูลเมตา
│   ├── page.tsx           # หน้าแรก
│   ├── admin/             # แดชบอร์ดผู้ดูแลระบบ
│   │   └── page.tsx
│   ├── courses/           # ส่วนคอร์สเรียน
│   │   ├── page.tsx       # รายการคอร์สเรียน
│   │   └── [id]/         # หน้ารายละเอียดคอร์สแบบไดนามิก
│   │       └── page.tsx
│   ├── login/             # การตรวจสอบสิทธิ์
│   │   └── page.tsx
│   └── globals.css        # สไตล์ทั่วไป
├── components/            # ส่วนประกอบ UI ที่ใช้ซ้ำได้
├── contexts/              # ผู้ให้บริการ React context
├── data/                  # ไฟล์ข้อมูลคงที่
└── styles/                # การจัดรูปแบบเพิ่มเติม
```

## ส่วนประกอบหลัก

### 1. หน้าแรก (`/src/app/page.tsx`)

**วัตถุประสงค์**: หน้า Landing หลักพร้อมวิดีโอพื้นหลังและไฮไลต์คอร์ส

**คุณสมบัติหลัก**:
- พื้นหลังวิดีโอแบบ Responsive พร้อมเนื้อหาโอเวอร์เลย์
- การแนะนำคอร์ส (คอร์ส GitHub และ Docker)
- ส่วนข้อมูลอาจารย์
- สลับโหมดมืด/สว่าง
- การผสานระบบสลับภาษา

**การดำเนินการทางเทคนิค**:
```typescript
// ใช้ตัวแปร CSS สำหรับธีม
<div style={{ 
  backgroundColor: 'var(--background)',
  minHeight: 'calc(100vh - 80px)'
}}>

// ส่วนพื้นหลังวิดีโอ
<video autoPlay loop muted playsInline>
  <source src="/bg_video1.mp4" type="video/mp4" />
</video>

// เนื้อหาแบบไดนามิกตามบริบทภาษา
<h1>{t('home.title')}<br />
  <span style={{ color: 'var(--primary-light)' }}>
    {t('home.subtitle')}
  </span>
</h1>
```

### 2. หน้าคอร์สเรียน (`/src/app/courses/page.tsx`)

**วัตถุประสงค์**: แสดงคอร์สทั้งหมดในรูปแบบตารางกริดพร้อมความสามารถในการกรอง

**คุณสมบัติหลัก**:
- การกรองคอร์สตามปี เทอม และระดับความยาก
- การจัดกลุ่มตามปีการศึกษา/เทอม
- แดชบอร์ดสถิติ
- การจัดรูปแบบตารางกริดแบบ Responsive

**การดำเนินการทางเทคนิค**:
```typescript
// การจัดการสถานะสำหรับตัวกรอง
const [selectedYear, setSelectedYear] = useState<number | null>(null);
const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

// ตรรกะการกรองคอร์ส
const filteredCourses = curriculum.filter(course => {
  if (selectedYear && course.year !== selectedYear) return false;
  if (selectedSemester && course.semester !== selectedSemester) return false;
  if (selectedDifficulty && course.difficulty !== selectedDifficulty) return false;
  return true;
});

// การจัดกลุ่มคอร์ส
const groupedCourses = filteredCourses.reduce((acc, course) => {
  const key = `Year ${course.year} Semester ${course.semester}`;
  if (!acc[key]) acc[key] = [];
  acc[key].push(course);
  return acc;
}, {} as Record<string, CourseContent[]>);
```

### 3. หน้ารายละเอียดคอร์ส (`/src/app/courses/[id]/page.tsx`)

**วัตถุประสงค์**: มุมมองโดยละเอียดของคอร์สแต่ละคอร์สพร้อมข้อมูลที่ครอบคลุม

**คุณสมบัติหลัก**:
- การกำหนดเส้นทางแบบไดนามิกตาม ID ของคอร์ส
- การแสดงข้อมูลคอร์สโดยละเอียด
- ส่วนเครื่องมือและเทคโนโลยี
- ส่วนบทเรียนวิดีโอ
- การนำทางแบบ Breadcrumb

**การดำเนินการทางเทคนิค**:
```typescript
// การจัดการพารามิเตอร์เส้นทางแบบไดนามิก
interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

// การดึงข้อมูลคอร์ส
const course = curriculum.find(c => c.id === params.id);

// การจัดการข้อผิดพลาดสำหรับคอร์สที่ไม่มีอยู่
if (!course) {
  notFound();
}

// การจัดรูปแบบตารางกริดแบบ Responsive
<div className="course-main-grid gap-8">
  <div className="space-y-8"> {/* เนื้อหาหลัก */}
  <div className="space-y-6"> {/* แถบด้านข้าง */}
```

### 4. แดชบอร์ดผู้ดูแลระบบ (`/src/app/admin/page.tsx`)

**วัตถุประสงค์**: อินเทอร์เฟซสำหรับผู้ดูแลระบบเพื่อจัดการคอร์สและผู้ใช้

**คุณสมบัติหลัก**:
- แดชบอร์ดพร้อมสถิติ
- อินเทอร์เฟซการจัดการคอร์ส
- ระบบการจัดการผู้ใช้
- การกำหนดค่าการตั้งค่า

**การดำเนินการทางเทคนิค**:
```typescript
// สถานะการตรวจสอบสิทธิ์แบบจำลอง
const [isLoggedIn, setIsLoggedIn] = useState(false);

// การคำนวณสถิติแดชบอร์ด
const totalCourses = curriculum.length;
const beginnerCourses = curriculum.filter(c => c.difficulty === 'beginner').length;
const totalTools = [...new Set(curriculum.flatMap(c => c.tools.map(t => t.name)))].length;

// ตารางข้อมูลแบบ Responsive
<div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    {/* เนื้อหาตาราง */}
  </table>
</div>
```

### 5. หน้าเข้าสู่ระบบ (`/src/app/login/page.tsx`)

**วัตถุประสงค์**: อินเทอร์เฟซการตรวจสอบสิทธิ์ผู้ใช้

**คุณสมบัติหลัก**:
- แบบฟอร์มอีเมล/รหัสผ่าน
- การตรวจสอบแบบฟอร์ม
- การตรวจสอบสิทธิ์แบบจำลอง
- การออกแบบแบบ Responsive

**การดำเนินการทางเทคนิค**:
```typescript
// การจัดการสถานะแบบฟอร์ม
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

// ตัวจัดการการส่งแบบฟอร์ม
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // ตรรกะการตรวจสอบสิทธิ์แบบจำลอง
  if (email && password) {
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/admin');
  } else {
    setError('Please fill in all fields');
  }
};
```

## ส่วนประกอบหลัก

### ส่วนประกอบ CourseCard (`/src/components/CourseCard.tsx`)

**วัตถุประสงค์**: ส่วนประกอบการ์ดที่ใช้ซ้ำได้สำหรับแสดงข้อมูลคอร์ส

**คุณสมบัติหลัก**:
- การออกแบบแบบ Responsive
- ป้ายระดับความยากแบบไดนามิก
- ตัวบ่งชี้ปี/เทอม
- ตัวอย่างเครื่องมือ

**การดำเนินการทางเทคนิค**:
```typescript
// การจัดรูปแบบแบบไดนามิกตามคุณสมบัติของคอร์ส
const getYearColor = (year: number) => {
  switch (year) {
    case 1: return 'badge-year-1';
    case 2: return 'badge-year-2';
    default: return 'badge-year-default';
  }
};

// การเรนเดอร์แบบมีเงื่อนไขตามภาษา
<h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
  {language === 'th' ? course.title : course.titleEn}
</h3>
```

### สลับภาษา (`/src/components/LanguageSwitch.tsx`)

**วัตถุประสงค์**: ส่วนประกอบ UI สำหรับสลับระหว่างภาษาไทยและอังกฤษ

**คุณสมบัติหลัก**:
- การออกแบบสวิตช์แบบ Toggle
- การจัดรูปแบบตามธง
- การเปลี่ยนผ่านแบบราบรื่น
- สถานะที่ยั่งยืน

**การดำเนินการทางเทคนิค**:
```typescript
// การผสานบริบท
const { language, setLanguage } = useLanguage();

// ฟังก์ชันการทำงาน Toggle
<div onClick={() => setLanguage(language === 'th' ? 'en' : 'th')}>

// การจัดรูปแบบแบบไดนามิกตามภาษาปัจจุบัน
<div style={{
  left: language === 'th' ? '4px' : 'calc(100% - 28px)'
}}>
```

### สลับโหมดมืด (`/src/components/DarkModeToggle.tsx`)

**วัตถุประสงค์**: ส่วนประกอบ UI สำหรับสลับระหว่างธีมสว่างและมืด

**คุณสมบัติหลัก**:
- สวิตช์แบบ Toggle พร้อมไอคอนดวงอาทิตย์/ดวงจันทร์
- การตั้งค่าธีมที่ยั่งยืน
- เอฟเฟกต์การเปล่งรัศมี
- การเปลี่ยนผ่านแบบราบรื่น

**การดำเนินการทางเทคนิค**:
```typescript
// การยั่งยืนของธีม
useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    setIsDarkMode(true);
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}, []);

// การสลับธีม
const toggleDarkMode = () => {
  const newMode = !isDarkMode;
  setIsDarkMode(newMode);
  document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
  localStorage.setItem('theme', newMode ? 'dark' : 'light');
};
```

## การจัดการข้อมูล

### ข้อมูลหลักสูตร (`/src/data/curriculum.ts`)

**วัตถุประสงค์**: การจัดเก็บข้อมูลคอร์สทั้งหมดแบบรวมศูนย์

**โครงสร้าง**:
```typescript
interface CourseContent {
  id: string;
  title: string;
  titleEn: string;
  year: number;
  semester: number;
  description: string;
  descriptionEn?: string;
  fullDescription: string;
  fullDescriptionEn: string;
  objectives: string[];
  objectivesEn: string[];
  topics: string[];
  topicsEn: string[];
  tools: Tool[];
  prerequisites?: string[];
  credits?: number;
  duration?: string;
  image?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}
```

### บริบทภาษา (`/src/contexts/LanguageContext.tsx`)

**วัตถุประสงค์**: การจัดการสถานะทั่วโลกสำหรับการตั้งค่าภาษา

**การดำเนินการ**:
```typescript
// ระบบการแปล
const translations = {
  th: {
    'nav.home': 'หน้าหลัก',
    'nav.courses': 'คอร์สเรียน',
    // ... การแปลเพิ่มเติม
  },
  en: {
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    // ... การแปลเพิ่มเติม
  }
};

// ฟังก์ชันการแปล
const t = (key: string): string => {
  return translations[language][key as keyof typeof translations['th']] || key;
};
```

## ระบบการจัดรูปแบบ

### ตัวแปร CSS (`/src/app/globals.css`)

**วัตถุประสงค์**: การจัดการธีมผ่านคุณสมบัติ CSS ที่กำหนดเอง

**การดำเนินการ**:
```css
/* ตัวแปรธีมสว่าง */
:root {
  --background: #ffffff;
  --foreground: #000000;
  --card-background: #ffffff;
  --primary-light: #60a5fa;
}

/* ตัวแปรธีมมืด */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ffffff;
    --card-background: #1a1a1a;
  }
}

/* การแทนที่ธีมแบบชัดเจน */
html[data-theme="dark"] {
  --background: #0a0a0a;
  --foreground: #ffffff;
}
```

## การออกแบบแบบ Responsive

**การดำเนินการ**:
```css
/* แนวทาง Mobile-first */
.grid-1 { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }

/* จุดหยุด Responsive */
@media (min-width: 768px) {
  .md-grid-2 { grid-template-columns: repeat(2, 1fr); }
  .md-flex { display: flex; }
}

@media (min-width: 1024px) {
  .lg-grid-3 { grid-template-columns: repeat(3, 1fr); }
}
```

## การเพิ่มประสิทธิภาพ

1. **การแยกโค้ด**: การแยกโค้ดอัตโนมัติของ Next.js
2. **การเพิ่มประสิทธิภาพภาพ**: การใช้แท็ก `<img>` ดั้งเดิมพร้อมการปรับขนาดที่เหมาะสม
3. **การโหลดแบบ Lazy**: การโหลดแบบ Lazy ระดับส่วนประกอบ
4. **สินทรัพย์แบบย่อ**: การเพิ่มประสิทธิภาพการสร้าง Production
5. **การแคช**: localStorage สำหรับการตั้งค่าผู้ใช้

## คุณสมบัติการเข้าถึง

1. **HTML ที่มีความหมาย**: ลำดับหัวข้อที่เหมาะสม
2. **การนำทางด้วยคีย์บอร์ด**: การจัดการโฟกัส
3. **การรองรับโปรแกรมอ่านหน้าจอ**: ป้ายกำกับ ARIA
4. **ความเปรียบต่างของสี**: แผนสีที่สอดคล้องกับ WCAG
5. **การเคลื่อนไหวที่ลดลง**: การรองรับ `prefers-reduced-motion`

## การปรับใช้

แอปพลิเคชันได้รับการกำหนดค่าสำหรับการปรับใช้บน Vercel ด้วย:
- การตรวจจับ Next.js อัตโนมัติ
- การคอมไพล์ TypeScript
- การเพิ่มประสิทธิภาพสินทรัพย์คงที่
- การปรับใช้ฟังก์ชัน Serverless

## การปรับปรุงในอนาคต

1. **การผสานระบบ Backend**: การเชื่อมต่อ API สำหรับข้อมูลแบบไดนามิก
2. **การติดตามความคืบหน้าของผู้ใช้**: การจัดการความคืบหน้าการเรียนรู้
3. **ระบบแบบทดสอบ**: การประเมินแบบโต้ตอบ
4. **การสตรีมวิดีโอ**: เครื่องเล่นวิดีโอแบบผสาน
5. **คุณสมบัติทางสังคม**: ฟอรั่มสนทนาและเครื่องมือการทำงานร่วมกัน