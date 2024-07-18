import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class ObservableCounterStore {
  count = 0;
  termset = new Set();

  constructor() {
    makeAutoObservable(this);
    this.counter = this.counter.bind(this);
  }

  counter = id => {
    this.termset = this.termset.add(id);
    this.count = this.termset.size;
  };
}

export const counterStore = new ObservableCounterStore();
export const counterStoreContext =
  createContext(counterStore);
