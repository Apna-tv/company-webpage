import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

// Layout components
import Header from './components/Header';

// Pages
import HomePage from './pages/HomePage';
import CompanyRegister from './pages/CompanyRegister';
import CompanyDashboard from './pages/CompanyDashboard';
import PostJob from './pages/PostJob';

const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
  color: #333;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/register" element={<CompanyRegister />} />
        <Route path="/company/dashboard" element={<CompanyDashboard />} />
        <Route path="/company/post-job" element={<PostJob />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
