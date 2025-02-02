import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";

export default function About() {
  return (
    <>
      <Header/>

      <main className={styles.main}>
        <div className={styles.top}>
          <div className={styles.image}>
            <Image src={'/cover.jpeg'} alt="cover photo" className={styles.coverPhoto} width={300} height={420} />
          </div>

          <div className={styles.info}>
            <p className={styles.name}>Boi San (Sandy) Ly</p>
            <p className={styles.role}>UX/UI Designer | Graphic Designer | Web Developer</p>
          </div>
        </div>

        <div className={styles.sectionBreaker}>
          <span> Projects </span>
        </div>

    
      </main>

      <Footer/>
    </>
  );
}



