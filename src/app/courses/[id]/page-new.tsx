'use client';

import React, { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { curriculum } from '@/data/curriculum';
import { useLanguage } from '@/contexts/LanguageContext';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function NewCourseDetailPage() {
  const { language } = useLanguage();
  const params = useParams();
  const course = curriculum.find(c => c.id === params.id);

  if (!course) {
    notFound();
  }

  // State for video player
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Mock video lessons data
  const videoLessons = [
    {
      id: 1,
      title: language === 'th' ? 'บทนำสู่รายวิชา' : 'Course Introduction',
      duration: '05:30',
      description: language === 'th' ? 'แนะนำรายวิชาและการเรียนรู้' : 'Introduction to the course and learning',
      completed: true
    },
    {
      id: 2,
      title: language === 'th' ? 'เนื้อหาหลัก' : 'Main Content',
      duration: '25:15',
      description: language === 'th' ? 'เนื้อหาทฤษฎีและแนวปฏิบัติ' : 'Theoretical and practical content',
      completed: true
    },
    {
      id: 3,
      title: language === 'th' ? 'การประยุกต์ใช้งาน' : 'Application',
      duration: '18:45',
      description: language === 'th' ? 'นำความรู้ไปใช้ในสถานการณ์จริง' : 'Applying knowledge in real scenarios',
      completed: false
    },
    {
      id: 4,
      title: language === 'th' ? 'แบบฝึกหัดและการประเมิน' : 'Exercises and Assessment',
      duration: '15:20',
      description: language === 'th' ? 'ประเมินความเข้าใจและความสามารถในการใช้งาน' : 'Evaluate understanding and application skills',
      completed: false
    }
  ];

  // Translation functions
  const getBackToCourses = () => {
    return language === 'th' ? 'กลับไปที่คอร์สเรียน' : 'Back to Courses';
  };

  const getCourseInfo = () => {
    return language === 'th' ? 'ข้อมูลรายวิชา' : 'Course Information';
  };

  const getCourseDescription = () => {
    return language === 'th' ? 'คำอธิบายรายวิชา' : 'Course Description';
  };

  const getInstructor = () => {
    return language === 'th' ? 'อาจารย์ผู้สอน' : 'Instructor';
  };

  const getDifficulty = () => {
    return language === 'th' ? 'ระดับความยาก' : 'Difficulty';
  };

  const getBeginner = () => {
    return language === 'th' ? 'เริ่มต้น' : 'Beginner';
  };

  const getIntermediate = () => {
    return language === 'th' ? 'ปานกลาง' : 'Intermediate';
  };

  const getAdvanced = () => {
    return language === 'th' ? 'สูง' : 'Advanced';
  };

  const getPrerequisites = () => {
    return language === 'th' ? 'วิชาที่ต้องเรียนก่อน' : 'Prerequisites';
  };

  const getToolsUsed = () => {
    return language === 'th' ? 'เครื่องมือที่ใช้' : 'Tools Used';
  };

  const getCourseContent = () => {
    return language === 'th' ? 'เนื้อหาคอร์ส' : 'Course Content';
  };

  const getPlayVideo = () => {
    return language === 'th' ? 'เล่นวิดีโอ' : 'Play Video';
  };

  const getContinue = () => {
    return language === 'th' ? 'ดำเนินการต่อ' : 'Continue';
  };

  const getCompleted = () => {
    return language === 'th' ? 'เสร็จสิ้น' : 'Completed';
  };

  const getInProgress = () => {
    return language === 'th' ? 'กำลังดำเนินการ' : 'In Progress';
  };

  const getNotStarted = () => {
    return language === 'th' ? 'ยังไม่เริ่ม' : 'Not Started';
  };

  const getDifficultyText = () => {
    switch (course.difficulty) {
      case 'beginner': return getBeginner();
      case 'intermediate': return getIntermediate();
      case 'advanced': return getAdvanced();
      default: return course.difficulty;
    }
  };

  const handleVideoSelect = (index: number) => {
    setActiveVideo(index);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(e.target.value));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Dark Mode Toggle */}
      <DarkModeToggle />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link 
            href="/courses" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {getBackToCourses()}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Content - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              {/* Video Placeholder */}
              <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="text-center">
                    <div className="text-6xl mb-4 text-white opacity-80">▶️</div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {videoLessons[activeVideo].title}
                    </h2>
                    <p className="text-gray-300 mb-4">
                      {videoLessons[activeVideo].description}
                    </p>
                    <div className="text-gray-400">
                      {videoLessons[activeVideo].duration}
                    </div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <button 
                    onClick={handlePlayPause}
                    className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 hover:bg-opacity-40 transition-all"
                  >
                    <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm border-2 border-white border-opacity-30 hover:scale-105 transition-transform">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        {isPlaying ? (
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        ) : (
                          <path d="M8 5v14l11-7z" />
                        )}
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Video Controls */}
              <div className="p-4 bg-gray-100 dark:bg-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {Math.floor(progress / 60)}:{String(progress % 60).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {videoLessons[activeVideo].duration}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2 mb-4">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                
                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={handlePlayPause}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {isPlaying ? (
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        ) : (
                          <path d="M8 5v14l11-7z" />
                        )}
                      </svg>
                    </button>
                    
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z" />
                      </svg>
                    </button>
                    
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 9v6h4l5 5V4l-5 5H7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {videoLessons[activeVideo].title}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300">
                    {videoLessons[activeVideo].description}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {videoLessons[activeVideo].duration}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                  </svg>
                  {getPlayVideo()}
                </button>
                
                <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors">
                  {language === 'th' ? 'เพิ่มในรายการโปรด' : 'Add to Favorites'}
                </button>
              </div>
            </div>
            
            {/* Course Description */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                📖 {getCourseDescription()}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {language === 'th' ? course.fullDescription : course.fullDescriptionEn}
              </p>
            </div>
          </div>
          
          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            {/* Course Info Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                📚 {getCourseInfo()}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {getInstructor()}
                  </h3>
                  <p className="text-gray-900 dark:text-white">
                    {language === 'th' ? 'อาจารย์ประจำสาขา' : 'Department Professor'}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {getDifficulty()}
                  </h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    course.difficulty === 'beginner' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : course.difficulty === 'intermediate' 
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {getDifficultyText()}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {language === 'th' ? 'หน่วยกิต' : 'Credits'}
                  </h3>
                  <p className="text-gray-900 dark:text-white">
                    {course.credits} {language === 'th' ? 'หน่วยกิต' : 'credits'}
                  </p>
                </div>
                
                {course.prerequisites && course.prerequisites.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      {getPrerequisites()}
                    </h3>
                    <ul className="list-disc list-inside text-gray-900 dark:text-white">
                      {course.prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {course.tools && course.tools.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      {getToolsUsed()}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {course.tools.map((tool, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {tool.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Course Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                🎯 {getCourseContent()}
              </h2>
              
              <div className="space-y-3">
                {videoLessons.map((lesson, index) => (
                  <div 
                    key={lesson.id}
                    onClick={() => handleVideoSelect(index)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      activeVideo === index
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-30'
                        : 'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                          {lesson.id}
                        </span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {lesson.title}
                          </h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                            {lesson.duration}
                          </span>
                        </div>
                        
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                          {lesson.description}
                        </p>
                        
                        <div className="flex items-center mt-2">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                            lesson.completed 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                              : activeVideo === index
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                          }`}>
                            {lesson.completed 
                              ? getCompleted() 
                              : activeVideo === index 
                                ? getInProgress() 
                                : getNotStarted()
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all transform hover:scale-[1.02]">
                {getContinue()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}