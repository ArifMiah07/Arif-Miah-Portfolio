import { Metadata } from 'next';
import { education, experience, skills } from '@/lib/data2';
import AboutContent from '@/components/about/AboutContent';

export const metadata: Metadata = {
  title: 'About | Arif Miah Portfolio',
  description: 'Learn more about my background, education, and experience',
};

export default function AboutPage() {
  // todo: add backend, use rtk query

  return (
    <AboutContent
      education={education}
      experience={experience}
      skills={skills}
    />
  );
}