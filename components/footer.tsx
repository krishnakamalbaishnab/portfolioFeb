import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Krishna Kamal Baishnab</h3>
            <p className="text-sm text-muted-foreground">
              Software Engineer & Entrepreneur building the future through code and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Professional</h4>
            <div className="space-y-2 text-sm">
              <Link href="/experience" className="block text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="/research" className="block text-muted-foreground hover:text-primary transition-colors">
                Research
              </Link>
              <Link href="/businesses" className="block text-muted-foreground hover:text-primary transition-colors">
                Businesses
              </Link>
              <Link href="/achievements" className="block text-muted-foreground hover:text-primary transition-colors">
                Achievements
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/krishnakamalbaishnab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/krishnakamalbaishnab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/kkbaishnab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:kkbthefullstackdeveloper@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Krishna Kamal Baiashnab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}