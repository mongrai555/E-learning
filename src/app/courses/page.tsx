"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Courses() {
  const { t } = useLanguage();

  return (
    <div style={{
      minHeight: 'calc(100vh - 80px)',
      backgroundColor: 'var(--background)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'var(--foreground)',
          marginBottom: '20px'
        }}>
          {t('courses.title')}
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--foreground)',
          marginBottom: '40px',
          opacity: 0.8
        }}>
          {t('courses.description')}
        </p>
        
        {/* Course grid placeholder */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '40px'
        }}>
          {[1, 2, 3, 4, 5, 6].map((course) => (
            <div key={course} style={{
              backgroundColor: 'var(--card-background)',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              border: '1px solid var(--border)'
            }}>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: 'var(--foreground)',
                marginBottom: '10px'
              }}>
                Course {course}
              </h3>
              <p style={{
                color: 'var(--foreground)',
                opacity: 0.7,
                marginBottom: '15px'
              }}>
                Course description placeholder
              </p>
              <button style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}