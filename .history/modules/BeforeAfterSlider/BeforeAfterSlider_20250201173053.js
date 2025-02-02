import { useState, useRef } from "react";
import styles from "./BeforeAfterSlider.module.css";
import { ComparisonSlider } from "react-comparison-slider";

export default function BeforeAfterSlider() {
    return (
        <div style={{ maxWidth: "700px", margin: "auto" }}>
            <ComparisonSlider
                aspectRatio="16:9" // Ensure correct aspect ratio
                defaultValue={50} // Initial slider position
                itemOne={<img src="/camillu.png" alt="Illustration of Camera" style={{ width: "100%" }} />}
                itemTwo={<img src="/camreal.png" alt="Real Camera" style={{ width: "100%" }} />}
            />
        </div>
    );
}


