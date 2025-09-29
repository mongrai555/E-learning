"use client";

import React, { useState } from "react";
import "./admin.css";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

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
    { id: 1, name: "นายสมชาย ใจดี", email: "somchai@example.com", role: "student", status: "active", joinDate: "2023-08-15", courses: 3, progress: 75 },
    { id: 2, name: "นางสาวสุพัตรา เรียนดี", email: "supatra@example.com", role: "student", status: "active", joinDate: "2023-09-01", courses: 4, progress: 88 },
    { id: 3, name: "อ.วิชาญ สอนเก่ง", email: "wichan@mju.ac.th", role: "teacher", status: "active", joinDate: "2022-01-10", courses: 2, progress: 95 },
    { id: 4, name: "นายธนาคาร ขยันเรียน", email: "thanakar@example.com", role: "student", status: "inactive", joinDate: "2023-10-05", courses: 1, progress: 25 },
    { id: 5, name: "นางสาวมาลี สวยงาม", email: "malee@example.com", role: "student", status: "active", joinDate: "2023-11-20", courses: 2, progress: 60 },
    { id: 6, name: "อ.ประยุทธ รักเรียน", email: "prayut@mju.ac.th", role: "teacher", status: "active", joinDate: "2021-06-15", courses: 3, progress: 90 }
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, type: "info", title: "การอัปเดตระบบ", message: "ระบบจะมีการอัปเดตในวันที่ 20 มกราคม 2024", time: "2 ชั่วโมงที่แล้ว", read: false },
    { id: 2, type: "success", title: "คอร์สใหม่เปิดแล้ว", message: "คอร์ส 'ปัญญาประดิษฐ์เบื้องต้น' พร้อมให้บริการแล้ว", time: "5 ชั่วโมงที่แล้ว", read: false },
    { id: 3, type: "warning", title: "ผู้ใช้ไม่ได้เข้าระบบนาน", message: "มีผู้ใช้ 3 คนที่ไม่ได้เข้าระบบมากกว่า 30 วัน", time: "1 วันที่แล้ว", read: true },
    { id: 4, type: "error", title: "ข้อผิดพลาดเซิร์ฟเวอร์", message: "เซิร์ฟเวอร์มีปัญหาเล็กน้อย แต่แก้ไขแล้ว", time: "3 วันที่แล้ว", read: true }
  ]);

  const [recentActivities, setRecentActivities] = useState([
    { id: 1, action: "เข้าสู่ระบบ", user: "สมชาย ใจดี", time: "5 นาทีที่แล้ว", type: "login" },
    { id: 2, action: "ส่งงาน", user: "สุพัตรา เรียนดี", course: "เว็บเทคโนโลยี", time: "15 นาทีที่แล้ว", type: "assignment" },
    { id: 3, action: "สร้างคอร์สใหม่", user: "อ.วิชาญ สอนเก่ง", course: "ปัญญาประดิษฐ์", time: "1 ชั่วโมงที่แล้ว", type: "course" },
    { id: 4, action: "อัปเดตโปรไฟล์", user: "มาลี สวยงาม", time: "2 ชั่วโมงที่แล้ว", type: "profile" },
    { id: 5, action: "ลงทะเบียน", user: "สมศักดิ์ ใหม่มาก", time: "4 ชั่วโมงที่แล้ว", type: "register" }
  ]);

  const stats = {
    totalCourses: courses.length,
    totalStudents: 120,
    totalTeachers: 7,
    activeUsers: users.filter(u => u.status === "active").length
  };

  const TabButton = ({ id, label, isActive, onClick }: {
    id: string;
    label: string;
    isActive: boolean;
    onClick: (id: string) => void;
  }) => (
    <button
      onClick={() => onClick(id)}
      className={`tab-button ${isActive ? 'active' : ''}`}
    >
      {label}
    </button>
  );

  const renderDashboard = () => (
    <div className="fade-in">
      <h2 className="section-title">📊 Dashboard Overview</h2>
      
      <div className="stats-grid">
        <div className="stat-card hover-lift">
          <span className="stat-icon">📚</span>
          <div className="stat-number">{stats.totalCourses}</div>
          <div className="stat-label">จำนวนคอร์สทั้งหมด</div>
        </div>

        <div className="stat-card hover-lift">
          <span className="stat-icon">👥</span>
          <div className="stat-number">{stats.totalStudents}</div>
          <div className="stat-label">จำนวนนักเรียน</div>
        </div>

        <div className="stat-card hover-lift">
          <span className="stat-icon">👨‍🏫</span>
          <div className="stat-number">{stats.totalTeachers}</div>
          <div className="stat-label">จำนวนอาจารย์</div>
        </div>

        <div className="stat-card hover-lift">
          <span className="stat-icon">✅</span>
          <div className="stat-number">{stats.activeUsers}</div>
          <div className="stat-label">ผู้ใช้ที่ใช้งานอยู่</div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="quick-actions">
        <h3 className="section-subtitle">⚡ การดำเนินการด่วน</h3>
        <div className="action-grid">
          <button className="action-card">
            <span className="action-icon">➕</span>
            <div className="action-content">
              <h4>เพิ่มคอร์สใหม่</h4>
              <p>สร้างคอร์สเรียนใหม่</p>
            </div>
          </button>
          <button className="action-card">
            <span className="action-icon">👤</span>
            <div className="action-content">
              <h4>เพิ่มผู้ใช้</h4>
              <p>ลงทะเบียนผู้ใช้ใหม่</p>
            </div>
          </button>
          <button className="action-card">
            <span className="action-icon">📊</span>
            <div className="action-content">
              <h4>ดูรายงาน</h4>
              <p>สถิติและข้อมูลต่างๆ</p>
            </div>
          </button>
          <button className="action-card">
            <span className="action-icon">⚙️</span>
            <div className="action-content">
              <h4>ตั้งค่าระบบ</h4>
              <p>จัดการการตั้งค่า</p>
            </div>
          </button>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="dashboard-grid">
        {/* Recent Activities */}
        <div className="activity-section">
          <h3 className="section-subtitle">📈 กิจกรรมล่าสุด</h3>
          <div className="activity-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-icon ${activity.type}`}>
                  {activity.type === 'login' && '🔐'}
                  {activity.type === 'assignment' && '📝'}
                  {activity.type === 'course' && '📚'}
                  {activity.type === 'profile' && '👤'}
                  {activity.type === 'register' && '✨'}
                </div>
                <div className="activity-content">
                  <div className="activity-action">{activity.action}</div>
                  <div className="activity-user">โดย {activity.user}</div>
                  {activity.course && <div className="activity-course">คอร์ส: {activity.course}</div>}
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="notification-section">
          <h3 className="section-subtitle">🔔 การแจ้งเตือน</h3>
          <div className="notification-list">
            {notifications.map((notification) => (
              <div key={notification.id} className={`notification-item ${notification.read ? 'read' : 'unread'}`}>
                <div className={`notification-icon ${notification.type}`}>
                  {notification.type === 'info' && 'ℹ️'}
                  {notification.type === 'success' && '✅'}
                  {notification.type === 'warning' && '⚠️'}
                  {notification.type === 'error' && '❌'}
                </div>
                <div className="notification-content">
                  <div className="notification-title">{notification.title}</div>
                  <div className="notification-message">{notification.message}</div>
                  <div className="notification-time">{notification.time}</div>
                </div>
                {!notification.read && <div className="unread-dot"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Progress Overview */}
      <div className="progress-section">
        <h3 className="section-subtitle">📊 ความคืบหน้าคอร์ส</h3>
        <div className="progress-grid">
          {courses.slice(0, 4).map((course) => (
            <div key={course.id} className="progress-card">
              <div className="progress-header">
                <h4>{course.name}</h4>
                <span className={`status-badge ${course.status}`}>
                  {course.status === "active" ? "เปิดใช้งาน" : "ร่าง"}
                </span>
              </div>
              <div className="progress-stats">
                <div className="stat-item">
                  <span className="stat-value">{course.students}</span>
                  <span className="stat-label">นักเรียน</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{course.progress}%</span>
                  <span className="stat-label">ความคืบหน้า</span>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: `${course.progress}%`}}></div>
              </div>
              <div className="progress-footer">
                <span className="instructor">👨‍🏫 {course.instructor}</span>
                <span className="last-update">อัปเดต: {course.lastUpdate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-box">
        <h3 className="info-title">📈 สถิติล่าสุด</h3>
        <div className="info-columns">
          <div>
            <p className="info-item">• คอร์สที่มีผู้เรียนมากที่สุด: เว็บเทคโนโลยี (52 คน)</p>
            <p className="info-item">• คอร์สใหม่ล่าสุด: ปัญญาประดิษฐ์เบื้องต้น</p>
            <p className="info-item">• อาจารย์ที่ใช้งานบ่อยที่สุด: อ.ประยุทธ รักเรียน</p>
          </div>
          <div>
            <p className="info-item">• ผู้ใช้ใหม่ในสัปดาห์นี้: 12 คน</p>
            <p className="info-item">• อัตราผู้เรียนจบคอร์ส: 78%</p>
            <p className="info-item">• เวลาเรียนเฉลี่ยต่อวัน: 2.5 ชั่วโมง</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="fade-in">
      <div className="section-header">
        <h2 className="section-title">📚 จัดการคอร์สเรียน</h2>
        <button className="btn btn-add">
          + เพิ่มคอร์สใหม่
        </button>
      </div>

      <div className="data-table">
        <div className="table-header courses">
          <div>ชื่อคอร์ส</div>
          <div>ปี/เทอม</div>
          <div>จำนวนนักเรียน</div>
          <div>ความคืบหน้า</div>
          <div>อาจารย์ผู้สอน</div>
          <div>สถานะ</div>
          <div>การจัดการ</div>
        </div>

        {courses.map((course) => (
          <div key={course.id} className="table-row courses">
            <div className="table-name">{course.name}</div>
            <div className="year-semester">{course.year} {course.semester}</div>
            <div className="table-count">{course.students} คน</div>
            <div className="progress-column">
              <div className="mini-progress-bar">
                <div className="mini-progress-fill" style={{width: `${course.progress}%`}}></div>
              </div>
              <span className="progress-text">{course.progress}%</span>
            </div>
            <div className="instructor-name">{course.instructor}</div>
            <div>
              <span className={`status-badge ${course.status}`}>
                {course.status === "active" ? "เปิดใช้งาน" : "ร่าง"}
              </span>
            </div>
            <div className="action-buttons">
              <button className="btn btn-secondary">แก้ไข</button>
              <button className="btn btn-danger">ลบ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="fade-in">
      <div className="section-header">
        <h2 className="section-title">👥 จัดการผู้ใช้งาน</h2>
        <button className="btn btn-add">
          + เพิ่มผู้ใช้ใหม่
        </button>
      </div>

      <div className="data-table">
        <div className="table-header users">
          <div>ชื่อผู้ใช้</div>
          <div>อีเมล</div>
          <div>บทบาท</div>
          <div>สถานะ</div>
          <div>การจัดการ</div>
        </div>

        {users.map((user) => (
          <div key={user.id} className="table-row users">
            <div className="table-name">{user.name}</div>
            <div className="table-email">{user.email}</div>
            <div>
              <span className={`status-badge ${user.role}`}>
                {user.role === "teacher" ? "อาจารย์" : "นักเรียน"}
              </span>
            </div>
            <div>
              <span className={`status-badge ${user.status}`}>
                {user.status === "active" ? "ใช้งาน" : "ปิดใช้งาน"}
              </span>
            </div>
            <div className="action-buttons">
              <button className="btn btn-secondary">แก้ไข</button>
              <button className="btn btn-danger">ลบ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="fade-in">
      <h2 className="section-title">⚙️ การตั้งค่าระบบ</h2>
      
      <div className="form-grid">
        <div className="form-section">
          <h3 className="form-section-title">🌐 ตั้งค่าเว็บไซต์</h3>
          <div className="form-fields">
            <div className="form-field">
              <label className="form-label">ชื่อเว็บไซต์</label>
              <input 
                type="text" 
                defaultValue="E-Learning วิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้"
                className="form-input"
              />
            </div>
            <div className="form-field">
              <label className="form-label">คำอธิบายเว็บไซต์</label>
              <textarea 
                defaultValue="แพลตฟอร์มการเรียนรู้ออนไลน์สำหรับนักศึกษาสาขาวิทยาการคอมพิวเตอร์"
                className="form-textarea"
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3 className="form-section-title">📧 ตั้งค่าอีเมล</h3>
          <div className="form-fields">
            <div className="form-field">
              <label className="form-label">อีเมลผู้ดูแลระบบ</label>
              <input 
                type="email" 
                defaultValue="admin@mju.ac.th"
                className="form-input"
              />
            </div>
            <div className="form-checkbox-group">
              <input type="checkbox" id="email-notifications" defaultChecked className="form-checkbox" />
              <label htmlFor="email-notifications" className="form-label">เปิดใช้งานการแจ้งเตือนทางอีเมล</label>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary">
            💾 บันทึกการตั้งค่า
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
            🎛️ ระบบจัดการผู้ดูแล
          </h1>
          <p className="admin-subtitle">
            จัดการคอร์สเรียน ผู้ใช้งาน และการตั้งค่าระบบ E-Learning
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="admin-tabs">
          <TabButton
            id="dashboard"
            label="📊 Dashboard"
            isActive={activeTab === "dashboard"}
            onClick={setActiveTab}
          />
          <TabButton
            id="courses"
            label="📚 คอร์สเรียน"
            isActive={activeTab === "courses"}
            onClick={setActiveTab}
          />
          <TabButton
            id="users"
            label="👥 ผู้ใช้งาน"
            isActive={activeTab === "users"}
            onClick={setActiveTab}
          />
          <TabButton
            id="settings"
            label="⚙️ ตั้งค่า"
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