"use client";
import Image from "next/image";
import styles from "./page.module.css";
import DashboardPage from "./src/pages/Dashboard/DashboardPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <DashboardPage></DashboardPage>
    </main>
  );
}

// Define the collection name
