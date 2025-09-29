import Link from 'next/link';
import { CourseContent } from '@/data/curriculum';

interface CourseCardProps {
  course: CourseContent;
}

export default function CourseCard({ course }: CourseCardProps) {
  const getYearColor = (year: number) => {
    switch (year) {
      case 1:
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 2:
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'intermediate':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'advanced':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'เริ่มต้น';
      case 'intermediate':
        return 'ปานกลาง';
      case 'advanced':
        return 'สูง';
      default:
        return 'ไม่ระบุ';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Course Image */}
      <div className="h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
        {course.image ? (
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-6xl font-bold opacity-80">
              {course.title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
        
        {/* Course badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${getYearColor(course.year)}`}>
            ปี {course.year}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200 backdrop-blur-sm">
            เทอม {course.semester}
          </span>
        </div>
        
        {/* Difficulty badge */}
        <div className="absolute top-4 right-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getDifficultyColor(course.difficulty)}`}>
            {getDifficultyText(course.difficulty)}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Course Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
          {course.title}
        </h3>
        
        {/* English Title */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-1 font-medium">
          {course.titleEn}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-3 leading-relaxed">
          {course.description}
        </p>

        {/* Tools Preview */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-700 mb-2">
            เครื่องมือที่ใช้:
          </p>
          <div className="flex flex-wrap gap-1">
            {course.tools.slice(0, 4).map((tool, index) => (
              <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                {tool.name}
              </span>
            ))}
            {course.tools.length > 4 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-200 text-gray-600">
                +{course.tools.length - 4} อื่นๆ
              </span>
            )}
          </div>
        </div>

        {/* Course Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {course.duration}
          </span>
          {course.credits && (
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {course.credits} หน่วยกิต
            </span>
          )}
        </div>

        {/* Action Button */}
        <Link href={`/courses/${course.id}`}>
          <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              เริ่มเรียน
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}