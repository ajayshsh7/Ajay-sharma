'use client';

import styles from './ContactForm.module.css';

export default function ContactForm() {
  const apiKey = process.env.NEXT_PUBLIC_FORM_KEY;
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.contactH}>Contact Me</h1>
      <form
        action={apiKey}
        method="POST"
        className={styles.form}
      >
        <input className={styles.input} type="hidden" name="_redirect" value="/thank-you" />
        <div className={styles.formGrid}>
          <div className={styles.field}>
            {/* <label htmlFor="name" className={styles.label}>Name</label> */}
            <input className={styles.input} type="text" name="name" id="name" placeholder='Name' required />
          </div>
          <div className={styles.field}>
            {/* <label htmlFor="email" className={styles.label}>Email</label> */}
            <input className={styles.input} type="email" name="email" id="email" placeholder='E-mail' required />
          </div>
        </div>
        <div className={styles.field}>
          {/* <label htmlFor="subject" className={styles.label}>Subject</label> */}
          <input className={styles.input} type="text" name="subject" id="subject" placeholder='Subject' required />
        </div>
        <div className={styles.field}>
          {/* <label htmlFor="message" className={styles.label}>Message</label> */}
          <textarea className={styles.textarea} name="message" id="message" placeholder='Message' rows={5} required></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}
