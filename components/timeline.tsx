'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface TimelineItem {
  date: string;
  title: string;
  company?: string;
  description: string;
  type: 'education' | 'work' | 'achievement' | 'personal';
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const typeColors = {
    education: 'bg-blue-500',
    work: 'bg-green-500',
    achievement: 'bg-yellow-500',
    personal: 'bg-purple-500',
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start space-x-4"
          >
            {/* Timeline dot */}
            <div className={`w-8 h-8 rounded-full ${typeColors[item.type]} flex items-center justify-center z-10`}>
              <Calendar className="h-4 w-4 text-white" />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="bg-card border rounded-lg p-6 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.company && (
                      <p className="text-sm text-primary font-medium">{item.company}</p>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {item.date}
                  </span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}