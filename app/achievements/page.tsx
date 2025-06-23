'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Award, Medal, Star, ExternalLink, Calendar, Users } from 'lucide-react';

interface Achievement {
  title: string;
  category: string;
  organization: string;
  date: string;
  description: string;
  icon: any;
  image: string;
  featured: boolean;
  skills: string[];
  credentialId?: string;
  validUntil?: string;
  prize?: string;
  duration?: string;
  ranking?: string;
  criteria?: string;
  placement?: string;
  participants?: string;
  requirement?: string;
  membership?: string;
  paperTitle?: string;
  coAuthors?: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      title: 'AWS Cloud Practitoner',
      category: 'Certification',
      organization: 'Amazon Web Services',
      date: '2024',
      description: 'Advanced certification demonstrating expertise in designing distributed applications and systems on the AWS platform.',
      icon: Award,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      // credentialId: 'AWS-SAP-2023-001234',
      validUntil: '2026',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization'],
      featured: true
    },
    {
      title: 'Python Competitive Coding Winner',
      category: 'Competition',
      organization: 'LearnCodeOnline',
      date: '2023',
      description: 'First place winner for coding contest in Python.',
      icon: Trophy,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      prize: '$250',
      skills: ['DSA','Python'],
      featured: true
    },
    {
      title: 'Guest Speaker - Computer Science',
      category: 'Academic',
      organization: 'Don Bosco University',
      date: '2025',
      description: 'Delivered an alumni talk on "Software Engineering in 2025" focusing on industry hiring trends, job search strategies, and interview preparation to inspire current students.',
      icon: Medal,
      image: 'https://images.pexels.com/photos/5486096/pexels-photo-5486096.jpeg',
      duration: '1 event',
      skills: ['Public Speaking', 'Career Guidance', 'Software Engineering'],
      featured: true
    },
    {
      title: 'IBM Data Science Professional Certificate',
      category: 'Certification',
      organization: 'IBM',
      date: '2023',
      description: 'Comprehensive certification covering data science fundamentals, data analysis, visualization, and machine learning using Python and related tools.',
      icon: Award,
      image: 'https://images.pexels.com/photos/28792027/pexels-photo-28792027.jpeg',
      credentialId: 'IBM-DS-2023-123456',
      validUntil: '2026',
      skills: ['Data Analysis', 'Python', 'Machine Learning', 'Data Visualization'],
      featured: false
    },
    {
      title: 'Outstanding Graduate Student Award',
      category: 'Academic',
      organization: 'Cardiff University - Computer Science Department',
      date: '2023',
      description: 'Awarded to the top 5% of graduate students for exceptional academic performance and research contributions.',
      icon: Star,
      image: 'https://images.pexels.com/photos/6532373/pexels-photo-6532373.jpeg',
      ranking: 'Top 5%',
      criteria: 'Academic & Research Excellence',
      skills: ['Research', 'Leadership', 'Innovation'],
      featured: false
    },
    {
      title: 'Machine Learning',
      category: 'Certification',
      organization: 'Stanford University (Coursera)',
      date: '2021',
      description: 'Comprehensive course on machine learning concepts, algorithms, and practical applications taught by Andrew Ng.',
      icon: Award,
      image: 'https://images.pexels.com/photos/8386363/pexels-photo-8386363.jpeg',
      // credentialId: 'ML-STANFORD-2023-345678',
      // validUntil: '2026',
      skills: ['Machine Learning', 'Supervised Learning', 'Unsupervised Learning', 'Regression'],
      featured: false
    },
    // {
    //   title: 'Stanford Entrepreneurship Challenge Finalist',
    //   category: 'Competition',
    //   organization: 'Stanford University',
    //   date: '2018',
    //   description: 'Top 10 finalist in university-wide entrepreneurship competition for innovative startup idea in climate technology.',
    //   icon: Trophy,
    //   image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   placement: 'Top 10 Finalist',
    //   participants: '200+ teams',
    //   skills: ['Entrepreneurship', 'Climate Tech', 'Business Strategy'],
    //   featured: false
    // },
    // {
    //   title: 'Phi Beta Kappa Honor Society',
    //   category: 'Honor Society',
    //   organization: 'Stanford University',
    //   date: '2018',
    //   description: 'Inducted into the nation\'s most prestigious academic honor society for exceptional academic achievement.',
    //   icon: Medal,
    //   image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   requirement: 'Top 10% GPA',
    //   membership: 'Lifetime',
    //   skills: ['Academic Excellence', 'Liberal Arts', 'Critical Thinking'],
    //   featured: false
    // },
    // {
    //   title: 'IEEE Best Paper Award',
    //   category: 'Publication',
    //   organization: 'IEEE International Conference on Distributed Computing',
    //   date: '2020',
    //   description: 'Best paper award for research on fault-tolerant stream processing in distributed systems.',
    //   icon: Star,
    //   image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   paperTitle: 'Fault-Tolerant Stream Processing with Minimal Latency',
    //   coAuthors: '3 co-authors',
    //   skills: ['Research', 'Distributed Systems', 'Academic Writing'],
    //   featured: false
    // }
  ];

  const stats = [
    { label: 'Total Achievements', value: '25+', icon: Trophy },
    { label: 'Certifications', value: '8', icon: Award },
    { label: 'Competition Wins', value: '5', icon: Medal },
    { label: 'Academic Honors', value: '12', icon: Star }
  ];

  const categories = ['All', 'Certification', 'Competition', 'Academic'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  const featuredAchievements = achievements.filter(achievement => achievement.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Certification': return 'bg-blue-500';
      case 'Competition': return 'bg-yellow-500';
      case 'Academic': return 'bg-green-500';
      case 'Honor Society': return 'bg-purple-500';
      case 'Publication': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Achievements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of certifications, awards, and recognitions that mark significant
            milestones in my professional and academic journey. Each achievement represents
            dedication, learning, and growth in various aspects of technology and leadership.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Featured Achievements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredAchievements.map((achievement, index) => (
              <FeaturedAchievementCard key={achievement.title} achievement={achievement} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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

        {/* All Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">All Achievements</h2>
          <div className="space-y-6">
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/4">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div className="flex items-start space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <achievement.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl mb-2">{achievement.title}</CardTitle>
                              <CardDescription className="text-lg font-medium text-primary">
                                {achievement.organization}
                              </CardDescription>
                            </div>
                          </div>
                          <div className="flex flex-col md:items-end mt-2 md:mt-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className={`w-2 h-2 rounded-full ${getCategoryColor(achievement.category)}`} />
                              <span className="text-sm font-medium">{achievement.category}</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              {achievement.date}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{achievement.description}</p>
                        
                        {/* Achievement-specific details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          {achievement.credentialId && (
                            <div>
                              <span className="font-medium">Credential ID:</span>
                              <span className="ml-2 text-muted-foreground">{achievement.credentialId}</span>
                            </div>
                          )}
                          {achievement.validUntil && (
                            <div>
                              <span className="font-medium">Valid Until:</span>
                              <span className="ml-2 text-muted-foreground">{achievement.validUntil}</span>
                            </div>
                          )}
                          {achievement.prize && (
                            <div>
                              <span className="font-medium">Prize:</span>
                              <span className="ml-2 text-muted-foreground">{achievement.prize}</span>
                            </div>
                          )}
                          {achievement.placement && (
                            <div>
                              <span className="font-medium">Placement:</span>
                              <span className="ml-2 text-muted-foreground">{achievement.placement}</span>
                            </div>
                          )}
                          {achievement.ranking && (
                            <div>
                              <span className="font-medium">Ranking:</span>
                              <span className="ml-2 text-muted-foreground">{achievement.ranking}</span>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Related Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {achievement.skills.map((skill: string) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievement Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">My Approach to Achievement</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                I believe that achievements are not just about recognition, but about the journey
                of continuous learning and growth. Each certification, award, and honor represents
                countless hours of study, practice, and dedication to excellence.
              </p>
              <p className="text-muted-foreground mt-4">
                My approach to professional development focuses on:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li><strong>Continuous Learning:</strong> Staying current with evolving technologies and best practices</li>
                <li><strong>Practical Application:</strong> Ensuring that knowledge gained translates to real-world impact</li>
                <li><strong>Knowledge Sharing:</strong> Teaching and mentoring others to multiply the impact of learning</li>
                <li><strong>Excellence Standards:</strong> Maintaining high standards in all professional endeavors</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                I'm always working toward new goals and certifications. If you're interested in
                learning more about any of these achievements or discussing professional development
                strategies, I'd love to connect and share experiences.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}

function FeaturedAchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
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
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            Featured
          </Badge>
          <div className="absolute top-4 right-4">
            <div className="p-2 bg-white/90 dark:bg-black/90 rounded-lg backdrop-blur-sm">
              <achievement.icon className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {achievement.title}
          </CardTitle>
          <CardDescription className="font-medium text-primary">
            {achievement.organization}
          </CardDescription>
          <CardDescription className="line-clamp-3">
            {achievement.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{achievement.date}</span>
            </div>
            <Badge variant="outline" className="text-xs">
              {achievement.category}
            </Badge>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Skills:</h4>
            <div className="flex flex-wrap gap-1">
              {achievement.skills.slice(0, 3).map((skill: string) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {achievement.skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{achievement.skills.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}