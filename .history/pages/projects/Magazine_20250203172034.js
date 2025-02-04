import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Magazine.module.css'
import HTMLFlipBook from "react-pageflip";
import { useState, useEffect, useRef } from "react";

export default function Magazine() {

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
                            What was the design idea/ purposes?
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
                        width={425} 
                        height={550} 
                        className={styles.book}
                        showCover={true} 
                        drawShadow={true}
                        flippingTime={500} 
                        useMouseEvents={true} 
                        clickEventForward={true}
                        autoSize={false}
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
                </div>


            </main>
            <Footer />
        </>
    )
}