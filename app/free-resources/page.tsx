// app/free-resources/page.tsx
'use client';

import Link from 'next/link';
import styles from './resources.module.css';

export default function FreeResourcesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Free Resources</h1>
      <p className={styles.subtitle}>Coming Soon 🚀</p>
      <p className={styles.description}>
        I'm currently working on useful tools, guides, and templates for web developers & designers.
        Stay tuned!
      </p>

      <Link href="/" className={styles.homeBtn}>
        Go to Home
      </Link>
    </div>
  );
}
