import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import AdminForm from "../Components/AdminForm";
import AdminTable from "../Components/AdminTable";

const AdminDashboard = () => {
  const [admins, setAdmins] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const saveAdmin = (admin) => {
    if (editIndex !== null) {
      const updated = [...admins];
      updated[editIndex] = admin;
      setAdmins(updated);
      setEditIndex(null);
    } else {
      setAdmins([...admins, admin]);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#e5e7eb',
      margin: 0,
      padding: 0
    },
    layout: {
      display: 'flex',
      minHeight: 'calc(100vh - 70px)',
      position: 'relative'
    },
    mainContent: {
      flex: 1,
      backgroundColor: '#c5c9d0',
      overflowY: 'auto',
      width: '100%',
      minWidth: 0
    }
  };

  return (
    <div style={styles.container}>
      <Navbar onToggleSidebar={toggleSidebar} />
      <div style={styles.layout}>
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        <main style={styles.mainContent}>
          <AdminForm
            onSave={saveAdmin}
            selected={editIndex !== null ? admins[editIndex] : null}
            clear={() => setEditIndex(null)}
            onToggleSidebar={toggleSidebar}
            isMobile={isMobile}
          />
          <AdminTable
            admins={admins}
            onEdit={setEditIndex}
            onDelete={(i) => setAdmins(admins.filter((_, x) => x !== i))}
          />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;