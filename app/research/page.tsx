'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Users, Calendar, Award, BookOpen } from 'lucide-react';

export default function Research() {
  const researchProjects = [
    {
      title: 'Real-time Data Processing in Distributed Environments',
      type: 'Master\'s Thesis',
      institution: 'MIT',
      period: '2019 - 2020',
      status: 'Published',
      description: 'Developed novel algorithms for processing streaming data across distributed systems with focus on fault tolerance and low-latency requirements. The research addresses challenges in maintaining consistency while achieving high throughput in real-time applications.',
      technologies: ['Apache Kafka', 'Apache Flink', 'Kubernetes', 'Go', 'Python'],
      collaborators: ['Dr. Sarah Chen', 'Prof. Michael Rodriguez'],
      publications: [
        {
          title: 'Fault-Tolerant Stream Processing with Minimal Latency',
          venue: 'IEEE International Conference on Distributed Computing Systems',
          year: '2020',
          url: 'https://ieeexplore.ieee.org/document/example'
        }
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Machine Learning Applications in Healthcare Diagnostics',
      type: 'Research Project',
      institution: 'MIT AI Lab',
      period: '2019 - 2020',
      status: 'Published',
      description: 'Investigated the application of deep learning models for early detection of cardiovascular diseases using ECG data. Developed a CNN-based approach that achieved 94% accuracy in identifying arrhythmias.',
      technologies: ['TensorFlow', 'Python', 'Keras', 'OpenCV', 'NumPy'],
      collaborators: ['Dr. Emily Watson', 'Medical Center Partners'],
      publications: [
        {
          title: 'Deep Learning for ECG-based Arrhythmia Detection',
          venue: 'Journal of Medical AI',
          year: '2020',
          url: 'https://example.com/medical-ai-journal'
        }
      ],
      image: 'https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Human-Computer Interaction in Virtual Reality Environments',
      type: 'Research Study',
      institution: 'Stanford HCI Lab',
      period: '2017 - 2018',
      status: 'Published',
      description: 'Conducted user studies on interaction paradigms in VR environments, focusing on gesture recognition and haptic feedback. The research contributed to understanding how users adapt to immersive interfaces.',
      technologies: ['Unity', 'C#', 'Oculus SDK', 'Leap Motion', 'MATLAB'],
      collaborators: ['Prof. David Kim', 'VR Research Team'],
      publications: [
        {
          title: 'Gesture-based Interaction in Virtual Reality: A User Study',
          venue: 'ACM Conference on Human Factors in Computing Systems',
          year: '2018',
          url: 'https://dl.acm.org/doi/example'
        }
      ],
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Blockchain Consensus Mechanisms for IoT Networks',
      type: 'Independent Research',
      institution: 'Self-directed',
      period: '2021 - 2022',
      status: 'In Progress',
      description: 'Exploring lightweight consensus algorithms suitable for resource-constrained IoT devices. The research aims to develop energy-efficient blockchain solutions for secure IoT communications.',
      technologies: ['Solidity', 'Go', 'Raspberry Pi', 'MQTT', 'Docker'],
      collaborators: ['Blockchain Research Community'],
      publications: [],
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Optimization of Microservice Architectures',
      type: 'Industry Research',
      institution: 'TechCorp R&D',
      period: '2022 - Present',
      status: 'Ongoing',
      description: 'Leading research on automated optimization of microservice deployments using machine learning. The project focuses on resource allocation, service mesh optimization, and predictive scaling.',
      technologies: ['Kubernetes', 'Istio', 'Prometheus', 'Python', 'TensorFlow'],
      collaborators: ['TechCorp Engineering Team'],
      publications: [
        {
          title: 'ML-driven Microservice Optimization',
          venue: 'IEEE Cloud Computing Conference',
          year: '2023',
          url: 'https://ieeexplore.ieee.org/document/example2'
        }
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const researchInterests = [
    'Distributed Systems',
    'Machine Learning',
    'Human-Computer Interaction',
    'Blockchain Technology',
    'Cloud Computing',
    'IoT Security',
    'Real-time Systems',
    'Data Processing'
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-500';
      case 'In Progress': return 'bg-yellow-500';
      case 'Ongoing': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const featuredProjects = researchProjects.filter(project => project.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic and industry research focuses on distributed systems, machine learning,
            and human-computer interaction. I'm passionate about solving complex technical
            challenges and contributing to the advancement of computer science.
          </p>
        </motion.div>

        {/* Featured Research */}
        {featuredProjects.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Featured Research</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <FeaturedResearchCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Research Interests */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Research Interests</CardTitle>
              <CardDescription>
                Areas of focus and ongoing exploration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {researchInterests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="text-sm">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* All Research Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">All Research Projects</h2>
          <div className="space-y-8">
            {researchProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="aspect-video md:aspect-square overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                            <CardDescription className="text-lg font-medium text-primary">
                              {project.type} • {project.institution}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col md:items-end mt-2 md:mt-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`} />
                              <span className="text-sm font-medium">{project.status}</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              {project.period}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground">{project.description}</p>
                        
                        <div>
                          <h4 className="font-medium mb-3 flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            Collaborators
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.collaborators.map((collaborator) => (
                              <Badge key={collaborator} variant="outline" className="text-xs">
                                {collaborator}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {project.publications.length > 0 && (
                          <div>
                            <h4 className="font-medium mb-3 flex items-center">
                              <FileText className="h-4 w-4 mr-2" />
                              Publications
                            </h4>
                            <div className="space-y-2">
                              {project.publications.map((pub, idx) => (
                                <div key={idx} className="p-3 bg-muted/50 rounded-lg">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h5 className="font-medium text-sm">{pub.title}</h5>
                                      <p className="text-xs text-muted-foreground mt-1">
                                        {pub.venue} • {pub.year}
                                      </p>
                                    </div>
                                    <Button size="sm" variant="ghost" asChild>
                                      <a href={pub.url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="h-3 w-3" />
                                      </a>
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <BookOpen className="h-6 w-6 mr-2" />
                Research Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                I believe that the best research emerges from the intersection of theoretical rigor
                and practical application. My approach focuses on identifying real-world problems
                and developing solutions that are both academically sound and industrially viable.
              </p>
              <p className="text-muted-foreground mt-4">
                I'm particularly interested in research that bridges the gap between academia and
                industry, and I actively seek collaborations that can translate research findings
                into tangible benefits for society. Whether it's improving healthcare through AI,
                making distributed systems more reliable, or enhancing human-computer interaction,
                I'm driven by the potential for technology to solve meaningful problems.
              </p>
              <p className="text-muted-foreground mt-4">
                I'm always open to discussing research opportunities, collaborations, or simply
                sharing ideas about the future of technology. If you're working on something
                interesting or have questions about any of my research, please don't hesitate
                to reach out.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}

function FeaturedResearchCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group"
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="relative">
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            Featured
          </Badge>
          <Badge 
            variant="secondary"
            className="absolute top-4 right-4"
          >
            {project.type}
          </Badge>
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-3">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{project.period}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4" />
                <span>{project.status}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 4} more
                </Badge>
              )}
            </div>
          </div>
          
          {project.publications.length > 0 && (
            <div className="flex space-x-2">
              <Button size="sm" asChild>
                <a href={project.publications[0].url} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" />
                  Read Paper
                </a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}