import Link from 'next/link';
import styles from './footer.module.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className={styles.main}>
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.navLinks}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/work">Work</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com/in/ajay-kumarsharma/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ajayshsh7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
          <p className={styles.copyright}>© {new Date().getFullYear()} Ajay Sharma. All rights reserved.</p>
        </footer>
    </div>
  );
}
