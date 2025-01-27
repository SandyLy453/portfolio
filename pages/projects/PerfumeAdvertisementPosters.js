import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Poster.module.css'

export default function Perfume() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <PostHeader
                    title="Perfume Advertisement Posters"
                    date="Januay 2025"
                />

                <div className={styles.intro}>
                    <Image src={'/postcover2.png'} alt="Poster mockup" className={styles.cover} width={140*4} height={100*4}/>
                    <div className={styles.text}>
                        <h2 className={styles.subHeading}>
                            Timeline
                        </h2>
                        <p className={styles.content}>
                            January 2025
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
                        This project features a series of conceptual product posters for a perfume collection inspired by  <span className={styles.span}>Detective Conan</span> , the renowned Japanese anime/ manga series. Each bottle is designed to embody a unique character from the series, with distinct visual themes and narratives tied to their backgrounds. The designs aim to capture the essence of each character while integrating storytelling elements into the branding.
                    </p>
                </div>
            </div>

                <div className={styles.sectionBreaker}>
                    <span> Final Product </span>
                </div>

                <div className={styles.showcase}>
                    <Image src={'/perfume1.png'} alt="Poster 1" className={styles.design} width={330*2} height={370*2}/>
                    <Image src={'/perfume2.png'} alt="Poster e" className={styles.design} width={330*2} height={370*2}/>
                    <Image src={'/perfume3.png'} alt="Poster " className={styles.design} width={330*2} height={370*2}/>
                </div>




            </main>
            <Footer />
        </>
    )
}
