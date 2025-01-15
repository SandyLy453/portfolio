import Link from "next/link";
import Image from "next/image";
import styles from './PostHeader.module.css'

export default function PostHeader({
    title,
    date
}) {
    return (
        <>
            <h1 className={styles.title}>{title || "Title of the project"}</h1>
            <p className={styles.date}>{date || "Date"}</p>

            <div className={styles.intro}>
                <Image src={'/aether.png'} alt="aether logo" className={styles.photoOne} width={400} height={400}/>
                <div className={styles.text}>
                    <h2 className="subHeading">
                        What is Aether?
                    </h2>
                    <p className={styles.content}>

                    </p>
                </div>
            </div>
        </>
    )
}








