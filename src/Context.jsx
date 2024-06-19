import React, { createContext, useState } from "react";
import { terms as termsArr } from "./terms";

export const CustomContext = createContext();

export function Context(props) {
  // const [terms, setTerms] = useState([
  //   {
  //     english: "girl",
  //     transcription: "[ɡɜːl]",
  //     russian: "девочка",
  //   },
  //   {
  //     english: "road",
  //     transcription: "[rōd]",
  //     russian: "дорога",
  //   },
  //   {
  //     english: "school",
  //     transcription: "[skuːl]",
  //     russian: "школа",
  //   },
  //   {
  //     english: "hedgehog",
  //     transcription: "[ˈhedʒ(h)ɒɡ]",
  //     russian: "ёж",
  //   },
  //   {
  //     english: "cat",
  //     transcription: "[cat]",
  //     russian: "кошка",
  //   },
  //   {
  //     english: "dad",
  //     transcription: "[dæd]",
  //     russian: "папа",
  //   },
  //   {
  //     english: "flower",
  //     transcription: "[ˈflaʊər]",
  //     russian: "цветок",
  //   },
  // ]);

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
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
}
