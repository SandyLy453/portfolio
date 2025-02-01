import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Magazine.module.css';
import HTMLFlipBook from "react-pageflip";
import { useState, useEffect } from "react";

export default function MenuDesign() {
    const [bookDimensions, setBookDimensions] = useState({ width: 450, height: 582 });
    const [isMobile, setIsMobile] = useState(false); // ✅ Track screen size

    useEffect(() => {
        const updateDimensions = () => {
            if (typeof window !== "undefined") { // ✅ Ensure window exists
                const screenWidth = window.innerWidth;
                const maxWidth = 500; 
                const scaleFactor = screenWidth < 768 ? 0.4 : 0.5;

                setBookDimensions({
                    width: Math.min(maxWidth, screenWidth * scaleFactor),
                    height: Math.min(maxWidth, screenWidth * scaleFactor) * (2400 / 1350),
                });

                setIsMobile(screenWidth < 768); // ✅ Update mobile state
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <PostHeader title="Menu design" date="November 2024" />

                <div className={styles.sectionBreaker}>
                    <span> Final Version </span>
                </div>

                <div className={styles.bookContainer}>
                    <HTMLFlipBook 
                        width={bookDimensions.width}
                        height={bookDimensions.height}
                        className={styles.book}
                        mobileScrollSupport={true}
                        showCover={true}
                        singlePageMode={isMobile}
                    >
                        {[
                            { src: "/menu.png", alt: "Menu first page" },
                            { src: "/menu2.png", alt: "Menu second page" },
                            { src: "/menu3.png", alt: "Menu third page" }
                        ].map((page, index) => (
                            <div key={index} className={styles.page}>
                                <Image
                                    src={page.src}
                                    alt={page.alt}
                                    width={1350}
                                    height={2400}
                                    layout="responsive"
                                />
                            </div>
                        ))}
                    </HTMLFlipBook>
                </div>
            </main>
            <Footer />
        </>
    );
}





