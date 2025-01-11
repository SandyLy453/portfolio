import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from './ProjectCard.module.css'
 
export default function ProjectCard({
    photo,
    alt,
    title,
    description,
    date,
    link,
  }) {

    const [isVisible, setIsVisible] = useState(false); // Track visibility
  const cardRef = useRef(null); // Reference to the card element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isPartiallyVisible = entry.intersectionRatio > 0.33;
        setIsVisible(isPartiallyVisible); // Set visibility based on 1/3 threshold
      },
      {
        threshold: [0.33], // Trigger when 1/3 of the card is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

    return (
      <div
        className={`${styles.container} ${isVisible ? styles.visible : styles.hidden}`} // Add visibility classes
        ref={cardRef}
      >
        <Link href={link} aria-label={`View project: ${title}`} className={styles.link} passHref>
          <div role="button" className={styles.card}>
            <Image
              src={photo || "/card-holder.png"} 
              alt={alt}
              className={styles.thumbnail}
              width={330}
              height={370}
            />
            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}>{title}</p>
              <p className={styles.description}>{description}</p>
              <p className={styles.date}>{date}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  

