import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import AdminForm from "../Components/AdminForm";
import AdminTable from "../Components/AdminTable";

const AdminDashboard = () => {
  const [admins, setAdmins] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

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

  const styles = {
    layout: {
      display: 'flex',
      minHeight: 'calc(100vh - 80px)'
    },
    mainContent: {
      flex: 1,
      backgroundColor: '#c5c9d0',
      overflowY: 'auto'
    }
  };

  return (
    <div>
      <Navbar />
      <div style={styles.layout}>
        <Sidebar />
        <main style={styles.mainContent}>
          <AdminForm
            onSave={saveAdmin}
            selected={editIndex !== null ? admins[editIndex] : null}
            clear={() => setEditIndex(null)}
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