'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'A smart task management application that uses machine learning to prioritize tasks, predict completion times, and suggest optimal schedules. Features natural language processing for task creation and intelligent deadline recommendations.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'TensorFlow', 'Redis'],
      category: 'Web Development',
      status: 'Live',
      githubUrl: 'https://github.com/alexjohnson/ai-task-manager',
      liveUrl: 'https://ai-taskmanager.com',
      featured: true,
      stats: { stars: 234, forks: 45 }
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js and Stripe. Includes inventory management, order tracking, payment processing, and admin dashboard. Supports multiple currencies and payment methods.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Vercel'],
      category: 'Full Stack',
      status: 'Live',
      githubUrl: 'https://github.com/alexjohnson/ecommerce-platform',
      liveUrl: 'https://shop-demo.vercel.app',
      featured: true,
      stats: { stars: 189, forks: 67 }
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform mobile app for fitness tracking with real-time workout analytics, social features, and personalized training plans. Integrates with wearable devices and health APIs.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'HealthKit', 'Google Fit'],
      category: 'Mobile Development',
      status: 'Live',
      githubUrl: 'https://github.com/alexjohnson/fitness-app',
      liveUrl: 'https://apps.apple.com/app/fittrack',
      featured: true,
      stats: { stars: 156, forks: 23 }
    },
    {
      title: 'Real-time Chat Application',
      description: 'Scalable real-time chat application with support for multiple rooms, file sharing, video calls, and message encryption. Built with WebSocket technology for instant messaging.',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC', 'JWT'],
      category: 'Web Development',
      status: 'Live',
      githubUrl: 'https://github.com/alexjohnson/chat-app',
      liveUrl: 'https://realtime-chat-demo.com',
      featured: false,
      stats: { stars: 98, forks: 34 }
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting system built on blockchain technology. Ensures vote integrity, anonymity, and provides real-time results with full audit trails.',
      image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'MetaMask', 'IPFS'],
      category: 'Blockchain',
      status: 'In Development',
      githubUrl: 'https://github.com/alexjohnson/blockchain-voting',
      featured: false,
      stats: { stars: 76, forks: 12 }
    },
    {
      title: 'DevOps Monitoring Dashboard',
      description: 'Comprehensive monitoring dashboard for DevOps teams. Tracks application performance, server metrics, deployment status, and provides intelligent alerting.',
      image: 'https://images.pexels.com/photos/159211/headway-537308-unsplash-159211.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Go', 'InfluxDB', 'Grafana', 'Docker', 'Kubernetes'],
      category: 'DevOps',
      status: 'Live',
      githubUrl: 'https://github.com/alexjohnson/devops-dashboard',
      liveUrl: 'https://devops-monitor.com',
      featured: false,
      stats: { stars: 143, forks: 28 }
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Full Stack', 'Blockchain', 'DevOps'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I've built, from web applications and mobile apps
            to blockchain solutions and DevOps tools. Each project represents a unique
            challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} featured />
            ))}
          </div>
        </motion.section>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, featured = false }: { project: any; index: number; featured?: boolean }) {
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
          {featured && (
            <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          <Badge 
            variant={project.status === 'Live' ? 'default' : 'secondary'}
            className="absolute top-2 right-2"
          >
            {project.status}
          </Badge>
        </div>
        
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
              <Badge variant="outline" className="mb-2">
                {project.category}
              </Badge>
            </div>
            {project.stats && (
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4" />
                <span>{project.stats.stars}</span>
              </div>
            )}
          </div>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
            {project.liveUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}