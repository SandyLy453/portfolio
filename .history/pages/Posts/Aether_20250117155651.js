import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Aether.module.css'

export default function Aether() {
    return (
        <>
            <Header />

            <main className={styles.body}>
                <PostHeader 
                    title="Aether - Saving time for what matter the most"
                    date="By Aether Team | 2024"
                />

            <div className={styles.intro}>
                <Image src={'/aether.gif'} alt="aether logo" className={styles.gifOne} width={144*4} height={102*4}/>
                <div className={styles.text}>
                    <h2 className="subHeading">
                        Timeline
                    </h2>
                    <p className={styles.content}>
                        September 2024 - December 2024
                    </p>
                    <h2 className="subHeading">
                        Role
                    </h2>
                    <p className={styles.content}>
                        UX/UI Designer | Front-end Developer | Researcher
                    </p>
                    <h2 className="subHeading">
                        Tools
                    </h2>
                    <p className={styles.content}>
                        Figma, 
                    </p>
                </div>
            </div>

            <div className={styles.sectionBreaker}>
                <span> Problem </span>
            </div>

            <div className={styles.middle}>
                <div className={styles.text}>
                    <h2 className="subHeading">
                        How did we solve this?
                    </h2>
                    <p className={styles.content}>
                        To solve this problem, we created <span className={styles.span}>Aether</span>. With <span className={styles.span}>Aether</span>, filling out forms becomes easier, faster, and significantly less stressful.
                    </p>
                </div>
                <Image src={'/aether.gif'} alt="aether logo" className={styles.gifOne} width={144*4} height={102*4}/>
            </div>

            </main>

            <Footer />
        </>
    )
}

