import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from './ShowCase.module.css'

export default function ShowCase() {
    const tags = ["Me", "UX/UI", "Graphic", "Other"];
    const images = {
        "Me": "/me.jpg",
        "UX/UI": "/ux-ui.jpg",
        "Graphic": "/graphic.jpg",
        "Other": "/other.jpg",
    };

    const [activeTag, setActiveTag] = useState(tags[0]);
    const intervalRef = useRef(null);

    // Function to start looping
    const startLoop = () => {
        intervalRef.current = setInterval(() => {
            setActiveTag((prevTag) => {
                const currentIndex = tags.indexOf(prevTag);
                return tags[(currentIndex + 1) % tags.length];
            });
        }, 4000);
    };

    // Start auto-looping when component mounts
    useEffect(() => {
        startLoop();
        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, []);

    // Function to pause loop on hover or press
    const handlePause = (tag) => {
        clearInterval(intervalRef.current);
        setActiveTag(tag);
    };

    // Function to resume loop when not hovered/pressed
    const handleResume = () => {
        startLoop();
    };

    return(
        <div className={styles.container}>
            <div className={styles.tagBox}>
                <div className={styles.tag}>
                    <p>Me</p>
                </div>
                <div className={styles.tag}>
                    <p>UX/UI</p>
                </div>
                <div className={styles.tag}>
                    <p>Graphic</p>
                </div>
                <div className={styles.tag}>
                    <p>Other</p>
                </div>
            </div>

            <div className={styles.photo}>

            </div>
        </div>
    )    
}



