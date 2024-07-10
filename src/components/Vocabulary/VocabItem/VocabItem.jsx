import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTerms } from "../../../hoc/TermsContext";
import VocabButton from "../VocabButton/VocabButton";
import VocabInput from "../VocabInput/VocabInput";
import styles from "../Vocabulary.module.scss";
import themePink from "../../../commonStyles/themes/themePink.module.scss";
import themeBlue from "../../../commonStyles/themes/themeBlue.module.scss";
import themeGreen from "../../../commonStyles/themes/themeGreen.module.scss";

const themes = [themePink, themeBlue, themeGreen];

export default function VocabItem(props) {
  const {
    id,
    english,
    transcription,
    russian,
    tags,
    isNew,
    setIsNew,
  } = props;
  const { terms, removeTerm, updateTerm, addTerm } =
    useTerms();
  const [editing, setEditing] = useState(isNew || false);
  const [isValid, setIsValid] = useState(true);
  const [initialTerm, setInitialTerm] = useState({
    id: id || "",
    english: english || "",
    transcription: transcription || "",
    russian: russian || "",
    tags: tags || "",
  });

  const [term, setTerm] = useState(initialTerm);

  //-effects---------------------------------------
  useEffect(() => {
    if (isNew) {
      setTerm(prevTerm => ({
        ...prevTerm,
        id:
          terms.reduce(
            (max, term) => Math.max(max, term.id),
            0,
          ) + 1,
      }));
    } else {
      setInitialTerm({
        id,
        english,
        transcription,
        russian,
        tags,
      });
      setTerm({
        id,
        english,
        transcription,
        russian,
        tags,
      });
    }
  }, [
    id,
    english,
    transcription,
    russian,
    tags,
    isNew,
    terms,
  ]);

  //-validation---------------------------------------
  const validateFields = term => {
    const valid =
      term.english &&
      term.transcription &&
      term.russian &&
      term.tags;
    setIsValid(valid);
    return valid;
  };

  useEffect(() => {
    validateFields(term);
  }, [term]);

  //-handlers---------------------------------------
  const handleEdit = () => {
    setEditing(true);
    validateFields(term);
  };

  const handleSave = () => {
    if (validateFields(term)) {
      if (isNew) {
        addTerm(term);
        setIsNew(false);
      } else {
        updateTerm(term);
      }
      setEditing(false);
    }
  };

  const handleCancel = () => {
    if (isNew) {
      removeTerm(term.id);
      setIsNew(false);
    } else {
      setTerm(initialTerm);
    }
    setEditing(false);
  };

  // inputs in view mode
  const renderViewModeInputs = () => (
    <Link
      to={`../cards/${id}`}
      className={styles.vocab__itemContainer}
    >
      <div>{term.english}</div>
      <div>{term.transcription}</div>
      <div>{term.russian}</div>
      <div>{term.tags}</div>
    </Link>
  );

  // inputs in editing mode
  const renderEditModeInputs = () => (
    <div className={styles.vocab__itemContainer}>
      <VocabInput
        className={
          !term.english && !isValid ? styles.invalid : ""
        }
        value={
          !term.english && !isValid
            ? "you should enter a term"
            : term.english
        }
        onChange={e =>
          setTerm({ ...term, english: e.target.value })
        }
      />
      <VocabInput
        className={
          !term.transcription && !isValid
            ? styles.invalid
            : ""
        }
        value={
          !term.transcription && !isValid
            ? "you should enter transcription"
            : term.transcription
        }
        onChange={e =>
          setTerm({
            ...term,
            transcription: e.target.value,
          })
        }
      />
      <VocabInput
        className={
          !term.russian && !isValid ? styles.invalid : ""
        }
        value={
          !term.russian && !isValid
            ? "you should enter translation"
            : term.russian
        }
        onChange={e =>
          setTerm({ ...term, russian: e.target.value })
        }
      />
      <VocabInput
        className={
          !term.tags && !isValid ? styles.invalid : ""
        }
        value={
          !term.tags && !isValid
            ? "you should enter category"
            : term.tags
        }
        onChange={e =>
          setTerm({ ...term, tags: e.target.value })
        }
      />
    </div>
  );

  // buttons in view mode
  const renderViewModeButtons = () => (
    <VocabButton
      className={`${styles.vocab__btn} ${themes[1].bg}`}
      onClick={handleEdit}
      content="Edit Button"
    />
  );

  // buttons in editing mode
  const renderEditModeButtons = () => (
    <>
      <VocabButton
        className={`${styles.vocab__btn} ${themes[1].bg}`}
        onClick={handleCancel}
        content="Cancel"
      />

      <VocabButton
        className={`${styles.vocab__btn} ${
          !isValid
            ? `${styles.disabled}`
            : `${themes[2].bg}`
        }`}
        onClick={handleSave}
        content="Save Word"
        disabled={!isValid}
      />
    </>
  );

  return (
    <div className={styles.vocab__line}>
      <div>
        {!editing
          ? renderViewModeInputs()
          : renderEditModeInputs()}
      </div>

      <div className={styles.vocab__btnsContainer}>
        {!editing
          ? renderViewModeButtons()
          : renderEditModeButtons()}
        {!isNew && (
          <VocabButton
            className={`${styles.vocab__btn} ${themes[0].bg}`}
            onClick={() => removeTerm(id)}
            content="Delete"
          />
        )}
      </div>
    </div>
  );
}
