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

        
        </main>

        <Footer/>
    </>
  );
}



