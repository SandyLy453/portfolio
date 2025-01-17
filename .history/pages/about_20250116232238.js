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
                    I'm Boi San, but feel free to call me Sandy. I'm a Digital Designer and Front-end Web Developer who loves crafting visually engaging, user-friendly designs that bring ideas to life with a perfect mix of creativity and practicality. /n

                    During my time studying Digital Design and Development at BCIT, I've explored exciting areas like branding, wireframing, front-end development, and even a bit of digital marketing. I'm all about creating designs that not only look great but also make a difference—helping solve problems and leaving a positive mark. /n

                    When I'm not designing, you'll probably find me diving into fun DIY projects, experimenting in the kitchen, or relaxing with some anime, movies, or Cdramas. I'm also a big fan of reading manga, manhwa, and manhua—it's my favorite way to unwind while exploring awesome art styles. Speaking of art, I love creating digital illustrations in Procreate—it's my happy place! /n

                    Let's create something amazing together—I'd love to hear from you!
                </p>
            </div>
        
        </main>

        <Footer/>
    </>
  );
}



