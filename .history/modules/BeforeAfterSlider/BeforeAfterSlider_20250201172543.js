import { useState, useRef } from "react";
import styles from "./BeforeAfterSlider.module.css";
import { ComparisonSlider, ComparisonSliderImage } from "react-comparison-slider";

export default function BeforeAfterSlider() {
    return (
        <div style={{ maxWidth: "700px", margin: "auto" }}>
            <ComparisonSlider
                defaultValue={50} // Initial slider position (50% split)
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


