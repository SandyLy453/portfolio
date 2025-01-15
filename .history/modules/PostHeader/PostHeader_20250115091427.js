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
                        <span>Aether</span> is an AI-powered form-filling app designed to assist caregivers by clarifying, simplifying, and summarizing complex forms. In addition to offering  a comprehensive library of commonly used forms, the app features a scanning tool that enables caregivers to scan and summarize their paperwork quickly and effortlessly. Aether aims to save caregivers time and reduce stress in managing their essential documents. 
                    </p>
                </div>
            </div>
        </>
    )
}








