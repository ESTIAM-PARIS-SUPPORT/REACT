import { create } from 'zustand';

const url = "http://localhost:3000/";

export const useStoreTasks = create((set) => ({
  tasks: {
    loading: false,
    error: null,
    data: null
  },

  fetchTasks: async () => {
    set((state) => ({ ...state.tasks, loading: true }))
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      set((state) =>({ ...state.tasks, data, loading: false }) );
    } catch (err) {
      console.error("Error in data fetch:", err);
      set((state) =>({ ...state.tasks, error: err.message }));
    }
  },
}));
