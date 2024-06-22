import React, { createContext, useContext, useState } from "react";
import { terms as termsArr } from "../terms";

export const TermsContext = createContext();

export function TermsContextProvider(props) {
  const [terms, setTerms] = useState(termsArr);

  const removeTerm = (id) => {
    setTerms(terms.filter((term) => term.id !== id));
  };

  const updateTerm = (updatedTerm) => {
    setTerms(
      terms.map((term) => (term.id === updatedTerm.id ? updatedTerm : term))
    );
  };

  const addTerm = (newTerm) => {
    setTerms([...terms, newTerm]);
  };

  const value = {
    terms,
    removeTerm,
    updateTerm,
    addTerm,
  };

  return (
    <TermsContext.Provider value={value}>
      {props.children}
    </TermsContext.Provider>
  );
}

export function useTerms() {
  return useContext(TermsContext);
}
