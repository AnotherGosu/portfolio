import { createStore } from "zustand";

export type State = {
  toast: { status: "success" | "error" | null; message: string };
};

export type Actions = {
  clearState: () => void;

  setToast: (toast: State["toast"]) => void;
};

export const initialState: State = {
  toast: { status: null, message: "" },
};

export type Store = ReturnType<typeof createGlobalStore>;

export const createGlobalStore = (state: State = initialState) => {
  return createStore<State & Actions>()((set) => ({
    ...state,

    clearState: () => set(initialState),

    setToast: (toast) => set({ toast }),
  }));
};
