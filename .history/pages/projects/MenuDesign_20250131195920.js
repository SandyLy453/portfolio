import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Magazine.module.css'
import HTMLFlipBook from "react-pageflip";
import { useState, useEffect, useRef } from "react";

export default function MenuDesign() {

    const [bookDimensions, setBookDimensions] = useState({ width: 450, height: 582 });
    const flipBook = useRef(null);

    useEffect(() => {
        const updateDimensions = () => {
            const screenWidth = window.innerWidth;
            const maxWidth = 500; 

            let scaleFactor;
            if (screenWidth < 768) {
                scaleFactor = 0.4; // Mobile
            } else if (screenWidth < 1470) {
                scaleFactor = 0.7; // Tablets and small desktops
            } else {
                scaleFactor = 0.5; // Large screens
            }

            setBookDimensions({
                width: Math.min(maxWidth, screenWidth * scaleFactor),
                height: Math.min(maxWidth, screenWidth * scaleFactor) * (2400 / 1350),
            });
        };

        updateDimensions(); 
        window.addEventListener("resize", updateDimensions); 

        return () => window.removeEventListener("resize", updateDimensions); 
    }, []);

    if (!bookDimensions) {
        return (
            <div style={{ textAlign: "center", padding: "2rem" }}>
                Loading...
            </div>
        );
    }

    const goToFirstPage = () => {
        if (flipBook.current && flipBook.current.pageFlip()) {
            flipBook.current.pageFlip().flip(0);
        }
    };


    return (
        <>
            <Header />
            <main className={styles.main}>
                <PostHeader
                    title="Menu design"
                    date="November 2024"
                />

                <div className={styles.intro}>
                    <Image src={'/mockup1.png'} alt="Menu mockup" className={styles.cover} width={330} height={370}/>
                    <div className={styles.topText}>
                        <h2 className={styles.subHeading}>
                            Timeline
                        </h2>
                        <p className={styles.content}>
                            May 2024
                        </p>
                        <h2 className={styles.subHeading}>
                            Role
                        </h2>
                        <p className={styles.content}>
                            Product Designer
                        </p>
                        <h2 className={styles.subHeading}>
                            Tools
                        </h2>
                        <p className={styles.content}>
                            inDesign, Illutrator, Photoshop, Procreate
                        </p>

                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Introduction </span>
                </div>

                <div className={styles.middle}>
                    <div className={styles.text}>
                        <h2 className="subHeading">
                            What is this product about?
                        </h2>
                        <p className={styles.content}>
                            A menu designed to reflect the family-friendly warmth of <span className={styles.span}>San San's Kitchen</span>. It features playful illustrations, clean typography, and an intuitive layout to highlight the restaurant's diverse brunch offerings while ensuring easy navigation and visual appeal.
                        </p>
                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Design Idea </span>
                </div>

                <div className={styles.middle}>
                    <div className={styles.text}>
                        <h2 className="subHeading">
                            What was the design idea/ purposes?
                        </h2>
                        <p className={styles.content}>
                            The menu design is clean, inviting, and easy to navigate, making it perfect for families and casual diners. The hand-drawn logo and organic illustrations create a friendly vibe, while the green tones highlight freshness and quality ingredients. A clear layout helps customers quickly find what they need, enhancing their experience and reinforcing the restaurant's branding.
                        </p>
                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Final Version </span>
                </div>

                <div className={styles.bookContainer}>
                    <HTMLFlipBook 
                        ref={flipBook}
                        width={bookDimensions.width}
                        height={bookDimensions.height}
                        className={styles.book}
                        mobileScrollSupport={true}
                        size="fixed" 
                        minWidth={bookDimensions.width} 
                        minHeight={bookDimensions.height}
                        maxWidth={bookDimensions.width} 
                        maxHeight={bookDimensions.height}
                        maxShadowOpacity={0.2} 
                        drawShadow={true}
                        flippingTime={500} 
                        useMouseEvents={true} 
                        clickEventForward={true}
                        startPage={0}
                        autoSize={false} /* Ensure strict control over width */
                        singlePage={true} /* Forces only one page at a time */
                        showCover={true}
                    >
                        {/* First Page */}
                        <div className={styles.page}>
                            <Image
                                src={`/menu.png`}
                                alt="Menu first page"
                                width={1350}
                                height={2400}
                                layout="responsive"
                            />
                        </div>

                        {/* Second Page */}
                        <div className={styles.page}>
                            <Image
                                src={`/menu2.png`}
                                alt="Menu second page"
                                width={1350}
                                height={2400}
                                layout="responsive"
                            />
                        </div>

                        {/* Third Page */}
                        <div className={styles.page}>
                            <Image
                                src={`/menu3.png`}
                                alt="Menu third page"
                                width={1350}
                                height={2400}
                                layout="responsive"
                            />
                        </div>
                    </HTMLFlipBook>

                    <button className={styles.button} onClick={goToFirstPage}>
                        Back to First Page
                    </button>
                </div>


            </main>
            <Footer />
        </>
    )
}