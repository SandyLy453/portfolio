import Image from "next/image";
import Link from "next/link";
import styles from './Footer.module.css'

export default function Footer () {
    return (
        <footer className={styles.footer}> 
            <div className={styles.contactInfo}>

                <div className={styles.left}>
                    <p className={styles.greeting}>Let connect!</p>

                    <div className={styles.infoBox}>
                        <Image src={'/mail.png'} width={25} height={17.5} className={styles.icon}/>
                        <p className={styles.pageName}>sandy.lyth453@gmail.com</p>
                    </div>

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

                    <Link href={"https://www.linkedin.com/in/boisan-sandy-ly/"} className={styles.link}>
                        <div className={styles.infoBox}>
                            <Image src={'/resumeIcon.png'} width={17.5} height={25} className={styles.icon}/>
                            <p className={styles.pageName}>Resume</p>
                        </div>
                    </Link>
                </div>

                <div className={styles.right}>
                    <Image src={'/logo-2.png'} alt="logo" className={styles.logo} width={200} height={115} />
                </div>

            </div>

            <p className={styles.copyright}>© Made by Sandy Ly</p>
        </footer>
    )
}