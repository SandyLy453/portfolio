import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Magazine.module.css'
import HTMLFlipBook from "react-pageflip";
import { useState, useEffect, useRef } from "react";

export default function Magazine() {
    
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
                height: Math.min(maxWidth, screenWidth * scaleFactor) * (1650 / 1275),
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
        if (flipBook.current?.pageFlip()) {
            flipBook.current.pageFlip().flip(0);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === ">" || event.key === "ArrowRight") {
                flipBook.current?.pageFlip()?.flipNext();
            } else if (event.key === "<" || event.key === "ArrowLeft") {
                flipBook.current?.pageFlip()?.flipPrev();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);


    return (
        <>
            <Header />
            <main className={styles.main}>
                <PostHeader
                    title="Magazine design"
                    date="2024"
                />

                <div className={styles.intro}>
                    <Image src={'/mockup2.png'} alt="Magazine mockup" className={styles.cover} width={330} height={370}/>
                    <div className={styles.topText}>
                        <h2 className={styles.subHeading}>
                            Timeline
                        </h2>
                        <p className={styles.content}>
                            November 2024
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
                            inDesign, Photoshop
                        </p>

                        <Link 
                        href="https://indd.adobe.com/view/a8cf389f-8d10-4715-8712-8ad888eb208a" 
                        className={styles.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            <button className={styles.button}>
                                Digital Version
                            </button>
                        </Link>
                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Introduction </span>
                </div>

                <div className={styles.middle}>
                    <div className={styles.text}>
                        <h2 className={styles.subHeading}>
                            What is this product about?
                        </h2>
                        <p className={styles.content}>
                            A magazine exploring <span className={styles.span}>ancient architecture</span> from Egypt, Mesopotamia, Greece, and Rome, highlighting their engineering, cultural significance, and lasting influence. It features a <span className={styles.span}>print version</span> and an <span className={styles.span}>interactive digital edition</span> with expanded content and a navigable table of contents for an engaging reading experience.
                        </p>
                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Design Idea </span>
                </div>

                <div className={styles.middle}>
                    <div className={styles.text}>
                        <h2 className={styles.subHeading}>
                            What was the design idea/ purpose?
                        </h2>
                        <p className={styles.content}>
                            The design for <span className={styles.span}>Annessia: The Marvels of Ancient Architecture</span> highlights the richness and significance of historical structures through a refined and immersive visual approach. Inspired by ancient aesthetics, the layout combines elegant typography, contrasting backgrounds, and carefully curated imagery to evoke a sense of timeless grandeur. The thematic use of cultural symbols and architectural motifs reinforces the magazine's focus on history, making it visually engaging for readers interested in architecture, history, and design.
                        </p>
                    </div>
                </div>

            <div className={styles.sectionBreaker}>
                <span> Print Version </span>
            </div>

            <p className={styles.lilnote}>
                (Click on a page corner to turn to the next or previous page.)
            </p>

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
                        autoSize={false} 
                        singlePage={true} 
                        showCover={true}
                    >
                        {/* First page (standalone cover) */}
                        <div className={styles.page}>
                            <Image
                                src={`/maga1.png`}
                                alt="Magazine Cover"
                                width={1275}
                                height={1650}
                                layout="responsive"
                            />
                        </div>

                        {/* Middle pages */}
                        {Array.from({ length: 10 }, (_, i) => (
                            <div key={i + 2} className={styles.page}>
                                <Image
                                    src={`/maga${i + 2}.png`}
                                    alt={`Magazine page ${i + 2}`}
                                    width={1275}
                                    height={1650}
                                    layout="responsive"
                                />
                            </div>
                        ))}

                        {/* Last page (standalone cover) */}
                        <div className={styles.page}>
                            <Image
                                src={`/maga12.png`}
                                alt="Back Cover"
                                width={1275}
                                height={1650}
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