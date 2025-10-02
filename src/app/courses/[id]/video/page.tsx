'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { curriculum } from '@/data/curriculum';
import { useLanguage } from '@/contexts/LanguageContext';

export default function VideoPlayerPage() {
  const { language } = useLanguage();
  const params = useParams();
  const courseId = params.id;
  const course = curriculum.find(c => c.id === courseId);
  
  // Define which courses should use the janjo.mp4 video
  const coursesWithJanjoVideo = [
    'relational-db',     // ฐานข้อมูลโครงสร้างเชิงสัมพันธ์
    'figma-course',      // Figma และการออกแบบ UI/UX
    'html-css-course',   // HTML5 และ CSS3
    'tailwind-course',   // Tailwind CSS Framework
    'javascript-course', // JavaScript
    'react-course',      // React และการพัฒนา Frontend
    'nextjs-course'      // Next.js และ Full-Stack Development
  ];
  
  // Define which courses should use the janohm.mp4 video
  const coursesWithJanohmVideo = [
    'ict',              // เทคโนโลยีสารสนเทศและการสื่อสาร
    'data-structure'    // โครงสร้างข้อมูลและอัลกอริทึม
  ];
  
  // Define which courses should use the SEjan.mp4 video
  const coursesWithSEjanVideo = [
    'postman-course',    // Postman และการทดสอบ API
    'playwright-course', // Playwright และการทดสอบอัตโนมัติ
    'docker-course',     // Docker และ Containerization
    'github-course'      // GitHub และการควบคุมเวอร์ชั่น
  ];
  
  // Define which courses should use the Janoof.mp4 video (note capital J)
  const coursesWithJanoofVideo = [
    'computer-org',      // องค์ประกอบและสถาปัตยกรรมคอมพิวเตอร์
    'prog-fundamentals'  // การเขียนโปรแกรมเบื้องต้น
  ];
  
  // Define which courses should use the janpat.mp4 video
  const coursesWithJanpatVideo = [
    'prog-problem-solving' // การเขียนโปรแกรมและทักษะการแก้ปัญหา
  ];
  
  // Get the appropriate video source based on course
  const getVideoSource = () => {
    if (coursesWithJanjoVideo.includes(courseId as string)) {
      return '/janjo.mp4';
    } else if (coursesWithJanohmVideo.includes(courseId as string)) {
      return '/janohm.mp4';
    } else if (coursesWithSEjanVideo.includes(courseId as string)) {
      return '/SEjan.mp4';
    } else if (coursesWithJanoofVideo.includes(courseId as string)) {
      return '/Janoof.mp4';
    } else if (coursesWithJanpatVideo.includes(courseId as string)) {
      return '/janpat.mp4';
    }
    // Default video for other courses
    return '/github_video1.mp4';
  };
  
  // Get lesson parts based on course topics
  const getLessonParts = () => {
    if (!course) return [];
    
    const topics = language === 'th' ? course.topics : course.topicsEn;
    const partCount = 4;
    const parts = [];
    
    for (let i = 1; i <= partCount; i++) {
      const topicIndex = i - 1;
      const topic = topicIndex < topics.length ? topics[topicIndex] : `${language === 'th' ? 'หัวข้อ' : 'Topic'} ${i}`;
      parts.push({
        id: i,
        title: `${language === 'th' ? 'พาร์ท' : 'Part'} ${i}`,
        topic: topic,
        duration: `${5 + i * 2}:00`, // Sample duration
        active: i === 1 // Mark first part as active
      });
    }
    
    return parts;
  };
  
  const lessonParts = getLessonParts();
  const [activePart, setActivePart] = useState(1);
  
  // Find the specific video lesson (for now we'll use a placeholder)
  const videoLesson = lessonParts.find(part => part.id === activePart) || lessonParts[0];
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  // State for mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Get translated text functions
  const getBackToCourseText = () => {
    return language === 'th' ? 'กลับไปที่รายวิชา' : 'Back to Course';
  };
  
  const getVideoTitle = () => {
    return language === 'th' ? 'บทเรียนวิดีโอ' : 'Video Lesson';
  };
  
  const getPlayText = () => {
    return language === 'th' ? 'เล่น' : 'Play';
  };
  
  const getPauseText = () => {
    return language === 'th' ? 'หยุด' : 'Pause';
  };
  
  const getFullscreenText = () => {
    return language === 'th' ? 'เต็มหน้าจอ' : 'Fullscreen';
  };
  
  const getExitFullscreenText = () => {
    return language === 'th' ? 'ออกจากเต็มหน้าจอ' : 'Exit Fullscreen';
  };
  
  const getNextLessonText = () => {
    return language === 'th' ? 'บทถัดไป' : 'Next Lesson';
  };
  
  const getCourseContentText = () => {
    return language === 'th' ? 'เนื้อหาคอร์ส' : 'Course Content';
  };
  
  const getProgressText = () => {
    return language === 'th' ? 'ความคืบหน้า' : 'Progress';
  };
  
  const getOverallProgressText = () => {
    return language === 'th' ? 'ความคืบหน้าโดยรวม' : 'Overall Progress';
  };
  
  const getThisPartText = () => {
    return language === 'th' ? 'พาร์ทนี้' : 'This Part';
  };
  
  // Video controls functions
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };
  
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };
  
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
    }
  };
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };
  
  // Format time for display
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  if (!course) {
    return (
      <div className="video-player-container" style={{
        minHeight: '100vh',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{language === 'th' ? 'ไม่พบรายวิชา' : 'Course Not Found'}</h1>
          <Link href="/courses" className="text-blue-500 hover:underline">
            {language === 'th' ? 'กลับไปที่รายการรายวิชา' : 'Back to Courses'}
          </Link>
        </div>
      </div>
    );
  }
  
  // Get the video source for this course
  const videoSource = getVideoSource();
  
  return (
    <div className="video-player-container" style={{
      minHeight: '100vh',
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 24px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <Link 
          href={`/courses/${courseId}`}
          style={{
            color: '#fff',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {getBackToCourseText()}
        </Link>
        <h1 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          textAlign: 'center',
          flex: 1,
          margin: '0 20px',
          color: '#fff',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {language === 'th' ? course.title : course.titleEn}
        </h1>
        {/* Mobile menu button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            display: 'none', // Hidden on desktop
            padding: '8px'
          }}
          className="md-hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div style={{ width: '100px' }} className="md-hidden"></div> {/* Spacer for alignment on mobile */}
      </div>
      
      {/* Main Content Area */}
      <div style={{
        display: 'flex',
        flex: 1,
        overflow: 'hidden'
      }} className="video-main-content">
        {/* Video Content - Left Side */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#000',
          position: 'relative'
        }} className="video-content">
          {/* Video Player Area */}
          <div style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            backgroundColor: '#000'
          }}>
            {/* Video Player */}
            <div style={{
              width: '100%',
              maxWidth: '1200px',
              position: 'relative'
            }}>
              <video
                ref={videoRef}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '70vh',
                  objectFit: 'contain'
                }}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls={false}
              >
                {/* Use the appropriate video source based on course */}
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Controls Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {/* Progress Bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '0.875rem', minWidth: '40px', color: '#fff' }}>
                    {formatTime(currentTime)}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    style={{
                      flex: 1,
                      height: '5px',
                      backgroundColor: '#555',
                      borderRadius: '4px',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{ fontSize: '0.875rem', minWidth: '40px', color: '#fff' }}>
                    {formatTime(duration)}
                  </span>
                </div>
                
                {/* Control Buttons */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <button
                      onClick={togglePlay}
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.875rem'
                      }}
                    >
                      {isPlaying ? (
                        <>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="#fff" />
                          </svg>
                          {getPauseText()}
                        </>
                      ) : (
                        <>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" fill="#fff" />
                          </svg>
                          {getPlayText()}
                        </>
                      )}
                    </button>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill="#fff" />
                      </svg>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        style={{
                          width: '80px',
                          height: '5px',
                          backgroundColor: '#555',
                          borderRadius: '4px',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '0.875rem', color: '#fff' }} className="video-lesson-info">
                      {videoLesson.title} ({videoLesson.duration})
                    </span>
                    <button
                      onClick={toggleFullscreen}
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.875rem'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d={isFullscreen 
                          ? "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" 
                          : "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                        } fill="#fff" />
                      </svg>
                      <span className="fullscreen-text">{isFullscreen ? getExitFullscreenText() : getFullscreenText()}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Info */}
          <div style={{
            padding: '24px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '8px'
            }}>
              {videoLesson.title}
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#ccc',
              marginBottom: '16px'
            }}>
              {videoLesson.topic}
            </p>
            
            {/* Next Lesson Button */}
            <button style={{
              backgroundColor: '#fff',
              color: '#000',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '4px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>{getNextLessonText()}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Lesson Parts Sidebar - Right Side (Hidden on mobile by default) */}
        <div 
          style={{
            width: '300px',
            backgroundColor: 'var(--background)',
            borderLeft: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            color: 'var(--foreground)'
          }} 
          className={`lesson-sidebar ${isSidebarOpen ? 'mobile-visible' : ''}`}
        >
          <div style={{
            padding: '20px',
            borderBottom: '1px solid var(--border)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--foreground)',
                margin: 0
              }}>
                {getCourseContentText()}
              </h3>
              {/* Close button for mobile */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: 'var(--foreground)',
                  cursor: 'pointer',
                  display: 'none', // Hidden on desktop
                  padding: '4px'
                }}
                className="md-hidden"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '8px' 
            }}>
              {lessonParts.map((part) => (
                <div 
                  key={part.id}
                  onClick={() => setActivePart(part.id)}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    backgroundColor: part.active || part.id === activePart 
                      ? 'var(--primary)' 
                      : 'transparent',
                    border: part.active || part.id === activePart 
                      ? '1px solid var(--primary)' 
                      : '1px solid var(--border)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (part.id !== activePart) {
                      e.currentTarget.style.backgroundColor = 'var(--secondary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (part.id !== activePart) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '4px'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center' 
                    }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: part.active || part.id === activePart 
                          ? '#fff' 
                          : 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '8px'
                      }}>
                        <span style={{
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          color: part.active || part.id === activePart 
                            ? 'var(--primary)' 
                            : '#fff'
                        }}>
                          {part.id}
                        </span>
                      </div>
                      <span style={{
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        color: part.active || part.id === activePart 
                          ? '#fff' 
                          : 'var(--foreground)'
                      }}>
                        {part.title}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      color: part.active || part.id === activePart 
                        ? '#fff' 
                        : 'var(--foreground)'
                    }}>
                      {part.duration}
                    </span>
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: part.active || part.id === activePart 
                      ? 'rgba(255, 255, 255, 0.9)' 
                      : 'var(--foreground)',
                    paddingLeft: '32px',
                    lineHeight: '1.4'
                  }}>
                    {part.topic}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Progress Section */}
          <div style={{
            padding: '20px',
            flex: 1
          }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '16px',
              color: 'var(--foreground)'
            }}>
              {getProgressText()}
            </h4>
            
            <div style={{ marginBottom: '16px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.875rem',
                color: 'var(--foreground)',
                marginBottom: '4px'
              }}>
                <span>{getOverallProgressText()}</span>
                <span>25%</span>
              </div>
              <div style={{
                height: '8px',
                backgroundColor: 'var(--secondary)',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div 
                  style={{
                    height: '100%',
                    backgroundColor: 'var(--primary)',
                    width: '25%'
                  }}
                ></div>
              </div>
            </div>
            
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.875rem',
                color: 'var(--foreground)',
                marginBottom: '4px'
              }}>
                <span>{getThisPartText()}</span>
                <span>0%</span>
              </div>
              <div style={{
                height: '8px',
                backgroundColor: 'var(--secondary)',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div 
                  style={{
                    height: '100%',
                    backgroundColor: 'var(--primary)',
                    width: '0%'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999
          }}
          className="md-hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      
      <style jsx global>{`
        /* Responsive styles for mobile */
        @media (max-width: 767px) {
          .video-main-content {
            flex-direction: column;
          }
          
          .video-content {
            width: 100%;
          }
          
          .lesson-sidebar {
            position: fixed;
            top: 0;
            right: -300px;
            height: 100vh;
            z-index: 1000;
            transition: right 0.3s ease;
            width: 300px;
            overflow-y: auto;
          }
          
          .lesson-sidebar.mobile-visible {
            right: 0;
          }
          
          .video-lesson-info {
            display: none;
          }
          
          .fullscreen-text {
            display: none;
          }
          
          .md-hidden {
            display: block !important;
          }
          
          /* Adjust video player for mobile */
          .video-player-container video {
            max-height: 50vh;
          }
          
          /* Adjust header for mobile */
          .video-player-container h1 {
            font-size: 1rem;
          }
          
          /* Adjust video info section for mobile */
          .video-content > div:last-child {
            padding: 16px;
          }
          
          .video-content > div:last-child h2 {
            font-size: 1.25rem;
          }
          
          .video-content > div:last-child p {
            font-size: 0.875rem;
          }
          
          /* Adjust video controls for mobile */
          .video-controls-overlay {
            padding: 12px;
          }
          
          .video-controls-overlay > div:first-child {
            gap: 8px;
          }
          
          .video-controls-overlay > div:first-child span {
            font-size: 0.75rem;
            min-width: 30px;
          }
          
          .video-controls-overlay > div:last-child {
            flex-direction: column;
            gap: 8px;
            align-items: flex-start;
          }
          
          .video-controls-overlay > div:last-child > div:first-child,
          .video-controls-overlay > div:last-child > div:last-child {
            width: 100%;
            justify-content: space-between;
          }
          
          .video-controls-overlay button {
            font-size: 0.75rem;
            gap: 4px;
          }
          
          .video-controls-overlay input[type="range"] {
            width: 100px;
          }
        }
        
        @media (min-width: 768px) {
          .md-hidden {
            display: none !important;
          }
        }
        
        /* Ensure proper scrolling on mobile */
        .lesson-sidebar {
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        
        /* Improve touch targets for mobile */
        @media (max-width: 767px) {
          .lesson-sidebar div[style*="padding: 12px"] {
            padding: 16px !important;
          }
          
          .lesson-sidebar span[style*="font-size: 0.875rem"] {
            font-size: 1rem !important;
          }
          
          .lesson-sidebar span[style*="font-size: 0.75rem"] {
            font-size: 0.875rem !important;
          }
        }
      `}</style>
    </div>
  );
}