"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'th' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Mock translation data
const translations = {
  th: {
    // Navbar
    'nav.home': 'หน้าหลัก',
    'nav.courses': 'คอร์สเรียน',
    'nav.admin': 'ผู้ดูแลระบบ',
    'nav.login': 'เข้าสู่ระบบ',
    'nav.appName': 'E-learning',
    
    // Home page
    'home.title': 'Website E-learning สำหรับสาขาวิชา',
    'home.subtitle': 'วิทยาการคอมพิวเตอร์',
    'home.description': 'เรานำหลักสูตรจากทางสาขาวิทยาการคอมพิวเตอร์ของมหาวิทยาลัยแม่โจ้มาให้เรียนรู้แบบ E-learning โดยมีวิดีโอการสอนและควิซที่ถูกทำขึ้นจากอาจารย์ผู้รับผิดชอบของแต่ละรายวิชานั้น',
    'home.skillsTitle': 'ทักษะที่คุณจะได้รับ',
    'home.recommendedTitle': 'คอร์สที่แนะนำและจำเป็นต่อการทำงาน Github!',
    'home.githubTitle': 'Github คืออะไร?',
    'home.githubDescription': 'GitHub เป็นแพลตฟอร์มสำหรับใช้พัฒนา ซอฟต์แวร์แบบออนไลน์ ที่นักพัฒนาสามารถใช้ในการจัดเก็บโค้ด, ติดตามความเปลี่ยนแปลง และสร้างโครงการเพื่อพัฒนาซอฟต์แวร์ร่วมกับนักพัฒนารายอื่นได้ โดยคุณสมบัติการทำงานของ GitHub ทำให้นักพัฒนาสามารถแบ่งปันโค้ดที่ตนเองเขียนขึ้น ให้นักพัฒนารายอื่น ๆ ที่สนใจสามารถเข้ามาช่วยกันพัฒนาต่อได้ ซึ่งเป็นลักษณะการทำงานของโครงการแบบ เปิดเผยซอร์สโค้ด (Open-Source) นอกจากนี้ ตัว GitHub ยังถูกใช้เป็นโซเชียลเน็ตเวิร์คที่บรรดานักพัฒนาใช้ในการสร้างเครือข่ายเพื่อร่วมมือทำงานกับนักพัฒนาที่สนใจ และนำเสนอผลงานบนโลกออนไลน์',
    'home.professorTitle': 'ประธานหลักสูตร อ. อรรถวิท ชังคมานนท์',
    'home.educationTitle': 'การศึกษา',
    'home.education': 'วท.ม.(วิทยาการคอมพิวเตอร์) มหาวิทยาลัยเชียงใหม่',
    'home.contactTitle': 'การติดต่อ',
    
    // Skills
    'skills.webDevelopment': 'Web Development',
    'skills.database': 'Database',
    'skills.uxui': 'UX/UI Design',
    'skills.software': 'Software Development',
    'skills.iot': 'IoT',
    
    // Courses page
    'courses.title': 'คอร์สเรียน',
    'courses.description': 'เลือกคอร์สที่คุณสนใจและเริ่มเรียนรู้ทันที',
    
    // Admin page
    'admin.title': 'ระบบผู้ดูแล',
    'admin.description': 'จัดการคอร์สและผู้ใช้งาน',
    
    // Login page
    'login.title': 'เข้าสู่ระบบ',
    'login.email': 'อีเมล',
    'login.password': 'รหัสผ่าน',
    'login.submit': 'เข้าสู่ระบบ',
    'login.description': 'กรุณาเข้าสู่ระบบเพื่อเข้าถึงคอร์สเรียน'
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.admin': 'Admin',
    'nav.login': 'Login',
    'nav.appName': 'E-learning',
    
    // Home page
    'home.title': 'E-learning Website for',
    'home.subtitle': 'Computer Science',
    'home.description': 'We bring courses from the Computer Science program at Mae Jo University to you through E-learning, featuring teaching videos and quizzes created by the instructors responsible for each subject.',
    'home.skillsTitle': 'Skills You Will Gain',
    'home.recommendedTitle': 'Recommended and Essential Courses for GitHub Work!',
    'home.githubTitle': 'What is GitHub?',
    'home.githubDescription': 'GitHub is an online software development platform that allows developers to store code, track changes, and create projects for collaborative software development with other developers. GitHub\'s features enable developers to share their code with other interested developers who can help continue development, which is characteristic of Open-Source projects. Additionally, GitHub is used as a social network for developers to build networks for collaboration with interested developers and showcase their work online.',
    'home.professorTitle': 'Program Chair Prof. Attawit Changkamanon',
    'home.educationTitle': 'Education',
    'home.education': 'M.Sc. (Computer Science) Chiang Mai University',
    'home.contactTitle': 'Contact',
    
    // Skills
    'skills.webDevelopment': 'Web Development',
    'skills.database': 'Database',
    'skills.uxui': 'UX/UI Design',
    'skills.software': 'Software Development',
    'skills.iot': 'IoT',
    
    // Courses page
    'courses.title': 'Courses',
    'courses.description': 'Choose the course you\'re interested in and start learning immediately',
    
    // Admin page
    'admin.title': 'Admin System',
    'admin.description': 'Manage courses and users',
    
    // Login page
    'login.title': 'Login',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.submit': 'Login',
    'login.description': 'Please login to access courses'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('th');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['th']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}