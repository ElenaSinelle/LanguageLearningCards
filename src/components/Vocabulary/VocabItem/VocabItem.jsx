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
  const { id, english, transcription, russian } = props;
  const { updateTerm, removeTerm } = useTerms();
  const [editing, setEditing] = useState(false);

  // temporary states - for inputs that being edited
  const [tempTerm, setTempTerm] = useState({
    english,
    transcription,
    russian,
  });

  // saved states for edited and saved inputs
  const [savedTerm, setSavedTerm] = useState({
    english,
    transcription,
    russian,
  });

  // update edited inputs and inputs under editing after each render
  useEffect(() => {
    setTempTerm({ english, transcription, russian });
    setSavedTerm({ english, transcription, russian });
  }, [english, transcription, russian]);

  // handlers
  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    updateTerm(tempTerm); //from context
    setSavedTerm(tempTerm);
    setEditing(false);
  };

  const handleCancel = () => {
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

        <VocabButton
          className={`${styles.vocab__btn} ${themes[0].bg}`}
          onClick={() => removeTerm(english)}
          content="Delete Word"
        />
      </div>
    </div>
  );
}
