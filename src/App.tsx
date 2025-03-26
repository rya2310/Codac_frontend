import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CodeEditor from './pages/CodeEditor';
import Interview from './pages/Interview';
import GroupChat from './pages/GroupChat';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/editor" element={<CodeEditor />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/chat" element={<GroupChat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;