'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './projects.module.css';

export interface ProjectProps {
  imgSrc: StaticImageData;
  imgAlt?: string;
  paragraph: string;
  title: string;
  buttonText: string;
  projectDesHeading: string;
  projectDesText: String;
  onButtonClick?: () => void;
}

const ProjectPage: React.FC<ProjectProps> = ({ imgSrc,
  imgAlt = 'projectImg',
  paragraph,
  title,
  buttonText,
  projectDesHeading,
  projectDesText,
  onButtonClick, }) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroGrid}>
        <div className={styles.heroImg}>
          <Image className={styles.myImg} src={imgSrc} alt={imgAlt}/>
        </div>
        <div className={styles.heroContent}>
          <p>{paragraph}</p>
          <div className={styles.flexContent}>
            <h1 className={styles.heroText}>{title}</h1>
            <div className={styles.heroBtns}>
              <button className={styles.heroBtn} onClick={onButtonClick}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectDesGrid}>
        <div className={styles.projectDesContent}>
          <h2>{projectDesHeading}</h2>
          <p>{projectDesText}</p>
        </div>

      </div>
    </div>

            
  );
};

export default ProjectPage;
