import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/CanDesign.module.css'

export default function CanDesign() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <PostHeader
                    title="Dilo Can Design"
                    date="November 2024"
                />

            </main>
            <Footer />
        </>
    )
}