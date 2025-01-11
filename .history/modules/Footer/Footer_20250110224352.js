import Image from "next/image";
import Link from "next/link";
import styles from './Footer.module.css'

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactInfo}>
                <div className={styles.infoBox}>
                    <Image src={'/mail.png'} width={25} height={17.5} className={styles.icon}/>
                    <p className={styles.pageName}>sandy.lyth453@gmail.com</p>
                </div>

                <Link href={"/"} className={styles.link}>
                    <div className={styles.infoBox}>
                        <Image src={'/mail.png'} width={25} height={17.5} className={styles.icon}/>
                        <p className={styles.pageName}>sandy.lyth453@gmail.com</p>
                    </div>
                </Link>

                <Link href={"/"} className={styles.link}>
                    <div className={styles.infoBox}>
                        <Image src={'/mail.png'} width={25} height={17.5} className={styles.icon}/>
                        <p className={styles.pageName}>sandy.lyth453@gmail.com</p>
                    </div>
                </Link>
            </div>

            <p className={styles.copyright}>© Made by Sandy Ly</p>
        </footer>
    )
}