import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from './ProjectCard.module.css'

import { useRouter } from "next/router";
 
export default function ProjectCard({
  photos = [], // Default to an empty array if photos is undefined
    alt,
    title,
    description,
    date,
    link,
  }) {

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); // Track the current photo index
  const [opacity, setOpacity] = useState(1); // Track opacity for fade effect
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const cardRef = useRef(null); // Reference to the card element
  const router = useRouter();

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

  // Slideshow logic with fade effect
  useEffect(() => {
    if (photos.length > 1) {
      const interval = setInterval(() => {
        setOpacity(0); // Fade out
        setTimeout(() => {
          setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length); // Change photo
          setOpacity(1); // Fade in
        }, 10); // Match fade duration
      }, 4000); // Total interval (fade + display duration)

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [photos]);

  const handleNavigation = () => {
    router.push(link); // Use the provided link to navigate
  };

    return (
      <div
      className={`${styles.container} ${isVisible ? styles.visible : styles.hidden}`} // Add visibility classes
      ref={cardRef}
    >
      
        <div 
          role="button"
          className={styles.card}
          onClick={handleNavigation} // Handle click with useRouter
          tabIndex={0} // Make it focusable
          onKeyDown={(e) => {
            if (e.key === "Enter") handleNavigation(); // Support Enter key for accessibility
          }}
        >
          <div
            style={{
              opacity: opacity, // Apply fade effect
              transition: "opacity 0.5s ease-in-out", // Smooth fade-in and fade-out
            }}
          >
            <Image
              src={photos[currentPhotoIndex] || "/card-holder.png"} // Use current photo based on index
              alt={alt}
              className={styles.thumbnail}
              width={330}
              height={370}
            />
          </div>
          <div className={styles.cardInfo}>
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.description}>{description}</p>
            <p className={styles.date}>{date}</p>
          </div>
        </div>
      
    </div>
    );
  }

  

