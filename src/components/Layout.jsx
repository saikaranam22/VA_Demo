import React from 'react';
import { useLocation } from 'react-router-dom';
import { Flag, Phone, ExternalLink } from 'lucide-react';
import ProgressIndicator from './ProgressIndicator';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-va-dark-blue text-white" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Flag className="h-8 w-8" aria-hidden="true" />
              <div>
                <h1 className="text-xl font-bold">U.S. Department of Veterans Affairs</h1>
                <p className="text-sm text-blue-200">Benefits Eligibility Checker</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="tel:1-800-827-1000" 
                className="flex items-center space-x-1 text-sm hover:text-blue-200 transition-colors focus-outline"
                aria-label="Call VA Benefits Hotline at 1-800-827-1000"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>1-800-827-1000</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Indicator */}
      {!isLandingPage && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProgressIndicator />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 py-8" role="main">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-va-gray text-white mt-auto" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">VA Benefits Hotline:</span>
                  <br />
                  <a href="tel:1-800-827-1000" className="hover:text-blue-200 focus-outline">
                    1-800-827-1000
                  </a>
                </p>
                <p>
                  <span className="font-medium">TTY:</span>
                  <br />
                  <a href="tel:711" className="hover:text-blue-200 focus-outline">
                    711
                  </a>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <a 
                  href="https://www.va.gov/health-care/apply/" 
                  className="flex items-center space-x-1 hover:text-blue-200 focus-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Apply for VA Health Care</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
                <a 
                  href="https://www.va.gov/disability/" 
                  className="flex items-center space-x-1 hover:text-blue-200 focus-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Disability Benefits</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
                <a 
                  href="https://www.va.gov/find-locations/" 
                  className="flex items-center space-x-1 hover:text-blue-200 focus-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Find VA Locations</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Accessibility</h3>
              <div className="space-y-2 text-sm">
                <p>This tool is designed to be accessible to all Veterans.</p>
                <p>If you need assistance, please call our hotline.</p>
                <p className="text-xs text-gray-300 mt-4">
                  * This is a demo tool for educational purposes
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 U.S. Department of Veterans Affairs | This is a demonstration website</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 