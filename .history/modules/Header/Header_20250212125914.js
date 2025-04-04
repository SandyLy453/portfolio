import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css'
import { useRef } from "react";

export default function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href={'/'}>
                    <Image src={'/logo.png'} alt="logo" className={styles.logo} width={55} height={53} />
                </Link>
            </div>

            <div className={styles.menu}>
                <p className={styles.menuOption}><Link href={'/'} className={styles.link}>Home</Link></p>
                <p className={styles.menuOption}><Link href={'/about'} className={styles.link}>About me</Link></p>
            </div>
        </header>
    )
}