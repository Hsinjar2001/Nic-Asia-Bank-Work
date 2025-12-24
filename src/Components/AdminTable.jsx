import React, { useState, useEffect } from 'react';
const AdminTable = ({ admins, onEdit, onDelete }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    tableContainer: {
      backgroundColor: '#c5c9d0',
      padding: isMobile ? '20px 15px' : '30px',
      borderRadius: '0',
      overflowX: 'auto'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'white',
      minWidth: isMobile ? '600px' : 'auto'
    },
    th: {
      backgroundColor: '#dc2626',
      color: 'white',
      padding: isMobile ? '10px 8px' : '12px',
      textAlign: 'left',
      fontWeight: '600',
      fontSize: isMobile ? '12px' : '14px'
    },
    td: {
      padding: isMobile ? '10px 8px' : '12px',
      borderBottom: '1px solid #e5e7eb',
      fontSize: isMobile ? '12px' : '14px'
    },
    button: {
      padding: isMobile ? '5px 10px' : '6px 12px',
      margin: isMobile ? '2px' : '0 5px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: isMobile ? '12px' : '14px',
      fontWeight: '500'
    },
    editButton: {
      backgroundColor: '#3b82f6',
      color: 'white'
    },
    deleteButton: {
      backgroundColor: '#ef4444',
      color: 'white'
    },
    noData: {
      textAlign: 'center',
      padding: isMobile ? '30px' : '40px',
      color: '#6b7280',
      fontSize: isMobile ? '14px' : '16px'
    }
  };

  if (admins.length === 0) {
    return (
      <div style={styles.tableContainer}>
        <div style={styles.noData}>No administrators added yet</div>
      </div>
    );
  }

  return (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Full Name</th>
            <th style={styles.th}>Email Address</th>
            <th style={styles.th}>Department</th>
            <th style={styles.th}>Access Level</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, index) => (
            <tr key={index}>
              <td style={styles.td}>{admin.fullName}</td>
              <td style={styles.td}>{admin.email}</td>
              <td style={styles.td}>{admin.department}</td>
              <td style={styles.td}>{admin.accessLevel}</td>
              <td style={styles.td}>
                <button
                  style={{...styles.button, ...styles.editButton}}
                  onClick={() => onEdit(index)}
                >
                  Edit
                </button>
                <button
                  style={{...styles.button, ...styles.deleteButton}}
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;