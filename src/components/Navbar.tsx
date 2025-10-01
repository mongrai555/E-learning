"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Check login status on component mount
  useEffect(() => {
    // Mock authentication status using localStorage
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  const handleLogout = () => {
    // Mock logout - just clear the login status
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    
    // Redirect to home page if not already there
    if (pathname !== "/") {
      router.push("/");
    }
  };

  return (
    <nav style={{ 
      backgroundColor: '#2563eb', 
      color: 'white', 
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
            E-learning
          </Link>
        </div>
        
        {/* Desktop Navigation - always visible on desktop */}
        <div style={{ display: 'flex' }} className="md-flex">
          <Link href="/" style={{ color: '#bfdbfe', textDecoration: 'none', margin: '0 1rem', fontWeight: '500' }}>
            หน้าหลัก
          </Link>
          <Link href="/courses" style={{ color: '#bfdbfe', textDecoration: 'none', margin: '0 1rem', fontWeight: '500' }}>
            คอร์สเรียน
          </Link>
          <Link href="/developer" style={{ color: '#bfdbfe', textDecoration: 'none', margin: '0 1rem', fontWeight: '500' }}>
            ทีมงาน
          </Link>
          <Link href="/admin" style={{ color: '#bfdbfe', textDecoration: 'none', margin: '0 1rem', fontWeight: '500' }}>
            ผู้ดูแลระบบ
          </Link>
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: '#bfdbfe', 
                margin: '0 1rem', 
                fontWeight: '500',
                cursor: 'pointer',
                fontSize: 'inherit',
                fontFamily: 'inherit'
              }}
            >
              ออกจากระบบ
            </button>
          ) : (
            <Link href="/login" style={{ color: '#bfdbfe', textDecoration: 'none', margin: '0 1rem', fontWeight: '500' }}>
              เข้าสู่ระบบ
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button - only visible on mobile */}
        <div style={{ display: 'none' }} className="md-hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'white', 
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            ☰
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation - only visible when hamburger is clicked */}
      {isMenuOpen && (
        <div style={{ 
          backgroundColor: '#1d4ed8', 
          padding: '1rem',
          display: 'none'
        }} className="md-hidden">
          <Link 
            href="/" 
            style={{ 
              display: 'block', 
              color: 'white', 
              textDecoration: 'none', 
              padding: '0.5rem 0',
              fontWeight: '500'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            หน้าหลัก
          </Link>
          <Link 
            href="/courses" 
            style={{ 
              display: 'block', 
              color: 'white', 
              textDecoration: 'none', 
              padding: '0.5rem 0',
              fontWeight: '500'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            คอร์สเรียน
          </Link>
          <Link 
            href="/developer" 
            style={{ 
              display: 'block', 
              color: 'white', 
              textDecoration: 'none', 
              padding: '0.5rem 0',
              fontWeight: '500'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            ทีมงาน
          </Link>
          <Link 
            href="/admin" 
            style={{ 
              display: 'block', 
              color: 'white', 
              textDecoration: 'none', 
              padding: '0.5rem 0',
              fontWeight: '500'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            ผู้ดูแลระบบ
          </Link>
          {isLoggedIn ? (
            <button 
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              style={{ 
                display: 'block', 
                background: 'none', 
                border: 'none', 
                color: 'white', 
                textDecoration: 'none', 
                padding: '0.5rem 0',
                fontWeight: '500',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
                fontSize: 'inherit',
                fontFamily: 'inherit'
              }}
            >
              ออกจากระบบ
            </button>
          ) : (
            <Link 
              href="/login" 
              style={{ 
                display: 'block', 
                color: 'white', 
                textDecoration: 'none', 
                padding: '0.5rem 0',
                fontWeight: '500'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              เข้าสู่ระบบ
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;