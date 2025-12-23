import React from 'react';

const Navbar = () => {
  const styles = {
    header: {
      backgroundColor: '#dc2626',
      color: 'white',
      padding: '20px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    headerLeft: {
      display: 'flex',
      flexDirection: 'column'
    },
    headerTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      margin: '0'
    },
    headerSubtitle: {
      fontSize: '14px',
      fontStyle: 'italic',
      margin: '5px 0 0 0'
    },
    headerRight: {
      fontSize: '36px',
      fontWeight: '300',
      letterSpacing: '4px'
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