'use client';

import { motion } from 'framer-motion';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface SectionPreviewProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  items: { title: string; subtitle?: string }[];
}

export function SectionPreview({ title, description, href, icon: Icon, items }: SectionPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {items.slice(0, 3).map((item, index) => (
              <div key={index} className="text-sm">
                <div className="font-medium">{item.title}</div>
                {item.subtitle && (
                  <div className="text-muted-foreground">{item.subtitle}</div>
                )}
              </div>
            ))}
            {items.length > 3 && (
              <div className="text-sm text-muted-foreground">
                and {items.length - 3} more...
              </div>
            )}
          </div>
          <Button variant="ghost" className="w-full group" asChild>
            <Link href={href}>
              View All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}