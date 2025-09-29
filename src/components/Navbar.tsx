"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{
      backgroundColor: '#2563eb',
      color: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px'
        }}>
          {/* Logo */}
          <div>
            <Link href="/" style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#dbeafe'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
              🎓 E-Learning
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div style={{
            display: window.innerWidth >= 768 ? 'block' : 'none'
          }}>
            <div style={{
              marginLeft: '40px',
              display: 'flex',
              alignItems: 'baseline',
              gap: '16px'
            }}>
              <Link href="/" style={{
                color: '#dbeafe',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.backgroundColor = '#1d4ed8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#dbeafe';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                🏠 หน้าหลัก
              </Link>
              <Link href="/courses" style={{
                color: '#dbeafe',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.backgroundColor = '#1d4ed8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#dbeafe';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                📚 คอร์สเรียน
              </Link>
              <Link href="/admin" style={{
                color: '#dbeafe',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.backgroundColor = '#1d4ed8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#dbeafe';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                ⚙️ ผู้ดูแลระบบ
              </Link>
              <Link href="/login" style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#60a5fa'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}>
                🔑 เข้าสู่ระบบ
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div style={{
            display: window.innerWidth < 768 ? 'block' : 'none'
          }}>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                color: 'white',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#dbeafe'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              <svg style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div style={{
          display: window.innerWidth < 768 ? 'block' : 'none'
        }}>
          <div style={{
            padding: '8px',
            paddingTop: '8px',
            paddingBottom: '12px',
            backgroundColor: '#1d4ed8'
          }}>
            <Link 
              href="/" 
              style={{
                display: 'block',
                color: '#dbeafe',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.2s',
                marginBottom: '4px'
              }}
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.backgroundColor = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#dbeafe';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              🏠 หน้าหลัก
            </Link>
            <Link 
              href="/courses" 
              style={{
                display: 'block',
                color: '#dbeafe',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.2s',
                marginBottom: '4px'
              }}
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.backgroundColor = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#dbeafe';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              📚 คอร์สเรียน
            </Link>
            <Link 
              href="/admin" 
              style={{
                display: 'block',
                color: '#dbeafe',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.2s',
                marginBottom: '8px'
              }}
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.backgroundColor = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#dbeafe';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              ⚙️ ผู้ดูแลระบบ
            </Link>
            <Link 
              href="/login" 
              style={{
                display: 'block',
                backgroundColor: '#3b82f6',
                color: 'white',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.2s',
                marginTop: '8px'
              }}
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#60a5fa'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
              🔑 เข้าสู่ระบบ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;