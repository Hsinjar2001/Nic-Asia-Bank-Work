import React, { useState } from 'react';

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const styles = {
    sidebar: {
      width: '320px',
      backgroundColor: '#c5c9d0',
      minHeight: '100vh',
      flexShrink: 0
    },
    welcomeBanner: {
      backgroundColor: '#dc2626',
      color: 'white',
      padding: '20px',
      margin: '20px',
      borderRadius: '4px'
    },
    welcomeText: {
      fontSize: '18px',
      fontWeight: '600',
      margin: '5px 0'
    },
    nav: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    navItem: {
      padding: '14px 20px',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      fontSize: '14px',
      fontWeight: '500',
      color: '#3d4451'
    },
    navItemActive: {
      padding: '14px 20px',
      cursor: 'pointer',
      backgroundColor: '#dc2626',
      color: 'white',
      fontWeight: '600',
      fontSize: '14px'
    },
    messages: {
      marginTop: '40px',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      color: '#4b5563',
      fontSize: '14px'
    },
    messageDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#3b82f6',
      borderRadius: '50%',
      marginRight: '10px'
    }
  };

  return (
    <aside style={styles.sidebar}>
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
          >
            BILL PAYMENT
          </li>
          <li style={styles.navItemActive}>
            ADMIN MANAGEMENT
          </li>
          <li 
            style={{
              ...styles.navItem,
              backgroundColor: hoveredItem === 'reports' ? '#b0b5bd' : 'transparent'
            }}
            onMouseEnter={() => setHoveredItem('reports')}
            onMouseLeave={() => setHoveredItem(null)}
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
  );
};

export default Sidebar;