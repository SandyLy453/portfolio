import Image from "next/image";
import styles from "@/styles/Project.module.css";
import { useState, useEffect } from "react";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import ProjectCard from "@/modules/ProjectCard/Projectcard";

export default function Project() {

    const projects = [
        {
          photos: ["/post4.png", "/post5.png", "/post6.png"],
          alt: "Perfume Advertisement Posters",
          title: "Perfume Advertisement Posters",
          description: "Product design - Perfume series advertisement poster",
          date: "January 2025",
          link: "/projects/PerfumeAdvertisementPosters",
          id: "",
        },
        {
          photos: ["/aether-cover.png"],
          alt: "Aether cover",
          title: "Aether",
          description: "Case Study - A AI-powered form-filling app",
          date: "September 2024 - December 2024",
          link: "/projects/Aether",
          id: "app",
        },
        {
          photos: ["/post1.png", "/post2.png", "/post3.png"],
          alt: "Poster slides show",
          title: "Poster design",
          description:
            "Product design - Series of posters based on the anime/ manga Detective Conan.",
          date: "December 2024",
          link: "/projects/Poster",
          id: "",
        },
        {
          photos: ["/can1.png", "/can2.png", "/can3.png"],
          alt: "Can design slide show",
          title: "DiLo Tea Can",
          description: "Product design - Tea Can",
          date: "November 2024",
          link: "/projects/CanDesign",
          id: "",
        },
        {
          photos: ["/mockup2.png"],
          alt: "Magazine cover",
          title: "Magazine",
          description: "Magazine design - An architectural magazine",
          date: "November 2024",
          link: "/projects/Magazine",
          id: "",
        },
        {
          photos: ["/mockup1.png"],
          alt: "Menu image",
          title: "Menu Design",
          description: "Menu Design - Designing menu using vector graphics",
          date: "May 2024",
          link: "/projects/MenuDesign",
          id: "",
        },
        {
          photos: ["/clotho.png"],
          alt: "Clotho app",
          title: "Clotho",
          description: "Clotho - A closet organize app",
          date: "March 2024 - May 2024",
          link: "/projects/Clotho",
          id: "app",
        },
        {
          photos: ["/cc-cover.png"],
          alt: "CratersConnect",
          title: "CraftersConnect",
          description: "CraftersCponnect - A collaborative DIY app",
          date: "March 2024 - May 2024",
          link: "/projects/CraftersConnect",
          id: "app",
        },
        {
          photos: ["/thum.png"],
          alt: "Video thumbnails",
          title: "How To Manage Your Time",
          description: "After Effect - Vector based video",
          date: "April 2024 - May 2024",
          link: "/projects/HowToManageYourTime",
          id: "motion",
        },
        {
          photos: ["/film3.png", "/film4.png"],
          alt: "Film Rewards",
          title: "Film Rewards",
          description: "Making poster by using typography only",
          date: "March 2024",
          link: "/projects/FilmRewards",
          id: "",
        },
        {
          photos: ["/cam.png"],
          alt: "Camera vector graphic",
          title: "Mechanical Object Vector Graphic",
          description: "Using vector to draw mechanical objects",
          date: "December 2023",
          link: "/projects/MechanicalObject",
          id: "",
        },
        {
          photos: ["/404.png"],
          alt: "404 page",
          title: "404 - Page Not Found",
          description: "Customized 404 page",
          date: "January 2024",
          link: "/project-details",
          id: "fun",
        },
    
      ];
    
      const [visibleProjects, setVisibleProjects] = useState(6);
      const [type, setType] = useState("all")
    
      const loadMoreProjects = () => {
        setVisibleProjects((prev) => Math.min(prev + 6, projects.length));
      };

      const handleTypeChange = (f) => {
        setType(f)
    }

    return(
        <>
            <Header/>

            <main className={styles.main}>
                <div className={styles.chipContainer}>
                    <button
                        className={type === "all" ? styles.active : styles.sleep}
                        onClick={() => handleTypeChange("all")}
                    >
                        All
                    </button>
                    <button
                        className={type === "app" ? styles.active : styles.sleep}
                        onClick={() => handleTypeChange("app")}
                    >
                        App
                    </button>
                    <button
                        className={type === "graphic" ? styles.active : styles.sleep}
                        onClick={() => handleTypeChange("graphic")}
                    >
                        Graphic
                    </button>
                    <button
                        className={type === "motion" ? styles.active : styles.sleep}
                        onClick={() => handleTypeChange("motion")}
                    >
                        Motion
                    </button>
                    <button
                        className={type === "fun" ? styles.active : styles.sleep}
                        onClick={() => handleTypeChange("fun")}
                    >
                        Fun
                    </button>
                </div>

                {type === 'all' && (
                    <>
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
                    </>
                )}

            </main>

            <Footer/>
        </>
    )
}
