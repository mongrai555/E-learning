'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { curriculum, CourseContent, Tool } from '@/data/curriculum';

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = curriculum.find(c => c.id === params.id);

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

  return (
    <div className="courses-container">
      <div className="course-detail-wrapper">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/courses" className="hover:text-blue-600">
              รายวิชาทั้งหมด
            </Link>
            <span>/</span>
            <span className="current">{course.title}</span>
          </div>
        </nav>

        {/* Course Hero Section */}
        <div className="card-xl mb-8">
          {/* Hero content with improved design */}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6 font-medium">
              {course.titleEn}
            </h2>
          </div>
        </div>

        {/* Tools and Technologies Section */}
        <div className="card p-8 mb-8">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              เครื่องมือและเทคโนโลยีที่ใช้
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
                  <p className="text-sm text-gray-600">{tool.description}</p>
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
                    <p className="text-gray-600">คลิกเพื่อเริ่มเรียน</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Parts */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                บทเรียน
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
                          Part {partNumber}
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
                จุดประสงค์การเรียนรู้
              </h3>
              <ul className="space-y-3">
                {course.objectives.map((objective, index) => (
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
                หัวข้อที่เรียน
              </h3>
              <div className="grid-1 sm-grid-2 gap-3">
                {course.topics.map((topic, index) => (
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
                ข้อมูลวิชา
              </h3>
              <div className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    ปีการศึกษา
                  </dt>
                  <dd className="text-sm text-gray-900">
                    ปีที่ {course.year}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    เทอม
                  </dt>
                  <dd className="text-sm text-gray-900">
                    เทอม {course.semester}
                  </dd>
                </div>
                {course.prerequisites && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 mb-1">
                      วิชาที่ต้องเรียนก่อน
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
                ← กลับไปรายวิชาทั้งหมด
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}