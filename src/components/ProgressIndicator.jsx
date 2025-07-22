import React from 'react';
import { useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';

const ProgressIndicator = () => {
  const location = useLocation();
  
  const steps = [
    { id: 1, name: 'Service History', path: '/service-history' },
    { id: 2, name: 'Health & Disability', path: '/health-disability' },
    { id: 3, name: 'Special Status', path: '/special-status' },
    { id: 4, name: 'Eligibility Summary', path: '/eligibility-summary' }
  ];

  const getCurrentStepIndex = () => {
    const currentStep = steps.find(step => step.path === location.pathname);
    return currentStep ? currentStep.id : 0;
  };

  const currentStepIndex = getCurrentStepIndex();

  return (
    <nav aria-label="Progress" className="py-6">
      <ol className="flex items-center justify-between max-w-3xl mx-auto">
        {steps.map((step, index) => {
          const isCompleted = currentStepIndex > step.id;
          const isCurrent = currentStepIndex === step.id;
          const isUpcoming = currentStepIndex < step.id;

          return (
            <li key={step.id} className="flex-1 flex items-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center relative">
                  {/* Step Circle */}
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                      ${isCompleted 
                        ? 'bg-va-green text-white' 
                        : isCurrent 
                        ? 'bg-va-blue text-white ring-4 ring-blue-100' 
                        : 'bg-gray-200 text-gray-500'
                      }
                    `}
                    aria-current={isCurrent ? 'step' : undefined}
                  >
                    {isCompleted ? (
                      <Check className="w-6 h-6" aria-hidden="true" />
                    ) : (
                      <span>{step.id}</span>
                    )}
                  </div>
                </div>
                
                {/* Step Label */}
                <span 
                  className={`
                    mt-2 text-xs font-medium text-center max-w-20
                    ${isCurrent 
                      ? 'text-va-blue' 
                      : isCompleted 
                      ? 'text-va-green' 
                      : 'text-gray-500'
                    }
                  `}
                >
                  {step.name}
                </span>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div 
                  className={`
                    flex-1 h-0.5 mx-4 
                    ${isCompleted ? 'bg-va-green' : 'bg-gray-200'}
                  `}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
      
      {/* Screen reader friendly progress description */}
      <div className="sr-only">
        Step {currentStepIndex} of {steps.length}: {steps.find(s => s.id === currentStepIndex)?.name}
      </div>
    </nav>
  );
};

export default ProgressIndicator; 