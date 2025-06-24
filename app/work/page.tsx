'use client'
import styles from './workpage.module.css';
import { useRouter } from 'next/navigation';

export default function FeaturedWork() {
    const router = useRouter();
  const handleContact = () => {
    router.push(('/contact'));
  };
    return (
        <main>
            <div className={styles.homeContainer}>
                <div className={styles.heroGrid}>
                    <div className={styles.heroImg}> <img className={styles.myImg} src="../abouthero.png" alt="" /></div>
                    <div className={styles.heroContent}>
            <p>My work</p>
            <div className={styles.flexContent}>
              <h1 className={styles.heroText}>Explore my work on web devlelopment and UI/UX design </h1>
              <div className={styles.heroBtns}>
                <button className={styles.heroBtn}
                  onClick={handleContact}>Contact Me
                </button>
              </div>
            </div>
          </div>
                </div>
            </div>
            <div className={styles.workContainer}>
                <div className={styles.primaryContainer}> <h1>Explore Work</h1>
                    <div className={styles.subContainer}>
                        <div className={styles.workContent}>
                            <div>
                                <h2>Unique Hero Layouts
                                    <p>I designed multiple unique layouts for website hero section which most websites struggle with.</p>
                                </h2>
                            </div>
                            {/* <button>View</button> */}
                        </div>
                        <div className={styles.workContainer}>

                            <div className={styles.bottomGrid}>
                                <img className={`${styles.image} ${styles.item4}`} src="gaming-center-hero-layout.png" alt="" />
                                <img className={`${styles.image} ${styles.item5}`} src="podcast-hero-layout.png" alt="" />
                            </div>

                        </div>
                    </div>


                </div>
                <div className={styles.subContainer}>
                    <div className={styles.workContent}>
                        <div>
                            <h2>PlanCo Website
                                <p>PlanCo is a website made for upperclass family travel management with kids security and 24 hours support.</p>
                            </h2>
                        </div>
                        {/* <button>View</button> */}
                    </div>
                    <div className={styles.workContainer}>

                        <div className={styles.bottomGrid}>
                            <img className={`${styles.image} ${styles.item4}`} src="planco-img-1.png" alt="" />
                            <img className={`${styles.image} ${styles.item5}`} src="planco-img-2.png" alt="" />
                        </div>

                    </div>
                </div>
                <div className={styles.subContainer}>
                    <div className={styles.workContent}>
                        <div>
                            <h2>Growth Mentor App
                                <p>A full-featured appointment booking web application to book appointments, with a separate admin dashboard for oversight.</p>
                            </h2>
                        </div>
                        {/* <button>View</button> */}
                    </div>
                    <div className={styles.workContainer}>

                        <div className={styles.bottomGrid}>
                            <img className={`${styles.image} ${styles.item4}`} src="growth-mentor-1.png" alt="" />
                            <img className={`${styles.image} ${styles.item5}`} src="growth-mentor-2.png" alt="" />
                        </div>

                    </div>
                </div>
                <div className={styles.subContainer}>
                    <div className={styles.workContent}>
                        <div>
                            <h2>Photon Website
                                <p>A free stock image downloading website with search functionality. Images are from pexels official website.</p>
                            </h2>
                        </div>
                        {/* <button>View</button> */}
                    </div>
                    <div className={styles.workContainer}>

                        <div className={styles.bottomGrid}>
                            <img className={`${styles.image} ${styles.item4}`} src="photon-img-1.png" alt="" />
                            <img className={`${styles.image} ${styles.item5}`} src="photon-img-2.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
