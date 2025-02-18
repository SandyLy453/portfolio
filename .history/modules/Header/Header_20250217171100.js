import Image from "next/image";
import Link from "next/link";
import styles from './Header.module.css';
import { useState, useRef } from "react";

export default function Header() {
    const audioRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; 
            audioRef.current.play().catch(error => console.log("Audio playback error:", error));
        }
    };

    return (
        <header className={`${styles.header} ${menuOpen ? styles.headerExpanded : ""}`}>
            {/* Logo */}
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

            {/* Hamburger / Arrow Toggle */}
            <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                <Image 
                    src={menuOpen ? "/menuOpen.png" : "/menuIcon.png"}
                    alt="Menu Toggle" 
                    width={50} 
                    height={35} 
                />
            </button>

            {/* Menu Items (Expands inside header) */}
            <nav className={`${styles.menu} ${menuOpen ? styles.menuExpanded : ""}`}>
                <p className={styles.menuOption}><Link href={'/'} className={styles.link}>Home</Link></p>
                <p className={styles.menuOption}><Link href={'/project'} className={styles.link}>Projects</Link></p>
                <p className={styles.menuOption}><Link href={'/about'} className={styles.link}>About me</Link></p>
            </nav>

            <audio ref={audioRef} src="/cat.wav" preload="auto"></audio>
        </header>
    );
}


