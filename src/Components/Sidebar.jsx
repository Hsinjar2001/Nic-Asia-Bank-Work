import React, { useState, useEffect } from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    overlay: {
      display: isMobile && isOpen ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999
    },
    sidebar: {
      width: isMobile ? '280px' : '320px',
      backgroundColor: '#c5c9d0',
      minHeight: '100vh',
      flexShrink: 0,
      position: isMobile ? 'fixed' : 'relative',  // ✅ KEY FIX
      left: isMobile ? (isOpen ? '0' : '-280px') : '0',
      top: 0,
      zIndex: 1000,
      transition: 'left 0.3s ease-in-out',
      overflowY: 'auto'
    },
    welcomeBanner: {
      backgroundColor: '#dc2626',
      color: 'white',
      padding: '15px',
      margin: '15px',
      borderRadius: '4px'
    },
    welcomeText: {
      fontSize: '16px',
      fontWeight: '600',
      margin: '5px 0'
    },
    nav: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    navItem: {
      padding: '12px 20px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      fontSize: '13px',
      fontWeight: '500',
      color: '#3d4451'
    },
    navItemActive: {
      padding: '12px 20px',
      cursor: 'pointer',
      backgroundColor: '#dc2626',
      color: 'white',
      fontWeight: '600',
      fontSize: '13px'
    },
    messages: {
      marginTop: '30px',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      color: '#4b5563',
      fontSize: '13px',
      marginBottom: '20px'
    },
    messageDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#3b82f6',
      borderRadius: '50%',
      marginRight: '10px'
    },
    closeButton: {
      display: isMobile ? 'block' : 'none',
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '24px',
      color: '#3d4451',
      cursor: 'pointer',
      padding: '5px'
    }
  };

  return (
    <>
      <div style={styles.overlay} onClick={onClose}></div>
      <aside style={styles.sidebar}>
        <button style={styles.closeButton} onClick={onClose}>×</button>
        <div style={styles.welcomeBanner}>
          <p style={styles.welcomeText}>Welcome, Rajnish Kumar</p>
          <p style={styles.welcomeText}>Saphi</p>
        </div>

        <nav>
          <ul style={styles.nav}>
            <li 
              style={{
                ...styles.navItem,
                backgroundColor: hoveredItem === 'ac' ? '#b0b5bd' : 'transparent'
              }}
              onMouseEnter={() => setHoveredItem('ac')}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={isMobile ? onClose : undefined}
            >
              AC STATEMENT
            </li>
            <li 
              style={{
                ...styles.navItem,
                backgroundColor: hoveredItem === 'fund' ? '#b0b5bd' : 'transparent'
              }}
              onMouseEnter={() => setHoveredItem('fund')}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={isMobile ? onClose : undefined}
            >
              FUND TRANSFER
            </li>
            <li 
              style={{
                ...styles.navItem,
                backgroundColor: hoveredItem === 'bill' ? '#b0b5bd' : 'transparent'
              }}
              onMouseEnter={() => setHoveredItem('bill')}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={isMobile ? onClose : undefined}
            >
              BILL PAYMENT
            </li>
            <li style={styles.navItemActive} onClick={isMobile ? onClose : undefined}>
              ADMIN MANAGEMENT
            </li>
            <li 
              style={{
                ...styles.navItem,
                backgroundColor: hoveredItem === 'reports' ? '#b0b5bd' : 'transparent'
              }}
              onMouseEnter={() => setHoveredItem('reports')}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={isMobile ? onClose : undefined}
            >
              REPORTS
            </li>
          </ul>
        </nav>

        <div style={styles.messages}>
          <span style={styles.messageDot}></span>
          <span>Messages (0)</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;