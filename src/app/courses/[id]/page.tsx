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
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 2:
        return 'bg-green-50 border-green-200 text-green-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/courses" className="hover:text-blue-600">
              รายวิชาทั้งหมด
            </Link>
            <span>/</span>
            <span className="text-gray-900">{course.title}</span>
          </div>
        </nav>

        {/* Course Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Hero content with improved design */}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6 font-medium">
              {course.titleEn}
            </h2>
            
            {/* Start Learning Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg text-lg">
                <span className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  เริ่มเรียนเลย!
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Tools and Technologies Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              เครื่องมือและเทคโนโลยีที่ใช้
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.tools.map((tool, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 hover:border-indigo-300">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
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

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Objectives */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                จุดประสงค์การเรียนรู้
              </h3>
              <ul className="space-y-3">
                {course.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Topics */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                หัวข้อที่เรียน
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.topics.map((topic, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
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
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Link
                href="/courses"
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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