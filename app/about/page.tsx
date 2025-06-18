import styles from './about.module.css';
import FeaturedWork from "@/components/FeaturedWork";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroImg}> <img className={styles.myImg} src="../abouthero.png" alt="" /></div>
          <div className={styles.heroContent}><p>I'm Ajay!</p><h1 className={styles.heroText}>I’m a web UI/UX designer with engineering background majors in computer science.</h1><div className={styles.heroBtns}><button className={`${styles.heroBtn} ${styles.heroBtn2}`}>Connect on LinkedIn</button></div></div>
        </div>
        <div className={`${styles.primaryContainer} ${styles.whyMe}`}>
          <h1>About Me</h1>
          <div className={`${styles.subContainer} ${styles.whyMeContainer}`}> <div className={styles.whyMeOne}><h2>UI/UX Website Design</h2><p>I’m a UI/UX web designer based in India. I started UI/UX in 2020, Since then i have designing and constantly improving myself. <br /> <br />After 2 years of designing i shifted my complete focus towards more business growth rather than making pretty websites.</p></div><hr className={styles.whyMeLine} />
            <div className={styles.whyMeTwo}><h2>Engineering Background</h2><p>I am a computer science engineering student, enrolled from 2021 to 2025. <br /> <br /> I have an amazing  journey in engineering college which gave me a lot of memories to carry with me forever.  
              </p></div><hr className={styles.whyMeLine} />
            <div className={styles.whyMeThree}><h2>Chess, Books and YouTube </h2><p>Playing chess, reading books or watching YouTube is what i usually do in my spare time, let me know if we have something in common to talk about. <br /> <br />Some of my favorite books include “This Is Marketing” by Seth Godin and “As a man Thinketh” by James Allen.</p></div><hr className={styles.whyMeLine} />
            <div className={styles.whyMeFour}><h2>Resources and Inspirations </h2><p>I am a self taught UI/UX designer and learnt a lot from the internet. I taught myself design and freelancing with the help of internet. <br /> <br />Some of my favorite creators are Ran segall, Chris Do, Ansh Mehra, Awwwards talk.</p></div>
          </div>
          <FeaturedWork/>
          <div className={styles.btnContainer}><Link href="/work"><button className={`${styles.seeAllWork} ${styles.secondaryBtn}`}>View All</button>
          </Link></div>
          </div>
      </div>
    </main>
  );
}
