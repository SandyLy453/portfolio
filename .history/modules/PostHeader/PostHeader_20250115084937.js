import Link from "next/link";
import Image from "next/image";
import styles from './PostHeader.module.css'

export default function PostHeader({
    title,
    date
}) {
    return (
        <>
            <p className={styles.title}>{title}</p>
            <p className={styles.date}>{date}</p>
        </>
    )
}








