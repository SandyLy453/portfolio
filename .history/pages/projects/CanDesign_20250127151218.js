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
                    <Image src={'/cancover.png'} alt="Can Cover" className={styles.cover} width={140*4} height={100*4}/>
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
                            What is DiLo?
                        </h2>
                        <p className={styles.content}>
                            <span className={styles.span}>DiLo</span> is a unique tea brand that sets itself apart by celebrating Vietnam's rich tea heritage. Instead of focusing on popular teas like black or green tea, <span className={styles.span}>DiLo</span> highlights traditional Vietnamese teas such as artichoke tea, lotus tea, and corn silk tea - all known for their distinctive flavors and health benefits.
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
                    <Image src={'/s1.png'} alt="Can 1 dieline" className={styles.idea} width={330*3} height={220*3}/>
                    <Image src={'/s2.png'} alt="Can 1 dieline" className={styles.idea} width={330*3} height={220*3}/>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Final Product </span>
                </div>

                <div className={styles.showcase}>
                    <Image src={'/design1.png'} alt="Can 1 dieline" className={styles.design} width={321*3} height={172*3}/>
                    <Image src={'/design2.png'} alt="Can 1 dieline" className={styles.design} width={321*3} height={172*3}/>
                    <Image src={'/design3.png'} alt="Can 1 dieline" className={styles.design} width={321*3} height={172*3}/>
                </div>




            </main>
            <Footer />
        </>
    )
}