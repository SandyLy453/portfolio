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
                        width={width} 
                        height={height} 
                        priority
                        className={styles.sliderImage}
                    />
                }
                itemTwo={
                    <Image
                        src={image2}
                        alt={alt2}
                        width={width}
                        height={height}
                        priority
                        className={styles.sliderImage}
                    />
                }
            />
        </div>
    );
}



