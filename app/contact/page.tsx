// app/not-found.tsx
'use client';

import Link from 'next/link';
import styles from './contact.module.css';

export default function NotFound() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>Oops! Page not found.</p>
      <Link href="/" className={styles.homeBtn}>Go Back Home</Link>
    </div>
  );
}
