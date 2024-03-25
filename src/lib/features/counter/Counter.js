'use client'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import styles from './counter.module.scss'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.counter}>
      
      <button
        aria-label="Decrement value"
        className={styles.button}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <div>{count}</div>

      <button
        aria-label="Increment value"
        className={styles.button}
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      
    </div>
  )
}