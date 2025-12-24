import { useState, useEffect } from "react";



const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    header: {
      backgroundColor: '#dc2626',
      color: 'white',
      padding: isMobile ? '15px 20px' : '20px 30px',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: isMobile ? '10px' : '0'
    },
    headerLeft: {
      display: 'flex',
      flexDirection: 'column'
    },
    headerTitle: {
      fontSize: isMobile ? '24px' : '32px',
      fontWeight: 'bold',
      margin: '0'
    },
    headerSubtitle: {
      fontSize: isMobile ? '12px' : '14px',
      fontStyle: 'italic',
      margin: '5px 0 0 0'
    },
    headerRight: {
      fontSize: isMobile ? '20px' : '36px',
      fontWeight: '300',
      letterSpacing: isMobile ? '2px' : '4px',
      alignSelf: isMobile ? 'flex-start' : 'auto'
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.headerLeft}>
        <h1 style={styles.headerTitle}>NIC ASIA</h1>
        <p style={styles.headerSubtitle}>Enjoy Banking Services at a Touch</p>
      </div>
      <div style={styles.headerRight}>
        i TOUCH
      </div>
    </header>
  );
};

export default Navbar;