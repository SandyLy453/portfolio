import Image from "next/image";
import styles from "@/styles/About.module.css";
import { useState, useEffect, useRef } from "react";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";

export default function About() {

    const [language, setLanguage] = useState("english");
    const [bannerToggled, setBannerToggled] = useState(false);
    const bannerRef = useRef(null);
    const textBoxRef = useRef(null);


    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    const toggleBanner = () => {
        setBannerToggled((prev) => !prev);
      };
    
  return (
    <>
        <Header/>

        <main className={styles.main}>
            <div className={styles.top}>
                <div className={styles.image}>
                    <Image src={'/ava.png'} alt="cover photo" className={styles.coverPhoto} width={320} height={420} />
                </div>

                <div className={styles.info}>
                    <p className={styles.name}>Boi San (Sandy) Ly</p>
                    <p className={styles.role}>UX/UI Designer | Digital Designer | Web Developer</p>
                    <p className={styles.loca}>Vancouver | BC</p>

                    <div className={styles.gifBox}>
                        <Image src={'/yo.GIF'} alt="greeting gif" className={styles.gif} width={294} height={129} />
                    </div>
                </div>
            </div>

            <div className={styles.sectionBreaker}>
            <span> Click the banner to switch to Vietnames/ English intrduction </span>
            </div>

            <div className={styles.bannerBox} onClick={toggleBanner}>
                <Image
                    src={bannerToggled ? "/pink.jpeg" : "/green.jpeg"}
                    width={500}
                    height={350}
                    className={styles.bannerBG}
                    alt="banner background"
                />
                <div className={styles.textBox}>
                    {!bannerToggled ? (
                    <>
                        <p className={styles.textContent}>
                            Xin chào mọi người!
                        </p>
                        <p className={styles.textContent}>
                            I'm <span className={styles.lilName}>Boi San</span>, but feel free to call me <span className={styles.lilName}>Sandy</span> or <span className={styles.lilName}>San</span> - whichever you prefer! I'm a Digital Designer and Front-end Web Developer who loves crafting visually engaging, user-friendly designs that bring ideas to life with a perfect mix of creativity and practicality. 
                        </p>

                        <p className={styles.textContent}>
                            During my time studying Digital Design and Development at BCIT, I've explored exciting areas like branding, wireframing, front-end development, and even a bit of digital marketing. I'm all about creating designs that not only look great but also make a difference—helping solve problems and leaving a positive mark. 
                        </p>
                        <p className={styles.textContent}>
                            When I'm not designing, you'll probably find me diving into fun DIY projects, experimenting in the kitchen, or relaxing with some anime, movies, or Cdramas. I'm enjoying reading manga, manhwa, and manhua — it's my favorite way to unwind while exploring awesome art styles. Speaking of art, I also like creating digital illustrations in Procreate — it's one of my happy places!
                        </p>
                        <p className={styles.textContent}>
                            Let's create something amazing together—I'd love to hear from you!
                        </p>
                    </>
                    ) : (
                    <>
                        <p className={styles.textContentP}>
                            Xin chào mọi người!
                        </p>
                        <p className={styles.textContentP}>
                            Mình là <span className={styles.lilName}>Bội San</span> và mình là một Digital Designer/ Front-end Developer đầy nhiệt huyết. Mình yếu thích và tận hưởng việc tạo ra những thiết kế đẹp mắt, thân thiện với người nhưng vẫn phần nào dấu ấn của bản thân.
                        </p>

                        <p className={styles.textContentP}>
                            Mình theo học ngành Digital Design and Development của BCIT từ năm 2023, trong quãng thời gian theo học, mình đã được tạo cơ hội để phát triển và có những trãi nghiệm về xây dựng thương hiệu, thiết kế và phát triển wireframe từ lo-fi đến hi-fi; mình cũng lập trình trang web cũng như mobile app bằng những kỹ năng và kiến thức của front-end developer; và mình còn được trôi dào kiến thức về digital marketing.
                        </p>

                        <p className={styles.textContentP}>
                            Những lúc rãnh rỗi, mình thích làm DIY, nấu ăn, và coi phim (anime, movies, Cdrama và vân vân mây mây những thứ thú đáng yêu vui nhộn nữa). Bên cạnh đó, mình còn có thú vui đọc truyện tranh - cả manga, manhwa, và manhua - để thư giản, tìm hiểu, và khám phá những phong cách vẽ tranh khác nhau.
                        </p>
                        <p className={styles.textContentP}>
                            Hãy cùng nhau tạo nên điều tuyệt vời nhé — Mình rất mong đợi được làm việc cùng bạn!
                        </p>
                    </>
                    )}
                </div>
            </div>
        
        </main>

        <Footer/>
    </>
  );
}



