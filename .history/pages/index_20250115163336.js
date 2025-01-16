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
            link="/Aether" // Ensure the link is valid
          />

          <ProjectCard
            photos="" 
            alt="Project cover"
            title="Project Name"
            description="What it is about"
            date="Dec 2024"
            link="/posts/Aether" // Ensure the link is valid
          />

          <ProjectCard
            photos={["/can1.png", "/can2.png", "/can3.png"]} 
            alt="Can deasign slide show"
            title="DiLo Tea Can"
            description="Product design - Tea Can"
            date="Nov 2024"
            link="/CanDesign" // Ensure the link is valid
          />

          <ProjectCard
            photos="" 
            alt="Project cover"
            title="Project Name"
            description="What it is about"
            date="Time"
            link="/project-details" // Ensure the link is valid
          />

          <ProjectCard
            photos="" 
            alt="Project cover"
            title="Project Name"
            description="What it is about"
            date="Time"
            link="/project-details" // Ensure the link is valid
          />

          <ProjectCard
            photos="" 
            alt="Project cover"
            title="Project Name"
            description="What it is about"
            date="Time"
            link="/project-details" // Ensure the link is valid
          />
        </div>
      </main>

      <Footer/>
    </>
  );
}



