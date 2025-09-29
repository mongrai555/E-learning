'use client';

import { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import { curriculum, CourseContent } from '@/data/curriculum';

export default function CoursesPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  // กรองคอร์สตามเงื่อนไขที่เลือก
  const filteredCourses = curriculum.filter(course => {
    if (selectedYear && course.year !== selectedYear) return false;
    if (selectedSemester && course.semester !== selectedSemester) return false;
    if (selectedDifficulty && course.difficulty !== selectedDifficulty) return false;
    return true;
  });

  // จัดกลุ่มคอร์สตามปีและเทอม
  const groupedCourses = filteredCourses.reduce((acc, course) => {
    const key = `ปี ${course.year} เทอม ${course.semester}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(course);
    return acc;
  }, {} as Record<string, CourseContent[]>);

  const clearFilters = () => {
    setSelectedYear(null);
    setSelectedSemester(null);
    setSelectedDifficulty(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            หลักสูตรวิทยาการคอมพิวเตอร์
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            เรียนรู้และพัฒนาทักษะด้านเทคโนโลยีสารสนเทศและการเขียนโปรแกรม 
            พร้อมเครื่องมือที่ทันสมัยและใช้งานจริงในอุตสาหกรรม
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🎓 เลือกปีการศึกษา
              </label>
              <select
                value={selectedYear || ''}
                onChange={(e) => setSelectedYear(e.target.value ? Number(e.target.value) : null)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                <option value="">ทุกปี</option>
                <option value="1">ปี 1</option>
                <option value="2">ปี 2</option>
              </select>
            </div>
            
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📅 เลือกเทอม
              </label>
              <select
                value={selectedSemester || ''}
                onChange={(e) => setSelectedSemester(e.target.value ? Number(e.target.value) : null)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                <option value="">ทุกเทอม</option>
                <option value="1">เทอม 1</option>
                <option value="2">เทอม 2</option>
              </select>
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ⚡ ระดับความยาก
              </label>
              <select
                value={selectedDifficulty || ''}
                onChange={(e) => setSelectedDifficulty(e.target.value || null)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                <option value="">ทุกระดับ</option>
                <option value="beginner">เริ่มต้น</option>
                <option value="intermediate">ปานกลาง</option>
                <option value="advanced">สูง</option>
              </select>
            </div>

            {(selectedYear || selectedSemester || selectedDifficulty) && (
              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  🗑️ ล้างตัวกรอง
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Course Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              {filteredCourses.length}
            </div>
            <div className="text-sm text-gray-600">วิชาทั้งหมด</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {filteredCourses.reduce((sum, course) => sum + (course.credits || 0), 0)}
            </div>
            <div className="text-sm text-gray-600">หน่วยกิตรวม</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {filteredCourses.filter(c => c.difficulty === 'beginner').length}
            </div>
            <div className="text-sm text-gray-600">วิชาระดับเริ่มต้น</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {[...new Set(filteredCourses.flatMap(c => c.tools.map(t => t.name)))].length}
            </div>
            <div className="text-sm text-gray-600">เครื่องมือที่ใช้</div>
          </div>
        </div>

        {/* Courses Grid - Grouped by Year and Semester */}
        <div className="space-y-12">
          {Object.entries(groupedCourses)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([groupTitle, courses]) => (
              <div key={groupTitle}>
                <div className="flex items-center mb-8">
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {groupTitle}
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {courses.length} วิชา
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            ))
          }
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ไม่พบรายวิชาที่ตรงกับเงื่อนไขที่เลือก
            </h3>
            <p className="text-gray-500 mb-4">
              ลองเปลี่ยนตัวกรองหรือล้างการกรองทั้งหมด
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200"
            >
              ล้างตัวกรองทั้งหมด
            </button>
          </div>
        )}
      </div>
    </div>
  );
}