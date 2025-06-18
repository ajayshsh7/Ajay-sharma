'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch('https://formspree.io/f/mnnvzgnv', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      router.push('/thank-you');
    } else {
      alert('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input required type="text" name="name" id="name" />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input required type="email" name="email" id="email" />
      </div>

      <div className={styles.field}>
        <label htmlFor="subject">Subject</label>
        <input required type="text" name="subject" id="subject" />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea required name="message" id="message" rows={5}></textarea>
      </div>

      <button type="submit" disabled={loading} className={styles.button}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
