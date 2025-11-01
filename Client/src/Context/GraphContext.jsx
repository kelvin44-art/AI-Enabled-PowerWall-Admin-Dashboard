import React, { createContext, useState } from 'react';

export const PowerGridContext = createContext();

export const PowerGridProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [wind, setWind] = useState('');
  const [solar, setSolar] = useState('');
  const [demandBefore, setDemandBefore] = useState('');

  const addDataPoint = () => {
    if (wind && solar && demandBefore) {
      const newEntry = {
        timestamp: new Date().toLocaleTimeString(),
        wind: parseFloat(wind),
        solar: parseFloat(solar),
        demand: parseFloat(demandBefore),
      };
      setData(prev => [...prev, newEntry]);
      // Clear inputs after adding
      setWind('');
      setSolar('');
      setDemandBefore('');
    }
  };

  const clearData = () => {
    setData([]);
  };

  return (
    <PowerGridContext.Provider value={{
      data,
      wind,
      solar,
      demandBefore,
      setWind,
      setSolar,
      setDemandBefore,
      addDataPoint,
      clearData
    }}>
      {children}
    </PowerGridContext.Provider>
  );
};