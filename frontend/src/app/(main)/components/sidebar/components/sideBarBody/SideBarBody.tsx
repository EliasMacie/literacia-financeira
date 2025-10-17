'use client'

import Link from "next/link";
import styles from "./SideBarBody.module.css"
import { useState } from "react";

export default function SideBarBody(){

    const [ativo, setAtivo] = useState("home");

    return(
        <ul className={styles.navList}>
            <li className={`${styles.navItem} ${styles.icone} ${ativo == "home"? styles.ativo : ""} `} onClick={() => setAtivo("home")}>
                <Link href={"./"} className={styles.navLink} ><i className={`bi bi-house-fill ${styles.icone}`} ></i><span>Home</span></Link>
            </li>
            <li className={`${styles.navItem} ${ativo == "course"? styles.ativo : ""}`} onClick={() => setAtivo("course")}>
                <Link href={"./courses"}  className={styles.navLink} ><i className={`bi bi-journal-bookmark-fill ${styles.icone}`}></i><span>Course</span></Link>
            </li>
            <li className={`${styles.navItem} ${ativo == "dashboard"? styles.ativo : ""}`} onClick={() => setAtivo("dashboard")}>
                <Link href={"./dashboard"} className={styles.navLink} ><i className={`bi bi-speedometer2 ${styles.icone}`}></i><span>Dashboard</span></Link>
            </li>
            <li className={`${styles.navItem} ${styles.icone} ${ativo == "support"? styles.ativo : ""}`} onClick={() => setAtivo("support")}>
                <Link href={"./support"} className={styles.navLink} ><i className={`bi bi-headset ${styles.icone}`}></i>Support</Link>
            </li>
        </ul>
    )
}