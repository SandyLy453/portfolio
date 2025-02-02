import { useState, useRef } from "react";
import styles from "./BeforeAfterSlider.module.css";
import { ComparisonSlider, ComparisonSliderImage } from "react-comparison-slider";

export default function BeforeAfterSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const newPosition = (offsetX / rect.width) * 100;
            if (newPosition >= 0 && newPosition <= 100) {
                setSliderPosition(newPosition);
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={styles.sliderContainer}
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
        >
            <div className={styles.imageWrapper}>
                {/* Right Side (Real Camera) */}
                <img src="/camreal.png" alt="Real Camera" className={styles.fullImage} />

                {/* Left Side (Illustration) */}
                <div className={styles.overlay} style={{ width: `${sliderPosition}%` }}>
                    <img src="/camillu.png" alt="Illustration" className={styles.fullImage} />
                </div>
            </div>

            {/* Slider Handle (Movable Divider) */}
            <div className={styles.sliderHandle} style={{ left: `${sliderPosition}%` }}>
                <span className={styles.handleIcon}>↔</span>
            </div>
        </div>
    );
}


