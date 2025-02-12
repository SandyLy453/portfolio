import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import ProjectCard from "@/modules/ProjectCard/Projectcard";

export default function Home() {

  const projects = [
    {
      photos: ["/aether-cover.png"],
      alt: "Aether cover",
      title: "Aether",
      description: "Case Study - A AI-powered form-filling app",
      date: "September 2024 - December 2024",
      link: "/projects/Aether",
    },
    {
      photos: ["/post1.png", "/post2.png", "/post3.png"],
      alt: "Poster slides show",
      title: "Poster design",
      description:
        "Product design - Series of posters based on the anime/ manga Detective Conan.",
      date: "December 2024",
      link: "/projects/Poster",
    },
    {
      photos: ["/can1.png", "/can2.png", "/can3.png"],
      alt: "Can design slide show",
      title: "DiLo Tea Can",
      description: "Product design - Tea Can",
      date: "November 2024",
      link: "/projects/CanDesign",
    },
    {
      photos: ["/mockup2.png"],
      alt: "Magazine cover",
      title: "Magazine",
      description: "Magazine design - An architectural magazine",
      date: "November 2024",
      link: "/projects/Magazine",
    },
    {
      photos: ["/clotho.png"],
      alt: "Clotho app",
      title: "Clotho",
      description: "Clotho - A closet organize app",
      date: "March 2024 - May 2024",
      link: "/projects/Clotho",
    },
    {
      photos: ["/cam.png"],
      alt: "Camera vector graphic",
      title: "Mechanical Object Vector Graphic",
      description: "Using vector to draw mechanical objects",
      date: "December 2023",
      link: "/projects/MechanicalObject",
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);

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
            <Image src={'/hi.GIF'} alt="greeting gif" className={styles.gif} width={294} height={129} />
          </div>
        </div>

        <div className={styles.sectionBreaker}>
          <span> Highlight </span>
        </div>

        <div className={styles.pjSection}>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={index}
              photos={project.photos}
              alt={project.alt}
              title={project.title}
              description={project.description}
              date={project.date}
              link={project.link}
            />
          ))}
        </div>
          
        <div className={styles.loadMoreContainer}>
          <Link 
            href="/project" 
            className={styles.loadMoreButton}
            scroll={true}
          >
              <button className={styles.loadMoreButton}>
                More Projects
              </button>
          </Link>
        </div>

      </main>

      <Footer/>
    </>
  );
}



