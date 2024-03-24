import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";
import MainLayout from "../components/MainLayout";

export default function Login() {
  return (
    <MainLayout>
      <Head>
        <title>Todo List | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          LOGIN
        </div>
      </main>
    </MainLayout>
  );
}
