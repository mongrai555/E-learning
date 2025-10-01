'use client';

import { useState, useEffect } from 'react';
import CourseCard from '@/components/CourseCard';
import DarkModeToggle from '@/components/DarkModeToggle';
import { curriculum, CourseContent } from '@/data/curriculum';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CoursesPage() {
  const { language } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // กรองคอร์สตามเงื่อนไขที่เลือก
  const filteredCourses = curriculum.filter(course => {
    if (selectedYear && course.year !== selectedYear) return false;
    if (selectedSemester && course.semester !== selectedSemester) return false;
    if (selectedDifficulty && course.difficulty !== selectedDifficulty) return false;
    return true;
  });

  // จัดกลุ่มคอร์สตามปีและเทอม
  const groupedCourses = filteredCourses.reduce((acc, course) => {
    const key = language === 'th' ? `ปี ${course.year} เทอม ${course.semester}` : `Year ${course.year} Semester ${course.semester}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(course);
    return acc;
  }, {} as Record<string, CourseContent[]>);

  const clearFilters = () => {
    setSelectedYear(null);
    setSelectedSemester(null);
    setSelectedDifficulty(null);
  };

  // Translation functions
  const getCoursesTitle = () => {
    return language === 'th' ? 'คอร์สเรียน' : 'Courses';
  };

  const getCoursesDescription = () => {
    return language === 'th' ? 'เลือกคอร์สที่คุณสนใจและเริ่มเรียนรู้ทันที' : 'Choose the course you\'re interested in and start learning immediately';
  };

  const getFilterYearText = () => {
    return language === 'th' ? 'เลือกปีการศึกษา' : 'Select Academic Year';
  };

  const getFilterSemesterText = () => {
    return language === 'th' ? 'เลือกเทอม' : 'Select Semester';
  };

  const getFilterDifficultyText = () => {
    return language === 'th' ? 'ระดับความยาก' : 'Difficulty Level';
  };

  const getAllYearsText = () => {
    return language === 'th' ? 'ทุกปี' : 'All Years';
  };

  const getAllSemestersText = () => {
    return language === 'th' ? 'ทุกเทอม' : 'All Semesters';
  };

  const getAllDifficultiesText = () => {
    return language === 'th' ? 'ทุกระดับ' : 'All Levels';
  };

  const getYear1Text = () => {
    return language === 'th' ? 'ปี 1' : 'Year 1';
  };

  const getYear2Text = () => {
    return language === 'th' ? 'ปี 2' : 'Year 2';
  };

  const getSemester1Text = () => {
    return language === 'th' ? 'เทอม 1' : 'Semester 1';
  };

  const getSemester2Text = () => {
    return language === 'th' ? 'เทอม 2' : 'Semester 2';
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

  const getClearFiltersText = () => {
    return language === 'th' ? 'ล้างตัวกรอง' : 'Clear Filters';
  };

  const getTotalSubjectsText = () => {
    return language === 'th' ? 'วิชาทั้งหมด' : 'Total Subjects';
  };

  const getBeginnerSubjectsText = () => {
    return language === 'th' ? 'วิชาระดับเริ่มต้น' : 'Beginner Subjects';
  };

  const getToolsUsedText = () => {
    return language === 'th' ? 'เครื่องมือที่ใช้' : 'Tools Used';
  };

  const getNoResultsTitle = () => {
    return language === 'th' ? 'ไม่พบรายวิชาที่ตรงกับเงื่อนไขที่เลือก' : 'No subjects found matching selected criteria';
  };

  const getNoResultsDescription = () => {
    return language === 'th' ? 'ลองเปลี่ยนตัวกรองหรือล้างการกรองทั้งหมด' : 'Try changing filters or clearing all filters';
  };

  const getClearAllFiltersText = () => {
    return language === 'th' ? 'ล้างตัวกรองทั้งหมด' : 'Clear All Filters';
  };

  const getSubjectsText = (count: number) => {
    return language === 'th' ? `${count} วิชา` : `${count} subjects`;
  };

  // Don't render the full page until mounted to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div className="courses-container">
        <div className="courses-wrapper">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {getCoursesTitle()}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {getCoursesDescription()}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="courses-container">
      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      <div className="courses-wrapper">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {getCoursesTitle()}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getCoursesDescription()}
          </p>
        </div>

        {/* Filters */}
        <div className="card p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-200">
              <label className="form-label">
                🎓 {getFilterYearText()}
              </label>
              <select
                value={selectedYear || ''}
                onChange={(e) => setSelectedYear(e.target.value ? Number(e.target.value) : null)}
                className="form-select"
              >
                <option value="">{getAllYearsText()}</option>
                <option value="1">{getYear1Text()}</option>
                <option value="2">{getYear2Text()}</option>
              </select>
            </div>
            
            <div className="flex-1 min-w-200">
              <label className="form-label">
                📅 {getFilterSemesterText()}
              </label>
              <select
                value={selectedSemester || ''}
                onChange={(e) => setSelectedSemester(e.target.value ? Number(e.target.value) : null)}
                className="form-select"
              >
                <option value="">{getAllSemestersText()}</option>
                <option value="1">{getSemester1Text()}</option>
                <option value="2">{getSemester2Text()}</option>
              </select>
            </div>

            <div className="flex-1 min-w-200">
              <label className="form-label">
                ⚡ {getFilterDifficultyText()}
              </label>
              <select
                value={selectedDifficulty || ''}
                onChange={(e) => setSelectedDifficulty(e.target.value || null)}
                className="form-select"
              >
                <option value="">{getAllDifficultiesText()}</option>
                <option value="beginner">{getBeginnerText()}</option>
                <option value="intermediate">{getIntermediateText()}</option>
                <option value="advanced">{getAdvancedText()}</option>
              </select>
            </div>

            {(selectedYear || selectedSemester || selectedDifficulty) && (
              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="btn-filter"
                >
                  🗑️ {getClearFiltersText()}
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
            <div className="stat-label">{getTotalSubjectsText()}</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number text-blue-600">
              {filteredCourses.filter(c => c.difficulty === 'beginner').length}
            </div>
            <div className="stat-label">{getBeginnerSubjectsText()}</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number text-purple-600">
              {[...new Set(filteredCourses.flatMap(c => c.tools.map(t => t.name)))].length}
            </div>
            <div className="stat-label">{getToolsUsedText()}</div>
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
                    {getSubjectsText(courses.length)}
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
              {getNoResultsTitle()}
            </h3>
            <p className="text-gray-500 mb-4">
              {getNoResultsDescription()}
            </p>
            <button
              onClick={clearFilters}
              className="btn-primary"
            >
              {getClearAllFiltersText()}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}