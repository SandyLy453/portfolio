import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/CrafterConnect.module.css'

export default function CrafterConnect() {

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
                    title="CrafterConnect"
                    date="By CrafterConnects Team | 2024"
                />

            <div className={styles.intro}>
                <Image src={'/aether.gif'} alt="aether logo" className={styles.gifOne} width={144*4} height={102*4}/>
                <div className={styles.text}>
                    <h2 className={styles.subHeading}>
                        Timeline
                    </h2>
                    <p className={styles.content}>
                        Febyary 2024 - May 2024
                    </p>
                    <h2 className={styles.subHeading}>
                        Role
                    </h2>
                    <p className={styles.content}>
                        UX/UI Designer | Researcher
                    </p>
                    <h2 className={styles.subHeading}>
                        Tools
                    </h2>
                    <p className={styles.content}>
                        Figma, Adobe Illutrators
                    </p>

                    <Link 
                        href="https://www.figma.com/proto/7NULAtnjrj1iwbcx0juovm/Crafter-Connect-IDSP?page-id=0%3A1&node-id=1-3088&p=f&viewport=-1449%2C-216%2C0.31&t=AZDIWVeJBFLKDLVq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3088" 
                        className={styles.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <button className={styles.button}>
                            Figma
                        </button>
                    </Link>
                </div>
            </div>

            <div className={styles.sectionBreaker}>
                <span> Problem </span>
            </div>

            <div className={styles.middle}>
                <div className={styles.text}>
                    <h2 className="subHeading">
                        What was the problem?
                    </h2>
                    <p className={styles.content}>
                        We discovered that completing paperwork can take an individual up to <span className={styles.span}>30 days</span> a year, and for caregivers, it often takes even longer. Most forms are highly stressful and challenging to fill out due to their complexity, lengthy content, and occasionally unclear instructions.
                    </p>
                </div>

                <div className={styles.text}>
                    <h2 className="subHeading">
                        How did we solve this?
                    </h2>
                    <p className={styles.content}>
                        To solve this problem, we created <span className={styles.span}>Aether</span>. With <span className={styles.span}>Aether</span>, filling out forms becomes easier, faster, and significantly less stressful.
                    </p>
                </div>
            </div>
            
            <div className={styles.sectionBreaker}>
                <span> Research </span>
            </div>

            <div className={styles.infoSection}>
                <h2 className="subHeading">
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

            <div className={styles.feature}>
                <h2 className="subHeading">
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
                <h2 className="subHeading">
                    Promote Video
                </h2>
            </div>
            </main>

            <Footer />
        </>
    )
}

