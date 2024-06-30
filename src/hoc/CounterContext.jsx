import { createContext, useState, useContext } from "react";

export const CounterContext = createContext(null);

export function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [termset, setTermset] = useState(new Set());

  const counter = (id) => {
    setTermset(termset.add(id));
    setCount(termset.size);
  };

  const value = { count, counter };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}
