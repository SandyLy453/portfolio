import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Aether.module.css'
import BeforeAfterSlider from "@/modules/BeforeAfterSlider/BeforeAfterSlider";

export default function Aether() {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    const personaImages = [
        { src: "/persona1.png", alt: "Persona 1" },
        { src: "/persona2.png", alt: "Persona 2" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [feature, setFeature] = useState("library")

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === personaImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? personaImages.length - 1 : prevIndex - 1
        );
    };

    const handleFeatureChange = (f) => {
        setFeature(f)
    }

    return (
        <>
            <Header />

            <main className={styles.body}>
                <PostHeader 
                    title="Aether - Saving time for what matter the most"
                    date="By Aether Team | 2024"
                />

            <div className={styles.intro}>
                <Image src={'/aether.gif'} alt="aether logo" className={styles.gifOne} width={140*4} height={100*4}/>
                <div className={styles.topText}>
                    <h2 className={styles.subHeading}>
                        Timeline
                    </h2>
                    <p className={styles.content}>
                        September 2024 - December 2024
                    </p>
                    <h2 className={styles.subHeading}>
                        Role
                    </h2>
                    <p className={styles.content}>
                        UX/UI Designer | Front-end Developer | Researcher
                    </p>
                    <h2 className={styles.subHeading}>
                        Tools
                    </h2>
                    <p className={styles.content}>
                        Figma, Adobe Illutrators, NextJS, React
                    </p>
                </div>
            </div>

            <div className={styles.sectionBreaker}>
                <span> Introduction </span>
            </div>

            <div className={styles.middle}>
                <div className={styles.text}>
                    <h2 className={styles.subHeading}>
                        What is Aether?
                    </h2>
                    <p className={styles.content}>
                        <span className={styles.span}>Aether</span> is an AI-powered form-filling application designed to enhance efficiency, usability, and reduce stress in completing paperwork. The app features a comprehensive form library containing commonly used documents, allowing users to access and fill out forms seamlessly. Additionally, a built-in scanning feature enables caregivers to digitize and process external or unprovided forms. Leveraging AI technology, scanned documents are automatically simplified and clarified for better understanding. <span className={styles.span}>Aether</span> also supports multi-profile management, enabling caregivers to quickly auto-fill forms while retaining the flexibility to manually edit details as needed.
                    </p>
                </div>

                <div className={styles.text}>
                    <h2 className={styles.subHeading}>
                        What was the painpoint?
                    </h2>
                    <p className={styles.content}>
                        Research revealed that individuals may spend up to <span className={styles.span}>30 days</span> per year completing paperwork, with caregivers experiencing even longer durations. The complexity, extensive content, and occasionally ambiguous instructions of most forms contribute to significant stress and difficulty in the completion process.
                    </p>
                </div>
            </div>
            
            <div className={styles.sectionBreaker}>
                <span> Research </span>
            </div>

            <div className={styles.infoSection}>
                <h2 className={styles.subHeading}>
                    Persona
                </h2>

                {/* Custom Slider */}
                <div className={styles.slider}>
                    <button
                    className={styles.sliderButton}
                    onClick={handlePrev}
                    aria-label="Previous"
                    >
                    &#8592;
                    </button>

                    <div className={styles.imageContainer}>
                    <Image
                        src={personaImages[currentIndex].src}
                        alt={personaImages[currentIndex].alt}
                        width={850 / 1.5}
                        height={1100 / 1.5}
                        className={styles.persona}
                    />
                    </div>

                    <button
                    className={styles.sliderButton}
                    onClick={handleNext}
                    aria-label="Next"
                    >
                    &#8594;
                    </button>
                </div>
            </div>

            <div className={styles.sectionBreaker}>
                <span> About the App </span>
            </div>

            <div className={styles.figma}>
                <h2 className={styles.subHeading}>
                    Wireframe
                </h2>

                <BeforeAfterSlider 
                    ratio="1:1.5"
                    image1="/lofi1.png"
                    image2="/hifi1.png"
                    alt1="Lofi Wireframe"
                    alt2="Hifi Wireframe"
                    width="975"
                    height="675"
                />
            </div>

            <div className={styles.feature}>
                <h2 className={styles.subHeading}>
                    Key Features
                </h2>

                <div className={styles.toggle}>
                    <button
                        className={feature === "library" ? styles.active : styles.sleep}
                        onClick={() => handleFeatureChange("library")}
                    >
                        Form Library
                    </button>
                    <button
                        className={feature === "scan" ? styles.active : styles.sleep}
                        onClick={() => handleFeatureChange("scan")}
                    >
                        Document Scanning
                    </button>
                    <button
                        className={feature === "fill" ? styles.active : styles.sleep}
                        onClick={() => handleFeatureChange("fill")}
                    >
                        Document Filling
                    </button>
                    <button
                        className={feature === "accessibility" ? styles.active : styles.sleep}
                        onClick={() => handleFeatureChange("accessibility")}
                    >
                        Accessibility
                    </button>
                </div>

                {feature === "library" && (
                    <div className={styles.box}>
                        <Image src={'/library.png'} alt="library feature" width={500} height={500} className={styles.feaImage} />
                        <p className={styles.des}>
                            Simplify your caregiving tasks with Aether's Forms Library. Our collection of common forms is designed to help caregivers quickly find and start filling out essential documents, saving time and reducing stress.
                        </p>
                    </div>
                )}

                {feature === "scan" && (
                    <div className={styles.box}>
                        <Image src={'/scan.png'} alt="scan feature" width={500} height={500} className={styles.feaImage} />
                        <p className={styles.des}>
                            Aether is here to make life easier for caregivers. With our advanced scanning feature, simply scan any document, and our AI (ChatOpen) will instantly simplify the content, breaking down complex language into clear, caregiver-friendly terms. Focus on care, not paperwork!
                        </p>
                    </div>
                )}

                {feature === "fill" && (
                    <div className={styles.box}>
                        <Image src={'/fill.png'} alt="fill feature" width={500} height={500} className={styles.feaImage} />
                        <p className={styles.des}>
                            Aether makes filling out forms a breeze for caregivers. Use our autofill feature to quickly populate forms with information from saved profiles. Need to make adjustments? Caregivers can manually edit or update details anytime, ensuring accuracy and flexibility for every document.
                        </p>
                    </div>
                )}

                {feature === "accessibility" && (
                    <div className={styles.box}>
                        <Image src={'/accessibility.png'} alt="accessibility feature" width={500} height={500} className={styles.feaImage} />
                        <p className={styles.des}>
                            At Aether, we prioritize accessibility to ensure every caregiver can comfortably use our app. Choose from various font size options for easy reading, and switch to dark mode for a more eye-friendly experience. Because everyone deserves a seamless and inclusive user experience.
                        </p>
                    </div>
                )}
            </div>

            <div className={styles.sectionBreaker}>
                <span> Commercial </span>
            </div>
            
            <div className={styles.video}>
                <h2 className={styles.subHeading}>
                    Promote Video
                </h2>

                <video 
                    className={styles.video} 
                    controls 
                    width="100%" 
                    height="auto"
                >
                    <source src="/aether.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            </main>

            <Footer />
        </>
    )
}

