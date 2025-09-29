import Link from 'next/link';
import { CourseContent } from '@/data/curriculum';

interface CourseCardProps {
  course: CourseContent;
}

export default function CourseCard({ course }: CourseCardProps) {
  const getYearColor = (year: number) => {
    switch (year) {
      case 1:
        return 'badge-year-1';
      case 2:
        return 'badge-year-2';
      default:
        return 'badge-year-default';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'badge-difficulty-beginner';
      case 'intermediate':
        return 'badge-difficulty-intermediate';
      case 'advanced':
        return 'badge-difficulty-advanced';
      default:
        return 'badge-year-default';
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
            ปี {course.year}
          </span>
          <span className="badge badge-semester">
            เทอม {course.semester}
          </span>
        </div>
        
        {/* Difficulty badge */}
        <div className="badge-container-tr">
          <span className={`badge badge-xs ${getDifficultyColor(course.difficulty)}`}>
            {getDifficultyText(course.difficulty)}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="course-card-content">
        {/* Course Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
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
              <span key={index} className="badge-tool">
                {tool.name}
              </span>
            ))}
            {course.tools.length > 4 && (
              <span className="badge-tool bg-gray-200 text-gray-600">
                +{course.tools.length - 4} อื่นๆ
              </span>
            )}
          </div>
        </div>

        {/* Course Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          {/* ลบข้อมูล duration และ credits ออก */}
        </div>

        {/* Action Button */}
        <Link href={`/courses/${course.id}`}>
          <button className="w-full btn-gradient focus-ring">
            <span className="flex items-center justify-center">
              <svg className="icon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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