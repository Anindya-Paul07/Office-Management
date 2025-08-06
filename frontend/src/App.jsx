import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';

import Dashboard from './pages/dashboard';
import Tasks from './pages/task';
import Attendance from './pages/attendance';
import Salary from './pages/salary';
import Employees from './pages/employee';
// import Reports from './pages/Reports';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/salary" element={<Salary />} />
            <Route path="/employees" element={<Employees />} />
            {/* <Route path="/reports" element={<Reports />} /> */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
