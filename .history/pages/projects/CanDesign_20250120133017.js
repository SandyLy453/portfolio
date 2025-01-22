import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";

export default function CanDesign() {
    return (
        <>
            <Header />
            <main>
                <PostHeader
                    title="Dilo Can Design"
                    date=""
                />

            </main>
            <Footer />
        </>
    )
}