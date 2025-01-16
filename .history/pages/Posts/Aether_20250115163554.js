import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '.../styles/Aether.module.css'

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
                <Image src={'/aether-logo.png'} alt="aether logo" className={styles.photoOne} width={450} height={450}/>
                <div className={styles.text}>
                    <h2 className="subHeading">
                        What is Aether?
                    </h2>
                    <p className={styles.content}>
                        <span className={styles.span}>Aether</span> is an AI-powered form-filling app designed to assist caregivers by clarifying, simplifying, and summarizing complex forms. In addition to offering  a comprehensive library of commonly used forms, the app features a scanning tool that enables caregivers to scan and summarize their paperwork quickly and effortlessly. Aether aims to save caregivers time and reduce stress in managing their essential documents. 
                    </p>
                    <div className={styles.space}></div>
                    <h2 className="subHeading">
                        What was the problem?
                    </h2>
                    <p className={styles.content}>
                    We discovered that completing paperwork can take an individual up to <span className={styles.span}>30 days</span> a year, and for caregivers, it often takes even longer. Most forms are highly stressful and challenging to fill out due to their complexity, lengthy content, and occasionally unclear instructions.
                    </p>
                </div>
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

