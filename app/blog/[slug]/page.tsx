'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// This would normally be generated dynamically or fetched
const blogPosts = [
  {
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Exploring the cutting-edge technologies and methodologies that will shape web development in 2025 and beyond.',
    category: 'Tech',
    date: '2024-12-15',
    readTime: '8 min read',
    slug: 'future-of-web-development',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    title: 'Building a High-Performance Remote Team: Lessons from the Trenches',
    excerpt: 'Hard-won insights from building and leading remote engineering teams, including common pitfalls and proven strategies for success.',
    category: 'Career',
    date: '2024-11-28',
    readTime: '12 min read',
    slug: 'building-remote-team',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-gray dark:prose-invert max-w-none"
        >
          {/* Featured Image */}
          <div className="aspect-video mb-8 overflow-hidden rounded-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post Meta */}
          <div className="flex items-center justify-between mb-6 not-prose">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Krishna Kamal Baishnab</span>
              </div>
            </div>
            <Badge variant="secondary">{post.category}</Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          {/* Excerpt */}
          <p className="text-xl text-muted-foreground mb-8 not-prose">{post.excerpt}</p>

          {/* Content Placeholder */}
          <Card className="p-8 mb-8">
            <CardContent className="space-y-6">
              <p>
                This is where the full blog content would be displayed. The content would be loaded 
                from the corresponding MDX file in the content/blog directory.
              </p>
              <p>
                For now, this is a placeholder. To fully implement this, you would need to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Load the MDX content from the file system</li>
                <li>Parse the frontmatter for metadata</li>
                <li>Render the MDX content using MDXRemote</li>
                <li>Add proper styling for the content</li>
              </ul>
              <p>
                The blog posts are stored as MDX files in the content/blog directory, which allows
                for rich content including code blocks, images, and custom components.
              </p>
            </CardContent>
          </Card>

          {/* Navigation to other posts */}
          <div className="flex justify-between items-center pt-8 border-t not-prose">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Previous Post</p>
              <p className="font-medium">Coming Soon</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-2">Next Post</p>
              <p className="font-medium">Coming Soon</p>
            </div>
          </div>
        </motion.article>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Krishna Kamal Baishnab</h3>
                  <p className="text-muted-foreground mb-4">
                    Software Engineer and entrepreneur passionate about building scalable systems 
                    and sharing knowledge through writing. Currently working on innovative solutions 
                    in cloud computing and machine learning.
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/about">Learn More</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 