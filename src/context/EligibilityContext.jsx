import React, { createContext, useContext, useReducer } from 'react';

const EligibilityContext = createContext();

const initialState = {
  serviceHistory: {
    branch: '',
    yearsServed: '',
    activeDutyStatus: ''
  },
  healthDisability: {
    hasInjury: false,
    hasPTSD: false,
    hasServiceConnectedDisability: false
  },
  specialStatus: {
    hasPurpleHeart: false,
    hasMedalOfHonor: false,
    isFormerPOW: false,
    hasCombatZoneDeployment: false
  }
};

function eligibilityReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_SERVICE_HISTORY':
      return {
        ...state,
        serviceHistory: { ...state.serviceHistory, ...action.payload }
      };
    case 'UPDATE_HEALTH_DISABILITY':
      return {
        ...state,
        healthDisability: { ...state.healthDisability, ...action.payload }
      };
    case 'UPDATE_SPECIAL_STATUS':
      return {
        ...state,
        specialStatus: { ...state.specialStatus, ...action.payload }
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

export function EligibilityProvider({ children }) {
  const [state, dispatch] = useReducer(eligibilityReducer, initialState);

  const updateServiceHistory = (data) => {
    dispatch({ type: 'UPDATE_SERVICE_HISTORY', payload: data });
  };

  const updateHealthDisability = (data) => {
    dispatch({ type: 'UPDATE_HEALTH_DISABILITY', payload: data });
  };

  const updateSpecialStatus = (data) => {
    dispatch({ type: 'UPDATE_SPECIAL_STATUS', payload: data });
  };

  const resetForm = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  const value = {
    state,
    updateServiceHistory,
    updateHealthDisability,
    updateSpecialStatus,
    resetForm
  };

  return (
    <EligibilityContext.Provider value={value}>
      {children}
    </EligibilityContext.Provider>
  );
}

export function useEligibility() {
  const context = useContext(EligibilityContext);
  if (!context) {
    throw new Error('useEligibility must be used within an EligibilityProvider');
  }
  return context;
} 