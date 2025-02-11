import { useState, useEffect } from "react";
import { useCallback } from "react";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Aether.module.css'
import BeforeAfterSlider from "@/modules/BeforeAfterSlider/BeforeAfterSlider";
import Link from "next/link";

export default function Aether() {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    const personaImages = [
        { src: "/persona1.png", alt: "Persona 1" },
        { src: "/persona2.png", alt: "Persona 2" },
    ];

    const styleGuide = [
        { src: "/sg1.png", alt: "StyleGuide page 1" },
        { src: "/sg2.png", alt: "StyleGuide page 2" },
        { src: "/sg3.png", alt: "StyleGuide page 3" },
        { src: "/sg4.png", alt: "StyleGuide page 4" },
        { src: "/sg5.png", alt: "StyleGuide page 5" },
        { src: "/sg6.png", alt: "StyleGuide page 6" },
        { src: "/sg7.png", alt: "StyleGuide page 7" },
        { src: "/sg8.png", alt: "StyleGuide page 8" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [feature, setFeature] = useState("library")
    const [styleGuideIndex, setStyleGuideIndex] = useState(0);

    const handleNextStyleGuide = useCallback(() => {
        setStyleGuideIndex((prevIndex) =>
            prevIndex === styleGuide.length - 1 ? 0 : prevIndex + 1
        );
    }, [styleGuide]);

    const handlePrevStyleGuide = useCallback(() => {
        setStyleGuideIndex((prevIndex) =>
            prevIndex === 0 ? styleGuide.length - 1 : prevIndex - 1
        );
    }, [styleGuide]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === personaImages.length - 1 ? 0 : prevIndex + 1
        );
    }, [personaImages]);
    
    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? personaImages.length - 1 : prevIndex - 1
        );
    }, [personaImages]);

    const handleFeatureChange = (f) => {
        setFeature(f)
    }

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, []);

    return (
        <>
            <Header />

            <main className={styles.body}>
                <PostHeader 
                    title="Aether - Saving time for what matter the most"
                    date="By Aether Team | 2024"
                />

                <div className={styles.intro}>
                    <Image src={'/aether.gif'} alt="aether logo" className={styles.gifOne} width={140*4} height={100*4} priority/>
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

                        <div className={styles.btnBox}>
                            <Link 
                                href="https://www.aether-app.ca/index.html" 
                                className={styles.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <button className={styles.button}>
                                    Blog
                                </button>
                            </Link>
                            <Link 
                                href="https://www.figma.com/proto/cklaQQCKDxNAyWR1mXcU1g/Aether?page-id=0%3A1&node-id=1-1103&p=f&viewport=-722%2C-1035%2C0.16&t=BtvPgixpd1eyIsQA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1373&show-proto-sidebar=1" 
                                className={styles.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <button className={styles.button}>
                                    Hifi Prototype
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Project background </span>
                </div>

                <div className={styles.middlee}>
                    <div className={styles.text}>
                        <h2 className={styles.subHeading}>
                            What is Ather?
                        </h2>
                        <p className={styles.content}>
                            <span className={styles.span}>Aether</span> is an AI-powered form-filling application designed to simplify paperwork management for caregivers. The project was developed to address the time-consuming and stressful process of handling complex documents, especially for those managing multiple profiles.
                        </p>
                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Problem Statement </span>
                </div>

                <div className={styles.middle}>
                    <div className={styles.text}>
                        <h2 className={styles.subHeading}>
                            What was the painpoint?
                        </h2>
                        <p className={styles.content}>
                            Research revealed that individuals may spend up to <span className={styles.span}>30 days</span> per year completing paperwork, with caregivers experiencing even longer durations. The complexity, extensive content, and occasionally ambiguous instructions of most forms contribute to significant stress and difficulty in the completion process.
                        </p>
                    </div>

                    <div className={styles.text}>
                        <h2 className={styles.subHeading}>
                            Who is target audience?
                        </h2>
                        <p className={styles.content}>
                            Caregivers managing multiple documents for different people.
                        </p>
                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Solution </span>
                </div>

                <div className={styles.middlee}>
                    <div className={styles.text}>
                        <h2 className={styles.subHeading}>
                            How does Aether make it easier?
                        </h2>
                        <p className={styles.content}>
                            The app features a comprehensive form library containing commonly used documents, allowing users to access and fill out forms seamlessly. Additionally, a built-in scanning feature enables caregivers to digitize and process external or unprovided forms. Leveraging AI technology, scanned documents are automatically simplified and clarified for better understanding. <span className={styles.span}>Aether</span> also supports multi-profile management, enabling caregivers to quickly auto-fill forms while retaining the flexibility to manually edit details as needed
                        </p>
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
                                    Simplify your caregiving tasks with Aether's Forms Library. Aether's collection of common forms is designed to help caregivers quickly find and start filling out essential documents, saving time and reducing stress.
                                </p>
                            </div>
                        )}

                        {feature === "scan" && (
                            <div className={styles.box}>
                                <Image src={'/scan.png'} alt="scan feature" width={500} height={500} className={styles.feaImage} />
                                <p className={styles.des}>
                                    Aether is here to make life easier for caregivers. With the app advanced scanning feature, simply scan any document, and the AI (ChatOpen) will instantly simplify the content, breaking down complex language into clear, caregiver-friendly terms. Focus on care, not paperwork!
                                </p>
                            </div>
                        )}

                        {feature === "fill" && (
                            <div className={styles.box}>
                                <Image src={'/fill.png'} alt="fill feature" width={500} height={500} className={styles.feaImage} />
                                <p className={styles.des}>
                                    Aether makes filling out forms a breeze for caregivers. Use the app autofill feature to quickly populate forms with information from saved profiles. Need to make adjustments? Caregivers can manually edit or update details anytime, ensuring accuracy and flexibility for every document.
                                </p>
                            </div>
                        )}

                        {feature === "accessibility" && (
                            <div className={styles.box}>
                                <Image src={'/accessibility.png'} alt="accessibility feature" width={500} height={500} className={styles.feaImage} />
                                <p className={styles.des}>
                                    At Aether, prioritizing accessibility to ensure every caregiver can comfortably use our app. Choose from various font size options for easy reading, and switch to dark mode for a more eye-friendly experience. Because everyone deserves a seamless and inclusive user experience.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                
                <div className={styles.sectionBreaker}>
                    <span> Research </span>
                </div>

                <div className={styles.infoSection}>
                    <h2 className={styles.subHeading}>
                        Persona
                    </h2>

                    <div className={styles. middlee}>
                        <p className={styles.content}>
                            To gain a deeper understanding of caregivers and the target audience for <span className={styles.span}>Aether</span>, an interview with real caregivers was conducted. Primary research involved interviewing multiple caregivers, while secondary research consisted of online studies. Insights from both research methods were combined to develop the personas shown below, ensuring a more user-centered interface design for <span className={styles.span}>Aether</span>.
                        </p>
                    </div>
                    
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
                    <span> Design Process </span>
                </div>

                <div className={styles.infoSection}>
                    <h2 className={styles.subHeading}>
                        Workflow
                    </h2>

                    <div className={styles. middlee}>
                        <p className={styles.content}>
                            To streamline the design process and improve clarity, a customer journey map was created to illustrate how caregivers navigate through the app. This workflow outlines key interactions and user touchpoints, ensuring a more intuitive experience.
                        </p>
                    </div>

                    <Image src={'/wf.png'} alt="Customer Journey Map" className={styles.wf} width={1000} height={400} />

                </div>

                <div className={styles.infoSection}>
                    <h2 className={styles.subHeading}>
                        Compertitive analysis
                    </h2>

                    <div className={styles. middlee}>
                        <p className={styles.content}>
                            A competitive analysis was conducted to refine insights and enhance design concepts, ensuring  <span className={styles.span}>Aether</span> stands out from other form-filling apps. This analysis helped identify strengths, weaknesses, and opportunities for a more user-friendly and distinctive experience.
                        </p>

                        <Image src={'/com.png'} alt="Customer Journey Map" className={styles.com} width={800} height={590} />
                    </div>
                </div>

                <div className={styles.infoSection}>
                    <h2 className={styles.subHeading}>
                        Styleguide
                    </h2>

                    {/* Custom Slider */}
                    <div className={styles.slider2}>
                        <button
                        className={styles.sliderButton2}
                        onClick={handlePrevStyleGuide}
                        aria-label="Previous"
                        >
                            &#8592;
                        </button>

                        <div className={styles.imageContainer2}>
                            <Image
                                src={styleGuide[styleGuideIndex].src}
                                alt={styleGuide[styleGuideIndex].alt}
                                width={432 *2}
                                height={307 *2}
                                className={styles.styleGuideImage}
                            />
                        </div>

                        <button
                        className={styles.sliderButton2}
                        onClick={handleNextStyleGuide}
                        aria-label="Next"
                        >
                            &#8594;
                        </button>
                    </div>
                </div>

                <div className={styles.figma}>
                    <h2 className={styles.subHeading}>
                        Wireframe (Lofi vs Hifi)
                    </h2>

                    <div className={styles.com}>
                        <BeforeAfterSlider 
                            ratio="10:7"
                            image1="/lofi1.png"
                            image2="/hifi1.png"
                            alt1="Lofi Wireframe"
                            alt2="Hifi Wireframe"
                            width="1000"
                            height="800"
                        />
                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Commercial </span>
                </div>
                
                <div className={styles.video}>
                    <h2 className={styles.subHeading}>
                        Promote Video
                    </h2>

                    <div className={styles. middlee}>
                        <p className={styles.content}>
                            To gain a deeper understanding of caregivers and the target audience for <span className={styles.span}>Aether</span>, an interview with real caregivers was conducted. Primary research involved interviewing multiple caregivers, while secondary research consisted of online studies. Insights from both research methods were combined to develop the personas shown below, ensuring a more user-centered interface design for <span className={styles.span}>Aether</span>.
                        </p>
                    </div>

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

