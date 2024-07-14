// import React, { createContext, useContext, useState } from "react";
// import { terms as termsArr } from "../terms";

// export const TermsContext = createContext();

// export function TermsContextProvider(props) {
//   const [terms, setTerms] = useState(termsArr);

//   const removeTerm = (id) => {
//     setTerms(terms.filter((term) => term.id !== id));
//   };

//   const updateTerm = (updatedTerm) => {
//     setTerms(
//       terms.map((term) => (term.id === updatedTerm.id ? updatedTerm : term))
//     );
//   };

//   const addTerm = (newTerm) => {
//     setTerms([...terms, newTerm]);
//   };

//   const value = {
//     terms,
//     removeTerm,
//     updateTerm,
//     addTerm,
//   };

//   return (
//     <TermsContext.Provider value={value}>
//       {props.children}
//     </TermsContext.Provider>
//   );
// }

// export function useTerms() {
//   return useContext(TermsContext);
// }

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const TermsContext = createContext();

export function TermsContextProvider(props) {
  const [terms, setTerms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch("/api/words")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(response => {
        setTerms(response);
        setIsLoading(false);
      })
      .catch(err => setError(err));

    console.log(terms);
  }, []);

  const removeTerm = id => {
    setTerms(terms.filter(term => term.id !== id));
  };

  const updateTerm = updatedTerm => {
    setTerms(
      terms.map(term =>
        term.id === updatedTerm.id ? updatedTerm : term,
      ),
    );
  };

  const addTerm = newTerm => {
    setTerms([...terms, newTerm]);
  };

  const value = {
    terms,
    isLoading,
    error,
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
