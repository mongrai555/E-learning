"use client";

import React from "react";

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1e293b',
      color: '#94a3b8',
      padding: '20px',
      textAlign: 'center',
      fontSize: '0.9rem',
      borderTop: '1px solid #334155'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <p>Copyright © 2025 Computer Science MJU</p>
        <p style={{ marginTop: '10px', fontSize: '0.8rem' }}>
          Technologies: Next.js 15.5.4, React 19.1.0, TypeScript, CSS3 | Developed with Qoder IDE 0.2.4
        </p>
      </div>
    </footer>
  );
};

export default Footer;