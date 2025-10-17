'use client'

import { useState } from 'react'
import styles from './SideBarHeader.module.css'

type Props = {
    estadoBar: boolean;
    onBar: (estado: boolean) => void;
};

export default function SideBarHeader({onBar, estadoBar}: Props) {

    return(
        <>
            <div className={styles.logo}>Logo</div>
            <div className={styles.button}><i className={`bi bi-list ${styles.icone}`} onClick={() => onBar(false)}></i></div>
        </>
    )
}