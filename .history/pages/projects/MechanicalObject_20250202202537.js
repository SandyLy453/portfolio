import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Poster.module.css'
import BeforeAfterSlider from "@/modules/BeforeAfterSlider/BeforeAfterSlider";

export default function MechanicalObject() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <PostHeader
                    title="Mechanical Object Vector Graphic"
                    date="2023"
                />

                <div className={styles.intro}>
                    <Image src={'/camcover.png'} alt="Camere mockup" className={styles.cover} width={140*4} height={100*4}/>
                    <div className={styles.text}>
                        <h2 className={styles.subHeading}>
                            Timeline
                        </h2>
                        <p className={styles.content}>
                            December 2023
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
                        <h2 className={styles.subHeading}>
                            What is this product about?
                        </h2>
                        <p className={styles.content}> 
                            This is a digital illustration of a film camera, created using Adobe Illustrator. The original camera, shown in the reference image, has been replicated using vector shapes and digital shading techniques to achieve a realistic look.
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
                            The purpose of this illustration is to showcase precision in digital rendering by capturing the camera’s form, texture, and details as accurately as possible. By relying on clean vector shapes and smooth shading, the design highlights the product in a polished, stylized way, making it suitable for marketing visuals or product mockups.
                        </p>
                    </div>
                </div>


                <div className={styles.sectionBreaker}>
                    <span> Final Product </span>
                </div>

                <div className={styles.showcase}>
                    <BeforeAfterSlider 
                        ratio="1:1.5"
                        image1="/camillu.png"
                        image2="/camreal.png"
                        alt1="Vector graphic camera"
                        alt2="real camera"
                        width="700"
                        height="400"
                    />
                </div>




            </main>
            <Footer />
        </>
    )
}