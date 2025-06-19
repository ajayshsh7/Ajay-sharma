import "./globals.css"
import styles from "./page.module.css";
import FeaturedWork from "@/components/FeaturedWork";
import Link from "next/link";
import Form from "../components/ContactForm";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroImg}> <img className={styles.myImg} src="/Heropic.png" alt="" /></div>
          <div className={styles.heroContent}><p>I&apos;m Ajay!</p><h1 className={styles.heroText}>Full-Stack Web Developer with Strong UI/UX Design Skills </h1><div className={styles.heroBtns}><button className={styles.heroBtn}>Contact Me</button> <button className={`${styles.heroBtn} ${styles.heroBtn2}`}>Free Resources</button></div></div>
        </div>
        <div className={`${styles.primaryContainer} ${styles.whyMe}`}>
          <h1>Why take my help ?</h1>
          <div className={`${styles.subContainer} ${styles.whyMeContainer}`}> <div className={styles.whyMeOne}><h2>I don&apos;t make pretty websites</h2><p>I rather help you to make a functional website that converts visitor into a long term customer.</p></div><hr className={styles.whyMeLine} />
            <div className={styles.whyMeTwo}><h2>I don&apos;t create flashy animations</h2><p>I rather help you in building simple website that helps your user to focus on your website main goal.</p></div><hr className={styles.whyMeLine} />
            <div className={styles.whyMeThree}><h2>I don&apos;t use many visual graphics</h2><p>I rather use very specific graphics that are relevant to make your user easily understand the context of your website.</p></div>
          </div>

          <FeaturedWork />
          <div className={styles.btnContainer}>
            <Link href="/work" className={`${styles.seeAllWork} ${styles.secondaryBtn}`}>
              View All
            </Link>
          </div>
        </div>
      <Form />
      </div>
    </main>
  );
}
