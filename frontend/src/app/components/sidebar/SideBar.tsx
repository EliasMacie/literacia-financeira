import styles from './SideBar.module.css'
import SideBarBody from './components/sideBarBody/SideBarBody'
import SideBarHeader from './components/sideBarHeader/SideBarHeader'

export default function SideBar() {

    return (
        <>
            <div className={styles.sideBarHeader}>
                <SideBarHeader/>
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