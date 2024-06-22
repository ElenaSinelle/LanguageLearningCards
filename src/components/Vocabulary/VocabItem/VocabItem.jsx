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
  const { id, english, transcription, russian, isNew, setIsNew } = props;
  const { terms, removeTerm, updateTerm, addTerm } = useTerms();
  const [editing, setEditing] = useState(isNew || false);

  const [tempTerm, setTempTerm] = useState({
    id: id || terms.length, // generate a unique id if it's a new term
    english: english || "",
    transcription: transcription || "",
    russian: russian || "",
  });

  const [savedTerm, setSavedTerm] = useState({
    id: id || terms.length,
    english: english || "",
    transcription: transcription || "",
    russian: russian || "",
  });

  // update edited inputs and inputs under editing after each render
  useEffect(() => {
    setTempTerm({ id, english, transcription, russian });
    setSavedTerm({ id, english, transcription, russian });
    console.log(id); // no id of new term (
    console.log(terms.length);
  }, [terms, id, english, transcription, russian]);

  // handlers
  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    if (isNew) {
      addTerm(tempTerm);
      setIsNew(false);
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
