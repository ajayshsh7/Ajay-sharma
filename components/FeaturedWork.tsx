import styles from './Work.module.css';
import mainstyles from '../app/page.module.css';

export default function FeaturedWork() {
  return (
    <main>
        <div className={styles.primaryContainer}> <h1>Featured Work</h1>
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
        
    </main>
  );
}
