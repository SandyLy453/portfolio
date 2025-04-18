import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css'
import { useState, useRef } from "react";

export default function Header () {
    const audioRef = useRef(null);
    const [openMenu, setOpenMenu] = useState()

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; 
            audioRef.current.play().catch(error => console.log("Audio playback error:", error));
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href={'/'}>
                    <Image 
                        src={'/logo.png'} 
                        alt="logo" 
                        className={styles.logo} 
                        width={55} 
                        height={53} 
                        onMouseEnter={playSound}
                    />
                </Link>
            </div>

            <div className={styles.menu}>
                <p className={styles.menuOption}><Link href={'/'} className={styles.link}>Home</Link></p>
                <p className={styles.menuOption}><Link href={'/project'} className={styles.link}>Projects</Link></p>
                <p className={styles.menuOption}><Link href={'/about'} className={styles.link}>About me</Link></p>
            </div>

            <audio ref={audioRef} src="/cat.wav" preload="auto"></audio>
        </header>
    )
}