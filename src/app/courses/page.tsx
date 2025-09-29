'use client';
'use client';

import { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import DarkModeToggle from '@/components/DarkModeToggle';
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
    <div className="courses-container">
      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      <div className="courses-wrapper">
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
        <div className="card p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-200">
              <label className="form-label">
                🎓 เลือกปีการศึกษา
              </label>
              <select
                value={selectedYear || ''}
                onChange={(e) => setSelectedYear(e.target.value ? Number(e.target.value) : null)}
                className="form-select"
              >
                <option value="">ทุกปี</option>
                <option value="1">ปี 1</option>
                <option value="2">ปี 2</option>
              </select>
            </div>
            
            <div className="flex-1 min-w-200">
              <label className="form-label">
                📅 เลือกเทอม
              </label>
              <select
                value={selectedSemester || ''}
                onChange={(e) => setSelectedSemester(e.target.value ? Number(e.target.value) : null)}
                className="form-select"
              >
                <option value="">ทุกเทอม</option>
                <option value="1">เทอม 1</option>
                <option value="2">เทอม 2</option>
              </select>
            </div>

            <div className="flex-1 min-w-200">
              <label className="form-label">
                ⚡ ระดับความยาก
              </label>
              <select
                value={selectedDifficulty || ''}
                onChange={(e) => setSelectedDifficulty(e.target.value || null)}
                className="form-select"
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
                  className="btn-filter"
                >
                  🗑️ ล้างตัวกรอง
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Course Statistics */}
        <div className="grid-1 md-grid-4 gap-4 mb-8">
          <div className="stat-card">
            <div className="stat-number text-indigo-600">
              {filteredCourses.length}
            </div>
            <div className="stat-label">วิชาทั้งหมด</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number text-blue-600">
              {filteredCourses.filter(c => c.difficulty === 'beginner').length}
            </div>
            <div className="stat-label">วิชาระดับเริ่มต้น</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number text-purple-600">
              {[...new Set(filteredCourses.flatMap(c => c.tools.map(t => t.name)))].length}
            </div>
            <div className="stat-label">เครื่องมือที่ใช้</div>
          </div>
        </div>

        {/* Courses Grid - Grouped by Year and Semester */}
        <div className="space-y-12">
          {Object.entries(groupedCourses)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([groupTitle, courses]) => (
              <div key={groupTitle}>
                <div className="flex items-center mb-8">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {groupTitle}
                    </h2>
                    <div className="section-divider"></div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {courses.length} วิชา
                  </div>
                </div>
                
                <div className="grid-1 md-grid-2 lg-grid-3 xl-grid-4 gap-6">
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
              className="btn-primary"
            >
              ล้างตัวกรองทั้งหมด
            </button>
          </div>
        )}
      </div>
    </div>
  );
}