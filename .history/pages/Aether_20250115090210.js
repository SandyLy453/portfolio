import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '../styles/Aether.module.css'

export default function Aether() {
    return (
        <>
            <Header />

            <main className={styles.body}>
                <PostHeader 
                    title="Aether - Saving time for what matter the most"
                    date="2024"
                />

            </main>

            <Footer />
        </>
    )
}

