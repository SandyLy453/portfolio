import { useState } from "react";
import styles from "./BeforeAfterSlider.module.css";

export default function BeforeAfterSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleMouseMove = (e) => {
        const container = e.target.closest(`.${styles.sliderContainer}`);
        if (container) {
            const rect = container.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const percentage = (offsetX / rect.width) * 100;
            setSliderPosition(percentage);
        }
    };

    return (
        <div className={styles.sliderContainer} onMouseMove={handleMouseMove}>
            <div className={styles.imageWrapper}>
                {/* Background image (Right side) */}
                <img src="/camreal.png" alt="Real Camera" className={styles.fullImage} />

                {/* Foreground image (Left side) */}
                <div className={styles.overlay} style={{ width: `${sliderPosition}%` }}>
                    <img src="/camillu.png" alt="Illustration" className={styles.fullImage} />
                </div>
            </div>

            {/* Slider Handle */}
            <div className={styles.sliderHandle} style={{ left: `${sliderPosition}%` }}>
                <span className={styles.handleIcon}>↔</span>
            </div>
        </div>
    );
}


