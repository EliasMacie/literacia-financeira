import styles from './SideBar.module.css'
import SideBarBody from './components/sideBarBody/SideBarBody'
import SideBarHeader from './components/sideBarHeader/SideBarHeader'

type Props = {
    estadoBar: boolean;
    onBar: (estado: boolean) => void;
}

export default function SideBar({onBar, estadoBar}: Props) {

    return (
        <>
            <div className={styles.sideBarHeader}>
                <SideBarHeader onBar={onBar} estadoBar={estadoBar}/>
            </div>

            <nav className={styles.sideBarBody}>
                <SideBarBody/>
            </nav>

            {/* <div className={styles.sideBarFooter}>
                SideBarFooter
            </div> */}
        </>
    )
}