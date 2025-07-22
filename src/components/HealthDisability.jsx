import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Heart, Brain, AlertCircle } from 'lucide-react';
import { useEligibility } from '../context/EligibilityContext';

const HealthDisability = () => {
  const navigate = useNavigate();
  const { state, updateHealthDisability } = useEligibility();
  
  const [formData, setFormData] = useState({
    hasInjury: state.healthDisability.hasInjury || false,
    hasPTSD: state.healthDisability.hasPTSD || false,
    hasServiceConnectedDisability: state.healthDisability.hasServiceConnectedDisability || false
  });

  const handleCheckboxChange = (field, checked) => {
    setFormData(prev => ({ ...prev, [field]: checked }));
  };

  const handleContinue = () => {
    updateHealthDisability(formData);
    navigate('/special-status');
  };

  const handleBack = () => {
    navigate('/service-history');
  };

  const healthConditions = [
    {
      id: 'hasInjury',
      title: 'Service-Related Injury or Illness',
      description: 'Do you have any injuries or illnesses that were caused or made worse by your military service?',
      icon: Heart,
      examples: [
        'Physical injuries from training or deployment',
        'Hearing loss or tinnitus',
        'Back, knee, or joint problems',
        'Respiratory conditions',
        'Other service-related medical conditions'
      ]
    },
    {
      id: 'hasPTSD',
      title: 'PTSD or Mental Health Conditions',
      description: 'Do you have PTSD or other mental health conditions related to your military service?',
      icon: Brain,
      examples: [
        'Post-Traumatic Stress Disorder (PTSD)',
        'Depression or anxiety related to service',
        'Traumatic Brain Injury (TBI)',
        'Military Sexual Trauma (MST)',
        'Other service-related mental health conditions'
      ]
    },
    {
      id: 'hasServiceConnectedDisability',
      title: 'VA Disability Rating',
      description: 'Do you currently have a VA disability rating for any condition?',
      icon: AlertCircle,
      examples: [
        'Any VA disability rating (0% to 100%)',
        'Currently receiving VA disability compensation',
        'Have applied for VA disability benefits',
        'Previously rated by the VA'
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-va-dark-blue">
          Step 2: Health & Disability Information
        </h1>
        <p className="text-lg text-gray-600">
          Help us understand any health conditions or disabilities related to your military service.
        </p>
      </div>

      <div className="space-y-6">
        {healthConditions.map((condition) => {
          const IconComponent = condition.icon;
          const isChecked = formData[condition.id];
          
          return (
            <div 
              key={condition.id} 
              className={`bg-white rounded-lg shadow-md p-6 border-2 transition-all duration-200 ${
                isChecked ? 'border-va-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isChecked ? 'bg-va-blue text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <IconComponent className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <label 
                        htmlFor={condition.id}
                        className="text-xl font-semibold text-va-dark-blue cursor-pointer"
                      >
                        {condition.title}
                      </label>
                      <input
                        id={condition.id}
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => handleCheckboxChange(condition.id, e.target.checked)}
                        className="w-5 h-5 text-va-blue border-2 border-gray-300 rounded focus:ring-2 focus:ring-va-blue focus:border-va-blue"
                        aria-describedby={`${condition.id}-description`}
                      />
                    </div>
                    
                    <p 
                      id={`${condition.id}-description`}
                      className="text-gray-700"
                    >
                      {condition.description}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Examples include:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {condition.examples.map((example, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-va-blue mr-2">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Information Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-va-blue rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">i</span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-va-dark-blue">Important Notes</h3>
            <div className="text-gray-700 space-y-2 text-sm">
              <p>
                <strong>You don't need a current VA disability rating to be eligible for VA health care.</strong>
                Many Veterans qualify for health care benefits even without a disability rating.
              </p>
              <p>
                If you're unsure about whether a condition is service-connected, it's okay to check the box. 
                The VA can help determine the connection during the application process.
              </p>
              <p>
                <strong>Privacy:</strong> This information helps us provide a more accurate eligibility assessment. 
                Your responses are kept confidential.
              </p>
            </div>
          </div>
        </div>
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
          <span>Continue</span>
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default HealthDisability; 