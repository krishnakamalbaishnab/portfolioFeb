'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Mountain, Camera, Plane, Music, Book, Gamepad2, Dumbbell } from 'lucide-react';

export default function Sports() {
  const activities = [
    {
      title: 'Coding & Side Projects',
      description: 'Passionate about solving algorithm challenges and building side projects to sharpen problem-solving and development skills.',
      category: 'Computer Science & Software Development',
      level: 'Advanced',
      achievements: [
        'Completed 150+ problems on LeetCode and HackerRank',
        'Built multiple personal projects including web apps & automation tools',
        'Participated in coding competitions and hackathons',
      ],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
      icon: Book,
      years: '10+ years'
    },
    {
      title: 'Badminton',
      description: 'Passionate about both indoor and outdoor badminton. I love the mental and physical challenge of finding the perfect way to the top.',
      category: 'Sports',
      level: 'Advanced',
      achievements: [
        'Represented District in Assam at state-level competitions',
        'Participated in All Assam Ranking tournaments',
        'Represented university in Inter-University Badminton Championship',
        'Won the Inter-University Badminton Championship title'
      ],
      image: 'https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg',
      icon: Trophy,
      years: '8+ years'
    },
    {
      title: 'Photography',
      description: 'Capturing moments and landscapes through my lens. Specializing in nature photography and urban exploration.',
      category: 'Creative Arts',
      level: 'Intermediate',
      achievements: [
        'Featured in local gallery',
        '2K+ Instagram and Pexel followers',
        'Landscape photography'
      ],
      image: 'https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Camera,
      years: '2.5+ years'
    },
    {
      title: 'Travel & Exploration',
      description: 'Exploring new cultures, cuisines, and landscapes around the world. Always planning the next adventure.',
      category: 'Lifestyle',
      level: 'Enthusiast',
      achievements: [
        'Visited 4+ countries',
        'Backpacked through Europe',
      ],
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Plane,
      years: '5+ years'
    },
    {
      title: 'Book Reading',
      description: 'Passionate about reading productivity and self-improvement books that inspire growth and better habits.',
      category: 'Personal Development',
      level: 'Advanced',
      achievements: [
        'Read influential books like Atomic Habits, Make Epic Money, and The Power of your Subconscious Mind',
        'Apply learnings to improve daily habits and mindset',
        'Regular participant in book discussion groups and reading challenges'
      ],
      image: 'https://images.pexels.com/photos/1730560/pexels-photo-1730560.jpeg',
      icon: Book,
      // years: '9+ years'
    },
    {
      title: 'Music',
      description: 'Enjoy listening to soft music for relaxation and play musical instruments like the flute as a hobby.',
      category: 'Creative Arts',
      level: 'Intermediate',
      achievements: [
        'Avid listener of soft and classical music',
        'Play the flute and practice regularly',
        'Performed in small community events'
      ],
      image: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Music,
      // years: '4+ years'
    },
    
  ];

  const philosophyPoints = [
    {
      title: 'Balance is Key',
      description: 'I believe in maintaining a healthy work-life balance. My hobbies help me stay creative, focused, and energized for professional challenges.'
    },
    {
      title: 'Continuous Learning',
      description: 'Every hobby teaches valuable skills that translate to my professional life - problem-solving, patience, creativity, and perseverance.'
    },
    {
      title: 'Community & Connection',
      description: 'Many of my interests involve communities of like-minded people. I\'ve built lasting friendships and professional networks through shared passions.'
    },
    {
      title: 'Adventure & Growth',
      description: 'I seek experiences that push me out of my comfort zone and help me grow as a person, both physically and mentally.'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Enthusiast': return 'bg-blue-500';
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sports & Hobbies</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond coding and entrepreneurship, I'm passionate about adventure, creativity,
            and personal growth. Here's what keeps me inspired and energized outside of work.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">My Passions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="p-2 bg-white/90 dark:bg-black/90 rounded-lg backdrop-blur-sm">
                        <activity.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(activity.level)}`}>
                        {activity.level}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{activity.title}</CardTitle>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline">{activity.category}</Badge>
                          <Badge variant="secondary" className="text-xs">
                            {activity.years}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription>{activity.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div>
                      <h4 className="font-medium mb-3 flex items-center">
                        <Trophy className="h-4 w-4 mr-2" />
                        Achievements
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {activity.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">My Philosophy on Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Fun Facts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Fun Facts About Me</CardTitle>
              <CardDescription>
                Some interesting tidbits that might surprise you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Countries Visited</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-sm text-muted-foreground">Photos Taken</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Competition</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Sports Medals</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">250+</div>
                  <div className="text-sm text-muted-foreground">Songs Listened</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-sm text-muted-foreground">Coding Hours</div>
                </div>
              </div>
              
              <div className="mt-8 prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground">
                  I believe that diverse interests make us more well-rounded individuals and better professionals.
                  Each hobby has taught me something valuable that I apply to my work - whether it's the patience
                  and problem-solving skills from rock climbing, the creative thinking from music production,
                  or the cultural awareness from traveling. I'm always excited to connect with others who share
                  similar passions or want to learn more about any of these activities!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}