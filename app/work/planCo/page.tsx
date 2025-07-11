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
      paragraph="Planco"
      title="Explore my work on web development and UI/UX design"
      buttonText="Contact Me"
      onButtonClick={() => router.push('/contact')}
      projectDesHeading = "PlanCo website"
      projectDesText = "PlanCo is a concept website that target premium class people with family and make their travel as smooth as possible. \nIt helps users to plan their trips and adventures near them, without having to worry about the safety of their child."
    />
  );
}
