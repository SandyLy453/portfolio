import Image from "next/image";
import Link from "next/link";
import styles from './Footer.module.css'
import { Yuji_Syuku } from "next/font/google";

export default function Footer () {
    return (
        <footer className={styles.footer}> 
            <div className={styles.contactInfo}>

                <div className={styles.left}>
                    <p className={styles.greeting}>Let's connect!</p>

                    <Link href={"mailto:sandy.lyth453@gmail.com"} className={styles.link}>
                        <div className={styles.infoBox}>
                            <Image src={'/mail.png'} width={25} height={17.5} className={styles.icon}/>
                            <p className={styles.pageName}>sandy.lyth453@gmail.com</p>
                        </div>
                    </Link>

                    <Link href={"https://www.instagram.com/sansan_lyth?igsh=MThxOTR1ZTlyY3R1dw%3D%3D&utm_source=qr"} className={styles.link}>
                        <div className={styles.infoBox}>
                            <Image src={'/Insta.png'} width={25} height={25} className={styles.icon}/>
                            <p className={styles.pageName}>@sansan_lyth</p>
                        </div>
                    </Link>

                    <Link href={"https://www.linkedin.com/in/boisan-sandy-ly/"} className={styles.link}>
                        <div className={styles.infoBox}>
                            <Image src={'/linkedIn.png'} width={25} height={25} className={styles.icon}/>
                            <p className={styles.pageName}>/boisan-sandy-ly/</p>
                        </div>
                    </Link>

                    <Link href={"/Sandy_Ly_Resume.pdf"} className={styles.link} target="_blank" rel="noopener noreferrer">
                        <div className={styles.infoBox}>
                            <Image src={'/resumeIcon.png'} width={17.5} height={25} className={styles.iconR}/>
                            <p className={styles.pageName}>Resume</p>
                        </div>
                    </Link>
                </div>

                <div className={styles.right}>
                    <Image src={'/logo-2.png'} alt="logo" className={styles.logo} width={200} height={115} />
                </div>

            </div>

            <p className={styles.copyright}>© Made by Sandy Ly • 2025</p>
        </footer>
    )
}