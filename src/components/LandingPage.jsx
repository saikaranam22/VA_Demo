import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Heart, Users, Clock } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartCheck = () => {
    navigate('/service-history');
  };

  const features = [
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your information is protected and confidential'
    },
    {
      icon: Clock,
      title: 'Quick & Easy',
      description: 'Takes only 5-10 minutes to complete'
    },
    {
      icon: Heart,
      title: 'Comprehensive',
      description: 'Covers health care, disability, and special benefits'
    },
    {
      icon: Users,
      title: 'Accessible',
      description: 'Designed for all Veterans and service members'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-va-dark-blue">
            Check Your VA Benefits Eligibility
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find out what VA benefits you may be eligible for based on your service history, 
            health conditions, and special circumstances. Get personalized guidance in just a few minutes.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <button
            onClick={handleStartCheck}
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
            aria-describedby="start-description"
          >
            <span>Start Your Eligibility Check</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
          <p id="start-description" className="mt-3 text-sm text-gray-500">
            This assessment takes approximately 5-10 minutes to complete
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-va-blue rounded-full flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-va-dark-blue">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Information Section */}
      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-va-dark-blue text-center">
          What You'll Need to Know
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-va-blue">Service Information</h3>
            <ul className="space-y-1 text-gray-600">
              <li>• Branch of service</li>
              <li>• Years of service</li>
              <li>• Active duty status</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-va-blue">Health Status</h3>
            <ul className="space-y-1 text-gray-600">
              <li>• Service-related injuries</li>
              <li>• PTSD or mental health conditions</li>
              <li>• Disability ratings</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-va-blue">Special Circumstances</h3>
            <ul className="space-y-1 text-gray-600">
              <li>• Combat decorations</li>
              <li>• POW status</li>
              <li>• Combat zone deployments</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-va-blue rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">i</span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-va-dark-blue">Important Information</h3>
            <div className="text-gray-700 space-y-2">
              <p>
                This tool provides an estimate of your potential eligibility for VA benefits. 
                Final eligibility determination will be made by the VA during the formal application process.
              </p>
              <p>
                <strong>Privacy Notice:</strong> This is a demonstration tool. In a real application, 
                all information would be securely encrypted and protected according to federal privacy laws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 