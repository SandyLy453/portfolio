import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/CanDesign.module.css'

export default function HowToManageYourTime() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <PostHeader
                    title="How To Manage Your Time Video"
                    date="2024"
                />

                <div className={styles.intro}>
                    <Image src={'/videoCover.png'} alt="Posters mockup" className={styles.cover} width={140*4} height={100*4}/>
                    <div className={styles.text}>
                        <h2 className={styles.subHeading}>
                            Timeline
                        </h2>
                        <p className={styles.content}>
                            May 2024
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
                            Illutrators, Procreate, AfterEffect
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
                            This is a short animated video about time management tips, created entirely in After Effects using vector graphics. It delivers practical advice in an engaging and visually appealing way.
                        </p>
                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Design Idea </span>
                </div>

                <div className={styles.middle}>
                    <div className={styles.text}>
                        <h2 className={styles.subHeading}>
                            What was the design idea/ purpose?
                        </h2>
                        <p className={styles.content}>
                            The simple and colorful vector style makes the content approachable, visually engaging, and easy to follow, supporting the video's goal of making productivity tips accessible. The design targets busy professionals, students, and anyone looking to improve time management without overwhelming complexity. The bright visuals help capture attention on digital platforms, increasing shareability and engagement, making it an effective tool for marketing educational content.
                        </p>
                    </div>
                </div>

                <div className={styles.sectionBreaker}>
                    <span> Sketch </span>
                </div>

                <div className={styles.sketchSection}>
                    <Image src={'/s6.png'} alt="sketch 1" className={styles.idea} width={330*3} height={220*3}/>
                    <Image src={'/s7.png'} alt="sketch 2" className={styles.idea} width={330*3} height={220*3}/>
                </div>


                <div className={styles.sectionBreaker}>
                    <span> Final Product </span>
                </div>

                <div className={styles.showcase}>
                    <video 
                        className={styles.video} 
                        controls 
                        width="100%" 
                        height="auto"
                    >
                        <source src="/Sandy_Ly.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </main>
            <Footer />
        </>
    )
}