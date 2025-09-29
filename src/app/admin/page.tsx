"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Admin() {
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
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'var(--foreground)',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          {t('admin.title')}
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--foreground)',
          marginBottom: '40px',
          textAlign: 'center',
          opacity: 0.8
        }}>
          {t('admin.description')}
        </p>
        
        {/* Admin dashboard placeholder */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '40px'
        }}>
          <div style={{
            backgroundColor: 'var(--card-background)',
            borderRadius: '8px',
            padding: '30px',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            border: '1px solid var(--border)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--foreground)',
              marginBottom: '10px'
            }}>
              📚 Courses
            </h3>
            <p style={{
              color: 'var(--foreground)',
              opacity: 0.7,
              marginBottom: '20px'
            }}>
              Manage courses and content
            </p>
            <button style={{
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}>
              Manage
            </button>
          </div>
          
          <div style={{
            backgroundColor: 'var(--card-background)',
            borderRadius: '8px',
            padding: '30px',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            border: '1px solid var(--border)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--foreground)',
              marginBottom: '10px'
            }}>
              👥 Users
            </h3>
            <p style={{
              color: 'var(--foreground)',
              opacity: 0.7,
              marginBottom: '20px'
            }}>
              Manage user accounts
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
              Manage
            </button>
          </div>
          
          <div style={{
            backgroundColor: 'var(--card-background)',
            borderRadius: '8px',
            padding: '30px',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            border: '1px solid var(--border)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--foreground)',
              marginBottom: '10px'
            }}>
              📊 Analytics
            </h3>
            <p style={{
              color: 'var(--foreground)',
              opacity: 0.7,
              marginBottom: '20px'
            }}>
              View system analytics
            </p>
            <button style={{
              backgroundColor: '#f59e0b',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}>
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}