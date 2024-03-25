import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"
import MainLayout from "./components/MainLayout"
import TodoList from "./components/TodoList"
import StoreProvider from "./StoreProvider"
import { Counter } from "@/lib/features/counter/Counter"

export default function Home() {
  return (
    <StoreProvider>
      <MainLayout>
        <main className={styles.main}>
          <div>
            Welcome!
          </div>

          <Counter />

          <TodoList />


        </main>
      </MainLayout>
    </StoreProvider>
  )
}
