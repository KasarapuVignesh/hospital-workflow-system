import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSupabaseClient } from '@supabase/supabase-js';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const supabase = useSupabaseClient();

  const user = supabase.auth.user();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default App;