import Image from "next/image";
import styles from "@/styles/About.module.css";
import { useState } from "react";
import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";

export default function About() {

    const [language, setLanguage] = useState("english");

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
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
                </div>
            </div>

            <div className={styles.sectionBreaker}>
            <span> Who Am I? </span>
            </div>

            <div className={styles.languageToggle}>
                <button
                    className={language === "english" ? styles.active : styles.sleep}
                    onClick={() => handleLanguageChange("english")}
                >
                    English
                </button>
                <button
                    className={language === "vietnamese" ? styles.active : styles.sleep}
                    onClick={() => handleLanguageChange("vietnamese")}
                >
                    Vietnamese
                </button>
            </div>

            {language === "english" && (
                <div className={styles.intro}>
                <p className={styles.introText}>
                    Xin chào mọi người!
                </p>
                <p className={styles.introText}>
                    I'm <span className={styles.lilName}>Boi San</span>, but feel free to call me <span className={styles.lilName}>Sandy</span> or <span className={styles.lilName}>San</span> - whichever you prefer! I'm a Digital Designer and Front-end Web Developer who loves crafting visually engaging, user-friendly designs that bring ideas to life with a perfect mix of creativity and practicality. 
                </p>

                <p className={styles.introText}>
                    During my time studying Digital Design and Development at BCIT, I've explored exciting areas like branding, wireframing, front-end development, and even a bit of digital marketing. I'm all about creating designs that not only look great but also make a difference—helping solve problems and leaving a positive mark. 
                </p>

                <p className={styles.introText}>
                    When I'm not designing, you'll probably find me diving into fun DIY projects, experimenting in the kitchen, or relaxing with some anime, movies, or Cdramas. I'm enjoying reading manga, manhwa, and manhua — it's my favorite way to unwind while exploring awesome art styles. Speaking of art, I also like creating digital illustrations in Procreate — it's one of my happy places!
                </p>

                <p className={styles.introText}>
                    Let's create something amazing together—I'd love to hear from you!
                </p>
            </div>
        )}

{language === "vietnamese" && (
          <div className={styles.intro}>
            <p className={styles.introText}>
                Xin chào mọi người!
            </p>
            <p className={styles.introText}>
              Mình là <span className={styles.lilName}>Bội San</span>, bạn cũng có thể gọi mình là <span className={styles.lilName}>Sandy</span> hoặc <span className={styles.lilName}>San</span> tùy theo bạn thích! Mình là một Nhà Thiết Kế Kỹ Thuật Số kiêm Lập Trình Viên Front-end. Mình yêu thích việc tạo ra các thiết kế bắt mắt, thân thiện với người dùng và mang lại sự cân bằng giữa sáng tạo và thực tiễn.
            </p>

            <p className={styles.introText}>
              Trong quá trình học ngành Digital Design and Devilopment tại BCIT, mình đã khám phá những lĩnh vực thú vị như xây dựng thương hiệu, tạo wireframe, phát triển front-end và cả một chút tiếp thị kỹ thuật số. Mình luôn cố gắng tạo ra những thiết kế không chỉ đẹp mà còn có ý nghĩa, giúp giải quyết vấn đề và để lại dấu ấn tích cực.
            </p>

            <p className={styles.introText}>
              Khi không làm việc, mình thích làm DIY, nấu ăn, hoặc tận hưởng anime, phim điện ảnh, hoặc Cdrama. Mình rất thích đọc manga, manhwa, và cả manhua — đây là cách mình thư giãn và khám phá các phong cách vẽ khác nhau. Tôi cũng thích tạo tranh minh họa kỹ thuật số trên Procreate nữa.
            </p>
            <p className={styles.introText}>
              Hãy cùng nhau tạo nên điều tuyệt vời nhé — Mình rất mong đợi được làm việc cùng bạn!
            </p>
          </div>
        )}
        
        </main>

        <Footer/>
    </>
  );
}



