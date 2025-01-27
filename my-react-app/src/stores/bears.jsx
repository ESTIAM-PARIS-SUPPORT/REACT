import { create } from 'zustand'


export const useStoreCount = create((set) => ({
    bears: 0,
    increment: () => set((state) => ({ bears: state.bears + 1 })),
    decrement: () => set((state) => ({ bears: state.bears - 1 })),
    reset: () => set({ bears: 0 })
})
)