import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from './ShowCase.module.css';
import Link from "next/link";

export default function ShowCase() {
    const tags = ["UX/UI", "Graphic", "Illutration"];
    const images = {
        "UX/UI": "/uxui.png",
        "Graphic": "/3can.png",
        "Illutration": "/illu.png",
    };
    const bigText = ["Sandy", "App Design & Develop", "Graphic Design"];
    const smallText = [
        "Passionate about creating designs that are both beautiful and easy to navigate.", 
        "Focused on crafting seamless, user-friendly experiences that enhance digital interactions.", 
        "Bringing ideas to life through bold visuals, color, and creativity."
    ];
    const linkPath = ["/about", "/project", "/project"];
    const linkText = ["About Me →", "See More Project →", "See More Project →"];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    const startLoop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % tags.length);
                setIsFading(false);
            }, 500);
        }, 4000);
    };

    useEffect(() => {
        if (!isPaused) startLoop();
        return () => clearInterval(intervalRef.current);
    }, [isPaused]);

    const handlePause = (index) => {
        clearInterval(intervalRef.current);
        setIsPaused(true);
        setActiveIndex(index);
        setIsFading(false);
    };

    const handleResume = () => {
        setIsPaused(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.tagBox}>
                {tags.map((tag, index) => (
                    <div
                        key={tag}
                        className={`${styles.tag} ${activeIndex === index ? styles.active : ""}`}
                        onMouseEnter={() => handlePause(index)}
                        onMouseLeave={handleResume}
                        onTouchStart={() => handlePause(index)}
                        onTouchEnd={handleResume}
                    >
                        <p>{tag}</p>
                    </div>
                ))}
            </div>

            <div className={styles.right}>
                <div className={styles.photoBox}>
                    <Image
                        key={tags[activeIndex]}
                        src={images[tags[activeIndex]]}
                        alt={tags[activeIndex]}
                        width={600}
                        height={460}
                        className={`${styles.photo} ${isFading ? styles.fadeOut : styles.fadeIn}`}
                    />

                    <div className={styles.gradient}></div>
                    <div className={styles.text}>
                        <p className={styles.big}>{bigText[activeIndex]}</p>
                        <p className={styles.small}>{smallText[activeIndex]}</p>
                        <Link href={linkPath[activeIndex]} className={styles.littleLink}>
                            {linkText[activeIndex]}
                        </Link>
                    </div>
                </div>

                {/* <div className={styles.loadMoreContainer}>
                    <Link href="/project" passHref>
                        <button className={styles.loadMoreButton}>
                            More Projects
                        </button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
}




