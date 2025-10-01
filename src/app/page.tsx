"use client";
"use client";

import React from "react";
import CourseCard from '@/components/CourseCard';
import DarkModeToggle from '@/components/DarkModeToggle';
import { curriculum } from '@/data/curriculum';

export default function Home() {
  const skills = [
    { id: 1, name: "Web Development", icon: "💻" },
    { id: 2, name: "Database", icon: "🗄️" },
    { id: 3, name: "UX/UI Design", icon: "🎨" },
    { id: 4, name: "Software Development", icon: "⚙️" },
    { id: 5, name: "IoT", icon: "🌐" }
  ];

  // คอร์ส GitHub และ Docker จากหลักสูตร
  const githubCourse = curriculum.find(course => course.id === 'github-course');
  const dockerCourse = curriculum.find(course => course.id === 'docker-course');

  return (
    <div style={{
      minHeight: 'calc(100vh - 80px)',
      backgroundColor: 'var(--background)',
      padding: '0',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      {/* Full width video background section */}
      <div style={{ 
        position: 'relative',
        width: '100%',
        height: '60vh',
        minHeight: '400px',
        overflow: 'hidden'
      }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        >
          <source src="/bg_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Content overlay on top of video */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%'
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '25px',
              lineHeight: '1.2',
              letterSpacing: '-0.5px',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
            }}>
              Website E-learning สำหรับสาขาวิชา<br />
              <span style={{ color: 'var(--primary-light)' }}>วิทยาการคอมพิวเตอร์</span>
            </h1>
            
            <p style={{
              fontSize: '1.3rem',
              color: '#e2e8f0',
              lineHeight: '1.7',
              marginBottom: '35px',
              maxWidth: '75%',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
            }}>
              เรานำหลักสูตรจากทางสาขาวิทยาการคอมพิวเตอร์ของมหาวิทยาลัยแม่โจ้มาให้เรียนรู้แบบ E-learning โดยมีวิดีโอการสอนและควิซที่ถูกทำขึ้นจากอาจารย์ผู้รับผิดชอบของแต่ละรายวิชานั้น
            </p>
            
            <h2 style={{
              fontSize: '1.5rem',
              color: '#ffffff',
              marginBottom: '20px',
              fontWeight: '600'
            }}>
              ทักษะที่คุณจะได้รับ
            </h2>
            
            <div style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              {skills.map((skill) => (
                <button
                  key={skill.id}
                  style={{
                    backgroundColor: 'transparent',
                    borderRadius: '6px',
                    padding: '10px 15px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid var(--primary-light)',
                    color: 'var(--primary-light)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.1)';
                    e.currentTarget.style.boxShadow = '0 0 8px rgba(96, 165, 250, 0.8)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content area below the video section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: 'var(--foreground)',
          marginBottom: '30px',
          textAlign: 'left'
        }}>
          คอร์สที่แนะนำและจำเป็นต่อการทำงาน Github and Docker!
        </h2>
        
        {/* GitHub Course and Video Section */}
        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'flex-start',
          marginBottom: '50px'
        }}>
          {/* Left column - GitHub Course */}
          {githubCourse && (
            <div style={{
              maxWidth: '280px',
              width: '100%'
            }}>
              <div className="course-card compact">
                {/* Course Image */}
                <div className="course-card-image">
                  {githubCourse.image ? (
                    <img 
                      src={githubCourse.image} 
                      alt={githubCourse.title}
                    />
                  ) : (
                    <div className="course-image-letter">
                      <div className="text-6xl font-bold">
                        {githubCourse.title.charAt(0)}
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="course-card-overlay"></div>
                  
                  {/* Course badges */}
                  <div className="badge-container-tl">
                    <span className="badge badge-year-2">
                      ปี {githubCourse.year}
                    </span>
                    <span className="badge badge-semester">
                      เทอม {githubCourse.semester}
                    </span>
                  </div>
                  
                  {/* Difficulty badge */}
                  <div className="badge-container-tr">
                    <span className="badge badge-xs badge-difficulty-beginner">
                      เริ่มต้น
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="course-card-content">
                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {githubCourse.title}
                  </h3>
                  
                  {/* English Title */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-1 font-medium">
                    {githubCourse.titleEn}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3 leading-relaxed">
                    {githubCourse.description}
                  </p>

                  {/* Course Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    {/* ลบข้อมูล duration และ credits ออก */}
                  </div>

                  {/* Action Button */}
                  <a href={`/courses/${githubCourse.id}`}>
                    <button className="w-full btn-gradient focus-ring">
                      <span className="flex items-center justify-center">
                        <svg className="icon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        เริ่มเรียน
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
          
          {/* Center column - GitHub Information */}
          <div style={{
            flex: '1',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--foreground)',
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              GitHub คืออะไร?
            </h3>
            
            <p style={{
              color: 'var(--foreground)',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              textAlign: 'justify',
              marginBottom: '15px'
            }}>
              <strong>GitHub</strong> เป็นแพลตฟอร์มการพัฒนาซอฟต์แวร์แบบออนไลน์ ที่นักพัฒนาสามารถใช้ในการ:
            </p>
            
            <ul style={{
              color: 'var(--foreground)',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              paddingLeft: '20px',
              marginBottom: '15px'
            }}>
              <li style={{ marginBottom: '8px' }}>จัดเก็บโค้ดและติดตามความเปลี่ยนแปลง</li>
              <li style={{ marginBottom: '8px' }}>สร้างโครงการเพื่อพัฒนาร่วมกัน</li>
              <li style={{ marginBottom: '8px' }}>แบ่งปันโค้ดและร่วมมือพัฒนา</li>
              <li style={{ marginBottom: '8px' }}>สนับสนุน Open-Source</li>
              <li>สร้างเครือข่ายและนำเสนอผลงาน</li>
            </ul>
            
            <p style={{
              color: 'var(--primary)',
              fontSize: '0.9rem',
              fontWeight: '600',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              เครื่องมือจำเป็นสำหรับนักพัฒนาทุกคน!
            </p>
          </div>
          
          {/* Right column - GitHub Video */}
          <div style={{
            maxWidth: '520px',
            width: '100%'
          }}>
            <div style={{
              width: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  display: 'block'
                }}
              >
                <source src="/github_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        
        {/* Docker Course and Video Section */}
        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'flex-start',
          marginBottom: '50px'
        }}>
          {/* Left column - Docker Course */}
          {dockerCourse && (
            <div style={{
              maxWidth: '280px',
              width: '100%'
            }}>
              <div className="course-card compact">
                {/* Course Image */}
                <div className="course-card-image">
                  {dockerCourse.image ? (
                    <img 
                      src={dockerCourse.image} 
                      alt={dockerCourse.title}
                    />
                  ) : (
                    <div className="course-image-letter">
                      <div className="text-6xl font-bold">
                        {dockerCourse.title.charAt(0)}
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="course-card-overlay"></div>
                  
                  {/* Course badges */}
                  <div className="badge-container-tl">
                    <span className="badge badge-year-2">
                      ปี {dockerCourse.year}
                    </span>
                    <span className="badge badge-semester">
                      เทอม {dockerCourse.semester}
                    </span>
                  </div>
                  
                  {/* Difficulty badge */}
                  <div className="badge-container-tr">
                    <span className="badge badge-xs badge-difficulty-intermediate">
                      ปานกลาง
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="course-card-content">
                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {dockerCourse.title}
                  </h3>
                  
                  {/* English Title */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-1 font-medium">
                    {dockerCourse.titleEn}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3 leading-relaxed">
                    {dockerCourse.description}
                  </p>

                  {/* Course Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    {/* ลบข้อมูล duration และ credits ออก */}
                  </div>

                  {/* Action Button */}
                  <a href={`/courses/${dockerCourse.id}`}>
                    <button className="w-full btn-gradient focus-ring">
                      <span className="flex items-center justify-center">
                        <svg className="icon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        เริ่มเรียน
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
          
          {/* Center column - Docker Information */}
          <div style={{
            flex: '1',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--foreground)',
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              Docker คืออะไร?
            </h3>
            
            <p style={{
              color: 'var(--foreground)',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              textAlign: 'justify',
              marginBottom: '15px'
            }}>
              <strong>Docker</strong> เป็นแพลตฟอร์ม Containerization ที่ช่วยให้นักพัฒนาสามารถใช้ในการ:
            </p>
            
            <ul style={{
              color: 'var(--foreground)',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              paddingLeft: '20px',
              marginBottom: '15px'
            }}>
              <li style={{ marginBottom: '8px' }}>สร้างและจัดการ Container</li>
              <li style={{ marginBottom: '8px' }}>ประสิทธิภาพการ Deploy แอปพลิเคชัน</li>
              <li style={{ marginBottom: '8px' }}>รันแอปในสภาพแวดล้อมเดียวกัน</li>
              <li style={{ marginBottom: '8px' }}>จัดการ Microservices</li>
              <li>เพิ่มประสิทธิภาพการพัฒนา</li>
            </ul>
            
            <p style={{
              color: 'var(--primary)',
              fontSize: '0.9rem',
              fontWeight: '600',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              เครื่องมือสำคัญสำหรับ DevOps!
            </p>
          </div>
          
          {/* Right column - Docker Video */}
          <div style={{
            maxWidth: '520px',
            width: '100%'
          }}>
            <div style={{
              width: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  display: 'block'
                }}
              >
                <source src="/docker_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        
        {/* GitHub Information Section */}
        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'flex-start',
          marginBottom: '50px'
        }}>
          {/* Text content about GitHub */}
          <div style={{
            flex: '1'
          }}>
            <p style={{
              color: 'var(--foreground)',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              
            </p>
          </div>
        </div>
        
        {/* New section with profile video on left and information on right */}
        <div style={{
          padding: '30px 0',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          position: 'relative'
        }}>
          {/* Glowing effect overlay */}
          <div style={{
            position: 'absolute',
            top: '-10px',
            left: '-10px',
            right: '-10px',
            bottom: '-10px',
            borderRadius: '8px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            opacity: '0.7',
            zIndex: '-1',
            animation: 'pulseGlow 2s ease-in-out infinite alternate'
          }}></div>
          
          {/* Content container with two-column layout */}
          <div style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'flex-start',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            {/* Left column - Profile video */}
            <div style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'flex-start'
            }}>
              <div style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    display: 'block'
                  }}
                >
                  <source src="/jojo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Right column - Profile information */}
            <div style={{
              flex: '1'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--foreground)',
                marginBottom: '5px'
              }}>
                ประธานหลักสูตร อ. อรรถวิท ชังคมานนท์
              </h3>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1.2rem',
                fontWeight: '600',
                margin: '0 0 20px 0'
              }}>
                Attawit Changkamanon
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                fontWeight: '600',
                margin: '15px 0 5px 0'
              }}>
                การศึกษา
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                margin: '0 0 15px 0'
              }}>
                วท.ม.(วิทยาการคอมพิวเตอร์) มหาวิทยาลัยเชียงใหม่
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                fontWeight: '600',
                margin: '15px 0 5px 0'
              }}>
                การติดต่อ
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                margin: '0 0 5px 0'
              }}>
                053-873890-93 ต่อ 13
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                margin: '0'
              }}>
                attawit@mju.ac.th
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulseGlow {
          0% {
            opacity: 0.4;
            transform: scale(1);
          }
          100% {
            opacity: 0.8;
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
}