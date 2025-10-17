'use client';

import { useState } from "react";
import styles from "./layout.module.css";
import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [estadoBar, setEstadoBar] = useState(true);

  return (
    <div className={styles.container}>
      <div className={`${estadoBar ? styles.sidebar : styles.hide}`}>
        <SideBar onBar={setEstadoBar} estadoBar={estadoBar} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <Header estadoBar={estadoBar} onBar={setEstadoBar} />
        </div>
        <div className={styles.mainContent}>{children}</div>
      </div>
    </div>
  );
}
