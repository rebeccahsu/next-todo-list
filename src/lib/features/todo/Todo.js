'use client';

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { addTodo, toggleComplete, deleteTodo } from "./todoSlice";
import styles from './todo.module.scss';

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={styles.todoContainer}>
      <div className={styles.inputRow}>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          className={styles.input}
        />
        <button
          onClick={handleAddTodo}
          className={styles.button}
        >
          Add Todo
        </button>
      </div>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={clsx(styles.todoItem, todo.completed && styles.isCompleted)}
          >
            <div className={styles.row}>
              <input
                type="checkbox"
                onChange={() => handleToggleComplete(todo.id)}
                className={styles.checkbox}
              />
              <p className={styles.text}>
                {todo.text}
              </p>
            </div>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className={styles.deleteButton}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;