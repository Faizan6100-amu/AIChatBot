import React, { useState, useEffect } from 'react';
import { Code, Mail, ExternalLink, Share2, Twitter, Linkedin, Facebook, AlertCircle, X } from 'lucide-react';
import Confetti from './Confetti';

interface ChatbotIntegrationProps {
  onComplete: (data: any) => void;
  userData: {
    companyName: string;
    companyUrl: string;
  };
}

const ChatbotIntegration = ({ onComplete, userData }: ChatbotIntegrationProps) => {
  const [integrationStatus, setIntegrationStatus] = useState('pending');
  const [showSuccess, setShowSuccess] = useState(false);
  const [chatbotScript, setChatbotScript] = useState('');
  const [showFeedbackBar, setShowFeedbackBar] = useState(false);

  useEffect(() => {
    const apiKey = btoa(userData.companyName + Date.now()).slice(0, 32);
    
    const code = `<!-- BeyondChats Integration -->
<script>
  window.beyondChatsConfig = {
    apiKey: '${apiKey}',
    theme: 'auto',
    company: '${userData.companyName}',
    domain: '${userData.companyUrl}'
  };
</script>
<script src="https://cdn.beyondchats.com/widget.js" async></script>`;
    
    setChatbotScript(code);
  }, [userData]);

  const handleTestIntegration = () => {
    setIntegrationStatus('testing');
    setTimeout(() => {
      const success = Math.random() > 0.3; 
      if (success) {
        setIntegrationStatus('success');
        setShowSuccess(true);
      } else {
        setIntegrationStatus('failed');
      }
    }, 2000);
  };

  const openTestChatbot = () => {
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${userData.companyName} - Chatbot Test</title>
            <style>
              .feedback-bar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: #4F46E5;
                color: white;
                padding: 12px;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;
                z-index: 1000;
              }
              .feedback-bar button {
                background: white;
                color: #4F46E5;
                border: none;
                padding: 4px 12px;
                border-radius: 4px;
                cursor: pointer;
              }
              body { margin-top: 48px; }
            </style>
            ${chatbotScript}
          </head>
          <body>
            <div class="feedback-bar">
              Chatbot not working as intended? 
              <button onclick="window.location.href='mailto:support@beyondchats.com?subject=Chatbot Feedback - ${userData.companyName}'">
                Share feedback
              </button>
            </div>
            <div style="padding: 20px;">
              <h1>Test Environment for ${userData.companyName}</h1>
              <p>The chatbot should appear in the bottom right corner.</p>
            </div>
          </body>
        </html>
      `);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareOnSocial = (platform: string) => {
    const text = `Just integrated an AI chatbot on my website using BeyondChats! Check it out at ${userData.companyUrl}`;
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(userData.companyUrl)}&summary=${encodeURIComponent(text)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(userData.companyUrl)}`
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto">
      {showSuccess && <Confetti />}
      
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Chatbot Integration</h2>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={openTestChatbot}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-200 dark:bg-gray-700"
          >
            <h3 className="text-lg font-medium mb-2 dark:text-white">Test Chatbot</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Preview your chatbot in action</p>
          </button>

          <button
            onClick={() => setIntegrationStatus('code')}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-200 dark:bg-gray-700"
          >
            <h3 className="text-lg font-medium mb-2 dark:text-white">Integrate Now</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Get the code snippet for your website</p>
          </button>
        </div>

        {integrationStatus === 'code' && (
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium dark:text-white">Installation Code</h3>
                <button
                  onClick={() => copyToClipboard(chatbotScript)}
                  className="text-purple-600 dark:text-purple-400 text-sm hover:text-purple-700 dark:hover:text-purple-300"
                >
                  Copy Code
                </button>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{chatbotScript}</code>
              </pre>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Add this code to the <code>&lt;head&gt;</code> section of your website.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => window.location.href = `mailto:?subject=BeyondChats Integration for ${userData.companyName}&body=${encodeURIComponent(chatbotScript)}`}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <Mail className="w-5 h-5" />
                Email to Developer
              </button>
              <button
                onClick={handleTestIntegration}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <ExternalLink className="w-5 h-5" />
                Test Integration
              </button>
            </div>
          </div>
        )}

        {integrationStatus === 'testing' && (
          <div className="text-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">Testing integration...</p>
          </div>
        )}

        {integrationStatus === 'failed' && (
          <div className="text-center space-y-6 p-8">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-center justify-center gap-2 text-red-700 dark:text-red-400">
                <AlertCircle className="w-5 h-5" />
                <h3 className="text-lg font-medium">Integration Not Detected</h3>
              </div>
              <p className="mt-2 text-sm text-red-600 dark:text-red-300">
                We couldn't detect the chatbot on your website. Please ensure you've added the code correctly and try again.
              </p>
              <div className="mt-4">
                <button
                  onClick={handleTestIntegration}
                  className="bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 px-4 py-2 rounded-lg hover:bg-red-200 dark:hover:bg-red-700"
                >
                  Retry Integration Test
                </button>
              </div>
            </div>
          </div>
        )}

        {integrationStatus === 'success' && (
          <div className="text-center space-y-6 p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Integration Successful! 🎉</h3>
            
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => window.open('/admin', '_blank')}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Explore Admin Panel
              </button>
              <button 
                onClick={() => window.open(`${userData.companyUrl}`, '_blank')}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Start Chatting
              </button>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <button 
                onClick={() => shareOnSocial('twitter')}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => shareOnSocial('linkedin')}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={() => shareOnSocial('facebook')}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatbotIntegration;