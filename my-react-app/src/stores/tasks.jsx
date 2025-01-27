import { create } from 'zustand';

const url = "http://localhost:3000/";

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
};

export const useStoreTasks = create((set) => ({
  ...initialState,

  fetchTasks: async () => {
    set({ ...initialState, loading: true });
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // objet json 
      set({ ...initialState, success: true, data });
    } catch (err) {
      console.error("Error in data fetch:", err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },
}));
