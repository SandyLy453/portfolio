import { useState } from "react";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Clotho.module.css'
import Link from "next/link";

export default function Clotho() {

    const personaImages = [
        { src: "/persona3.png", alt: "Persona 1" },
        { src: "/persona4.png", alt: "Persona 2" },
        { src: "/persona5.png", alt: "Persona 3" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [feature, setFeature] = useState("inventory")

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
                    title="Clotho"
                    date="By Clotho Team | 2024"
                />

            <div className={styles.intro}>
                <Image src={'/aether.gif'} alt="aether logo" className={styles.gifOne} width={144*4} height={102*4}/>
                <div className={styles.text}>
                    <h2 className={styles.subHeading}>
                        Timeline
                    </h2>
                    <p className={styles.content}>
                        Febuary 2024 - May 2024
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
                        Figma, NextJS, React
                    </p>

                    <Link 
                        href="https://clotho-closetapp.vercel.app" 
                        className={styles.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <button className={styles.button}>
                            Live App
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
                        It's not easy to keep track of all your clothes or organize them efficiently. Many people end up buying duplicates because they forget they already own a similar item. Additionally, mixing and matching outfits for daily wear can be time-consuming and frustrating.
                    </p>
                </div>

                <div className={styles.text}>
                    <h2 className="subHeading">
                        How did we solve this?
                    </h2>
                    <p className={styles.content}>
                        To address this issue, <span className={styles.span}>Clotho</span> was created. <span className={styles.span}>Clotho</span> is a closet app that allows users to save and catalog all their clothes and accessories in one place. With Clotho, users can effortlessly mix and match their outfits, making the process quick, simple, and stress-free.
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
                        className={feature === "inventory" ? styles.active : styles.sleep}
                        onClick={() => handleFeatureChange("inventory")}
                    >
                        Inventory
                    </button>
                    <button
                        className={feature === "calendar" ? styles.active : styles.sleep}
                        onClick={() => handleFeatureChange("calendar")}
                    >
                        Calendar
                    </button>
                    <button
                        className={feature === "trend" ? styles.active : styles.sleep}
                        onClick={() => handleFeatureChange("trend")}
                    >
                        Trends Update
                    </button>
                </div>

                {feature === "inventory" && (
                    <div className={styles.box}>
                        <Image src={'/inventory.png'} alt="inventory feature" width={500} height={500} className={styles.feaImage} />
                        <p className={styles.des}>
                            The Inventory feature allows you to save all your clothes and accessories in one place, making it easier to mix and match outfits in the future.
                        </p>
                    </div>
                )}

                {feature === "calendar" && (
                    <div className={styles.box}>
                        <Image src={'/calendar.png'} alt="calendar feature" width={500} height={500} className={styles.feaImage} />
                        <p className={styles.des}>
                            The Calendar feature helps users plan their future outfits and organize clothing selections for upcoming events seamlessly.
                        </p>
                    </div>
                )}

                {feature === "trend" && (
                    <div className={styles.box}>
                        <Image src={'/trend.png'} alt="trend feature" width={500} height={500} className={styles.feaImage} />
                        <p className={styles.des}>
                            The Trending Updates feature keeps you informed about the latest fashion trends and provides mix-and-match tips to help you create stylish and coordinated outfits effortlessly.
                        </p>
                    </div>
                )}
            </div>
            </main>

            <Footer />
        </>
    )
}



