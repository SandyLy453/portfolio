import { useState, useRef } from "react";
import styles from "./BeforeAfterSlider.module.css";
import { ComparisonSlider, ComparisonSliderImage } from "react-comparison-slider";

export default function BeforeAfterSlider() {
    return (
        <div style={{ maxWidth: "700px", margin: "auto" }}>
            <ComparisonSlider
                aspectRatio="16:9" // FIX: Ensure the aspect ratio is set correctly
                defaultValue={50} // Initial position at 50%
                itemOne={
                    <ComparisonSliderImage
                        src="/camillu.png"
                        alt="Illustration of Camera"
                    />
                }
                itemTwo={
                    <ComparisonSliderImage
                        src="/camreal.png"
                        alt="Real Camera"
                    />
                }
            />
        </div>
    );
}


