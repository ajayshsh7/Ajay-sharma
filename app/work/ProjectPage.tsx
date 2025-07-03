'use client';

import React from 'react';
import styles from '@/styles/Project.module.css';

export interface ProjectProps {
  title: string;
  image: string;
  description: string;
}

const ProjectPage: React.FC<ProjectProps> = ({ title, image, description }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <img src={image} alt={title} className={styles.image} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProjectPage;
