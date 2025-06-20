'use client';

import { motion } from 'framer-motion';
import { Timeline } from '@/components/timeline';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const timelineItems = [
    {
      date: 'Sept 2023 - Present',
      title: 'System Analyst Engineer',
      company: 'Rutick One Limited - Edinburgh',
      description: 'Leading a team of 3 engineers in developing scalable web applications. Specializing in FastAPI, Python, and cloud architecture.',
      type: 'work' as const,
    },
    {
      date: 'July 2024 - September 2024',
      title: 'Software Engineer - Team Lead',
      company: 'SenseIO.net - India',
      description: 'Leading a team of 3 engineers in developing scalable web applications. Specializing in FastAPI, Python, and cloud architecture.',
      type: 'work' as const,
    },
    {
      date: 'July 2023 - July 2024',
      title: 'Software Engineer - Contract',
      company: 'SenseIO.net - India',
      description: 'Design and deploy ML models to solve business challenges using optimal technologies and frameworks.',
      type: 'work' as const,
    },
    {
      date: '2023',
      title: 'Process Analyst',
      company: 'Marco Paul - United Kingdom',
      description: 'Efficiently managed customer orders and streamlined order processing by coordinating across departments, enhancing overall operational workflow and customer experience.',
      type: 'personal' as const,
    },
    {
      date: '2023',
      title: 'Software Engineer - Intern',
      company: 'Mercedes Benz - Germany',
      description: 'Developed AI and ML models to enhance voice recognition, object detection, and in-car assistant systems for improved user experience and autonomous driving at Mercedes-Benz AG.',
      type: 'personal' as const,
    },
    {
      date: '2022 - 2023',
      title: 'Master of Science in Advanced Computer Science',
      company: 'Cardiff University - United Kingdom',
      description: 'Graduated with honors. Thesis on "Cloud technologies for data storage, processing, and analysis, focusing on performance and scalability." | GPA : 3.4/4.0',
      type: 'education' as const,
    },
    {
      date: '2019',
      title: 'Hackathon Champion',
      description: 'Won first place at TechCrunch Disrupt with an AI-powered accessibility tool for visually impaired users.',
      type: 'achievement' as const,
    },
    {
      date: '2016 - 2021',
      title: 'Bachelor of Technology in Computer Science and Engineering',
      company: 'Don Bosco University - India',
      description: 'Graduated with honors along with a focus on artificial intelligence and machine learning. President of Computer Science Society.',
      type: 'education' as const,
    },
  ];

  const skills = [
    'C/C++', 'Python', 'JavaScript','Java','FastAPI', 'DJango', 'Flask','Node.js',
    'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes',
    'Machine Learning', 'AI', 'System Design'
  ];

  const interests = [
    'Backend Development','Machine Learning and AI', 'Entrepreneurship','Sports',
    'Sustainable Technology', 'Mentoring', 'Travel', 'Gadegts'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software engineer and entrepreneur with a mission to build
            technology that solves real-world problems and makes a positive impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>My Story</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  My journey in technology began during my childhood when I discovered the magic
                  of creating something from nothing through code. What started as curiosity about
                  how computers work evolved into a deep passion for building solutions that matter.
                </p>
                <p>
                  Throughout my academic journey at Stanford and MIT, I focused on artificial
                  intelligence and distributed systems, always with an eye toward practical
                  applications. My thesis work on real-time data processing laid the foundation
                  for much of my professional work today.
                </p>
                <p>
                  As an entrepreneur, I've founded multiple ventures, including BlazeBuster, a
                  startup focused on wildfire prevention using IoT and ML technologies. I believe
                  in using technology not just for profit, but for purpose – to address climate
                  change, improve accessibility, and create opportunities for others.
                </p>
                <p>
                  When I'm not coding or building businesses, you'll find me rock climbing,
                  exploring new places with my camera, or mentoring the next generation of
                  engineers. I'm always excited to connect with like-minded individuals who
                  share a passion for innovation and positive impact.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>Technologies I work with</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interests</CardTitle>
                <CardDescription>What I'm passionate about</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge key={interest} variant="outline">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
          <Timeline items={timelineItems} />
        </motion.div>
      </div>
    </div>
  );
}