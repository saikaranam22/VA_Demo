import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import ServiceHistory from './components/ServiceHistory';
import HealthDisability from './components/HealthDisability';
import SpecialStatus from './components/SpecialStatus';
import EligibilitySummary from './components/EligibilitySummary';
import { EligibilityProvider } from './context/EligibilityContext';

function App() {
  return (
    <EligibilityProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/service-history" element={<ServiceHistory />} />
            <Route path="/health-disability" element={<HealthDisability />} />
            <Route path="/special-status" element={<SpecialStatus />} />
            <Route path="/eligibility-summary" element={<EligibilitySummary />} />
          </Routes>
        </Layout>
      </Router>
    </EligibilityProvider>
  );
}

export default App;
