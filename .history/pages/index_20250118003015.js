import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import ProjectCard from "@/modules/ProjectCard/Projectcard";

export default function Home() {

  const projects = [
    {
      photos: ["/post4.png", "/post5.png", "/post6.png"],
      alt: "Perfume Advertisement Posters",
      title: "Perfume Advertisement Posters",
      description: "Product design - Perfume series advertisement poster",
      date: "Jan 2025",
      link: "/project-details",
    },
    {
      photos: ["/aether-cover.png"],
      alt: "Aether cover",
      title: "Aether",
      description: "Case Study - A AI-powered form-filling app",
      date: "Sep 2024 - Dec 2024",
      link: "/projects/Aether",
    },
    {
      photos: ["/post1.png", "/post2.png", "/post3.png"],
      alt: "Poster slides show",
      title: "Poster design",
      description:
        "Product design - Series of posters based on the anime/ manga Detective Conan.",
      date: "Dec 2024",
      link: "/projects/Poster",
    },
    {
      photos: ["/can1.png", "/can2.png", "/can3.png"],
      alt: "Can design slide show",
      title: "DiLo Tea Can",
      description: "Product design - Tea Can",
      date: "Nov 2024",
      link: "/projects/CanDesign",
    },
    {
      photos: ["/mockup2.png"],
      alt: "Magazine cover",
      title: "Magazine",
      description: "Magazine design - An architectural magazine",
      date: "November 2024",
      link: "/project-details",
    },
    {
      photos: ["/mockup1.png"],
      alt: "Menu image",
      title: "Menu Design",
      description: "Menu Design - Designing menu using vector graphics",
      date: "May 2024",
      link: "/project-details",
    },
    {
      photos: ["/clotho.png"],
      alt: "Clotho app",
      title: "Clotho",
      description: "Clotho - A closet organize app",
      date: "March 2024 -May 2024",
      link: "/project-details",
    },
    {
      photos: ["/cc-cover.png"],
      alt: "CraterConnects",
      title: "CrafterConnects",
      description: "CrafterCponnects - A collaborative DIY app",
      date: "March 2024 - May 2024",
      link: "/project-details",
    },
    {
      photos: [""],
      alt: "Video thumbnails",
      title: "How To Manage Your Time",
      description: "After Effect - Vector based video",
      date: "April 2024 - May 2024",
      link: "/project-details",
    },
    {
      photos: ["/film3.png", "/film4.png"],
      alt: "Firm Rewards",
      title: "Film Rewards",
      description: "Making poster by using typography only",
      date: "March 2024",
      link: "/project-details",
    },
    {
      photos: ["/cam.png"],
      alt: "Camera vector graphic",
      title: "Mechanical Object Vector Graphic",
      description: "Using vector to draw mechanical objects",
      date: "December 2023",
      link: "/project-details",
    },
    {
      photos: [""],
      alt: "404 page",
      title: "404 - Page Not Found",
      description: "Customized 404 page",
      date: "Jan 2024",
      link: "/project-details",
    },

  ];

  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, projects.length));
  };

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

        {visibleProjects < projects.length && (
          <div className={styles.loadMoreContainer}>
            <button onClick={loadMoreProjects} className={styles.loadMoreButton}>
              More Projects
            </button>
          </div>
        )}
      </main>

      <Footer/>
    </>
  );
}



