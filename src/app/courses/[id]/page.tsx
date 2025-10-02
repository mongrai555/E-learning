'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { curriculum } from '@/data/curriculum';
import { useLanguage } from '@/contexts/LanguageContext';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function CourseDetailPage() {
  const { language } = useLanguage();
  const params = useParams();
  const course = curriculum.find(c => c.id === params.id);

  if (!course) {
    notFound();
  }

  // Translation functions
  const getBackToCourses = () => {
    return language === 'th' ? 'กลับไปที่คอร์สเรียน' : 'Back to Courses';
  };

  const getCourseDescription = () => {
    return language === 'th' ? 'คำอธิบายรายวิชา' : 'Course Description';
  };

  const getLearningObjectives = () => {
    return language === 'th' ? 'จุดประสงค์การเรียนรู้' : 'Learning Objectives';
  };

  const getCourseTopics = () => {
    return language === 'th' ? 'หัวข้อที่เรียน' : 'Course Topics';
  };

  const getPrerequisites = () => {
    return language === 'th' ? 'วิชาที่ต้องเรียนก่อน' : 'Prerequisites';
  };

  const getToolsUsed = () => {
    return language === 'th' ? 'เครื่องมือที่ใช้' : 'Tools Used';
  };

  const getCredits = () => {
    return language === 'th' ? 'หน่วยกิต' : 'Credits';
  };

  const getDuration = () => {
    return language === 'th' ? 'ระยะเวลา' : 'Duration';
  };

  const getYear = () => {
    return language === 'th' ? 'ชั้นปี' : 'Year';
  };

  const getSemester = () => {
    return language === 'th' ? 'เทอม' : 'Semester';
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

  const getDifficultyText = () => {
    switch (course.difficulty) {
      case 'beginner': return getBeginner();
      case 'intermediate': return getIntermediate();
      case 'advanced': return getAdvanced();
      default: return course.difficulty;
    }
  };

  // Get lesson parts based on course topics
  const getLessonParts = () => {
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
        active: i === 1 // Mark first part as active
      });
    }
    
    return parts;
  };

  return (
    <div className="course-detail-container">
      {/* Dark Mode Toggle */}
      <DarkModeToggle />
      
      <div className="course-detail-wrapper">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link 
            href="/courses" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            ← {getBackToCourses()}
          </Link>
        </div>

        <div className="course-main-grid">
          {/* Main Content - Left Column */}
          <div className="space-y-6">
            {/* Course Header */}
            <div className="card">
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="badge badge-year-2">
                    {getYear()} {course.year}
                  </span>
                  <span className="badge badge-semester">
                    {getSemester()} {course.semester}
                  </span>
                  <span className={`badge ${
                    course.difficulty === 'beginner' 
                      ? 'badge-difficulty-beginner' 
                      : course.difficulty === 'intermediate' 
                        ? 'badge-difficulty-intermediate' 
                        : 'badge-difficulty-advanced'
                  }`}>
                    {getDifficultyText()}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {language === 'th' ? course.title : course.titleEn}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  {language === 'th' ? course.titleEn : course.title}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  {course.credits && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <span>{getCredits()}: {course.credits}</span>
                    </div>
                  )}
                  {course.duration && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <span>{getDuration()}: {course.duration} {language === 'th' ? 'ชั่วโมง' : 'hours'}</span>
                    </div>
                  )}
                </div>
                
                {/* Start Learning Link - now links to video page */}
                <Link 
                  href={`/courses/${course.id}/video`}
                  className="btn-gradient inline-block text-center"
                >
                  {language === 'th' ? 'เริ่มเรียน' : 'Start Learning'}
                </Link>
              </div>
            </div>
            
            {/* Course Description */}
            <div className="card">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {getCourseDescription()}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {language === 'th' ? course.fullDescription : course.fullDescriptionEn}
                </p>
              </div>
            </div>
            
            {/* Learning Objectives */}
            {(language === 'th' ? course.objectives : course.objectivesEn).length > 0 && (
              <div className="card">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {getLearningObjectives()}
                  </h2>
                  <ul className="space-y-3">
                    {(language === 'th' ? course.objectives : course.objectivesEn).map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Course Topics */}
            {(language === 'th' ? course.topics : course.topicsEn).length > 0 && (
              <div className="card">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {getCourseTopics()}
                  </h2>
                  <ul className="space-y-3">
                    {(language === 'th' ? course.topics : course.topicsEn).map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Prerequisites */}
            {course.prerequisites && course.prerequisites.length > 0 && (
              <div className="card">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {getPrerequisites()}
                  </h3>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Tools Used */}
            {course.tools && course.tools.length > 0 && (
              <div className="card">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {getToolsUsed()}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {course.tools.map((tool, index) => (
                      <span 
                        key={index} 
                        className="badge badge-tool"
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar - Right Column (Lesson Parts) */}
          <div className="space-y-6">
            <div className="card">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {language === 'th' ? 'เนื้อหาคอร์ส' : 'Course Content'}
                </h3>
                <div className="space-y-3">
                  {getLessonParts().map((part) => (
                    <div 
                      key={part.id} 
                      className={`flex items-center p-3 rounded-lg border ${
                        part.active 
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' 
                          : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                      } transition-colors cursor-pointer`}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <span className={`font-medium ${
                          part.active 
                            ? 'text-blue-700 dark:text-blue-300' 
                            : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {part.id}
                        </span>
                      </div>
                      <div>
                        <div className={`font-medium ${
                          part.active 
                            ? 'text-blue-800 dark:text-blue-200' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {part.title}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{part.topic}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Course Progress */}
            <div className="card">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {language === 'th' ? 'ความคืบหน้า' : 'Progress'}
                </h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>{language === 'th' ? 'ความคืบหน้าโดยรวม' : 'Overall Progress'}</span>
                    <span>0%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
                
                {/* Start Learning Link - now links to video page */}
                <Link 
                  href={`/courses/${course.id}/video`}
                  className="btn-gradient inline-block text-center"
                >
                  {language === 'th' ? 'เริ่มเรียน' : 'Start Learning'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}