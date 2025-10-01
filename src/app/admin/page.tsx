"use client";

import React, { useState } from "react";
import "./admin.css";
import { useLanguage } from "@/contexts/LanguageContext";

// TabButton Component
interface TabButtonProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const TabButton = ({ id, label, isActive, onClick }: TabButtonProps) => (
  <button
    className={`tab-button ${isActive ? "active" : ""}`}
    onClick={() => onClick(id)}
  >
    {label}
  </button>
);

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { t } = useLanguage();
  const [courses, setCourses] = useState([
    // ปี 1 เทอม 1
    { id: 1, name: "การเขียนโปรแกรมเบื้องต้น (Fundamentals of Programming)", students: 45, status: "active", progress: 78, instructor: "ผศ. ภานุวัฒน์ เมฆะ", lastUpdate: "2024-01-15", year: "ปี 1", semester: "เทอม 1" },
    { id: 2, name: "เทคโนโลยีสารสนเทศและการสื่อสาร (Information and Communications Technology)", students: 38, status: "active", progress: 65, instructor: "ผศ.ดร. ปวีณ เขื่อนแก้ว", lastUpdate: "2024-01-14", year: "ปี 1", semester: "เทอม 1" },
    // ปี 1 เทอม 2
    { id: 3, name: "องค์ประกอบและสถาปัตยกรรมคอมพิวเตอร์ (Computer Organization and Architecture)", students: 52, status: "active", progress: 82, instructor: "ผศ. ภานุวัฒน์ เมฆะ", lastUpdate: "2024-01-16", year: "ปี 1", semester: "เทอม 2" },
    { id: 4, name: "เครือข่ายคอมพิวเตอร์เบื้องต้น (Introduction to Computer Network)", students: 41, status: "active", progress: 70, instructor: "ผศ.ดร. สนิท สิทธิ", lastUpdate: "2024-01-10", year: "ปี 1", semester: "เทอม 2" },
    { id: 5, name: "การเขียนโปรแกรมและทักษะการแก้ปัญหา (Programming and Problem Solving Skills)", students: 29, status: "active", progress: 55, instructor: "ผศ.ดร. พาสน์ ปราโมกข์ชน", lastUpdate: "2024-01-13", year: "ปี 1", semester: "เทอม 2" },
    // ปี 2 เทอม 1
    { id: 6, name: "โครงสร้างข้อมูลและอัลกอริทึม (Data Structure and Algorithm)", students: 35, status: "active", progress: 60, instructor: "ผศ.ดร. ปวีณ เขื่อนแก้ว", lastUpdate: "2024-01-08", year: "ปี 2", semester: "เทอม 1" },
    { id: 7, name: "ฐานข้อมูลโครงสร้างเชิงสัมพันธ์ (Structure Relational Database)", students: 30, status: "active", progress: 45, instructor: "ผศ.ดร. ปวีณ เขื่อนแก้ว", lastUpdate: "2024-01-12", year: "ปี 2", semester: "เทอม 1" },
    { id: 8, name: "GitHub และการควบคุมเวอร์ชั่น", students: 40, status: "active", progress: 75, instructor: "ผศ.ดร. สมนึก สินธุปวน", lastUpdate: "2024-01-11", year: "ปี 2", semester: "เทอม 1" },
    { id: 9, name: "Docker และ Containerization", students: 25, status: "active", progress: 50, instructor: "อ. อลงกต กองมณี", lastUpdate: "2024-01-09", year: "ปี 2", semester: "เทอม 1" },
    { id: 10, name: "Playwright และการทดสอบอัตโนมัติ", students: 28, status: "active", progress: 40, instructor: "อ. อลงกต กองมณี", lastUpdate: "2024-01-07", year: "ปี 2", semester: "เทอม 1" },
    { id: 11, name: "Postman และการทดสอบ API", students: 32, status: "active", progress: 65, instructor: "ผศ.ดร. สมนึก สินธุปวน", lastUpdate: "2024-01-14", year: "ปี 2", semester: "เทอม 1" },
    { id: 12, name: "Figma และการออกแบบ UI/UX", students: 38, status: "active", progress: 80, instructor: "อ. อรรถวิท ชังคมานนท์", lastUpdate: "2024-01-15", year: "ปี 2", semester: "เทอม 1" },
    { id: 13, name: "HTML5 และ CSS3", students: 42, status: "active", progress: 85, instructor: "อ. อรรถวิท ชังคมานนท์", lastUpdate: "2024-01-16", year: "ปี 2", semester: "เทอม 1" },
    { id: 14, name: "Tailwind CSS Framework", students: 36, status: "active", progress: 70, instructor: "อ. อรรถวิท ชังคมานนท์", lastUpdate: "2024-01-13", year: "ปี 2", semester: "เทอม 1" },
    { id: 15, name: "JavaScript", students: 45, status: "active", progress: 75, instructor: "อ. อรรถวิท ชังคมานนท์", lastUpdate: "2024-01-12", year: "ปี 2", semester: "เทอม 1" },
    { id: 16, name: "React และการพัฒนา Frontend", students: 33, status: "active", progress: 60, instructor: "อ. อรรถวิท ชังคมานนท์", lastUpdate: "2024-01-10", year: "ปี 2", semester: "เทอม 1" },
    { id: 17, name: "Next.js และ Full Stack Development", students: 27, status: "active", progress: 45, instructor: "อ. อรรถวิท ชังคมานนท์", lastUpdate: "2024-01-08", year: "ปี 2", semester: "เทอม 1" },
    { id: 18, name: "Vercel และการ Deploy เว็บแอปพลิเคชั่น", students: 31, status: "active", progress: 55, instructor: "อ. อรรถวิท ชังคมานนท์", lastUpdate: "2024-01-09", year: "ปี 2", semester: "เทอม 1" }
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "นายเขมโสภณ วงศ์นฤเดชากุล", email: "mju6704101312@mju.ac.th", role: "student", status: "active", joinDate: "2022-01-10", courses: 3, progress: 95 },
    { id: 2, name: "นางสาวกาญจณา ประทาน", email: "mju6704101390@mju.ac.th", role: "student", status: "active", joinDate: "2023-09-01", courses: 4, progress: 88 },
    { id: 3, name: "นายณัฐดนัย ปู่วงษ์", email: "mju6704101323@mju.ac.th", role: "student", status: "active", joinDate: "2023-08-15", courses: 3, progress: 75 },
    { id: 4, name: "นางสาวกฤษณา โพธา", email: "mju6704101304@mju.ac.th", role: "student", status: "active", joinDate: "2023-10-05", courses: 2, progress: 60 },
    { id: 5, name: "นางสาวพิมลภัทร หอจงกล", email: "mju6704101361@mju.ac.th", role: "student", status: "active", joinDate: "2021-06-15", courses: 2, progress: 90 }
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, type: "info", title: "การอัปเดตระบบ", message: "ระบบจะมีการอัปเดตในวันที่ 20 มกราคม 2024", time: "2 ชั่วโมงที่แล้ว", read: false },
    { id: 2, type: "success", title: "คอร์สใหม่เปิดแล้ว", message: "คอร์ส 'ปัญญาประดิษฐ์เบื้องต้น' พร้อมให้บริการแล้ว", time: "5 ชั่วโมงที่แล้ว", read: false },
    { id: 3, type: "warning", title: "ผู้ใช้ไม่ได้เข้าระบบนาน", message: "มีผู้ใช้ 3 คนที่ไม่ได้เข้าระบบมากกว่า 30 วัน", time: "1 วันที่แล้ว", read: true },
    { id: 4, type: "error", title: "ข้อผิดพลาดเซิร์ฟเวอร์", message: "เซิร์ฟเวอร์มีปัญหาเล็กน้อย แต่แก้ไขแล้ว", time: "3 วันที่แล้ว", read: true }
  ]);

  const renderDashboard = () => (
    <div className="fade-in">
      <div className="dashboard-grid">
        {/* Quick Stats */}
        <div className="stats-section">
          <h2 className="section-title">📈 {t('admin.stats.quick')}</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-content">
                <h3>{courses.length}</h3>
                <p>{t('admin.stats.totalCourses')}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <h3>{users.length}</h3>
                <p>{t('admin.stats.totalUsers')}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-content">
                <h3>89%</h3>
                <p>{t('admin.stats.completionRate')}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-content">
                <h3>95%</h3>
                <p>{t('admin.stats.satisfaction')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="actions-section">
          <h2 className="section-title">⚡ {t('admin.actions.quick')}</h2>
          <div className="action-grid">
            <div className="action-card" onClick={() => setActiveTab("courses")}>
              <div className="action-icon">📚</div>
              <div className="action-content">
                <h3>{t('admin.actions.manageCourses')}</h3>
                <p>{t('admin.actions.manageCoursesDesc')}</p>
              </div>
            </div>
            <div className="action-card" onClick={() => setActiveTab("users")}>
              <div className="action-icon">👥</div>
              <div className="action-content">
                <h3>{t('admin.actions.manageUsers')}</h3>
                <p>{t('admin.actions.manageUsersDesc')}</p>
              </div>
            </div>
            <div className="action-card">
              <div className="action-icon">📊</div>
              <div className="action-content">
                <h3>{t('admin.actions.viewReports')}</h3>
                <p>{t('admin.actions.viewReportsDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="fade-in">
      <h2 className="section-title">📚 {t('admin.courses.manage')}</h2>
      
      <div className="section-controls">
        <button className="btn btn-primary">
          ➕ {t('admin.courses.add')}
        </button>
        <div className="search-filter-group">
          <input 
            type="text" 
            placeholder={t('admin.courses.search')} 
            className="search-input"
          />
          <select className="filter-select">
            <option value="all">{t('admin.courses.status.all')}</option>
            <option value="active">{t('admin.courses.status.active')}</option>
            <option value="inactive">{t('admin.courses.status.inactive')}</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <div className="table-header courses">
          <div>{t('admin.courses.table.name')}</div>
          <div>{t('admin.courses.table.students')}</div>
          <div>{t('admin.courses.table.status')}</div>
          <div>{t('admin.courses.table.progress')}</div>
          <div>{t('admin.courses.table.instructor')}</div>
          <div>{t('admin.courses.table.lastUpdate')}</div>
          <div>{t('admin.courses.table.actions')}</div>
        </div>

        {courses.map((course) => (
          <div key={course.id} className="table-row courses">
            <div className="table-name">
              <strong>{course.name}</strong>
              <small>{course.year} - {course.semester}</small>
            </div>
            <div className="table-students">{course.students}</div>
            <div>
              <span className={`status-badge ${course.status}`}>
                {course.status === "active" ? t('admin.status.teaching') : t('admin.status.notTeaching')}
              </span>
            </div>
            <div className="progress-column">
              <div className="mini-progress-bar">
                <div className="mini-progress-fill" style={{ width: `${course.progress}%` }}></div>
              </div>
              <span className="progress-text">{course.progress}%</span>
            </div>
            <div className="instructor-name">{course.instructor}</div>
            <div className="last-update">{course.lastUpdate}</div>
            <div className="action-buttons">
              <button className="btn btn-secondary">{t('admin.button.edit')}</button>
              <button className="btn btn-danger">{t('admin.button.delete')}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="fade-in">
      <h2 className="section-title">👥 {t('admin.users.manage')}</h2>
      
      <div className="section-controls">
        <button className="btn btn-primary">
          ➕ {t('admin.users.add')}
        </button>
        <div className="search-filter-group">
          <input 
            type="text" 
            placeholder={t('admin.users.search')} 
            className="search-input"
          />
          <select className="filter-select">
            <option value="all">{t('admin.users.role.all')}</option>
            <option value="student">{t('admin.users.role.student')}</option>
            <option value="teacher">{t('admin.users.role.teacher')}</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <div className="table-header users">
          <div>{t('admin.users.table.name')}</div>
          <div>{t('admin.users.table.email')}</div>
          <div>{t('admin.users.table.role')}</div>
          <div>{t('admin.users.table.status')}</div>
          <div>{t('admin.users.table.actions')}</div>
        </div>

        {users.map((user) => (
          <div key={user.id} className="table-row users">
            <div className="table-name">{user.name}</div>
            <div className="table-email">{user.email}</div>
            <div>
              <span className={`status-badge ${user.role}`}>
                {user.role === "teacher" ? t('admin.users.role.teacher') : t('admin.users.role.student')}
              </span>
            </div>
            <div>
              <span className={`status-badge ${user.status}`}>
                {user.status === "active" ? t('admin.status.active') : t('admin.status.inactive')}
              </span>
            </div>
            <div className="action-buttons">
              <button className="btn btn-secondary">{t('admin.button.edit')}</button>
              <button className="btn btn-danger">{t('admin.button.delete')}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="fade-in">
      <h2 className="section-title">⚙️ {t('admin.settings.manage')}</h2>
      <div className="form-grid">
        <div className="form-section">
          <h3 className="form-section-title">🌐 {t('admin.settings.website')}</h3>
          <div className="form-fields">
            <div className="form-field">
              <label className="form-label">{t('admin.settings.websiteName')}</label>
              <input
                type="text"
                defaultValue="E-Learning วิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้"
                className="form-input"
              />
            </div>
            <div className="form-field">
              <label className="form-label">{t('admin.settings.websiteDesc')}</label>
              <textarea
                defaultValue="แพลตฟอร์มการเรียนรู้ออนไลน์สำหรับนักศึกษาสาขาวิทยาการคอมพิวเตอร์"
                className="form-textarea"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="form-section-title">📧 {t('admin.settings.email')}</h3>
          <div className="form-fields">
            <div className="form-field">
              <label className="form-label">{t('admin.settings.adminEmail')}</label>
              <input
                type="email"
                defaultValue="admin@mju.ac.th"
                className="form-input"
              />
            </div>
            <div className="form-checkbox-group">
              <input type="checkbox" id="email-notifications" defaultChecked className="form-checkbox" />
              <label htmlFor="email-notifications" className="form-label">{t('admin.settings.emailNotifications')}</label>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary">
            💾 {t('admin.settings.save')}
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard();
      case "courses":
        return renderCourses();
      case "users":
        return renderUsers();
      case "settings":
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-wrapper">
        {/* Header */}
        <div className="admin-header">
          <h1 className="admin-title">
            🎛️ {t('admin.title')}
          </h1>
          <p className="admin-subtitle">
            {t('admin.subtitle')}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="admin-tabs">
          <TabButton
            id="dashboard"
            label={`📊 ${t('admin.dashboard')}`}
            isActive={activeTab === "dashboard"}
            onClick={setActiveTab}
          />
          <TabButton
            id="courses"
            label={`📚 ${t('admin.courses')}`}
            isActive={activeTab === "courses"}
            onClick={setActiveTab}
          />
          <TabButton
            id="users"
            label={`👥 ${t('admin.users')}`}
            isActive={activeTab === "users"}
            onClick={setActiveTab}
          />
          <TabButton
            id="settings"
            label={`⚙️ ${t('admin.settings')}`}
            isActive={activeTab === "settings"}
            onClick={setActiveTab}
          />
        </div>

        {/* Content Area */}
        <div className="admin-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}