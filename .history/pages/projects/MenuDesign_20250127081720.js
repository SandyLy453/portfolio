import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Magazine.module.css'
import HTMLFlipBook from "react-pageflip";
import { useState, useEffect } from "react";

export default function MenuDesign() {

    const [bookDimensions, setBookDimensions] = useState({ width: 450, height: 582 });

    useEffect(() => {
        const updateDimensions = () => {
            const screenWidth = window.innerWidth;
            const maxWidth = 500; 
            const scaleFactor = screenWidth < 768 ? 0.4 : 0.5; 

            setBookDimensions({
                width: Math.min(maxWidth, screenWidth * scaleFactor),
                height: Math.min(maxWidth, screenWidth * scaleFactor) * (2400 / 1350),
            });
        };

        updateDimensions(); 
        window.addEventListener("resize", updateDimensions); 

        return () => window.removeEventListener("resize", updateDimensions); 
    }, []);

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
                        <span className={styles.span}>DiLo</span> 
                        
                    </p>
                </div>
            </div>

            <div className={styles.sectionBreaker}>
                <span> Physical Version </span>
            </div>

            <div className={styles.bookContainer}>
                    <HTMLFlipBook 
                        width={bookDimensions.width}
                        height={bookDimensions.height}
                        className={styles.book}
                        mobileScrollSupport={true}
                        showCover={true}
                    >
                        {/* First page (standalone cover) */}
                        <div className={styles.page}>
                            <Image
                                src={`/menu.png`}
                                alt="Menu first page"
                                width={1350}
                                height={2400}
                                layout="responsive"
                            />
                        </div>

                        <div className={styles.page}>
                            <Image
                                src={`/menu2.png`}
                                alt="Menu second page"
                                width={1350}
                                height={2400}
                                layout="responsive"
                            />
                        </div>
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
                </div>


            </main>
            <Footer />
        </>
    )
}