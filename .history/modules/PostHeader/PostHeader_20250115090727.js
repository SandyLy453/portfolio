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
                <Image src={'/aether.png'} alt="aether logo" className={styles.photoOne} width={200} height={200}/>
                <div className={styles.text}>
                    <h3 className="subHeading">

                    </h3>
                    <p className={styles.content}>

                    </p>
                </div>
            </div>
        </>
    )
}








