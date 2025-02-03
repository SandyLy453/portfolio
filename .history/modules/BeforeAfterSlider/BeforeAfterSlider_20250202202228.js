import { useState, useRef } from "react";
import Image from "next/image";
import { ComparisonSlider } from "react-comparison-slider";
import styles from "./BeforeAfterSlider.module.css"; 

export default function BeforeAfterSlider({
    image1,
    image2,
    alt1,
    alt2,
    width,
    height,
    ratio
}) {
    return (
        <div className={styles.sliderContainer}>
            <ComparisonSlider
                aspectRatio= {ratio}
                defaultValue={50} 
                handle={() => <div className={styles.sliderHandle}>↔</div>}
                itemOne={
                    <Image
                        src={image1}
                        alt={alt1}
                        layout="responsive"
                        width={width} 
                        height={height} 
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



