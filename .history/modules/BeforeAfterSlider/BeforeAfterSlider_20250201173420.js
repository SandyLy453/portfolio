import { useState, useRef } from "react";
import Image from "next/image";
import { ComparisonSlider } from "react-comparison-slider";
import styles from "./BeforeAfterSlider.module.css"; // ✅ Import your CSS file

export default function BeforeAfterSlider() {
    return (
        <div className={styles.sliderContainer}>
            <ComparisonSlider
                aspectRatio="16:9" // Ensure correct aspect ratio
                defaultValue={50} // Initial slider position
                itemOne={
                    <Image
                        src="/camillu.png"
                        alt="Illustration of Camera"
                        layout="responsive"
                        width={700} 
                        height={400} 
                        priority
                        className={styles.sliderImage}
                    />
                }
                itemTwo={
                    <Image
                        src="/camreal.png"
                        alt="Real Camera"
                        layout="responsive"
                        width={700}
                        height={400}
                        priority
                        className={styles.sliderImage}
                    />
                }
            />
        </div>
    );
}



