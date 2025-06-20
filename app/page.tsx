'use client';

import { Hero } from '@/components/hero';
import { SectionPreview } from '@/components/section-preview';
import { 
  Briefcase, 
  Code, 
  GraduationCap, 
  Building, 
  BookOpen, 
  Trophy,
  Heart,
  MessageCircle 
} from 'lucide-react';

export default function Home() {
  const previewSections = [
    {
      title: 'Experience',
      description: 'My professional journey and roles',
      href: '/experience',
      icon: Briefcase,
      items: [
        { title: 'Software Engineer', subtitle: 'SenseIO.net (Sept 2023 - Present)' },
        { title: 'Process Analyst', subtitle: 'Marco Paul (July 2023 - Sept 2023)' },
        { title: 'Software Engineer-Intern', subtitle: 'Mercedes-Benz (Jan 2023 - July 2023)' },
      ],
    },
    {
      title: 'Projects',
      description: 'Featured work and side projects',
      href: '/projects',
      icon: Code,
      items: [
        { title: 'HelloNotes', subtitle: 'FastAPI, React, Node.js, OpenAI' },
        { title: 'E-commerce Platform', subtitle: 'Next.js, Stripe, PostgreSQL' },
        { title: 'Habit Tracker', subtitle: 'JavaScript, React Native, Firebase' },
      ],
    },
    {
      title: 'Research',
      description: 'Academic work and publications',
      href: '/research',
      icon: GraduationCap,
      items: [
        { title: 'Machine Learning in Diabetes Prediction', subtitle: 'Published in IEEE Journal' },
        { title: 'Distributed Systems for Cloud Computing', subtitle: 'Masters Thesis' },
        { title: 'Sentiment Analysis using Geo Data', subtitle: 'Final Year Masters Project' },
      ],
    },
    {
      title: 'Products',
      description: 'Entrepreneurial ventures and startups',
      href: '/businesses',
      icon: Building,
      items: [
        { title: 'ACE Solutions', subtitle: 'Founding Engineer' },
        { title: 'HelloNotes', subtitle: 'Building' },
        { title: 'BharaGhor', subtitle: 'Founder' },
      ],
    },
    {
      title: 'Blog',
      description: 'Thoughts on tech, career, and life',
      href: '/blog',
      icon: BookOpen,
      items: [
        { title: 'The Future of Web Development', subtitle: 'Tech' },
        { title: 'Building a Remote Team', subtitle: 'Career' },
        { title: 'Lessons from Startup Life', subtitle: 'Reflections' },
      ],
    },
    {
      title: 'Achievements',
      description: 'Awards, certifications, and honors',
      href: '/achievements',
      icon: Trophy,
      items: [
        { title: 'AWS Solutions Architect', subtitle: 'Professional Certification' },
        { title: 'Hackathon Winner', subtitle: 'All India Hackathon 2019' },
        { title: 'Secured project funding from ASTEC during Bachelor\'s', subtitle: 'Computer Science, MIT' },
      ],
    },
  ];

  return (
    <div>
      <Hero />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore My Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover my professional experience, projects, research, and the various
              aspects that make up my career and personal interests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewSections.map((section, index) => (
              <SectionPreview
                key={section.title}
                {...section}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}