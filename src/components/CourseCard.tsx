'use client';

import React from 'react';
import { CourseContent } from '@/data/curriculum';
import { useLanguage } from '@/contexts/LanguageContext';

interface CourseCardProps {
  course: CourseContent;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const { language } = useLanguage();

  const getYearColor = (year: number) => {
    switch (year) {
      case 1: return 'badge-year-1';
      case 2: return 'badge-year-2';
      default: return 'badge-year-default';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'badge-difficulty-beginner';
      case 'intermediate': return 'badge-difficulty-intermediate';
      case 'advanced': return 'badge-difficulty-advanced';
      default: return 'badge-difficulty-beginner';
    }
  };

  const getDifficultyText = () => {
    switch (course.difficulty) {
      case 'beginner': 
        return language === 'th' ? 'เริ่มต้น' : 'Beginner';
      case 'intermediate':
        return language === 'th' ? 'ปานกลาง' : 'Intermediate';
      case 'advanced':
        return language === 'th' ? 'สูง' : 'Advanced';
      default:
        return course.difficulty;
    }
  };

  const getYearText = () => {
    return language === 'th' ? `ปี ${course.year}` : `Year ${course.year}`;
  };

  const getSemesterText = () => {
    return language === 'th' ? `เทอม ${course.semester}` : `Semester ${course.semester}`;
  };

  const getStartLearningText = () => {
    return language === 'th' ? 'เริ่มเรียน' : 'Start Learning';
  };

  return (
    <div className="course-card">
      {/* Course Image */}
      <div className="course-card-image">
        {course.image ? (
          <img 
            src={course.image} 
            alt={course.title}
          />
        ) : (
          <div className="course-image-letter">
            <div className="text-6xl font-bold">
              {course.title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="course-card-overlay"></div>
        
        {/* Course badges */}
        <div className="badge-container-tl">
          <span className={`badge ${getYearColor(course.year)}`}>
            {getYearText()}
          </span>
          <span className="badge badge-semester">
            {getSemesterText()}
          </span>
        </div>
        
        {/* Difficulty badge */}
        <div className="badge-container-tr">
          <span className={`badge badge-xs ${getDifficultyColor(course.difficulty)}`}>
            {getDifficultyText()}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="course-card-content">
        {/* Course Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {language === 'th' ? course.title : course.titleEn}
        </h3>
        
        {/* English Title */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-1 font-medium">
          {language === 'th' ? course.titleEn : course.title}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-3 leading-relaxed">
          {course.description}
        </p>

        {/* Course Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          {course.duration && (
            <span>⏱️ {course.duration}</span>
          )}
          {course.credits && (
            <span>📚 {course.credits} หน่วยกิต</span>
          )}
        </div>

        {/* Action Button */}
        <a href={`/courses/${course.id}`}>
          <button className="w-full btn-gradient focus-ring">
            <span className="flex items-center justify-center">
              <svg className="icon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {getStartLearningText()}
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default CourseCard;