import { useState, useRef } from "react";
import Image from "next/image";
import { ComparisonSlider } from "react-comparison-slider";
import styles from "./BeforeAfterSlider.module.css"; // ✅ Import your CSS file

export default function BeforeAfterSlider() {
    return (
        <div className={styles.sliderContainer}>
            <ComparisonSlider
                aspectRatio="1:1" 
                defaultValue={50} 
                handle={
                    <div className={styles.sliderHandle}>
                        ↔
                    </div>
                }
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



