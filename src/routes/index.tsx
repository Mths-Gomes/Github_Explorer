import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Repository from '../pages/Repository';
import Dashboard from '../pages/Dashboard';
// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";
// import Route from './Route';

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/repository/:username/:repositoryname"
          element={<Repository />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
