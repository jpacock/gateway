
import { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import

import Navbar from './components/Navbar';
import { AuthProvider } from './contexts/AuthContext';

import 'daisyui/dist/full.css';
import './tailwind-styles.css';

function App() {
  return (
    <AuthProvider>
      <StrictMode>
        <AppContent />
      </StrictMode>
    </AuthProvider>
  );
}

const  AppContent = () => {
  
  return (
    <Router>
      <Navbar />
      <div className="bg-base-content/10 mb-10 h-px"></div>
      <div className="p-6">
        <Routes>
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center space-y-5 px-4">
                <h1 className="text-5xl font-bold">Hi, I'm Jordan</h1>
                <p className="py-6">Welcome to the place where I create solutions for my everyday life.</p>
                <div className="flex flex-col space-y-4">
                  <a href="/jordan-acock-resume-2024-09.pdf" className="btn btn-outline btn-neutral w-96">Resume</a>
                  <a href="https://www.linkedin.com/in/jordan-acock-8ba91152/" className="btn btn-outline btn-neutral w-96">LinkedIn</a>
                  <a href="https://jpacock.com/sprinkler" className="btn btn-outline btn-neutral w-96">Sprinklers</a>
                  <a href="https://jpacock.com/octopi" className="btn btn-outline btn-neutral w-96">OctoPrint</a>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App
