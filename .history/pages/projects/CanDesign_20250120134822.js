import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/CanDesign.module.css'

export default function CanDesign() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <PostHeader
                    title="Dilo Can Design"
                    date="November 2024"
                />

                <div className={styles.intro}>
                    <Image src={'/aether.gif'} alt="aether logo" className={styles.gifOne} width={140*4} height={100*4}/>
                    <div className={styles.text}>
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
                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Challenge </span>
                </div>


            </main>
            <Footer />
        </>
    )
}