import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid';

export const useTodoStore = create(
  persist(
    (set, get) => ({
      list: [],
      methods: {
        exists: (item) => get().list?.find(li => li.id === item.id),

        push: (item) => set((state) => ({
          list: [...state.list, { id: uuidv4(), text: item }]
        })),

        remove: (item) => set((state) => {
          const newList = state.list.filter(itm => itm.id !== item.id)
          return ({
            list: newList
          })
        }),

        done: (item) => set((state) => {
          const newList = state.list.map(itm => itm.id === item.id ? ({
            ...item,
            status: true,
          }) : itm)
          return ({
            list: newList
          })
        }),
      }
    }),
    {
      name: "todoapp-storage"
    }
  )
);