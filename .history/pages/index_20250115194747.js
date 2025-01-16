import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import ProjectCard from "@/modules/ProjectCard/Projectcard";

export default function Home() {
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
            <p className={styles.role}>UX/UI Designer | Digital Designer | Web Developer</p>
            <p className={styles.loca}>Vancouver | BC</p>
            <Image src={'/hi.GIF'} alt="greeting gif" className={styles.gif} width={342.5} height={205} />
          </div>
        </div>

        <div className={styles.sectionBreaker}>
          <span> Projects </span>
        </div>

        <div className={styles.pjSection}>
          <ProjectCard
            photos={["/aether.png"]} // Use 'photos' instead of 'photo'
            alt="Aether cover"
            title="Aether"
            description="Case Study - A AI-powered form-filling app"
            date="Sep 2024 - Dec 2024"
            link="/posts/Aether" // Ensure the link is valid
          />

          <ProjectCard
            photos= {["/poster1.png", "/poster2.png", "/poster3.png"]}
            alt="Poster slides show"
            title="Poster design"
            description="Product design - Series of posters based on the anime/ manga Detective Conan."
            date="Dec 2024"
            link="/posts/Poster" // Ensure the link is valid
          />

          <ProjectCard
            photos={["/can1.png", "/can2.png", "/can3.png"]} 
            alt="Can deasign slide show"
            title="DiLo Tea Can"
            description="Product design - Tea Can"
            date="Nov 2024"
            link="/posts/CanDesign" // Ensure the link is valid
          />

          <ProjectCard
            photos= {["/mega.png"]}
            alt="Magazine cover"
            title="Magazine"
            description="Magazine design - A architectural magazine"
            date="November 2024"
            link="/project-details" // Ensure the link is valid
          />

          <ProjectCard
            photos= {["/menu.png"]}
            alt="Menu image"
            title="Menu Design"
            description="Menu Design - Desgning menu use vector graphics"
            date="may 2024"
            link="/project-details" // Ensure the link is valid
          />

          <ProjectCard
            photos= {["/cam.png"]}
            alt="Camera vector graphic"
            title="Mechanical Object Vector Graphic"
            description="Using vector to draw mechanical object"
            date="December 2023"
            link="/project-details" // Ensure the link is valid
          />
        </div>
      </main>

      <Footer/>
    </>
  );
}



