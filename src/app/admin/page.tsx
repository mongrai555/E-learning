"use client";

import React, { useState } from "react";
import "./admin.css";
import { useLanguage } from "@/contexts/LanguageContext";
import { curriculum } from "@/data/curriculum";

// Mock data for users
const users = [
  {
    id: "1",
    name: "นายณัฐดนัย ปู่วงษ์",
    email: "mju6704101323@mju.ac.th",
    role: "student",
    status: "active"
  },
  {
    id: "2",
    name: "นางสาวกาญจณา ประทาน",
    email: "mju6704101390@mju.ac.th",
    role: "student",
    status: "active"
  },
  {
    id: "3",
    name: "นาย เขมโสภณ วงศ์นฤเดชากุล",
    email: "mju6704101312@mju.ac.th",
    role: "student",
    status: "active"
  },
  {
    id: "4",
    name: "นางสาว กฤษณา โพธา",
    email: "mju6704101304@mju.ac.th",
    role: "student",
    status: "active"
  },
  {
    id: "5",
    name: "นางสาวพิมลภัทร หอจงกล",
    email: "mju6704101361@mju.ac.th",
    role: "student",
    status: "active"
  }
];

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

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { t, language } = useLanguage();

  // Transform curriculum data to match the admin page format
  const courses = curriculum.map((course, index) => ({
    id: course.id,
    name: language === 'th' ? course.title : course.titleEn,
    year: language === 'th' ? `ปี ${course.year}` : `Year ${course.year}`,
    semester: language === 'th' ? `เทอม ${course.semester}` : `Semester ${course.semester}`,
    students: Math.floor(Math.random() * 100) + 20, // Random student count for demo
    status: index % 3 === 0 ? "inactive" : "active", // Some courses inactive for demo
    progress: Math.floor(Math.random() * 100), // Random progress for demo
    instructor: "อ. อรรถวิท ชังคมานนท์",
    lastUpdate: `2023-10-${String(index % 30 + 1).padStart(2, '0')}`
  }));

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
};

export default AdminPage;