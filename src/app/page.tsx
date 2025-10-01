"use client";

import React, { useState } from "react";
import DarkModeToggle from '@/components/DarkModeToggle';
import { curriculum } from '@/data/curriculum';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { language } = useLanguage();
  const [videoError, setVideoError] = useState({
    bg: false,
    github: false,
    docker: false,
    profile: false
  });

  const skills = [
    { id: 1, name: language === 'th' ? 'Web Development' : 'Web Development', icon: "💻" },
    { id: 2, name: language === 'th' ? 'Database' : 'Database', icon: "🗄️" },
    { id: 3, name: language === 'th' ? 'UX/UI Design' : 'UX/UI Design', icon: "🎨" },
    { id: 4, name: language === 'th' ? 'Software Development' : 'Software Development', icon: "⚙️" },
    { id: 5, name: language === 'th' ? 'IoT' : 'IoT', icon: "🌐" }
  ];

  // คอร์ส GitHub และ Docker จากหลักสูตร
  const githubCourse = curriculum.find(course => course.id === 'github-course');
  const dockerCourse = curriculum.find(course => course.id === 'docker-course');

  // Handle video errors
  const handleVideoError = (videoType: string) => {
    setVideoError(prev => ({
      ...prev,
      [videoType]: true
    }));
  };

  // Translation functions
  const getHomePageTitle = () => {
    return language === 'th' ? 'Website E-learning สำหรับสาขาวิชา' : 'E-learning Website for';
  };

  const getHomePageSubtitle = () => {
    return language === 'th' ? 'วิทยาการคอมพิวเตอร์' : 'Computer Science';
  };

  const getHomePageDescription = () => {
    return language === 'th' 
      ? 'เรานำหลักสูตรจากทางสาขาวิทยาการคอมพิวเตอร์ของมหาวิทยาลัยแม่โจ้มาให้เรียนรู้แบบ E-learning โดยมีวิดีโอการสอนและควิซที่ถูกทำขึ้นจากอาจารย์ผู้รับผิดชอบของแต่ละรายวิชานั้น'
      : 'We bring courses from the Computer Science program at Mae Jo University to you through E-learning, featuring teaching videos and quizzes created by the instructors responsible for each subject.';
  };

  const getSkillsTitle = () => {
    return language === 'th' ? 'ทักษะที่คุณจะได้รับ' : 'Skills You Will Gain';
  };

  const getRecommendedTitle = () => {
    return language === 'th' ? 'คอร์สที่แนะนำและจำเป็นต่อการทำงาน Github!' : 'Recommended and Essential Courses for GitHub Work!';
  };

  const getGithubTitle = () => {
    return language === 'th' ? 'Github คืออะไร?' : 'What is Github?';
  };

  const getDockerTitle = () => {
    return language === 'th' ? 'Docker คืออะไร?' : 'What is Docker?';
  };

  const getGithubDescription = () => {
    return language === 'th' 
      ? 'GitHub เป็นแพลตฟอร์มการพัฒนาซอฟต์แวร์แบบออนไลน์ ที่นักพัฒนาสามารถใช้ในการ:'
      : 'GitHub is an online software development platform that developers can use to:';
  };

  const getDockerDescription = () => {
    return language === 'th' 
      ? 'Docker เป็นแพลตฟอร์ม Containerization ที่ช่วยให้นักพัฒนาสามารถใช้ในการ:'
      : 'Docker is a Containerization platform that helps developers:';
  };

  const getGithubFeatures = () => {
    return language === 'th' 
      ? [
          'จัดเก็บโค้ดและติดตามความเปลี่ยนแปลง',
          'สร้างโครงการเพื่อพัฒนาร่วมกัน',
          'แบ่งปันโค้ดและร่วมมือพัฒนา',
          'สนับสนุน Open-Source',
          'สร้างเครือข่ายและนำเสนอผลงาน'
        ]
      : [
          'Store code and track changes',
          'Create projects for collaborative development',
          'Share code and collaborate on development',
          'Support Open-Source',
          'Build networks and showcase work'
        ];
  };

  const getDockerFeatures = () => {
    return language === 'th' 
      ? [
          'สร้างและจัดการ Container',
          'ประสิทธิภาพการ Deploy แอปพลิเคชัน',
          'รันแอปในสภาพแวดล้อมเดียวกัน',
          'จัดการ Microservices',
          'เพิ่มประสิทธิภาพการพัฒนา'
        ]
      : [
          'Create and manage Containers',
          'Improve application deployment efficiency',
          'Run applications in the same environment',
          'Manage Microservices',
          'Increase development efficiency'
        ];
  };

  const getGithubConclusion = () => {
    return language === 'th' ? 'เครื่องมือจำเป็นสำหรับนักพัฒนาทุกคน!' : 'Essential tools for all developers!';
  };

  const getDockerConclusion = () => {
    return language === 'th' ? 'เครื่องมือสำคัญสำหรับ DevOps!' : 'Important tools for DevOps!';
  };

  const getProfessorTitle = () => {
    return language === 'th' ? 'ประธานหลักสูตร ศาสตราจารย์ อำนาจ จันทึกมานนท์' : 'Program Chair Prof. Attawit Changkamanon';
  };

  const getProfessorName = () => {
    return language === 'th' ? 'อำนาจ จันทึกมานนท์' : 'Attawit Changkamanon';
  };

  const getEducationTitle = () => {
    return language === 'th' ? 'การศึกษา' : 'Education';
  };

  const getEducationDetails = () => {
    return language === 'th' ? 'วท.ม.(วิทยาการคอมพิวเตอร์) มหาวิทยาลัยเชียงใหม่' : 'M.Sc. (Computer Science) Chiang Mai University';
  };

  const getContactTitle = () => {
    return language === 'th' ? 'ติดต่อ' : 'Contact';
  };

  const getContactPhone = () => {
    return language === 'th' ? '053-873890-93 ต่อ 13' : '053-873890-93 ext. 13';
  };

  const getContactEmail = () => {
    return language === 'th' ? 'attawit@mju.ac.th' : 'attawit@mju.ac.th';
  };

  const githubFeatures = getGithubFeatures();
  const dockerFeatures = getDockerFeatures();

  return (
    <div style={{
      minHeight: 'calc(100vh - 80px)',
      backgroundColor: 'var(--background)',
      padding: '0',
      fontFamily: 'Arial, sans-serif',
      width: '100%',
      margin: 0
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
        {videoError.bg ? (
          // Fallback for background video
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div style={{
              textAlign: 'center',
              color: 'white',
              padding: '20px'
            }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>E-Learning Platform</h2>
              <p>Computer Science Department</p>
            </div>
          </div>
        ) : (
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
            onError={() => handleVideoError('bg')}
          >
            <source src="/bg_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {/* Content overlay on top of video - now responsive to theme */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'var(--video-overlay)', // This will change with theme
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
              color: 'var(--video-title-color)', // This will change with theme
              marginBottom: '25px',
              lineHeight: '1.2',
              letterSpacing: '-0.5px',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
            }}>
              {getHomePageTitle()}<br />
              <span style={{ color: 'var(--primary-light)' }}>{getHomePageSubtitle()}</span>
            </h1>
            
            <p style={{
              fontSize: '1.3rem',
              color: 'var(--video-text-color)', // This will change with theme
              lineHeight: '1.7',
              marginBottom: '35px',
              maxWidth: '75%',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
            }}>
              {getHomePageDescription()}
            </p>
            
            <h2 style={{
              fontSize: '1.5rem',
              color: 'var(--video-title-color)', // This will change with theme
              marginBottom: '20px',
              fontWeight: '600'
            }}>
              {getSkillsTitle()}
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
                    color: 'var(--video-button-color)', // This will change with theme
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--video-button-hover-bg)';
                    e.currentTarget.style.boxShadow = '0 0 8px var(--primary-light)';
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
        maxWidth: '100%',
        margin: '0 auto',
        padding: '40px 20px',
        width: '100%'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: 'var(--foreground)',
          marginBottom: '30px',
          textAlign: 'left'
        }}>
          {getRecommendedTitle()}
        </h2>
        
        {/* GitHub Course and Video Section */}
        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'flex-start',
          marginBottom: '50px',
          flexWrap: 'wrap'
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
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={githubCourse.image} 
                      alt={githubCourse.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                      {language === 'th' ? `ปี ${githubCourse.year}` : `Year ${githubCourse.year}`}
                    </span>
                    <span className="badge badge-semester">
                      {language === 'th' ? `เทอม ${githubCourse.semester}` : `Semester ${githubCourse.semester}`}
                    </span>
                  </div>
                  
                  {/* Difficulty badge */}
                  <div className="badge-container-tr">
                    <span className="badge badge-xs badge-difficulty-beginner">
                      {language === 'th' ? 'เริ่มต้น' : 'Beginner'}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="course-card-content">
                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {language === 'th' ? githubCourse.title : githubCourse.titleEn}
                  </h3>
                  
                  {/* English Title */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-1 font-medium">
                    {language === 'th' ? githubCourse.titleEn : githubCourse.title}
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
                        <svg className="icon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {language === 'th' ? 'เริ่มเรียน' : 'Start Learning'}
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
            justifyContent: 'center',
            minWidth: '300px'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--foreground)',
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              {getGithubTitle()}
            </h3>
            
            <p style={{
              color: 'var(--foreground)',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              textAlign: 'justify',
              marginBottom: '15px'
            }}>
              <strong>GitHub</strong> {getGithubDescription()}
            </p>
            
            <ul style={{
              color: 'var(--foreground)',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              paddingLeft: '20px',
              marginBottom: '15px'
            }}>
              <li style={{ marginBottom: '8px' }}>{githubFeatures[0]}</li>
              <li style={{ marginBottom: '8px' }}>{githubFeatures[1]}</li>
              <li style={{ marginBottom: '8px' }}>{githubFeatures[2]}</li>
              <li style={{ marginBottom: '8px' }}>{githubFeatures[3]}</li>
              <li>{githubFeatures[4]}</li>
            </ul>
            
            <p style={{
              color: 'var(--primary)',
              fontSize: '0.9rem',
              fontWeight: '600',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              {getGithubConclusion()}
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
              {videoError.github ? (
                // Fallback for GitHub video
                <div style={{
                  width: '100%',
                  height: '300px',
                  backgroundColor: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🎥</div>
                    <p>GitHub Tutorial Video</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '5px', opacity: '0.8' }}>Video failed to load</p>
                  </div>
                </div>
              ) : (
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
                  onError={() => handleVideoError('github')}
                >
                  <source src="/github_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
        
        {/* Docker Course and Video Section */}
        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'flex-start',
          marginBottom: '50px',
          flexWrap: 'wrap'
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
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={dockerCourse.image} 
                      alt={dockerCourse.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                      {language === 'th' ? `ปี ${dockerCourse.year}` : `Year ${dockerCourse.year}`}
                    </span>
                    <span className="badge badge-semester">
                      {language === 'th' ? `เทอม ${dockerCourse.semester}` : `Semester ${dockerCourse.semester}`}
                    </span>
                  </div>
                  
                  {/* Difficulty badge */}
                  <div className="badge-container-tr">
                    <span className="badge badge-xs badge-difficulty-intermediate">
                      {language === 'th' ? 'ปานกลาง' : 'Intermediate'}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="course-card-content">
                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {language === 'th' ? dockerCourse.title : dockerCourse.titleEn}
                  </h3>
                  
                  {/* English Title */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-1 font-medium">
                    {language === 'th' ? dockerCourse.titleEn : dockerCourse.title}
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
                        <svg className="icon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {language === 'th' ? 'เริ่มเรียน' : 'Start Learning'}
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
            justifyContent: 'center',
            minWidth: '300px'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--foreground)',
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              {getDockerTitle()}
            </h3>
            
            <p style={{
              color: 'var(--foreground)',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              textAlign: 'justify',
              marginBottom: '15px'
            }}>
              <strong>Docker</strong> {getDockerDescription()}
            </p>
            
            <ul style={{
              color: 'var(--foreground)',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              paddingLeft: '20px',
              marginBottom: '15px'
            }}>
              <li style={{ marginBottom: '8px' }}>{dockerFeatures[0]}</li>
              <li style={{ marginBottom: '8px' }}>{dockerFeatures[1]}</li>
              <li style={{ marginBottom: '8px' }}>{dockerFeatures[2]}</li>
              <li style={{ marginBottom: '8px' }}>{dockerFeatures[3]}</li>
              <li>{dockerFeatures[4]}</li>
            </ul>
            
            <p style={{
              color: 'var(--primary)',
              fontSize: '0.9rem',
              fontWeight: '600',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              {getDockerConclusion()}
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
              {videoError.docker ? (
                // Fallback for Docker video
                <div style={{
                  width: '100%',
                  height: '300px',
                  backgroundColor: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🐳</div>
                    <p>Docker Tutorial Video</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '5px', opacity: '0.8' }}>Video failed to load</p>
                  </div>
                </div>
              ) : (
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
                  onError={() => handleVideoError('docker')}
                >
                  <source src="/docker_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
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
            padding: '0 20px',
            flexWrap: 'wrap'
          }}>
            {/* Left column - Profile video */}
            <div style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'flex-start',
              minWidth: '300px'
            }}>
              <div style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                {videoError.profile ? (
                  // Fallback for profile video
                  <div style={{
                    width: '100%',
                    height: '300px',
                    backgroundImage: 'url("/jojo.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    padding: '20px'
                  }}>
                    <div style={{
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: '4px',
                      textAlign: 'center'
                    }}>
                      <h3>Prof. Attawit Changkamanon</h3>
                      <p>Program Chair</p>
                    </div>
                  </div>
                ) : (
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
                    onError={() => handleVideoError('profile')}
                  >
                    <source src="/jojo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
            
            {/* Right column - Profile information */}
            <div style={{
              flex: '1',
              minWidth: '300px'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--foreground)',
                marginBottom: '5px'
              }}>
                {getProfessorTitle()}
              </h3>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1.2rem',
                fontWeight: '600',
                margin: '0 0 20px 0'
              }}>
                {getProfessorName()}
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                fontWeight: '600',
                margin: '15px 0 5px 0'
              }}>
                {getEducationTitle()}
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                margin: '0 0 15px 0'
              }}>
                {getEducationDetails()}
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                fontWeight: '600',
                margin: '15px 0 5px 0'
              }}>
                {getContactTitle()}
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                margin: '0 0 5px 0'
              }}>
                {getContactPhone()}
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                margin: '0'
              }}>
                {getContactEmail()}
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
        
        @media (max-width: 768px) {
          .course-card.compact {
            max-width: 100%;
          }
          
          h1 {
            font-size: 2rem;
          }
          
          h2 {
            font-size: 1.5rem;
          }
          
          .video-section {
            height: 40vh;
          }
        }
      `}</style>
    </div>
  );
}