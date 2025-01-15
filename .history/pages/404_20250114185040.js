import styles from "../styles/404.module.css";
import Link from "next/link";




export default function Custom404() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.description}>Oops! The page you are looking for does not exist.</p>
        <button className={styles.backLink}>
            <Link className={styles.link} href="/">
                Go back home
            </Link>
        </button>
    </div>
  );
}






