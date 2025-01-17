import Image from "next/image";
import styles from "@/styles/About.module.css";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";

export default function About() {
  return (
    <>
        <Header/>

        <main className={styles.main}>
            <div className={styles.top}>
            <div className={styles.image}>
                <Image src={'/ava.png'} alt="cover photo" className={styles.coverPhoto} width={320} height={420} />
            </div>

            <div className={styles.info}>
                <p className={styles.name}>Boi San (Sandy) Ly</p>
                <p className={styles.role}>UX/UI Designer | Digital Designer | Web Developer</p>
                <p className={styles.loca}>Vancouver | BC</p>
            </div>
            </div>

            <div className={styles.sectionBreaker}>
            <span> Who Am I? </span>
            </div>

            <div className={styles.intro}>
                <p className={styles.introText}>
                    Hi, welcome to my website! 
                </p>
                <p className={styles.introText}>
                    I'm <span className={styles.lilName}>Boi San</span>, but feel free to call me <span className={styles.lilName}>Sandy</span> or <span className={styles.lilName}>San</span> - whichever you prefer! I'm a Digital Designer and Front-end Web Developer who loves crafting visually engaging, user-friendly designs that bring ideas to life with a perfect mix of creativity and practicality. 
                </p>

                <p className={styles.introText}>
                    During my time studying Digital Design and Development at BCIT, I've explored exciting areas like branding, wireframing, front-end development, and even a bit of digital marketing. I'm all about creating designs that not only look great but also make a difference—helping solve problems and leaving a positive mark. 
                </p>

                <p className={styles.introText}>
                    When I'm not designing, you'll probably find me diving into fun DIY projects, experimenting in the kitchen, or relaxing with some anime, movies, or Cdramas. I'm enjoying reading manga, manhwa, and manhua — it's my favorite way to unwind while exploring awesome art styles. Speaking of art, I also like creating digital illustrations in Procreate — it's one of my happy places!
                </p>

                <p className={styles.introText}>
                    Let's create something amazing together—I'd love to hear from you!
                </p>
            </div>
        
        </main>

        <Footer/>
    </>
  );
}



