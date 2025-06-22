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
      title: 'BharaGhar - Rent as you like',
      description: 'A smart shared accommodation platform tailored for the Indian market. BharaGhar simplifies room rentals with verified listings, roommate matchmaking, and intelligent filters for affordability, location, and preferences. Built with a FastAPI backend, it focuses on trust, convenience, and a seamless user experience for students and working professionals. (Codes are in private repo currently)',
      image: 'https://images.pexels.com/photos/7578984/pexels-photo-7578984.jpeg',
      technologies: ['NextJs', 'Node.js', 'OpenAI API', 'Python', 'FastAPI', 'MongoDB'],
      category: 'Web Development',
      status: 'In Development',
      githubUrl: 'https://github.com/krishnakamalbaishnab/bharaghar',
      liveUrl: 'https://ai-taskmanager.com',
      featured: true,
      stats: { stars: 234, forks: 45 }
    },
    {
      title: 'HelloNotes - Capture & Recall',
      description: 'A minimal and efficient note-taking web app designed for students and productivity-focused users. Built using FastAPI, MongoDB, and Bootstrap, helloNotes allows users to create, organize, and manage their notes seamlessly. With a focus on speed and simplicity, it supports rich-text formatting, secure storage, and easy retrieval—making note-taking effortless and accessible from any device.(Codes are in private repo currently)',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'FastAPI', 'MondoDB', 'Bootstrap', 'NodeJS', 'Vercel'],
      category: 'Web Development',
      status: 'In Development',
      githubUrl: 'https://github.com/krishnakamalbaishnab/Hello-Notes',
      liveUrl: 'https://shop-demo.vercel.app',
      featured: true,
      stats: { stars: 189, forks: 67 }
    },
    {
      title: 'CryptoForecast - Invest Smart',
      description: 'A predictive analytics tool that leverages historical market data and machine learning to forecast cryptocurrency trends. CryptoForecast helps users make informed investment decisions by providing future price predictions, volatility analysis, and trend visualizations. Designed with a focus on accuracy and usability, it empowers both new and seasoned investors to navigate the crypto market with confidence.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
      technologies: ['Python', 'Keras', 'TensorFllow', 'LSTM', 'Numpy & pandas', 'SkLearn','Render'],
      category: 'Machine Learning & AI',
      status: 'Live',
      githubUrl: 'https://github.com/krishnakamalbaishnab/AI-Driven-Investment/tree/main',
      liveUrl: 'https://ai-driven-investment.onrender.com/',
      featured: true,
      stats: { stars: 156, forks: 23 }
    },
    {
      title: 'Habit Tracker',
      description: 'A productivity-focused Chrome extension that tracks your browsing behavior and encourages positive habits through a points-based reward system. Built with JavaScript and the Chrome Extension API, BrowseBetter monitors website usage in real-time, helping users stay accountable and focused. It gamifies self-discipline by assigning scores based on browsing patterns, making habit-building fun and measurable.',
      image: 'https://images.pexels.com/photos/4025372/pexels-photo-4025372.jpeg',
      technologies: ['JavaScript', 'Chrome Extension API', 'ManifestV3', 'HTML5'],
      category: 'API - Extension',
      status: 'Live',
      githubUrl: 'https://github.com/krishnakamalbaishnab/HabitTracker',
      liveUrl: 'https://realtime-chat-demo.com',
      featured: false,
      stats: { stars: 98, forks: 34 }
    },
    {
      title: 'E-Commerce Data Insights',
      description: 'An end-to-end data analysis project focused on uncovering patterns in customer behavior, sales trends, and product performance from an e-commerce dataset. The project involved data cleaning, exploratory data analysis (EDA), and visual storytelling to generate actionable business insights. Additionally, machine learning techniques like XGBoost were used to predict customer purchase behavior and identify high-value products.',
      image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg',
      technologies: ['EDA', 'Python', 'XGBoost', 'Machine Learning', 'Data Ecience'],
      category: 'Data Science and Machine Learning',
      status: 'Live',
      githubUrl: 'https://github.com/krishnakamalbaishnab/EDA-on-E--Commerce-Data',
      featured: false,
      stats: { stars: 76, forks: 12 }
    },
    {
      title: 'AttriPredict',
      description: 'AttriPredict is a web-based machine learning tool designed to predict employee attrition with over 80% accuracy. Developed using Random Forest and integrated with a Flask interface, it enables HR teams to input employee data and receive real-time risk predictions. The project combines EDA, feature engineering, and visualization to identify key factors driving attrition, supporting data-driven retention strategies..',
      image: 'https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg',
      technologies: ['Python', 'Flask', 'EDA', 'SkLearn', 'Numpy & Pandas','Regression','Docker','Render'],
      category: 'Machine Learning & AI',
      status: 'Live',
      githubUrl: 'https://github.com/krishnakamalbaishnab/Predict-Employee-Attrition-Using-this-Web-App',
      liveUrl: 'https://predict-employee-attrition-using-this-w9dc.onrender.com/',
      featured: false,
      stats: { stars: 143, forks: 28 }
    }
  ];

  const categories = ['All', 'Web Development','Data Science and Machine Learning', 'Machine Learning & AI','API - Extension'];
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
            A collection of projects I've built, from web applications and Data Science, Machine Learning and AI
            solutions and DevOps tools. Each project represents a unique
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