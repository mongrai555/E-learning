'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { curriculum } from '@/data/curriculum';
import { useLanguage } from '@/contexts/LanguageContext';
import DarkModeToggle from '@/components/DarkModeToggle';

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { language } = useLanguage();
  const course = curriculum.find(c => c.id === params.id);

  if (!course) {
    notFound();
  }

  const getCourseDescriptionTitle = () => {
    return language === 'th' ? 'คำอธิบายรายวิชา' : 'Course Description';
  };

  const getLearningObjectivesTitle = () => {
    return language === 'th' ? 'จุดประสงค์การเรียนรู้' : 'Learning Objectives';
  };

  const getCourseTopicsTitle = () => {
    return language === 'th' ? 'หัวข้อที่เรียน' : 'Course Topics';
  };

  const getToolsUsedTitle = () => {
    return language === 'th' ? 'เครื่องมือที่ใช้' : 'Tools Used';
  };

  const getPrerequisitesTitle = () => {
    return language === 'th' ? 'วิชาที่ต้องเรียนก่อน' : 'Prerequisites';
  };

  const getCreditsText = () => {
    return language === 'th' ? 'หน่วยกิต' : 'Credits';
  };

  const getDurationText = () => {
    return language === 'th' ? 'ระยะเวลา' : 'Duration';
  };

  const getYearText = () => {
    return language === 'th' ? 'ชั้นปี' : 'Year';
  };

  const getSemesterText = () => {
    return language === 'th' ? 'เทอม' : 'Semester';
  };

  const getBeginnerText = () => {
    return language === 'th' ? 'เริ่มต้น' : 'Beginner';
  };

  const getIntermediateText = () => {
    return language === 'th' ? 'ปานกลาง' : 'Intermediate';
  };

  const getAdvancedText = () => {
    return language === 'th' ? 'สูง' : 'Advanced';
  };

  const getStartLearningText = () => {
    return language === 'th' ? 'เริ่มเรียน' : 'Start Learning';
  };

  const getDifficultyBadgeText = () => {
    switch (course.difficulty) {
      case 'beginner': return getBeginnerText();
      case 'intermediate': return getIntermediateText();
      case 'advanced': return getAdvancedText();
      default: return course.difficulty;
    }
  };

  return (
    <div className="course-detail-wrapper">
      {/* Dark Mode Toggle */}
      <DarkModeToggle />
      
      <div className="course-main-grid">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link href="/">{language === 'th' ? 'หน้าหลัก' : 'Home'}</Link>
            <span> / </span>
            <Link href="/courses">{language === 'th' ? 'คอร์สเรียน' : 'Courses'}</Link>
            <span> / </span>
            <span className="current">
              {language === 'th' ? course.title : course.titleEn}
            </span>
          </nav>

          {/* Course Header */}
          <div className="course-card card-xl">
            <div className="course-card-image" style={{ height: '300px' }}>
              {course.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={course.image} 
                  alt={course.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div className="course-image-letter">
                  <div className="text-6xl font-bold">
                    {course.title.charAt(0)}
                  </div>
                </div>
              )}
              <div className="course-card-overlay"></div>
              
              {/* Course badges */}
              <div className="badge-container-tl">
                <span className="badge badge-year-2">
                  {getYearText()} {course.year}
                </span>
                <span className="badge badge-semester">
                  {getSemesterText()} {course.semester}
                </span>
              </div>
              
              <div className="badge-container-tr">
                <span className={`badge badge-xs ${
                  course.difficulty === 'beginner' ? 'badge-difficulty-beginner' :
                  course.difficulty === 'intermediate' ? 'badge-difficulty-intermediate' :
                  'badge-difficulty-advanced'
                }`}>
                  {getDifficultyBadgeText()}
                </span>
              </div>
            </div>
            
            <div className="course-card-content">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'th' ? course.title : course.titleEn}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {language === 'th' ? course.titleEn : course.title}
              </p>
              
              <div className="grid-2 gap-4 mb-6">
                {course.credits && (
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">📚</span>
                    <span>{getCreditsText()}: {course.credits}</span>
                  </div>
                )}
                {course.duration && (
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">⏱️</span>
                    <span>{getDurationText()}: {course.duration}</span>
                  </div>
                )}
              </div>
              
              {course.prerequisites && course.prerequisites.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    📋 {getPrerequisitesTitle()}
                  </h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index}>{prereq}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <a href="#">
                <button className="w-full btn-gradient">
                  <span className="flex items-center justify-center">
                    <svg className="icon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {getStartLearningText()}
                  </span>
                </button>
              </a>
            </div>
          </div>
          
          {/* Course Description */}
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              📖 {getCourseDescriptionTitle()}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {language === 'th' ? course.fullDescription : course.fullDescriptionEn}
            </p>
          </div>
          
          {/* Learning Objectives */}
          {(language === 'th' ? course.objectives : course.objectivesEn).length > 0 && (
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🎯 {getLearningObjectivesTitle()}
              </h2>
              <ul className="space-y-3">
                {(language === 'th' ? course.objectives : course.objectivesEn).map((objective, index) => (
                  <li key={index} className="topic-item">
                    <div className="topic-dot"></div>
                    <span className="text-gray-600">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Course Topics */}
          {(language === 'th' ? course.topics : course.topicsEn).length > 0 && (
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📚 {getCourseTopicsTitle()}
              </h2>
              <ul className="space-y-3">
                {(language === 'th' ? course.topics : course.topicsEn).map((topic, index) => (
                  <li key={index} className="topic-item">
                    <div className="topic-dot"></div>
                    <span className="text-gray-600">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tools Section */}
          {course.tools && course.tools.length > 0 && (
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                🛠️ {getToolsUsedTitle()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool, index) => (
                  <span key={index} className="badge-tool">
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Video Lessons Preview */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🎥 บทเรียนวิดีโอ
            </h3>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <div className="font-medium">บทนำ</div>
                  <div className="text-sm text-gray-500">10 นาที</div>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <div className="font-medium">เนื้อหาหลัก</div>
                  <div className="text-sm text-gray-500">25 นาที</div>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <div className="font-medium">แบบฝึกหัด</div>
                  <div className="text-sm text-gray-500">15 นาที</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}