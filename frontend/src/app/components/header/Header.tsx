import styles from "./Header.module.css"

export default function Header() {

    return(
        <>
            <h1 className={styles.titulo}>Nome da Empresa</h1>
            <div className={styles.opcoes}>
                <i className={`bi bi-gear-fill ${styles.icone}`}></i>
                <i className={`bi bi-bell-fill ${styles.icone}`}></i>
                <i className={`bi bi-person-circle ${styles.icone}`}></i>
            </div>
        </>
    )
}