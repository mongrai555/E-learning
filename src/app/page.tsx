"use client";

import React from "react";

export default function Home() {
  const skills = [
    { id: 1, name: "Web Development", icon: "💻" },
    { id: 2, name: "Database", icon: "🗄️" },
    { id: 3, name: "UX/UI Design", icon: "🎨" },
    { id: 4, name: "Software Development", icon: "⚙️" },
    { id: 5, name: "IoT", icon: "🌐" }
  ];

  return (
    <div style={{
      minHeight: 'calc(100vh - 80px)',
      backgroundColor: 'var(--background)',
      padding: '0',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Full width video background section */}
      <div style={{ 
        position: 'relative',
        width: '100%',
        height: '60vh',
        minHeight: '400px',
        overflow: 'hidden'
      }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        >
          <source src="/bg_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Content overlay on top of video */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%'
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '25px',
              lineHeight: '1.2',
              letterSpacing: '-0.5px',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
            }}>
              Website E-learning สำหรับสาขาวิชา<br />
              <span style={{ color: 'var(--primary-light)' }}>วิทยาการคอมพิวเตอร์</span>
            </h1>
            
            <p style={{
              fontSize: '1.3rem',
              color: '#e2e8f0',
              lineHeight: '1.7',
              marginBottom: '35px',
              maxWidth: '75%',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
            }}>
              เรานำหลักสูตรจากทางสาขาวิทยาการคอมพิวเตอร์ของมหาวิทยาลัยแม่โจ้มาให้เรียนรู้แบบ E-learning โดยมีวิดีโอการสอนและควิซที่ถูกทำขึ้นจากอาจารย์ผู้รับผิดชอบของแต่ละรายวิชานั้น
            </p>
            
            <h2 style={{
              fontSize: '1.5rem',
              color: '#ffffff',
              marginBottom: '20px',
              fontWeight: '600'
            }}>
              ทักษะที่คุณจะได้รับ
            </h2>
            
            <div style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}>
              {skills.map((skill) => (
                <button
                  key={skill.id}
                  style={{
                    backgroundColor: 'transparent',
                    borderRadius: '6px',
                    padding: '10px 15px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid var(--primary-light)',
                    color: 'var(--primary-light)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.1)';
                    e.currentTarget.style.boxShadow = '0 0 8px rgba(96, 165, 250, 0.8)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content area below the video section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: 'var(--foreground)',
          marginBottom: '30px',
          textAlign: 'left'
        }}>
          คอร์สที่แนะนำและจำเป็นต่อการทำงาน Github!
        </h2>
        
        {/* Two-column layout for GitHub content */}
        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'flex-start',
          marginBottom: '50px'
        }}>
          {/* Left column - Text content */}
          <div style={{
            flex: '1'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--foreground)',
              marginBottom: '15px'
            }}>
              Github คืออะไร?
            </h3>
            
            <p style={{
              color: 'var(--foreground)',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              GitHub เป็นแพลตฟอร์มสำหรับใช้พัฒนา ซอฟต์แวร์แบบออนไลน์ ที่นักพัฒนาสามารถใช้ในการจัดเก็บโค้ด, ติดตามความเปลี่ยนแปลง และสร้างโครงการเพื่อพัฒนาซอฟต์แวร์ร่วมกับนักพัฒนารายอื่นได้
              โดยคุณสมบัติการทำงานของ GitHub ทำให้นักพัฒนาสามารถแบ่งปันโค้ดที่ตนเองเขียนขึ้น ให้นักพัฒนารายอื่น ๆ ที่สนใจสามารถเข้ามาช่วยกันพัฒนาต่อได้ ซึ่งเป็นลักษณะการทำงานของโครงการแบบ เปิดเผยซอร์สโค้ด (Open-Source) นอกจากนี้ ตัว GitHub ยังถูกใช้เป็นโซเชียลเน็ตเวิร์คที่บรรดานักพัฒนาใช้ในการสร้างเครือข่ายเพื่อร่วมมือทำงานกับนักพัฒนาที่สนใจ และนำเสนอผลงานบนโลกออนไลน์
            </p>
          </div>
          
          {/* Right column - Video */}
          <div style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  display: 'block'
                }}
              >
                <source src="/github_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        
        {/* New section with profile video on left and information on right */}
        <div style={{
          padding: '30px 0',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          position: 'relative'
        }}>
          {/* Glowing effect overlay */}
          <div style={{
            position: 'absolute',
            top: '-10px',
            left: '-10px',
            right: '-10px',
            bottom: '-10px',
            borderRadius: '8px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            opacity: '0.7',
            zIndex: '-1',
            animation: 'pulseGlow 2s ease-in-out infinite alternate'
          }}></div>
          
          {/* Content container with two-column layout */}
          <div style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'flex-start',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            {/* Left column - Profile video */}
            <div style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'flex-start'
            }}>
              <div style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    display: 'block'
                  }}
                >
                  <source src="/jojo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Right column - Profile information */}
            <div style={{
              flex: '1'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--foreground)',
                marginBottom: '5px'
              }}>
                ประธานหลักสูตร อ. อรรถวิท ชังคมานนท์
              </h3>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1.2rem',
                fontWeight: '600',
                margin: '0 0 20px 0'
              }}>
                Attawit Changkamanon
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                fontWeight: '600',
                margin: '15px 0 5px 0'
              }}>
                การศึกษา
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                margin: '0 0 15px 0'
              }}>
                วท.ม.(วิทยาการคอมพิวเตอร์) มหาวิทยาลัยเชียงใหม่
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                fontWeight: '600',
                margin: '15px 0 5px 0'
              }}>
                การติดต่อ
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                margin: '0 0 5px 0'
              }}>
                053-873890-93 ต่อ 13
              </p>
              
              <p style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                margin: '0'
              }}>
                attawit@mju.ac.th
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulseGlow {
          0% {
            opacity: 0.4;
            transform: scale(1);
          }
          100% {
            opacity: 0.8;
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
}