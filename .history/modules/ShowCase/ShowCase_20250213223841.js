import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from './ShowCase.module.css';
import Link from "next/link";

export default function ShowCase() {
    const tags = ["Me", "UX/UI", "Graphic", "Other"];
    const images = {
        "Me": "/me.png",
        "UX/UI": "/uxui.png",
        "Graphic": "/card-holder.png",
        "Other": "/ava.png",
    };

    const [activeTag, setActiveTag] = useState(tags[0]);
    const [isFading, setIsFading] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    const startLoop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setIsFading(true); 
            setTimeout(() => {
                setActiveTag((prevTag) => {
                    const currentIndex = tags.indexOf(prevTag);
                    return tags[(currentIndex + 1) % tags.length];
                });
                setIsFading(false); 
            }, 1000);
        }, 4000);
    };

    useEffect(() => {
        if (!isPaused) startLoop();
        return () => clearInterval(intervalRef.current); 
    }, [isPaused]);

    useEffect(() => {
        startLoop();
        return () => clearInterval(intervalRef.current);
    }, []);

    const handlePause = (tag) => {
        clearInterval(intervalRef.current); 
        setIsPaused(true);
        setActiveTag(tag);
        setIsFading(false);
    };

    const handleResume = () => {
        setIsPaused(false); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.tagBox}>
                {tags.map((tag) => (
                    <div
                        key={tag}
                        className={`${styles.tag} ${activeTag === tag ? styles.active : ""}`}
                        onMouseEnter={() => handlePause(tag)}
                        onMouseLeave={handleResume}
                        onTouchStart={() => handlePause(tag)}
                        onTouchEnd={handleResume}
                    >
                        <p>{tag}</p>
                    </div>
                ))}
            </div>

            <div className={styles.right}>
                <div className={styles.photoBox}>
                    <Image
                        key={activeTag} 
                        src={images[activeTag]}
                        alt={activeTag}
                        width={600}
                        height={460}
                        className={`${styles.photo} ${isFading ? styles.fadeOut : styles.fadeIn}`}
                    />
                </div>

                <div className={styles.loadMoreContainer}>
                    <Link 
                        href="/project" 
                        className={styles.loadMoreButton}
                        scroll={true}
                    >
                        <button className={styles.loadMoreButton}>
                            More Projects
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}
