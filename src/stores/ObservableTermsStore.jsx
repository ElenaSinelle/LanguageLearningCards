import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";

class ObservableTermsStore {
  terms = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
    this.fetchTerms = this.fetchTerms.bind(this);
    this.removeTerm = this.removeTerm.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.addTerm = this.addTerm.bind(this);
    this.fetchTerms();
  }

  async fetchTerms() {
    this.loading = true;
    this.error = null;
    try {
      const response = await fetch("/api/words");
      if (response.ok) {
        const data = await response.json();
        runInAction(() => {
          this.terms = data;
        });
        console.log("terms fetched");
      } else {
        throw new Error("Something went wrong ...");
      }
    } catch (e) {
      runInAction(() => {
        this.error = e.message;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  removeTerm = async id => {
    this.loading = true;
    try {
      const response = await fetch(
        `/api/words/${id}/delete`,
        {
          method: "POST",
        },
      );

      if (response.ok) {
        runInAction(() => {
          this.terms = this.terms.filter(
            term => term.id !== id,
          );
        });
        console.log("deletion done");
      } else {
        throw new Error("Failed to remove term");
      }
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  updateTerm = async updatedTerm => {
    this.loading = true;
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
        `/api/words/${updatedTerm.id}/update`,
        requestOptions,
      );
      if (response.ok) {
        runInAction(() => {
          this.terms = this.terms.map(term =>
            term.id === updatedTerm.id ? updatedTerm : term,
          );
        });
        console.log("term updated");
      } else {
        throw new Error("Failed to update term");
      }
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
        console.log(this.error);
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  addTerm = async newTerm => {
    this.loading = true;
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
        runInAction(() => {
          this.terms = [...this.terms, createdTerm];
        });
        console.log("new term added");
      } else {
        throw new Error("Failed to add term");
      }
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

export const termsStore = new ObservableTermsStore();
export const termsStoreContext = createContext(termsStore);
