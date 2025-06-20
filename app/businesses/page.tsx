'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Calendar, TrendingUp } from 'lucide-react';

export default function Businesses() {
  const businesses = [
    {
      name: 'BlazeBuster',
      role: 'Founder & CEO',
      period: '2022 - Present',
      status: 'Active',
      description: 'AI-powered wildfire prevention platform using IoT sensors and machine learning to detect and predict fire risks in real-time.',
      industry: 'Climate Tech',
      stage: 'Series A',
      achievements: [
        'Raised $2.5M in seed funding',
        'Deployed sensors across 10,000+ acres',
        'Prevented 15 potential wildfires',
        'Partnership with California Fire Department'
      ],
      technologies: ['IoT', 'Machine Learning', 'React', 'Python', 'AWS', 'TensorFlow'],
      website: 'https://blazebuster.com',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'ACE Solutions',
      role: 'Co-founder & CTO',
      period: '2020 - 2022',
      status: 'Acquired',
      description: 'B2B SaaS platform for automated customer engagement and retention using predictive analytics and personalized messaging.',
      industry: 'SaaS',
      stage: 'Acquired by TechCorp',
      achievements: [
        'Grew to $1M ARR in 18 months',
        '200+ enterprise customers',
        'Acquired by TechCorp for $8M',
        '15-person team at exit'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Kubernetes', 'Stripe'],
      website: 'https://techcorp.com/ace',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'DevTools Pro',
      role: 'Technical Advisor',
      period: '2023 - Present',
      status: 'Advisory',
      description: 'Developer productivity tools and IDE extensions that help engineering teams ship code faster and with fewer bugs.',
      industry: 'Developer Tools',
      stage: 'Seed',
      achievements: [
        '50K+ active developers',
        'Featured in VS Code marketplace',
        '$500K in seed funding',
        'Integrated with GitHub Actions'
      ],
      technologies: ['TypeScript', 'VS Code API', 'Electron', 'Go', 'Docker'],
      website: 'https://devtools.pro',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500';
      case 'Acquired': return 'bg-blue-500';
      case 'Advisory': return 'bg-purple-500';
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Businesses</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My entrepreneurial journey through various ventures, from founding startups
            to advising growing companies. Each business has taught me valuable lessons
            about building products that solve real problems.
          </p>
        </motion.div>

        <div className="space-y-8">
          {businesses.map((business, index) => (
            <motion.div
              key={business.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="aspect-video md:aspect-square overflow-hidden">
                      <img
                        src={business.image}
                        alt={business.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <CardTitle className="text-2xl mb-2">{business.name}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {business.role}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col md:items-end mt-2 md:mt-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className={`w-2 h-2 rounded-full ${getStatusColor(business.status)}`} />
                            <span className="text-sm font-medium">{business.status}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {business.period}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge variant="outline">{business.industry}</Badge>
                        <Badge variant="secondary">{business.stage}</Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground">{business.description}</p>
                      
                      <div>
                        <h4 className="font-medium mb-3 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          {business.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {business.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-4 pt-4">
                        <Button asChild>
                          <a href={business.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Website
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Entrepreneurship Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">My Entrepreneurship Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                Throughout my entrepreneurial journey, I've learned that the most successful
                businesses solve real problems for real people. My approach focuses on:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li><strong>Problem-first thinking:</strong> Understanding the problem deeply before building solutions</li>
                <li><strong>Technical excellence:</strong> Building robust, scalable products that users can rely on</li>
                <li><strong>Team empowerment:</strong> Creating environments where talented people can do their best work</li>
                <li><strong>Sustainable growth:</strong> Building businesses that create value for all stakeholders</li>
                <li><strong>Continuous learning:</strong> Embracing failure as a learning opportunity</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                I'm always interested in connecting with fellow entrepreneurs, potential co-founders,
                and anyone working on interesting problems. If you're building something exciting,
                I'd love to hear about it.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}