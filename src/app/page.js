import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import MainLayout from "./components/MainLayout";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <MainLayout>
      <main className={styles.main}>
        <div>
          Welcome, !
        </div>

        <TodoList />


      </main>
    </MainLayout>
  );
}
