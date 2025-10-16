import styles from './SideBarHeader.module.css'

export default function SideBarHeader() {

    return(
        <>
            <div className={styles.logo}>Logo</div>
            <div className={styles.button}><i className={`bi bi-list ${styles.icone}`}></i></div>
        </>
    )
}