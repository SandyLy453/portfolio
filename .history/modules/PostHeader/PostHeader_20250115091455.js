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
        </>
    )
}








