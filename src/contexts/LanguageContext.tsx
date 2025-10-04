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
    'nav.developer': 'ทีมงาน',
    'nav.login': 'เข้าสู่ระบบ',
    'nav.logout': 'ออกจากระบบ',
    'nav.appName': 'CSMJU E-Learning',

    // Home page
    'home.title': 'Website E-learning สำหรับสาขาวิชา',
    'home.subtitle': 'วิทยาการคอมพิวเตอร์',
    'home.description': 'เรานำหลักสูตรจากทางสาขาวิทยาการคอมพิวเตอร์ของมหาวิทยาลัยแม่โจ้มาให้เรียนรู้แบบ E-learning โดยมีวิดีโอการสอนและควิซที่ถูกทำขึ้นจากอาจารย์ผู้รับผิดชอบของแต่ละรายวิชานั้น',
    'home.skillsTitle': 'ทักษะที่คุณจะได้รับ',
    'home.recommendedTitle': 'คอร์สที่แนะนำและจำเป็นต่อการทำงาน Github!',
    'home.githubDescription': 'GitHub เป็นแพลตฟอร์มการพัฒนาซอฟต์แวร์แบบออนไลน์ ที่นักพัฒนาสามารถใช้ในการ:',
    'home.githubFeature1': 'จัดเก็บโค้ดและติดตามความเปลี่ยนแปลง',
    'home.githubFeature2': 'สร้างโครงการเพื่อพัฒนาร่วมกัน',
    'home.githubFeature3': 'แบ่งปันโค้ดและร่วมมือพัฒนา',
    'home.githubFeature4': 'สนับสนุน Open-Source',
    'home.githubFeature5': 'สร้างเครือข่ายและนำเสนอผลงาน',
    'home.githubConclusion': 'เครื่องมือจำเป็นสำหรับนักพัฒนาทุกคน!',
    'home.dockerDescription': 'Docker เป็นแพลตฟอร์ม Containerization ที่ช่วยให้นักพัฒนาสามารถใช้ในการ:',
    'home.dockerFeature1': 'สร้างและจัดการ Container',
    'home.dockerFeature2': 'ประสิทธิภาพการ Deploy แอปพลิเคชัน',
    'home.dockerFeature3': 'รันแอปในสภาพแวดล้อมเดียวกัน',
    'home.dockerFeature4': 'จัดการ Microservices',
    'home.dockerFeature5': 'เพิ่มประสิทธิภาพการพัฒนา',
    'home.dockerConclusion': 'เครื่องมือสำคัญสำหรับ DevOps!',

    // Login page
    'login.title': 'ยินดีต้อนรับ',
    'login.email': 'อีเมล',
    'login.password': 'รหัสผ่าน',
    'login.submit': 'เข้าสู่ระบบ',
    'login.description': 'กรุณาเข้าสู่ระบบเพื่อเข้าถึงบัญชีของคุณ',
    'login.forgotPassword': 'ลืมรหัสผ่าน?',
    'login.noAccount': 'ยังไม่มีบัญชี?',
    'login.register': 'ลงทะเบียน',

    // Skills
    'skills.webDevelopment': 'Web Development',
    'skills.database': 'Database',
    'skills.uxui': 'UX/UI Design',
    'skills.software': 'Software Development',
    'skills.iot': 'IoT',

    // Courses page
    'courses.title': 'คอร์สเรียน',
    'courses.description': 'เลือกคอร์สที่คุณสนใจและเริ่มเรียนรู้ทันที',
    'courses.filter.year': 'เลือกปีการศึกษา',
    'courses.filter.semester': 'เลือกเทอม',
    'courses.filter.difficulty': 'ระดับความยาก',
    'courses.filter.allYears': 'ทุกปี',
    'courses.filter.allSemesters': 'ทุกเทอม',
    'courses.filter.allDifficulties': 'ทุกระดับ',
    'courses.filter.year1': 'ปี 1',
    'courses.filter.year2': 'ปี 2',
    'courses.filter.semester1': 'เทอม 1',
    'courses.filter.semester2': 'เทอม 2',
    'courses.filter.beginner': 'เริ่มต้น',
    'courses.filter.intermediate': 'ปานกลาง',
    'courses.filter.advanced': 'สูง',
    'courses.filter.clear': 'ล้างตัวกรอง',
    'courses.stats.total': 'วิชาทั้งหมด',
    'courses.stats.beginner': 'วิชาระดับเริ่มต้น',
    'courses.stats.tools': 'เครื่องมือที่ใช้',
    'courses.noResults.title': 'ไม่พบรายวิชาที่ตรงกับเงื่อนไขที่เลือก',
    'courses.noResults.description': 'ลองเปลี่ยนตัวกรองหรือล้างการกรองทั้งหมด',
    'courses.noResults.clear': 'ล้างตัวกรองทั้งหมด',
    'admin.title': 'ระบบจัดการผู้ดูแล',
    'admin.subtitle': 'จัดการคอร์สเรียน ผู้ใช้งาน และการตั้งค่าระบบ E-Learning',
    'admin.dashboard': 'Dashboard',
    'admin.courses': 'คอร์สเรียน',
    'admin.users': 'ผู้ใช้งาน',
    'admin.settings': 'ตั้งค่า',
    'admin.stats.quick': 'สถิติด่วน',
    'admin.stats.totalCourses': 'คอร์สทั้งหมด',
    'admin.stats.totalUsers': 'ผู้ใช้งานระบบ',
    'admin.stats.completionRate': 'อัตราการเรียนจบ',
    'admin.stats.satisfaction': 'ความพึงพอใจ',
    'admin.actions.quick': 'การดำเนินการด่วน',
    'admin.actions.manageCourses': 'จัดการคอร์สเรียน',
    'admin.actions.manageCoursesDesc': 'เพิ่ม แก้ไข หรือลบคอร์สเรียน',
    'admin.actions.manageUsers': 'จัดการผู้ใช้งาน',
    'admin.actions.manageUsersDesc': 'ดูแลข้อมูลนักศึกษาและอาจารย์',
    'admin.actions.viewReports': 'ดูรายงาน',
    'admin.actions.viewReportsDesc': 'สถิติและรายงานการใช้งาน',
    'admin.courses.manage': 'จัดการคอร์สเรียน',
    'admin.courses.add': 'เพิ่มคอร์สใหม่',
    'admin.courses.search': 'ค้นหาคอร์สเรียน...',
    'admin.courses.status.all': 'ทุกสถานะ',
    'admin.courses.status.active': 'เปิดสอน',
    'admin.courses.status.inactive': 'ปิดสอน',
    'admin.courses.table.name': 'ชื่อคอร์ส',
    'admin.courses.table.students': 'นักศึกษา',
    'admin.courses.table.status': 'สถานะ',
    'admin.courses.table.progress': 'ความก้าวหน้า',
    'admin.courses.table.instructor': 'อาจารย์ผู้สอน',
    'admin.courses.table.lastUpdate': 'อัปเดตล่าสุด',
    'admin.courses.table.actions': 'การจัดการ',
    'admin.users.manage': 'จัดการผู้ใช้งาน',
    'admin.users.add': 'เพิ่มผู้ใช้ใหม่',
    'admin.users.search': 'ค้นหาผู้ใช้...',
    'admin.users.role.all': 'ทุกบทบาท',
    'admin.users.role.student': 'นักศึกษา',
    'admin.users.role.teacher': 'อาจารย์',
    'admin.users.table.name': 'ชื่อผู้ใช้',
    'admin.users.table.email': 'อีเมล',
    'admin.users.table.role': 'บทบาท',
    'admin.users.table.status': 'สถานะ',
    'admin.users.table.actions': 'การจัดการ',
    'admin.settings.manage': 'การตั้งค่าระบบ',
    'admin.settings.website': 'ตั้งค่าเว็บไซต์',
    'admin.settings.websiteName': 'ชื่อเว็บไซต์',
    'admin.settings.websiteDesc': 'คำอธิบายเว็บไซต์',
    'admin.settings.email': 'ตั้งค่าอีเมล',
    'admin.settings.adminEmail': 'อีเมลผู้ดูแลระบบ',
    'admin.settings.emailNotifications': 'เปิดใช้งานการแจ้งเตือนทางอีเมล',
    'admin.settings.save': 'บันทึกการตั้งค่า',
    'admin.button.edit': 'แก้ไข',
    'admin.button.delete': 'ลบ',
    'admin.status.active': 'ใช้งาน',
    'admin.status.inactive': 'ปิดใช้งาน',
    'admin.status.teaching': 'เปิดสอน',
    'admin.status.notTeaching': 'ปิดสอน',
    'home.professorTitle': 'ประธานหลักสูตร ศาสตราจารย์ อรรถวิท ชังคมานนท์',
    'home.professorName': 'อรรถวิท ชังคมานนท์',
    'home.educationTitle': 'การศึกษา',
    'home.educationDetails': 'วท.ม.(วิทยาการคอมพิวเตอร์) มหาวิทยาลัยเชียงใหม่',
    'home.contactTitle': 'ติดต่อ',
    'home.contactPhone': '053-873890-93 ต่อ 13',
    'home.contactEmail': 'attawit@mju.ac.th',
    'home.githubTitle': 'Github คืออะไร?',
    'home.dockerTitle': 'Docker คืออะไร?',

    // Common
    'common.loading': 'กำลังโหลด...',
    'common.error': 'เกิดข้อผิดพลาด',
    'common.success': 'สำเร็จ'
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.admin': 'Admin',
    'nav.developer': 'Team',
    'nav.login': 'Login',
    'nav.logout': 'Logout',
    'nav.appName': 'CSMJU E-Learning',

    // Home page
    'home.title': 'E-learning Website for',
    'home.subtitle': 'Computer Science',
    'home.description': 'We bring courses from the Computer Science program at Mae Jo University to you through E-learning, featuring teaching videos and quizzes created by the instructors responsible for each subject.',
    'home.skillsTitle': 'Skills You Will Gain',
    'home.recommendedTitle': 'Recommended and Essential Courses for GitHub Work!',
    'home.githubTitle': 'What is Github?',
    'home.githubDescription': 'GitHub is an online software development platform that developers can use to:',
    'home.githubFeature1': 'Store code and track changes',
    'home.githubFeature2': 'Create projects for collaborative development',
    'home.githubFeature3': 'Share code and collaborate on development',
    'home.githubFeature4': 'Support Open-Source',
    'home.githubFeature5': 'Build networks and showcase work',
    'home.githubConclusion': 'Essential tools for all developers!',
    'home.dockerTitle': 'What is Docker?',
    'home.dockerDescription': 'Docker is a Containerization platform that helps developers:',
    'home.dockerFeature1': 'Create and manage Containers',
    'home.dockerFeature2': 'Improve application deployment efficiency',
    'home.dockerFeature3': 'Run applications in the same environment',
    'home.dockerFeature4': 'Manage Microservices',
    'home.dockerFeature5': 'Increase development efficiency',
    'home.dockerConclusion': 'Important tools for DevOps!',
    'home.professorTitle': 'Program Chair Prof. Attawit Changkamanon',
    'home.professorName': 'Attawit Changkamanon',
    'home.educationTitle': 'Education',
    'home.education': 'M.Sc. (Computer Science) Chiang Mai University',
    'home.educationDetails': 'M.Sc. (Computer Science) Chiang Mai University',
    'home.contactTitle': 'Contact',
    'home.contactPhone': '053-873890-93 ext. 13',
    'home.contactEmail': 'attawit@mju.ac.th',

    // Login page
    'login.title': 'Welcome',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.submit': 'Login',
    'login.description': 'Please login to access your account',
    'login.forgotPassword': 'Forgot Password?',
    'login.noAccount': "Don't have an account?",
    'login.register': 'Register',

    // Skills
    'skills.webDevelopment': 'Web Development',
    'skills.database': 'Database',
    'skills.uxui': 'UX/UI Design',
    'skills.software': 'Software Development',
    'skills.iot': 'IoT',

    // Courses page
    'courses.title': 'Courses',
    'courses.description': "Choose the course you're interested in and start learning immediately",
    'courses.filter.year': 'Select Academic Year',
    'courses.filter.semester': 'Select Semester',
    'courses.filter.difficulty': 'Difficulty Level',
    'courses.filter.allYears': 'All Years',
    'courses.filter.allSemesters': 'All Semesters',
    'courses.filter.allDifficulties': 'All Levels',
    'courses.filter.year1': 'Year 1',
    'courses.filter.year2': 'Year 2',
    'courses.filter.semester1': 'Semester 1',
    'courses.filter.semester2': 'Semester 2',
    'courses.filter.beginner': 'Beginner',
    'courses.filter.intermediate': 'Intermediate',
    'courses.filter.advanced': 'Advanced',
    'courses.filter.clear': 'Clear Filters',
    'courses.stats.total': 'Total Subjects',
    'courses.stats.beginner': 'Beginner Subjects',
    'courses.stats.tools': 'Tools Used',
    'courses.noResults.title': 'No subjects found matching selected criteria',
    'courses.noResults.description': 'Try changing filters or clearing all filters',
    'courses.noResults.clear': 'Clear All Filters',
    'admin.title': 'Admin Management System',
    'admin.subtitle': 'Manage courses, users, and E-Learning system settings',
    'admin.dashboard': 'Dashboard',
    'admin.courses': 'Courses',
    'admin.users': 'Users',
    'admin.settings': 'Settings',
    'admin.stats.quick': 'Quick Stats',
    'admin.stats.totalCourses': 'Total Courses',
    'admin.stats.totalUsers': 'System Users',
    'admin.stats.completionRate': 'Completion Rate',
    'admin.stats.satisfaction': 'Satisfaction',
    'admin.actions.quick': 'Quick Actions',
    'admin.actions.manageCourses': 'Manage Courses',
    'admin.actions.manageCoursesDesc': 'Add, edit, or delete courses',
    'admin.actions.manageUsers': 'Manage Users',
    'admin.actions.manageUsersDesc': 'Manage student and teacher data',
    'admin.actions.viewReports': 'View Reports',
    'admin.actions.viewReportsDesc': 'Statistics and usage reports',
    'admin.courses.manage': 'Manage Courses',
    'admin.courses.add': 'Add New Course',
    'admin.courses.search': 'Search courses...',
    'admin.courses.status.all': 'All Status',
    'admin.courses.status.active': 'Active',
    'admin.courses.status.inactive': 'Inactive',
    'admin.courses.table.name': 'Course Name',
    'admin.courses.table.students': 'Students',
    'admin.courses.table.status': 'Status',
    'admin.courses.table.progress': 'Progress',
    'admin.courses.table.instructor': 'Instructor',
    'admin.courses.table.lastUpdate': 'Last Update',
    'admin.courses.table.actions': 'Actions',
    'admin.users.manage': 'Manage Users',
    'admin.users.add': 'Add New User',
    'admin.users.search': 'Search users...',
    'admin.users.role.all': 'All Roles',
    'admin.users.role.student': 'Student',
    'admin.users.role.teacher': 'Teacher',
    'admin.users.table.name': 'User Name',
    'admin.users.table.email': 'Email',
    'admin.users.table.role': 'Role',
    'admin.users.table.status': 'Status',
    'admin.users.table.actions': 'Actions',
    'admin.settings.manage': 'System Settings',
    'admin.settings.website': 'Website Settings',
    'admin.settings.websiteName': 'Website Name',
    'admin.settings.websiteDesc': 'Website Description',
    'admin.settings.email': 'Email Settings',
    'admin.settings.adminEmail': 'Admin Email',
    'admin.settings.emailNotifications': 'Enable email notifications',
    'admin.settings.save': 'Save Settings',
    'admin.button.edit': 'Edit',
    'admin.button.delete': 'Delete',
    'admin.status.active': 'Active',
    'admin.status.inactive': 'Inactive',
    'admin.status.teaching': 'Teaching',
    'admin.status.notTeaching': 'Not Teaching',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success'
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