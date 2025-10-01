'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { language } = useLanguage();

  const getNotFoundTitle = () => {
    return language === 'th' ? 'ไม่พบหน้านี้' : 'Page Not Found';
  };

  const getNotFoundDescription = () => {
    return language === 'th' 
      ? 'ขออภัย ไม่พบหน้าที่คุณค้นหา' 
      : 'Sorry, the page you are looking for could not be found.';
  };

  const getBackToHomeText = () => {
    return language === 'th' ? 'กลับไปหน้าหลัก' : 'Back to Home';
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'var(--card-background)',
        border: '1px solid var(--border)'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: 'var(--primary)'
        }}>
          404
        </h1>
        
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '600',
          marginBottom: '1rem',
          color: 'var(--foreground)'
        }}>
          {getNotFoundTitle()}
        </h2>
        
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          color: 'var(--foreground)',
          lineHeight: '1.6'
        }}>
          {getNotFoundDescription()}
        </p>
        
        <Link href="/" style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: 'var(--primary)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: '500',
          transition: 'background-color 0.2s',
          border: 'none',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--primary-light)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--primary)';
        }}
        >
          {getBackToHomeText()}
        </Link>
      </div>
    </div>
  );
}