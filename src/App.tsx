import React, { useState, useEffect } from 'react';
import { Bot, Building2, CheckCircle, Moon, Sun } from 'lucide-react';
import Registration from './components/Registration';
import OrganizationSetup from './components/OrganizationSetup';
import ChatbotIntegration from './components/ChatbotIntegration';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';

function App() {
  const [step, setStep] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    companyName: '',
    companyUrl: '',
    companyDescription: ''
  });

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  const steps = [
    { number: 1, title: 'Registration', icon: <Bot className="w-6 h-6" /> },
    { number: 2, title: 'Organization Setup', icon: <Building2 className="w-6 h-6" /> },
    { number: 3, title: 'Integration', icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const handleStepComplete = (stepData: any) => {
    setUserData(prev => ({ ...prev, ...stepData }));
    setStep(prev => prev + 1);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100'}`}>
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              BeyondChats Setup
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Set up your intelligent chatbot in minutes
            </p>
          </div>

          <ProgressBar steps={steps} currentStep={step} />

          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-500">
            {step === 1 && <Registration onComplete={handleStepComplete} />}
            {step === 2 && <OrganizationSetup onComplete={handleStepComplete} />}
            {step === 3 && <ChatbotIntegration onComplete={handleStepComplete} userData={userData} />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;