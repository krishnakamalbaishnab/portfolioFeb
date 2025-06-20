'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const workExperience = [
    {
      title: 'Software Engineer',
      company: 'SenseIO.net',
      location: 'India - Remote',
      period: '2023 - 2024',
      description: 'Leading a cross-functional team of 5 engineers in developing and maintaining scalable web applications serving over 1M users. Architected microservices infrastructure that improved system reliability by 40%.',
      technologies: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
      achievements: [
        'Reduced API response time by 60% through database optimization',
        'Mentored 3 junior engineers, all of whom received promotions',
        'Led migration to microservices architecture'
      ]
    },
    {
      title: 'Process Analyst',
      company: 'Marco Paul',
      location: 'United Kingdom',
      period: 'July 2023 - September 2023',
      description: 'Managed and processed customer orders using internal systems, ensuring timely and accurate fulfillment while enhancing the end-to-end customer experience. Collaborated across departments to streamline workflows and resolve order discrepancies efficiently.',
      technologies: ['Windows System', 'Power BI', 'Amazon AWS','C++'],
      achievements: [
        'Reduced order processing time by 25% through workflow optimization',
        'Improved interdepartmental communication, minimizing fulfillment errors',
        'Developed a reporting system to track order status and inventory, enhancing operational transparency'
      ]
    },
    {
      title: 'Software Engineer - Intern',
      company: 'Mercedes-Benz',
      location: 'Germany',
      period: 'January 2023 - July 2023',
      description: 'Contributed to AI-driven innovations in automotive systems, focusing on enhancing voice interaction, speech recognition, and autonomous driving capabilities using advanced machine learning techniques.',
      technologies: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
      achievements: [
        'Developed and optimized AI models for voice recognition and natural language interaction with in-car systems',
        'Improved voice-controlled system accuracy, enhancing user experience in real-time automotive environments',
        'Contributed to object detection algorithms, supporting safer and more reliable autonomous driving',
        'Applied NLP, speech processing, and XGBoost to build context-aware and responsive in-car AI systems'
      ]
    },
    {
      title: 'Teaching Assistant',
      company: 'Cardiff University',
      location: 'Cardiff, Wales, United Kingdom',
      period: 'January 2023 - May 2023',
      description: 'Supported teaching and academic activities across Python, MATLAB, NLP, and geospatial data courses, fostering hands-on learning and student development in computational disciplines.',
      technologies: ['Python', 'NumPy', 'Flask', 'SkLearn','MatplotLib','PostgreSQL', 'AWS', 'Docker'],
      achievements: [
        'Delivered lab sessions and tutorials in Python and MATLAB for data-focused modules',
        'Assisted in teaching NLP and geospatial analysis, contributing to curriculum delivery and assessment'
      ]
    },
    {
      title: 'Cyber Security Analyst',
      company: 'Gurugram Police',
      location: 'India',
      period: 'Summer 2021',
      description: 'Supported cybercrime investigations through threat analysis, digital forensics, and security research, contributing to data protection and cybersecurity operations within a law enforcement context.',
      technologies: ['Kali Linux', 'OSINT', 'Bash Scripting','Malware Analysis'],
      achievements: [
        'Conducted OSINT and threat assessments to aid active cybercrime investigations',
        'Assisted with forensic analysis and incident response to identify breach vectors and vulnerabilities',
        'Contributed to developing proactive cyber defense strategies with the cyber cell team'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Advanced Computer Science',
      school: 'Cardiff University',
      location: 'Cardiff, Wales, United Kingdom',
      period: '2018 - 2020',
      description: 'Specialized in Machine Learning and Distributed Systems. Thesis: "Cloud technologies for data storage, processing, and analysis, focusing on performance and scalability."',
      gpa: '3.4/4.0',
      honors: ['Graduate Teaching Assistant'],
      coursework: ['Advanced Algorithms', 'Machine Learning', 'Distributed Systems', 'Computer Vision', 'Data Science','Information Security','Software Design and Development']
    },
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'Don Bosco University',
      location: 'Assam, India',
      period: '2014 - 2018',
      description: 'Graduated with honors along with a focus on artificial intelligence and machine learning.',
      gpa: '3.2/4.0',
      honors: ['Coding Seminar resource Person'],
      coursework: ['Data Structures and Algorithm', 'AI', 'Software Engineering', 'Computer Networks','Operating Systems','Object Oriented Programming','Compiler Design','Distributed System','Computer Architecture and Organisation']
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey through various roles, companies, and educational institutions
            that have shaped my expertise in software engineering and technology leadership.
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {job.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {job.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{job.description}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {edu.school}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{edu.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">GPA:</h4>
                        <p className="text-sm text-muted-foreground">{edu.gpa}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Honors:</h4>
                        <div className="flex flex-wrap gap-1">
                          {edu.honors.map((honor) => (
                            <Badge key={honor} variant="outline" className="text-xs">
                              {honor}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="secondary">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}