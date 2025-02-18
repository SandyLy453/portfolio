import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css'
import { useState, useRef } from "react";

export default function Header () {
    const audioRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

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

            {/* Full menu for large screens */}
            <nav className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
                <p className={styles.menuOption}><Link href={'/'} className={styles.link}>Home</Link></p>
                <p className={styles.menuOption}><Link href={'/project'} className={styles.link}>Projects</Link></p>
                <p className={styles.menuOption}><Link href={'/about'} className={styles.link}>About me</Link></p>
            </nav>

            {/* Hamburger Menu Icon (Only visible on small screens) */}
            <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                <Image 
                    src={'/menuIcon.png'} 
                    alt="Menu" 
                    width={40} 
                    height={40} 
                />
            </button>

            <audio ref={audioRef} src="/cat.wav" preload="auto"></audio>
        </header>
    )
}