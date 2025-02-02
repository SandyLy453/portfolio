import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Poster.module.css'

export default function MechanicalObject() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <PostHeader
                    title="Mechanical Object Vector Graphic"
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
                            Illutrators
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
                        This is a digital illustration of a film camera, created using Adobe Illustrator. The original camera, shown in the reference image, has been replicated using vector shapes and digital shading techniques to achieve a realistic look.
                    </p>
                </div>
            </div>


                <div className={styles.sectionBreaker}>
                    <span> Final Product </span>
                </div>

                <div className={styles.showcase}>
                    
                </div>




            </main>
            <Footer />
        </>
    )
}