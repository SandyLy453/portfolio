import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";
import PostHeader from "@/modules/PostHeader/PostHeader";
import styles from '@/styles/Aether.module.css'

export default function Aether() {
    return (
        <>
            <Header />

            <main className={styles.body}>
                <PostHeader 
                    title="Aether - Saving time for what matter the most"
                    date="By Aether Team | 2024"
                />

            <div className={styles.intro}>
                <Image src={'/aether.gif'} alt="aether logo" className={styles.gifOne} width={144*4} height={102*4}/>
                <div className={styles.text}>
                    <h2 className={styles.subHeading}>
                        Timeline
                    </h2>
                    <p className={styles.content}>
                        September 2024 - December 2024
                    </p>
                    <h2 className={styles.subHeading}>
                        Role
                    </h2>
                    <p className={styles.content}>
                        UX/UI Designer | Front-end Developer | Researcher
                    </p>
                    <h2 className={styles.subHeading}>
                        Tools
                    </h2>
                    <p className={styles.content}>
                        Figma, NextJS, React
                    </p>
                </div>
            </div>

            <div className={styles.sectionBreaker}>
                <span> Problem </span>
            </div>

            <div className={styles.middle}>
                <div className={styles.text}>
                    <h2 className="subHeading">
                        What was the problem?
                    </h2>
                    <p className={styles.content}>
                        We discovered that completing paperwork can take an individual up to <span className={styles.span}>30 days</span> a year, and for caregivers, it often takes even longer. Most forms are highly stressful and challenging to fill out due to their complexity, lengthy content, and occasionally unclear instructions.
                    </p>
                </div>

                <div className={styles.text}>
                    <h2 className="subHeading">
                        How did we solve this?
                    </h2>
                    <p className={styles.content}>
                        To solve this problem, we created <span className={styles.span}>Aether</span>. With <span className={styles.span}>Aether</span>, filling out forms becomes easier, faster, and significantly less stressful.
                    </p>
                </div>
            </div>

            <div className={styles.infoSection}>
                <h2 className="subHeading">
                    Persona
                </h2>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                >
                <SwiperSlide>
                    <Image src={'/persona1.png'} alt="aether logo" className={styles.persona} width={850/1.5} height={1100/1.5}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/persona2.png'} alt="aether logo" className={styles.persona} width={850/1.5} height={1100/1.5}/>
                </SwiperSlide>
                </Swiper>
            </div>

            </main>

            <Footer />
        </>
    )
}

