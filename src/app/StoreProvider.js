'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../lib/store'
import { saveStateToLocalStorage } from '../utils/localStorage'

export default function StoreProvider({ children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.subscribe(() => {
      saveStateToLocalStorage(storeRef.current.getState());
    });
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}