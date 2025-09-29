"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

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
            {t('nav.appName')}
          </Link>
        </div>
        
        {/* Desktop Navigation - always visible on desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="md-flex">
          <div style={{ display: 'flex' }}>
            <Link href="/" style={{ color: '#bfdbfe', textDecoration: 'none', margin: '0 1rem', fontWeight: '500' }}>
              {t('nav.home')}
            </Link>
            <Link href="/courses" style={{ color: '#bfdbfe', textDecoration: 'none', margin: '0 1rem', fontWeight: '500' }}>
              {t('nav.courses')}
            </Link>
            <Link href="/admin" style={{ color: '#bfdbfe', textDecoration: 'none', margin: '0 1rem', fontWeight: '500' }}>
              {t('nav.admin')}
            </Link>
            <Link href="/login" style={{ color: '#bfdbfe', textDecoration: 'none', margin: '0 1rem', fontWeight: '500' }}>
              {t('nav.login')}
            </Link>
          </div>
          <LanguageSwitch />
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
            {t('nav.home')}
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
            {t('nav.courses')}
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
            {t('nav.admin')}
          </Link>
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
            {t('nav.login')}
          </Link>
          <div style={{ padding: '0.5rem 0' }}>
            <LanguageSwitch />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;