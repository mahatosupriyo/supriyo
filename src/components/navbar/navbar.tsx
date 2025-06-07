import Link from 'next/link'
import styles from './navbar.module.scss'

export default function NavBar() {
    return (


        <nav className={styles.navbar} >
            <Link href="/" className={styles.logo}>Supriyo M.</Link>
            <div className={styles.menu}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </nav >

    )
}