"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  // Thai flag colors: white, blue (modified from red, white, blue)
  const thaiColors = {
    primary: '#FFFFFF', // White (changed from Red)
    secondary: '#241F4B', // Navy Blue
    accent: '#241F4B' // Navy Blue
  };

  // British flag colors: navy blue, white (removed red)
  const britishColors = {
    primary: '#012169', // Navy Blue
    secondary: '#FFFFFF', // White
    accent: '#012169' // Navy Blue (changed from Red)
  };

  const currentColors = language === 'th' ? thaiColors : britishColors;

  return (
    <div style={{
      position: 'relative',
      display: 'inline-block',
      width: '80px',
      height: '36px',
      backgroundColor: currentColors.primary,
      borderRadius: '18px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: `2px solid ${currentColors.accent}`,
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
            color: language === 'th' ? currentColors.secondary : 'rgba(0,0,0,0.5)',
            transition: 'color 0.3s ease',
            textShadow: language === 'th' ? '0 1px 2px rgba(255,255,255,0.2)' : 'none'
          }}>
            TH
          </span>
          <span style={{
            color: language === 'en' ? currentColors.secondary : 'rgba(255,255,255,0.5)',
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
          backgroundColor: '#3b82f6', // Blue switch
          borderRadius: '12px',
          transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: `0 2px 4px ${currentColors.accent}40, 0 1px 2px ${currentColors.accent}20`,
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
            {language === 'th' ? 'TH' : 'EN'}
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
        background: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.accent})`,
        opacity: '0.3',
        filter: 'blur(4px)',
        zIndex: '-1'
      }} />
      
    </div>
  );
};

export default LanguageSwitch;