import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Magazine.module.css'
import HTMLFlipBook from "react-pageflip";

export default function Magazine() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <PostHeader
                    title="Magazine design"
                    date="November 2024"
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
                    <h2 className="subHeading">
                        What is this product about?
                    </h2>
                    <p className={styles.content}>
                        <span className={styles.span}>DiLo</span> is a unique tea brand that sets itself apart by celebrating Vietnam's rich tea heritage. Instead of focusing on popular teas like black or green tea, <span className={styles.span}>DiLo</span> highlights traditional Vietnamese teas such as artichoke tea, lotus tea, and corn silk tea - all known for their distinctive flavors and health benefits.
                    </p>
                </div>
            </div>

            <div className={styles.sectionBreaker}>
                <span> Physical Version </span>
            </div>

            <div className={styles.bookContainer}>
                    <HTMLFlipBook 
                        width={500} 
                        height={700} 
                        className={styles.book}
                        showCover={true} 
                    >
                        {/* First page (standalone cover) */}
                        <div className={styles.page}>
                            <Image
                                src={`/maga1.png`}
                                alt="Magazine Cover"
                                width={850} 
                                height={1100} 
                                layout="responsive"
                            />
                        </div>

                        {/* Middle pages */}
                        {Array.from({ length: 10 }, (_, i) => (
                            <div key={i + 2} className={styles.page}>
                                <Image
                                    src={`/maga${i + 2}.png`}
                                    alt={`Magazine page ${i + 2}`}
                                    width={850}
                                    height={1100}
                                    layout="responsive"
                                />
                            </div>
                        ))}

                        {/* Last page (standalone cover) */}
                        <div className={styles.page}>
                            <Image
                                src={`/maga12.png`}
                                alt="Back Cover"
                                width={850}
                                height={1100}
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