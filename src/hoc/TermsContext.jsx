import React, { createContext, useContext, useState } from "react";
import { terms as termsArr } from "../terms";

export const TermsContext = createContext();

export function TermsContextProvider(props) {
  const [terms, setTerms] = useState(termsArr);

  const removeTerm = (english) => {
    setTerms(terms.filter((term) => term.english !== english));
  };

  const updateTerm = (updatedTerm) => {
    setTerms(
      terms.map((term) =>
        term.english === updatedTerm.english ? updatedTerm : term
      )
    );
  };

  const value = {
    terms,
    removeTerm,
    updateTerm,
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
