import { create } from 'zustand'
import axios from "axios";
const url = "http://localhost:3000/"

const initialState = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorData: null,
  };

export const useStoreTasks = create((set, get) => ({
    ...initialState,

    fetchTasks: async () => {
        set({ ...initialState, loading: true });
        try {
            const res = await axios.get(url);
            set({ ...initialState, success: true, data: res.data });
        } catch (err) {
            console.error("Error in data fetch:", err);
            set({ ...initialState, error: true, errorData: err.message });
        }
    },
}));