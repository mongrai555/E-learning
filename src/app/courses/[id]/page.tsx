'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { curriculum, CourseContent, Tool } from '@/data/curriculum';
import DarkModeToggle from '@/components/DarkModeToggle';
import { useLanguage } from '@/contexts/LanguageContext';

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = curriculum.find(c => c.id === params.id);
  const { t, language } = useLanguage();

  if (!course) {
    notFound();
  }

  const getYearColorClass = (year: number) => {
    switch (year) {
      case 1:
        return 'badge-year-1';
      case 2:
        return 'badge-year-2';
      default:
        return 'badge-year-default';
    }
  };

  const getSemesterText = () => {
    return language === 'th' ? `เทอม ${course.semester}` : `Semester ${course.semester}`;
  };

  const getYearText = () => {
    return language === 'th' ? `ปีที่ ${course.year}` : `Year ${course.year}`;
  };

  const getToolsAndTechnologiesText = () => {
    return language === 'th' ? 'เครื่องมือและเทคโนโลยีที่ใช้' : 'Tools and Technologies Used';
  };

  const getCourseContentText = () => {
    return language === 'th' ? 'เนื้อหาวิชา' : 'Course Content';
  };

  const getLearningObjectivesText = () => {
    return language === 'th' ? 'จุดประสงค์การเรียนรู้' : 'Learning Objectives';
  };

  const getCourseTopicsText = () => {
    return language === 'th' ? 'หัวข้อที่เรียน' : 'Course Topics';
  };

  const getCourseInfoText = () => {
    return language === 'th' ? 'ข้อมูลวิชา' : 'Course Information';
  };

  const getAcademicYearText = () => {
    return language === 'th' ? 'ปีการศึกษา' : 'Academic Year';
  };

  const getSemesterInfoText = () => {
    return language === 'th' ? 'เทอม' : 'Semester';
  };

  const getPrerequisitesText = () => {
    return language === 'th' ? 'วิชาที่ต้องเรียนก่อน' : 'Prerequisites';
  };

  const getAllCoursesText = () => {
    return language === 'th' ? 'รายวิชาทั้งหมด' : 'All Courses';
  };

  const getBackToAllCoursesText = () => {
    return language === 'th' ? '← กลับไปรายวิชาทั้งหมด' : '← Back to All Courses';
  };

  const getVideoSectionText = () => {
    return language === 'th' ? 'บทเรียน' : 'Lessons';
  };

  const getClickToStartText = () => {
    return language === 'th' ? 'คลิกเพื่อเริ่มเรียน' : 'Click to start learning';
  };

  const getPartText = (partNumber: number) => {
    return language === 'th' ? `Part ${partNumber}` : `Part ${partNumber}`;
  };

  return (
    <div className="courses-container">
      <div className="course-detail-wrapper">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/courses" className="hover:text-blue-600">
              {getAllCoursesText()}
            </Link>
            <span>/</span>
            <span className="current">{language === 'th' ? course.title : course.titleEn}</span>
          </div>
        </nav>

        {/* Course Hero Section */}
        <div className="card-xl mb-8">
          {/* Hero content with improved design */}
          <div className="p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Course Image */}
              {course.image && (
                <div className="lg:w-1/3">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 lg:h-56 object-cover"
                    />
                  </div>
                </div>
              )}
              
              {/* Course Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {language === 'th' ? course.title : course.titleEn}
                </h1>
                <h2 className="text-2xl text-gray-600 mb-6 font-medium">
                  {language === 'th' ? course.titleEn : course.title}
                </h2>
                
                {/* Course Description */}
                <p className="text-gray-700 text-lg leading-relaxed">
                  {language === 'th' ? course.fullDescription : course.fullDescriptionEn}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools and Technologies Section */}
        <div className="card p-8 mb-8">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {getToolsAndTechnologiesText()}
            </h3>
          </div>
          <div className="grid-1 sm-grid-2 lg-grid-3 gap-4">
            {course.tools.map((tool, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover-shadow hover-lift">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                  <span className="badge badge-sm badge-year-1">
                    {tool.type}
                  </span>
                </div>
                {tool.description && (
                  <p className="text-sm text-gray-600">{language === 'th' ? tool.description : tool.descriptionEn || tool.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="card p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video Player */}
            <div className="space-y-4">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">{getClickToStartText()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Parts */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {getVideoSectionText()}
              </h4>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((partNumber) => (
                  <div key={partNumber} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                          {partNumber}
                        </div>
                        <span className="font-medium text-gray-900">
                          {getPartText(partNumber)}
                        </span>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="course-main-grid gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Learning Objectives */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {getLearningObjectivesText()}
              </h3>
              <ul className="space-y-3">
                {(language === 'th' ? course.objectives : course.objectivesEn).map((objective, index) => (
                  <li key={index} className="objective-item">
                    <span className="objective-number">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Topics */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {getCourseTopicsText()}
              </h3>
              <div className="grid-1 sm-grid-2 gap-3">
                {(language === 'th' ? course.topics : course.topicsEn).map((topic, index) => (
                  <div key={index} className="topic-item">
                    <span className="topic-dot"></span>
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {getCourseInfoText()}
              </h3>
              <div className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    {getAcademicYearText()}
                  </dt>
                  <dd className="text-sm text-gray-900">
                    {getYearText()}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    {getSemesterInfoText()}
                  </dt>
                  <dd className="text-sm text-gray-900">
                    {getSemesterText()}
                  </dd>
                </div>
                {course.prerequisites && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-1">
                      {getPrerequisitesText()}
                    </dt>
                    <dd className="text-sm text-gray-900">
                      {course.prerequisites.join(', ')}
                    </dd>
                  </div>
                )}
              </div>
            </div>

            {/* Back to Courses */}
            <div className="card p-6">
              <Link
                href="/courses"
                className="btn-secondary w-full focus-ring"
              >
                {getBackToAllCoursesText()}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dark Mode Toggle */}
      <DarkModeToggle />
    </div>
  );
}