import Link from "next/link";
import Image from "next/image";
import styles from './ProjectCard.module.css'
 
export default function ProjectCard({
    photo,
    alt,
    title,
    description,
    date,
    link,
  }) {
    return (
      <div className={styles.container}>
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

  

