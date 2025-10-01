"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from '@/contexts/LanguageContext';

export default function LoginPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set the login status and redirect to home page
    localStorage.setItem("isLoggedIn", "true");
    
    // Redirect to home page
    router.push("/");
    router.refresh();
  };

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src="/BGlogin.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Lighter overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Reduced darkness from 0.8 to 0.5
        zIndex: -1
      }}></div>
      
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Changed from 0.95 to 0.7 for more transparency
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        padding: '40px',
        width: '100%',
        maxWidth: '450px',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#2563eb',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 4px 6px rgba(37, 99, 235, 0.3)'
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" style={{ color: 'white' }}>
              <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2" />
              <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '8px'
          }}>
            {t('login.title')}
          </h1>
          <p style={{
            color: '#6b7280',
            fontSize: '1rem'
          }}>
            {t('login.description')}
          </p>
        </div>
        
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '24px' }}>
            <label htmlFor="email" style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#374151',
              fontSize: '0.9rem'
            }}>
              {t('login.email')}
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9ca3af'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8L10.89 13.26C11.2185 13.479 11.6018 13.5979 12 13.5979C12.3982 13.5979 12.7815 13.479 13.11 13.26L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M19 7.5V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 14px 14px 42px',
                  borderRadius: '10px',
                  border: '1px solid #d1d5db',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f9fafb',
                  color: '#1f2937',
                  transition: 'all 0.2s ease'
                }}
                placeholder="mjuxxxxxx@mju.ac.th"
                onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>
          </div>
          
          <div style={{ marginBottom: '30px' }}>
            <label htmlFor="password" style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '500',
              color: '#374151',
              fontSize: '0.9rem'
            }}>
              {t('login.password')}
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#9ca3af'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 14px 14px 42px',
                  borderRadius: '10px',
                  border: '1px solid #d1d5db',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f9fafb',
                  color: '#1f2937',
                  transition: 'all 0.2s ease'
                }}
                placeholder="mju@******"
                onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
            </div>
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '16px',
              borderRadius: '10px',
              border: 'none',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(37, 99, 235, 0.3)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1d4ed8';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 8px rgba(37, 99, 235, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(37, 99, 235, 0.3)';
            }}
          >
            {t('login.submit')}
          </button>
        </form>
        
        <div style={{
          marginTop: '24px',
          textAlign: 'center',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '24px'
        }}>
          <a href="#" style={{
            color: '#2563eb',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.9rem',
            transition: 'color 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#1d4ed8'}
          onMouseOut={(e) => e.currentTarget.style.color = '#2563eb'}>
            {t('login.forgotPassword')}
          </a>
          <p style={{
            color: '#6b7280',
            fontSize: '0.9rem',
            marginTop: '12px'
          }}>
            {t('login.noAccount')}{' '}
            <a href="#" style={{
              color: '#2563eb',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'color 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#1d4ed8'}
            onMouseOut={(e) => e.currentTarget.style.color = '#2563eb'}>
              {t('login.register')}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}