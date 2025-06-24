'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, Search, User } from 'lucide-react';
// Note: Blog posts are hosted on Medium for better SEO and audience reach

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      title: 'Software Engineering in 2025: Hiring Trends & Career Strategies',
      excerpt: 'Exploring the cutting-edge technologies and methodologies that will shape web development in 2025 and beyond.',
      category: 'Tech',
      date: '2024-12-15',
      readTime: '8 min read',
      mediumUrl: 'https://medium.com/@krishnakamalbaishnab/software-engineering-in-2025-hiring-trends-career-strategies-9e3fb16f120d',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Building a High-Performance Remote Team: Lessons from the Trenches',
      excerpt: 'Hard-won insights from building and leading remote engineering teams, including common pitfalls and proven strategies for success.',
      category: 'Career',
      date: '2024-11-28',
      readTime: '12 min read',
      mediumUrl: 'https://medium.com/@krishnakamalbaishnab/building-remote-team-lessons',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Lessons from Startup Life: What I Wish I Knew Before Starting BlazeBuster',
      excerpt: 'Reflections on the entrepreneurial journey, from initial idea to product-market fit, and the mistakes that taught me the most.',
      category: 'Reflections',
      date: '2024-11-10',
      readTime: '15 min read',
      mediumUrl: 'https://medium.com/@krishnakamalbaishnab/startup-lessons-blazebuster',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'The Art of Code Review: Building Better Software Through Collaboration',
      excerpt: 'Best practices for conducting effective code reviews that improve code quality while fostering team growth and learning.',
      category: 'Tech',
      date: '2024-10-22',
      readTime: '10 min read',
      mediumUrl: 'https://medium.com/@krishnakamalbaishnab/art-of-code-review',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'From Engineer to Tech Lead: Navigating the Transition',
      excerpt: 'A practical guide for engineers stepping into leadership roles, covering technical decision-making, team management, and strategic thinking.',
      category: 'Career',
      date: '2024-10-05',
      readTime: '11 min read',
      mediumUrl: 'https://medium.com/@krishnakamalbaishnab/engineer-to-tech-lead',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Why I Choose Boring Technology (And You Should Too)',
      excerpt: 'An argument for choosing mature, well-understood technologies over the latest shiny framework, and when to break this rule.',
      category: 'Tech',
      date: '2024-09-18',
      readTime: '7 min read',
      mediumUrl: 'https://medium.com/@krishnakamalbaishnab/boring-technology',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const categories = ['All', 'Tech', 'Career', 'Reflections'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts on technology, career development, entrepreneurship, and the lessons
            I've learned along the way. I write about what I'm learning and building.
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <FeaturedPostCard key={post.title} post={post} index={index} />
              ))}
            </div>
          </motion.section>
        )}

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* All Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">All Posts</h2>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found matching your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPostCard key={post.title} post={post} index={index} />
              ))}
            </div>
          )}
        </motion.section>
      </div>
    </div>
  );
}

function FeaturedPostCard({ post, index }: { post: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group"
    >
      <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer">
        <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
          <div className="relative">
            <div className="aspect-video overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              Featured
            </Badge>
            <Badge variant="secondary" className="absolute top-4 right-4">
              {post.category}
            </Badge>
          </div>
          
          <CardHeader>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {post.title}
            </CardTitle>
            <CardDescription className="line-clamp-3">
              {post.excerpt}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}

function BlogPostCard({ post, index }: { post: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group"
    >
      <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer">
        <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
          <div className="relative">
            <div className="aspect-video overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <Badge variant="secondary" className="absolute top-4 right-4">
              {post.category}
            </Badge>
          </div>
          
          <CardHeader>
            <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </CardTitle>
            <CardDescription className="line-clamp-3">
              {post.excerpt}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}