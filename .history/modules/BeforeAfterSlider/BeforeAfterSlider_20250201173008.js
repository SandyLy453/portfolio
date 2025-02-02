import { useState, useRef } from "react";
import styles from "./BeforeAfterSlider.module.css";
import { ComparisonSlider, ComparisonSliderImage } from "react-comparison-slider";

export default function BeforeAfterSlider() {
    return (
        <div style={{ maxWidth: "700px", margin: "auto" }}>
            <ComparisonSlider
                aspectRatio="16:9" // Ensure correct aspect ratio
                defaultValue={50} // Initial slider position
                itemOne={{ imageUrl: "/camillu.png" }} // Pass URL as a string
                itemTwo={{ imageUrl: "/camreal.png" }} // Pass URL as a string
            />
        </div>
    );
}


