import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Medal, Award, Shield, MapPin } from 'lucide-react';
import { useEligibility } from '../context/EligibilityContext';

const SpecialStatus = () => {
  const navigate = useNavigate();
  const { state, updateSpecialStatus } = useEligibility();
  
  const [formData, setFormData] = useState({
    hasPurpleHeart: state.specialStatus.hasPurpleHeart || false,
    hasMedalOfHonor: state.specialStatus.hasMedalOfHonor || false,
    isFormerPOW: state.specialStatus.isFormerPOW || false,
    hasCombatZoneDeployment: state.specialStatus.hasCombatZoneDeployment || false
  });

  const handleCheckboxChange = (field, checked) => {
    setFormData(prev => ({ ...prev, [field]: checked }));
  };

  const handleContinue = () => {
    updateSpecialStatus(formData);
    navigate('/eligibility-summary');
  };

  const handleBack = () => {
    navigate('/health-disability');
  };

  const specialStatuses = [
    {
      id: 'hasPurpleHeart',
      title: 'Purple Heart Recipient',
      description: 'Have you been awarded the Purple Heart medal?',
      icon: Medal,
      benefits: [
        'Priority enrollment in VA health care',
        'Expedited disability claim processing',
        'Access to specialized programs',
        'Enhanced eligibility for certain benefits'
      ],
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      iconColor: 'text-purple-600'
    },
    {
      id: 'hasMedalOfHonor',
      title: 'Medal of Honor Recipient',
      description: 'Have you been awarded the Medal of Honor?',
      icon: Award,
      benefits: [
        'Comprehensive VA health care coverage',
        'Special monthly compensation',
        'Priority access to all VA services',
        'Enhanced burial benefits'
      ],
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
      iconColor: 'text-yellow-600'
    },
    {
      id: 'isFormerPOW',
      title: 'Former Prisoner of War',
      description: 'Were you ever held as a prisoner of war during your military service?',
      icon: Shield,
      benefits: [
        'Presumptive conditions for certain diseases',
        'Priority enrollment in VA health care',
        'Special compensation programs',
        'Expedited claims processing'
      ],
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      iconColor: 'text-red-600'
    },
    {
      id: 'hasCombatZoneDeployment',
      title: 'Combat Zone Deployment',
      description: 'Have you been deployed to a combat zone or served in hostile territory?',
      icon: MapPin,
      benefits: [
        'Enhanced eligibility for VA health care',
        'Combat-related special compensation',
        'Presumptive conditions for certain exposures',
        'Priority access to mental health services'
      ],
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-va-dark-blue">
          Step 3: Special Military Status
        </h1>
        <p className="text-lg text-gray-600">
          Some military honors and circumstances provide enhanced VA benefits eligibility.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {specialStatuses.map((status) => {
          const IconComponent = status.icon;
          const isChecked = formData[status.id];
          
          return (
            <div 
              key={status.id} 
              className={`bg-white rounded-lg shadow-md p-6 border-2 transition-all duration-200 ${
                isChecked 
                  ? `${status.borderColor} ${status.bgColor}` 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isChecked 
                        ? `bg-white ${status.iconColor}` 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <IconComponent className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center space-x-3">
                      <label 
                        htmlFor={status.id}
                        className="text-lg font-semibold text-va-dark-blue cursor-pointer"
                      >
                        {status.title}
                      </label>
                      <input
                        id={status.id}
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => handleCheckboxChange(status.id, e.target.checked)}
                        className="w-5 h-5 text-va-blue border-2 border-gray-300 rounded focus:ring-2 focus:ring-va-blue focus:border-va-blue"
                        aria-describedby={`${status.id}-description`}
                      />
                    </div>
                    
                    <p 
                      id={`${status.id}-description`}
                      className="text-gray-700"
                    >
                      {status.description}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Enhanced benefits may include:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {status.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-va-blue mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-va-blue rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">i</span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-va-dark-blue">Additional Notes</h3>
            <div className="text-gray-700 space-y-2 text-sm">
              <p>
                <strong>Combat Zone Deployments:</strong> This includes deployments to Iraq, Afghanistan, 
                and other designated combat zones or areas of hostility. Even shorter deployments may qualify.
              </p>
              <p>
                <strong>Documentation:</strong> You may need to provide documentation for some of these statuses 
                during the formal application process, but it's not required for this eligibility check.
              </p>
              <p>
                <strong>Not Sure?</strong> If you're uncertain about any of these categories, 
                you can check the box and the VA will help verify during your application.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-va-dark-blue mb-3">
          Don't see your situation listed?
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          There are many other factors that can affect VA benefits eligibility, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <ul className="space-y-1">
            <li>• Agent Orange exposure</li>
            <li>• Gulf War syndrome</li>
            <li>• Burn pit exposure</li>
            <li>• Military Sexual Trauma (MST)</li>
          </ul>
          <ul className="space-y-1">
            <li>• Blue Water Navy service</li>
            <li>• Camp Lejeune water contamination</li>
            <li>• Radiation exposure</li>
            <li>• Other environmental exposures</li>
          </ul>
        </div>
        <p className="text-gray-700 text-sm mt-4">
          These will be explored during the formal VA application process.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-6">
        <button
          onClick={handleBack}
          className="btn-secondary inline-flex items-center space-x-2"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          <span>Back</span>
        </button>

        <button
          onClick={handleContinue}
          className="btn-primary inline-flex items-center space-x-2"
        >
          <span>View Eligibility Summary</span>
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default SpecialStatus; 