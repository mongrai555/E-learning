"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div style={{
      position: 'relative',
      display: 'inline-block',
      width: '80px',
      height: '36px',
      backgroundColor: language === 'th' ? '#3b82f6' : '#6b7280',
      borderRadius: '18px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      userSelect: 'none'
    }} onClick={() => setLanguage(language === 'th' ? 'en' : 'th')}>
      
      {/* Background track */}
      <div style={{
        position: 'absolute',
        top: '2px',
        left: '2px',
        right: '2px',
        bottom: '2px',
        borderRadius: '16px',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        overflow: 'hidden'
      }}>
        
        {/* Language labels */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 8px',
          fontSize: '10px',
          fontWeight: '600'
        }}>
          <span style={{
            color: language === 'th' ? '#ffffff' : 'rgba(255,255,255,0.5)',
            transition: 'color 0.3s ease',
            textShadow: language === 'th' ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'
          }}>
            TH
          </span>
          <span style={{
            color: language === 'en' ? '#ffffff' : 'rgba(255,255,255,0.5)',
            transition: 'color 0.3s ease',
            textShadow: language === 'en' ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'
          }}>
            EN
          </span>
        </div>
        
        {/* Slider thumb */}
        <div style={{
          position: 'absolute',
          top: '4px',
          left: language === 'th' ? '4px' : 'calc(100% - 28px)',
          width: '24px',
          height: '24px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px'
        }}>
          {/* Flag emoji or indicator */}
          <span style={{
            fontSize: '12px',
            lineHeight: '1'
          }}>
            {language === 'th' ? '🇹🇭' : '🇺🇸'}
          </span>
        </div>
      </div>
      
      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        top: '-2px',
        left: '-2px',
        right: '-2px',
        bottom: '-2px',
        borderRadius: '20px',
        background: `linear-gradient(45deg, ${language === 'th' ? '#3b82f6' : '#6b7280'}, ${language === 'th' ? '#1d4ed8' : '#4b5563'})`,
        opacity: '0.3',
        filter: 'blur(4px)',
        zIndex: '-1'
      }} />
      
    </div>
  );
};

export default LanguageSwitch;