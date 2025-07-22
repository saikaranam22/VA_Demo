import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useEligibility } from '../context/EligibilityContext';

const ServiceHistory = () => {
  const navigate = useNavigate();
  const { state, updateServiceHistory } = useEligibility();
  
  const [formData, setFormData] = useState({
    branch: state.serviceHistory.branch || '',
    yearsServed: state.serviceHistory.yearsServed || '',
    activeDutyStatus: state.serviceHistory.activeDutyStatus || ''
  });

  const [errors, setErrors] = useState({});

  const branches = [
    { value: '', label: 'Select your branch of service' },
    { value: 'army', label: 'Army' },
    { value: 'navy', label: 'Navy' },
    { value: 'air-force', label: 'Air Force' },
    { value: 'marines', label: 'Marines' },
    { value: 'coast-guard', label: 'Coast Guard' },
    { value: 'space-force', label: 'Space Force' },
    { value: 'national-guard', label: 'National Guard' },
    { value: 'reserves', label: 'Reserves' }
  ];

  const yearsOptions = [
    { value: '', label: 'Select years of service' },
    { value: 'less-than-1', label: 'Less than 1 year' },
    { value: '1-2', label: '1-2 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '6-10', label: '6-10 years' },
    { value: '11-20', label: '11-20 years' },
    { value: 'more-than-20', label: 'More than 20 years' }
  ];

  const dutyStatusOptions = [
    { value: '', label: 'Select your duty status' },
    { value: 'active-duty', label: 'Active Duty' },
    { value: 'veteran', label: 'Veteran (Discharged)' },
    { value: 'national-guard', label: 'National Guard' },
    { value: 'reserves', label: 'Reserves' },
    { value: 'retired', label: 'Military Retired' }
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.branch) {
      newErrors.branch = 'Please select your branch of service';
    }
    
    if (!formData.yearsServed) {
      newErrors.yearsServed = 'Please select your years of service';
    }
    
    if (!formData.activeDutyStatus) {
      newErrors.activeDutyStatus = 'Please select your duty status';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      updateServiceHistory(formData);
      navigate('/health-disability');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-va-dark-blue">
          Step 1: Service History
        </h1>
        <p className="text-lg text-gray-600">
          Tell us about your military service to help determine your eligibility for VA benefits.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        {/* Branch of Service */}
        <div className="space-y-2">
          <label htmlFor="branch" className="form-label">
            Branch of Service <span className="text-red-500" aria-label="required">*</span>
          </label>
          <select
            id="branch"
            value={formData.branch}
            onChange={(e) => handleChange('branch', e.target.value)}
            className={`form-input ${errors.branch ? 'border-red-500 ring-red-500' : ''}`}
            aria-describedby={errors.branch ? 'branch-error' : undefined}
            aria-required="true"
          >
            {branches.map(branch => (
              <option key={branch.value} value={branch.value}>
                {branch.label}
              </option>
            ))}
          </select>
          {errors.branch && (
            <p id="branch-error" className="text-red-600 text-sm" role="alert">
              {errors.branch}
            </p>
          )}
        </div>

        {/* Years of Service */}
        <div className="space-y-2">
          <label htmlFor="yearsServed" className="form-label">
            Years of Service <span className="text-red-500" aria-label="required">*</span>
          </label>
          <select
            id="yearsServed"
            value={formData.yearsServed}
            onChange={(e) => handleChange('yearsServed', e.target.value)}
            className={`form-input ${errors.yearsServed ? 'border-red-500 ring-red-500' : ''}`}
            aria-describedby={errors.yearsServed ? 'years-error' : undefined}
            aria-required="true"
          >
            {yearsOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.yearsServed && (
            <p id="years-error" className="text-red-600 text-sm" role="alert">
              {errors.yearsServed}
            </p>
          )}
        </div>

        {/* Active Duty Status */}
        <div className="space-y-2">
          <label htmlFor="activeDutyStatus" className="form-label">
            Current Status <span className="text-red-500" aria-label="required">*</span>
          </label>
          <select
            id="activeDutyStatus"
            value={formData.activeDutyStatus}
            onChange={(e) => handleChange('activeDutyStatus', e.target.value)}
            className={`form-input ${errors.activeDutyStatus ? 'border-red-500 ring-red-500' : ''}`}
            aria-describedby={errors.activeDutyStatus ? 'status-error' : undefined}
            aria-required="true"
          >
            {dutyStatusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.activeDutyStatus && (
            <p id="status-error" className="text-red-600 text-sm" role="alert">
              {errors.activeDutyStatus}
            </p>
          )}
        </div>

        {/* Help Text */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="text-sm text-gray-700">
            <p className="font-medium text-va-blue mb-2">Why we ask for this information:</p>
            <ul className="space-y-1 ml-4">
              <li>• Different branches may have different benefit programs</li>
              <li>• Length of service affects eligibility for certain benefits</li>
              <li>• Your current status determines which benefits you can access now</li>
            </ul>
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
          <span>Back to Home</span>
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

export default ServiceHistory; 