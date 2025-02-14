import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from './ShowCase.module.css'

export default function ShowCase() {
    const tags = ["Me", "UX/UI", "Graphic", "Other"];
    const images = {
        "Me": "/card-holder.png",
        "UX/UI": "/card-holder.pngg",
        "Graphic": "/card-holder.png",
        "Other": "/card-holder.png",
    };

    const [activeTag, setActiveTag] = useState(tags[0]);
    const intervalRef = useRef(null);

    const startLoop = () => {
        intervalRef.current = setInterval(() => {
            setActiveTag((prevTag) => {
                const currentIndex = tags.indexOf(prevTag);
                return tags[(currentIndex + 1) % tags.length];
            });
        }, 4000);
    };

    useEffect(() => {
        startLoop();
        return () => clearInterval(intervalRef.current); 
    }, []);

    const handlePause = (tag) => {
        clearInterval(intervalRef.current);
        setActiveTag(tag);
    };

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



