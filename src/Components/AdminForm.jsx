import React, { useState } from 'react';

const AdminForm = ({ onSave, selected, clear }) => {
  const [formData, setFormData] = useState({
    fullName: selected?.fullName || '',
    email: selected?.email || '',
    department: selected?.department || 'Information Technology',
    accessLevel: selected?.accessLevel || 'Standard User'
  });

  React.useEffect(() => {
    if (selected) {
      setFormData(selected);
    }
  }, [selected]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.fullName.trim()) {
      alert('Please enter administrator full name');
      return;
    }
    
    if (onSave) {
      onSave(formData);
    }
    
    setFormData({
      fullName: '',
      email: '',
      department: 'Information Technology',
      accessLevel: 'Standard User'
    });
    
    if (clear) clear();
    alert('Data submitted successfully!');
  };

  const styles = {
    contentBox: {
      backgroundColor: '#c5c9d0',
      padding: '30px',
      borderRadius: '0',
      marginBottom: '30px'
    },
    pageTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#3d4451',
      marginBottom: '30px',
      marginTop: '0'
    },
    formGroup: {
      marginBottom: '25px'
    },
    label: {
      display: 'block',
      color: '#3d4451',
      fontWeight: '600',
      marginBottom: '10px',
      fontSize: '14px'
    },
    input: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#2d3748',
      color: '#9ca3af',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      boxSizing: 'border-box',
      outline: 'none'
    },
    select: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#2d3748',
      color: '#d1d5db',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      boxSizing: 'border-box',
      outline: 'none',
      cursor: 'pointer',
      appearance: 'none',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 16px center',
      backgroundSize: '16px',
      paddingRight: '45px'
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginTop: '30px'
    },
    downloadButton: {
      width: '52px',
      height: '52px',
      backgroundColor: '#6b7280',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      fontSize: '20px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.2s',
      flexShrink: 0
    },
    submitButton: {
      flex: '1',
      backgroundColor: '#dc2626',
      color: 'white',
      fontWeight: 'bold',
      padding: '16px 30px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    }
  };

  return (
    <div style={styles.contentBox}>
      <h2 style={styles.pageTitle}>Admin Management</h2>

      <div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter administrator's full name"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            style={styles.select}
          >
            <option>Information Technology</option>
            <option>Human Resources</option>
            <option>Finance</option>
            <option>Operations</option>
            <option>Customer Service</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Access Level</label>
          <select
            name="accessLevel"
            value={formData.accessLevel}
            onChange={handleInputChange}
            style={styles.select}
          >
            <option>Standard User</option>
            <option>Administrator</option>
            <option>Super Admin</option>
            <option>Read Only</option>
          </select>
        </div>

        <div style={styles.buttonContainer}>
          <button
            style={styles.downloadButton}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#4b5563'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#6b7280'}
          >
            ↓
          </button>
          <button
            onClick={handleSubmit}
            style={styles.submitButton}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#b91c1c'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#dc2626'}
          >
            Submit Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;