import Image from 'next/image';
import styles from './todolist.module.scss';

export default function TodoList({ children }) {

  return (
    <div className={styles.todoListConainer}>
      <div>
        <input />
        <button>
          Add
        </button>
      </div>

      <div className={styles.list}>

      </div>
    </div>
  );
}