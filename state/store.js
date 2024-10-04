import { Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

export const useTodoStore = create(
  persist(
    (set, get) => ({
      list: [],
      exists: (item) => get().list?.find(li => 
        li.text.toUpperCase() === item.text.toUpperCase()
      ),

      push: (item) => set((state) => ({
        list: [...state.list, { 
          uid: uuidv4(), 
          id: state.list.length + 1, 
          text: item,          
        }]
      })),

      remove: (item) => set((state) => {
        const newList = state.list.filter(itm => itm.uid !== item.uid)
        return ({
          list: newList
        })
      }),

      done: (item) => set((state) => {
        const newList = state.list.map(itm => itm.uid === item.uid ? ({
          ...item,
          status: true,
        }) : itm)
        return ({
          list: newList
        })
      }),
    }),
    {
      name: "todoapp-storage",
      storage: createJSONStorage(() => Platform.OS === "web" ? localStorage : AsyncStorage)
    }
  )
);