import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Poster.module.css'

export default function Poster() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <PostHeader
                    title="Poster Design Series"
                    date="December 2024"
                />

                <div className={styles.intro}>
                    <Image src={'/postcover.png'} alt="Posters mockup" className={styles.cover} width={140*4} height={100*4}/>
                    <div className={styles.text}>
                        <h2 className={styles.subHeading}>
                            Timeline
                        </h2>
                        <p className={styles.content}>
                            December 2024
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
                            Illutrators, Photoshop, Procreate
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
                            This project is a series of illustrated posters inspired by <span className={styles.span}>Detective Conan</span> , the iconic Japanese anime and manga series. Each poster focuses on a specific character, capturing their personality and essence through dynamic visuals, symbolic design elements, and impactful quotes. The aim was to bring the characters to life while paying homage to their unique roles in the narrative.
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
                            
                        </p>
                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Sketch </span>
                </div>

                <div className={styles.sketchSection}>
                    <Image src={'/s3.png'} alt="Can 1 dieline" className={styles.idea} width={220*2} height={330*2}/>
                    <Image src={'/s4.png'} alt="Can 1 dieline" className={styles.idea} width={220*3} height={330*3}/>
                    <Image src={'/s5.png'} alt="Can 1 dieline" className={styles.idea} width={220*3} height={330*3}/>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Final Product </span>
                </div>

                <div className={styles.showcase}>
                    <Image src={'/poster1.png'} alt="Poster 1" className={styles.design} width={321*3} height={172*3}/>
                    <Image src={'/poster2.png'} alt="Poster 2" className={styles.design} width={321*3} height={172*3}/>
                    <Image src={'/poster3.png'} alt="Poster 3" className={styles.design} width={321*3} height={172*3}/>
                </div>




            </main>
            <Footer />
        </>
    )
}