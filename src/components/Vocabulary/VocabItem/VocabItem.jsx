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
  const { id, english, transcription, russian, tags, isNew, setIsNew } = props;
  const { terms, removeTerm, updateTerm, addTerm } = useTerms();
  const [editing, setEditing] = useState(isNew || false);

  const [nextId, setNextId] = useState(terms.length);

  useEffect(() => {
    const maxId = terms.reduce((max, term) => Math.max(max, term.id), 0);
    setNextId(maxId + 1);
  }, [terms]);

  const [tempTerm, setTempTerm] = useState({
    id: id || nextId,
    english: english || "",
    transcription: transcription || "",
    russian: russian || "",
    tags: tags || "",
  });

  const [savedTerm, setSavedTerm] = useState({
    id: id || nextId,
    english: english || "",
    transcription: transcription || "",
    russian: russian || "",
    tags: tags || "",
  });

  // update edited inputs and inputs under editing after each render
  useEffect(() => {
    if (isNew) {
      setTempTerm((prevTerm) => ({
        ...prevTerm,
        id: nextId,
      }));
      setSavedTerm((prevTerm) => ({
        ...prevTerm,
        id: nextId,
      }));
    }
  }, [nextId, terms, isNew]);

  useEffect(() => {
    if (!isNew) {
      setTempTerm({ id, english, transcription, russian, tags });
      setSavedTerm({ id, english, transcription, russian, tags });
    }
  }, [terms, id, english, transcription, russian, tags, isNew]);

  // handlers
  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    if (isNew) {
      addTerm(tempTerm);
      setIsNew(false);
      setNextId(nextId + 1);
    } else {
      updateTerm(tempTerm);
    }
    setSavedTerm(tempTerm);
    setEditing(false);
  };

  const handleCancel = () => {
    if (isNew) {
      removeTerm(tempTerm.id); // Remove the new term if the user cancels
    }
    setTempTerm(savedTerm);
    setEditing(false);
  };

  // inputs in view mode
  const renderViewModeInputs = () => (
    <Link to={`../cards/${id}`} className={styles.vocab__itemContainer}>
      <div>{savedTerm.english}</div>
      <div>{savedTerm.transcription}</div>
      <div>{savedTerm.russian}</div>
      <div>{savedTerm.tags}</div>
    </Link>
  );

  //inputs in editing mode
  const renderEditModeInputs = () => (
    <div className={styles.vocab__itemContainer}>
      <VocabInput
        defaultValue={tempTerm.english}
        onChange={(e) => setTempTerm({ ...tempTerm, english: e.target.value })}
      />
      <VocabInput
        defaultValue={tempTerm.transcription}
        onChange={(e) =>
          setTempTerm({ ...tempTerm, transcription: e.target.value })
        }
      />
      <VocabInput
        defaultValue={tempTerm.russian}
        onChange={(e) => setTempTerm({ ...tempTerm, russian: e.target.value })}
      />
      <VocabInput
        defaultValue={tempTerm.tags}
        onChange={(e) => setTempTerm({ ...tempTerm, tags: e.target.value })}
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
        className={`${styles.vocab__btn} ${themes[2].bg}`}
        onClick={handleSave}
        content="Save Word"
      />
    </>
  );

  return (
    <div className={styles.vocab__line}>
      <div>{!editing ? renderViewModeInputs() : renderEditModeInputs()}</div>

      <div className={styles.vocab__btnsContainer}>
        {!editing ? renderViewModeButtons() : renderEditModeButtons()}
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
