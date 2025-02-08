import Image from "next/image";
import { ComparisonSlider } from "react-comparison-slider";
import styles from "./BeforeAfterSlider2.module.css"; // Import CSS for styling

export default function BeforeAfterSlider2() {
    return (
        <div className={styles.sliderContainer}>
            <ComparisonSlider
                aspectRatio="16:9" // Maintain proper aspect ratio
                defaultValue={50} // ✅ Sets slider at 50% (center)
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
