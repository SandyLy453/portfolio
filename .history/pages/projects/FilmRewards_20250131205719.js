import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Poster.module.css'

export default function FilmRewards() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <PostHeader
                    title="Film Rewards"
                    date="December 2024"
                />

                <div className={styles.intro}>
                    <Image src={'/film.png'} alt="Film Reward Poster mockup" className={styles.cover} width={140*4} height={100*4}/>
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
                            This is a typographic poster designed for the <span className={styles.span}>Vancouver International Film Festival</span>'s (VIFF) 2012 Audience Choice Awards. It highlights the winning films and their categories using only typography, focusing on clarity and hierarchy to present key information.
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
                            The design relies on varying font weights, sizes, and styles to create visual separation between elements, making the information easy to navigate. This approach ensures a professional yet engaging look, appealing to film enthusiasts and festival attendees. The structured layout directs attention to film titles while maintaining a clean and modern aesthetic, effectively reinforcing VIFF’s branding and enhancing promotional visibility.
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