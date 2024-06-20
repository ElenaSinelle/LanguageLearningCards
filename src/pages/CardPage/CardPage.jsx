import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CustomContext } from "../../Context";
import styles from "./CardPage.module.scss";

export default function CardPage() {
  const { id } = useParams();
  const { terms } = useContext(CustomContext);
  const [term, setTerm] = useState(null);

  useEffect(() => {
    const foundTerm = terms.find((term) => term.id === id);
    setTerm(foundTerm);
  }, [terms, id]);

  if (!term) {
    return (
      <div className={styles.container}>
        <h3>
          We are sorry, there is no such word in our dictionary. We will add it
          later.
        </h3>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Details of word "{term.english}"</h2>
      <p>English: {term.english}</p>
      <p>Transcription: {term.transcription}</p>
      <p>Translation into Russian: {term.russian}</p>
      <p>The word belongs to the category: {term.tags}</p>
    </div>
  );
}
