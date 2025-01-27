import { create } from 'zustand'

export const useStoreCount = create((set, get) => ({
    bears: 0,
    //increment: () => set((state) => ({ bears: state.bears + 1 })),
    increment: () => set({ bears: get().bears + 1 }),
    decrement: () => set((state) => ({ bears: state.bears - 1 })),
    reset: () => set({ bears: 0 })
})
)