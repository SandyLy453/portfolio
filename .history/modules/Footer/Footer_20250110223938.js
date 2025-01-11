import Image from "next/image";
import Link from "next/link";
import styles from './Footer.module.css'

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactInfo}>
                <Link className={styles.link}>
                    <Image src={'mail.png'} width={50} height={35} className={styles.icon}/>
                    <p className={styles.pageName}></p>
                </Link>
            </div>

            <p className={styles.copyright}>© Made by Sandy Ly</p>
        </footer>
    )
}