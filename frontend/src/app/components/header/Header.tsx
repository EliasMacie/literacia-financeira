import styles from "./Header.module.css"

type Props = {
    estadoBar: boolean;
    onBar: (estado: boolean) => void;
}

export default function Header({estadoBar, onBar}: Props) {

    return(
        <>
            <div className={`${estadoBar? styles.hide : styles.button}`}><i className={`bi bi-list ${styles.icone1}`} onClick={() => onBar(true)}></i></div>
            <div className={styles.opcoes}>
                <i className={`bi bi-gear-fill ${styles.icone}`}></i>
                <i className={`bi bi-bell-fill ${styles.icone}`}></i>
                <i className={`bi bi-person-circle ${styles.icone}`}></i>
            </div>
        </>
    )
}