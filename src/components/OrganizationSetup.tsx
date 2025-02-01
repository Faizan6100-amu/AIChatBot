import React, { useState } from 'react';
import { Globe, Building, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

const OrganizationSetup = ({ onComplete }: { onComplete: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyUrl: '',
    companyDescription: ''
  });

  const [scrapingStatus, setScrapingStatus] = useState({
    total: 0,
    scraped: 0,
    pages: []
  });

  // Simulate website scraping
  const handleUrlChange = async (url: string) => {
    setFormData(prev => ({ ...prev, companyUrl: url }));
    if (url.includes('.')) {
      setScrapingStatus({
        total: 5,
        scraped: 2,
        pages: [
          { url: '/home', status: 'completed' },
          { url: '/about', status: 'completed' },
          { url: '/products', status: 'pending' },
          { url: '/contact', status: 'pending' },
          { url: '/blog', status: 'pending' }
        ]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Organization Setup</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Company Name"
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              required
            />
          </div>

          <div className="relative">
            <Globe className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="url"
              placeholder="Company Website URL"
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.companyUrl}
              onChange={(e) => handleUrlChange(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <textarea
              placeholder="Company Description"
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.companyDescription}
              onChange={(e) => setFormData({ ...formData, companyDescription: e.target.value })}
              rows={4}
              required
            />
          </div>
        </div>

        {scrapingStatus.total > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Website Scanning Progress</h3>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Scanning pages...</span>
                <span className="text-sm font-medium text-gray-800">
                  {scrapingStatus.scraped}/{scrapingStatus.total} pages
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(scrapingStatus.scraped / scrapingStatus.total) * 100}%` }}
                />
              </div>
            </div>
            <div className="space-y-2">
              {scrapingStatus.pages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 flex items-center gap-2">
                    {page.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                    )}
                    {page.url}
                  </span>
                  <span className="text-sm text-gray-500">
                    {page.status === 'completed' ? 'Scanned' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:opacity-90 transition-all duration-200"
        >
          Continue to Integration
        </button>
      </form>
    </div>
  );
}

export default OrganizationSetup;