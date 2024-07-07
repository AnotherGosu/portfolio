import { createStore } from "zustand";
import { persist } from "zustand/middleware";

import { Task } from "@/types/common";

export type State = {
  toast: { status: "success" | "error" | null; message: string };

  tasks: Task[];
};

export type Actions = {
  setToast: (toast: State["toast"]) => void;

  addTask: () => void;
  editTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
};

export const initialState: State = {
  toast: { status: null, message: "" },

  tasks: [],
};

export type Store = ReturnType<typeof createGlobalStore>;

export const createGlobalStore = (state: State = initialState) => {
  return createStore<State & Actions>()(
    persist(
      (set) => ({
        ...state,

        setToast: (toast) => set({ toast }),

        addTask: () => {
          return set((state) => {
            const id = crypto.randomUUID();

            const newTask: Task = { id, title: "", isEditing: true };

            const updatedTasks = [...state.tasks, newTask];

            return { tasks: updatedTasks };
          });
        },
        editTask: (id, title) => {
          return set((state) => {
            const updatedTask: Task = { id, title, isEditing: false };

            const updatedTasks = state.tasks.map((task) =>
              task.id === id ? updatedTask : task,
            );

            return { tasks: updatedTasks };
          });
        },
        removeTask: (id: string) => {
          return set((state) => {
            const updatedTasks = state.tasks.filter((task) => task.id !== id);

            return { tasks: updatedTasks };
          });
        },
      }),
      { name: "playground-store" },
    ),
  );
};
