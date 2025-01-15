import styles from "../styles/404.module.css";
import Link from "next/link";




export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.description}>Oops! The page you are looking for does not exist.</p>
      <Image src={'/cry.GIF'} alt="crying gif" className={styles.gif} width={342.5} height={205} />
      <Link className={styles.link} href="/">
        <button className={styles.backLink}>Go back home</button>
      </Link>
    </div>
  );
}






