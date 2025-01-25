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
                    <Image src={'/cancover.png'} alt="aether logo" className={styles.gifOne} width={140*4} height={100*4}/>
                    <div className={styles.text}>
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
                            Adobe Illutrators, Procreate
                        </p>
                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Introduction </span>
                </div>


            </main>
            <Footer />
        </>
    )
}