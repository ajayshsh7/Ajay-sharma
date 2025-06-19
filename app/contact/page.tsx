
'use client';

import { Component } from 'react';
import ContactForm from '@/components/ContactForm';
import styles from './contact.module.css';

export default function NotFound() {
  return (
    <div className={styles.contactContainer}>
      <ContactForm />
    </div>
  );
}
