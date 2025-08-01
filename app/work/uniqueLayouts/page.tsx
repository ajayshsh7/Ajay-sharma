'use client';


import ProjectPage from '@/app/work/ProjectPage';
import aboutheroImg from '../../../public/abouthero.png';
import { useRouter } from 'next/navigation';

export default function ProjectOne() {
  const router = useRouter();
  return (
    <ProjectPage
      imgSrc={aboutheroImg}
      imgAlt="Illustration about the developer's work"
      paragraph="My Work"
      title="Explore my work on web development and UI/UX design"
      buttonText="Contact Me"
      projectDesHeading = ""
      projectDesText = ""
      onButtonClick={() => router.push('/contact')}

    />
  );
}
