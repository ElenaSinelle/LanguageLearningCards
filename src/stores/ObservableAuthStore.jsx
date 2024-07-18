import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class ObservableAuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn = (newUser, callBack) => {
    this.user = newUser;
    callBack();
  };

  logOut = callBack => {
    this.user = null;
    callBack();
  };
}

export const authStore = new ObservableAuthStore();
export const authStoreProvider = createContext(authStore);
