import { useState, useRef } from "react";
import styles from "./BeforeAfterSlider.module.css";
import Image from "next/image";
import { ComparisonSlider } from "react-comparison-slider";

export default function BeforeAfterSlider() {
    return (
        <div style={{ maxWidth: "700px", margin: "auto" }}>
            <ComparisonSlider
                aspectRatio="16:9" // Ensure correct aspect ratio
                defaultValue={50} // Initial slider position
                itemOne={
                    <Image
                        src="/camillu.png"
                        alt="Illustration of Camera"
                        layout="responsive"
                        width={700} // Set width to match container
                        height={400} // Adjust based on aspect ratio
                        priority // Ensures faster loading
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
                    />
                }
            />
        </div>
    );
}


