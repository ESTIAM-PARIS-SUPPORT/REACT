import {create} from "zustand"

const url = 'http://localhost:3001'

export const useApi = create((set) => ({
    messageAPI : '',

    fetchMessage : async () => {

        const res = await fetch(url, {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ message : "Hello les dev, je suis React"})
        })

        const json = await res.json()

        set((state) =>({ ...state.messageAPI, messageAPI : json }))
    }
}))