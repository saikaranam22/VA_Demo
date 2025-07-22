import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertCircle, ExternalLink, Phone, Calendar, FileText, RotateCcw } from 'lucide-react';
import { useEligibility } from '../context/EligibilityContext';

const EligibilitySummary = () => {
  const navigate = useNavigate();
  const { state, resetForm } = useEligibility();
  
  const handleBack = () => {
    navigate('/special-status');
  };

  const handleStartOver = () => {
    resetForm();
    navigate('/');
  };

  // Calculate eligibility based on responses
  const calculateEligibility = () => {
    const { serviceHistory, healthDisability, specialStatus } = state;
    
    let isEligible = false;
    let eligibilityReasons = [];
    let priorityLevel = 'Standard';
    
    // Basic service eligibility
    if (serviceHistory.activeDutyStatus === 'veteran' || 
        serviceHistory.activeDutyStatus === 'retired' ||
        serviceHistory.activeDutyStatus === 'active-duty') {
      isEligible = true;
      eligibilityReasons.push('Qualified military service');
    }
    
    // Enhanced eligibility factors
    if (healthDisability.hasServiceConnectedDisability) {
      isEligible = true;
      priorityLevel = 'High Priority';
      eligibilityReasons.push('Service-connected disability');
    }
    
    if (specialStatus.hasPurpleHeart || specialStatus.hasMedalOfHonor) {
      isEligible = true;
      priorityLevel = 'Highest Priority';
      eligibilityReasons.push('Combat decoration recipient');
    }
    
    if (specialStatus.isFormerPOW) {
      isEligible = true;
      priorityLevel = 'Highest Priority';
      eligibilityReasons.push('Former Prisoner of War');
    }
    
    if (healthDisability.hasInjury || healthDisability.hasPTSD) {
      isEligible = true;
      eligibilityReasons.push('Service-related health condition');
    }
    
    if (specialStatus.hasCombatZoneDeployment) {
      isEligible = true;
      eligibilityReasons.push('Combat zone deployment');
    }
    
    return { isEligible, eligibilityReasons, priorityLevel };
  };

  const { isEligible, eligibilityReasons, priorityLevel } = calculateEligibility();

  const nextSteps = [
    {
      title: 'Apply for VA Health Care',
      description: 'Complete your formal application online or at a VA facility',
      icon: FileText,
      link: 'https://www.va.gov/health-care/apply/',
      primary: true
    },
    {
      title: 'Find VA Locations',
      description: 'Locate the nearest VA medical center or clinic',
      icon: ExternalLink,
      link: 'https://www.va.gov/find-locations/'
    },
    {
      title: 'Schedule an Appointment',
      description: 'Book your first appointment with a VA healthcare provider',
      icon: Calendar,
      link: 'https://www.va.gov/health-care/schedule-view-va-appointments/'
    },
    {
      title: 'Call VA Benefits Hotline',
      description: 'Speak with a VA representative for personalized assistance',
      icon: Phone,
      link: 'tel:1-800-827-1000'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-va-dark-blue">
          Step 4: Your Eligibility Summary
        </h1>
        <p className="text-lg text-gray-600">
          Based on your responses, here's what we found about your VA benefits eligibility.
        </p>
      </div>

      {/* Eligibility Status Card */}
      <div className={`rounded-lg shadow-lg p-8 border-2 ${
        isEligible 
          ? 'bg-green-50 border-green-300' 
          : 'bg-yellow-50 border-yellow-300'
      }`}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {isEligible ? (
              <CheckCircle className="w-12 h-12 text-green-600" />
            ) : (
              <AlertCircle className="w-12 h-12 text-yellow-600" />
            )}
          </div>
          <div className="space-y-4">
            <div>
              <h2 className={`text-2xl font-bold ${
                isEligible ? 'text-green-800' : 'text-yellow-800'
              }`}>
                {isEligible ? 'You\'re Likely Eligible for VA Benefits!' : 'You May Be Eligible for VA Benefits'}
              </h2>
              <p className={`text-lg ${
                isEligible ? 'text-green-700' : 'text-yellow-700'
              }`}>
                {isEligible 
                  ? `Priority Level: ${priorityLevel}`
                  : 'Additional information may be needed to determine full eligibility'
                }
              </p>
            </div>
            
            {eligibilityReasons.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Based on:</h3>
                <ul className="space-y-1">
                  {eligibilityReasons.map((reason, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Benefits Summary */}
      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <h3 className="text-2xl font-bold text-va-dark-blue">Potential Benefits You May Qualify For</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-va-blue">Health Care Benefits</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Comprehensive medical care</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Mental health services</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Prescription medications</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Specialty care services</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-va-blue">Additional Benefits</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Disability compensation</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Education benefits</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Home loan guaranty</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Vocational rehabilitation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <h3 className="text-2xl font-bold text-va-dark-blue">Recommended Next Steps</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nextSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isExternal = step.link.startsWith('http');
            
            return (
              <a
                key={index}
                href={step.link}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`block p-6 border-2 rounded-lg transition-all duration-200 hover:shadow-md focus-outline ${
                  step.primary 
                    ? 'border-va-blue bg-va-blue text-white hover:bg-va-dark-blue' 
                    : 'border-gray-200 hover:border-va-blue'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <IconComponent className={`w-6 h-6 flex-shrink-0 ${
                    step.primary ? 'text-white' : 'text-va-blue'
                  }`} />
                  <div className="space-y-2">
                    <h4 className={`font-semibold ${
                      step.primary ? 'text-white' : 'text-va-dark-blue'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm ${
                      step.primary ? 'text-blue-100' : 'text-gray-600'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Important Disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-yellow-800">Important Disclaimer</h3>
            <div className="text-yellow-700 text-sm space-y-2">
              <p>
                <strong>This is an estimate only.</strong> Final eligibility determination will be made by the VA 
                during the formal application process. Individual circumstances may affect eligibility.
              </p>
              <p>
                We recommend applying even if you're unsure about your eligibility. The VA can provide 
                a definitive determination and help you understand all available options.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
        <button
          onClick={handleBack}
          className="btn-secondary inline-flex items-center space-x-2 w-full sm:w-auto"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          <span>Back</span>
        </button>

        <button
          onClick={handleStartOver}
          className="btn-secondary inline-flex items-center space-x-2 w-full sm:w-auto"
        >
          <RotateCcw className="w-5 h-5" aria-hidden="true" />
          <span>Start Over</span>
        </button>
      </div>
    </div>
  );
};

export default EligibilitySummary; 