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

  // const fetchAPI = async (
  //   value = null,
  //   url,
  //   method,
  //   errorMessage = "",
  // ) => {
  //   try {
  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(value),
  //     };
  //     const response = await fetch(url, requestOptions);
  //     if (response.ok) {
  //       method();
  //     } else {
  //       throw new Error(errorMessage);
  //     }
  //   } catch (err) {
  //     setError(err);
  //     console.log(error);
  //   }
  // };

  // const removeTermMethod = id =>
  //   setTerms(terms.filter(term => term.id !== id));

  // async function removeTerm(id) {
  //   fetchAPI(
  //     id,
  //     `/api/words/${id}/delete`,
  //     removeTermMethod,
  //   );
  // }

  const removeTerm = async id => {
    try {
      const response = await fetch(
        `/api/words/${id}/delete`,
        {
          method: "POST",
        },
      );

      if (response.ok) {
        setTerms(terms.filter(term => term.id !== id));
        console.log("deletion done");
      } else {
        throw new Error("Failed to remove term");
      }
    } catch (err) {
      setError(err);
      console.log(terms);
    }
  };

  const updateTerm = async updatedTerm => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          english: updatedTerm.english,
          russian: updatedTerm.russian,
          transcription: updatedTerm.transcription,
          id: updatedTerm.id,
          tags: updatedTerm.tags,
          tags_json: "",
        }),
      };
      const response = await fetch(
        `/api/words/${updatedTerm.id}/update `,
        requestOptions,
      );
      if (response.ok) {
        setTerms(
          terms.map(term =>
            term.id === updatedTerm.id ? updatedTerm : term,
          ),
        );

        console.log("updated");
      } else {
        console.log("failed to update");
      }
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };

  const addTerm = async newTerm => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTerm),
      };

      const response = await fetch(
        `/api/words/add`,
        requestOptions,
      );
      if (response.ok) {
        const createdTerm = await response.json();
        setTerms([...terms, createdTerm]);
        console.log("added new term");
      } else {
        console.log("not added");
      }
    } catch (err) {
      setError(err);
      console.log("smth went wrong with adding");
    }
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
