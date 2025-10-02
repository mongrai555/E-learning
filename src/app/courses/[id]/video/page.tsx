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
          color: '#fff'
        }}>
          {language === 'th' ? course.title : course.titleEn}
        </h1>
        <div style={{ width: '100px' }}></div> {/* Spacer for alignment */}
      </div>
      
      {/* Main Content Area */}
      <div style={{
        display: 'flex',
        flex: 1,
        overflow: 'hidden'
      }}>
        {/* Video Content - Left Side */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#000',
          position: 'relative'
        }}>
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
                {/* We'll use a sample video for now */}
                <source src="/github_video.mp4" type="video/mp4" />
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
                    <span style={{ fontSize: '0.875rem', color: '#fff' }}>
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
                      {isFullscreen ? getExitFullscreenText() : getFullscreenText()}
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
        
        {/* Lesson Parts Sidebar - Right Side */}
        <div style={{
          width: '300px',
          backgroundColor: 'var(--background)',
          borderLeft: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          color: 'var(--foreground)'
        }}>
          <div style={{
            padding: '20px',
            borderBottom: '1px solid var(--border)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              marginBottom: '16px',
              color: 'var(--foreground)'
            }}>
              {language === 'th' ? 'เนื้อหาคอร์ส' : 'Course Content'}
            </h3>
            
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
              {language === 'th' ? 'ความคืบหน้า' : 'Progress'}
            </h4>
            
            <div style={{ marginBottom: '16px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.875rem',
                color: 'var(--foreground)',
                marginBottom: '4px'
              }}>
                <span>{language === 'th' ? 'ความคืบหน้าโดยรวม' : 'Overall Progress'}</span>
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
                <span>{language === 'th' ? 'พาร์ทนี้' : 'This Part'}</span>
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
    </div>
  );
}