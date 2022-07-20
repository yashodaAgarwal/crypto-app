import { createContext, useContext, useState,useEffect } from "react";

const CryptoContext = createContext(null);

const CryptoProvider = ({ children }) => {
    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");
  
    useEffect(() => {
      if (currency === "INR") setSymbol("₹");
      else if (currency === "USD") setSymbol("$");
    }, [currency]);
  return (
    <CryptoContext.Provider value={{currency,setCurrency,symbol }}>
      {children}
    </CryptoContext.Provider>
  );
};

const useCrypto = () => useContext(CryptoContext);

export { CryptoProvider, useCrypto };