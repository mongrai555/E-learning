"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Login() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 80px)',
      backgroundColor: 'var(--background)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        backgroundColor: 'var(--card-background)',
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        border: '1px solid var(--border)'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: 'var(--foreground)',
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          {t('login.title')}
        </h1>
        
        <p style={{
          fontSize: '1rem',
          color: 'var(--foreground)',
          marginBottom: '30px',
          textAlign: 'center',
          opacity: 0.7
        }}>
          {t('login.description')}
        </p>
        
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: '500',
              color: 'var(--foreground)',
              marginBottom: '8px'
            }}>
              {t('login.email')}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '1rem',
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                boxSizing: 'border-box'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: '500',
              color: 'var(--foreground)',
              marginBottom: '8px'
            }}>
              {t('login.password')}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '1rem',
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                boxSizing: 'border-box'
              }}
            />
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6';
            }}
          >
            {t('login.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}