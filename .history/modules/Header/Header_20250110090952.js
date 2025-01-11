import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css'

export default function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src={'/logo.png'} alt="logo" className={styles.logo} width={100} height={37.5} />
            </div>

            <div className={styles.menu}>
                <p className={styles.menuOption}><Link href={'/'} className={styles.link}>Project</Link></p>
                <p className={styles.menuOption}><Link href={'/about'} className={styles.link}>About me</Link></p>
            </div>
        </header>
    )
}