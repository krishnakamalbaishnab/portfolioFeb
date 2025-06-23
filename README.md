# Krishna Kamal Baishnab - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website showcases my professional experience, projects, achievements, research work, and more.

## 🌟 Features

- **Modern Design**: Clean, professional interface with dark/light mode support
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Animations**: Smooth transitions using Framer Motion
- **Type-Safe**: Built with TypeScript for better code quality
- **SEO Optimized**: Proper meta tags and structure for search engines
- **Fast Performance**: Static site generation with Next.js
- **Accessible**: Following web accessibility best practices

## 🔧 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Content**: [MDX](https://mdxjs.com/) for blog posts
- **Deployment**: [Netlify](https://netlify.com/)

## 📱 Sections

### 🏠 Home
- Hero section with introduction
- Quick navigation to different sections
- Professional summary

### 👨‍💼 About
- Detailed background information
- Skills and expertise
- Professional journey

### 💼 Experience
- Work history with detailed descriptions
- Technologies used in each role
- Timeline of professional growth

### 🚀 Projects
- Featured projects with live demos
- Technical details and challenges solved
- GitHub repository links
- Technology stacks used

### 🏆 Achievements
- Certifications and awards
- Academic honors
- Professional recognitions
- Competition wins

### 🔬 Research
- Academic research projects
- Publications and papers
- Research interests and methodologies
- Collaborative work

### ⚽ Sports
- Athletic achievements and involvement
- Team participation
- Sports-related activities

### 🏢 Businesses
- Entrepreneurial ventures
- Business projects and initiatives
- Leadership experience

### 📝 Blog
- Technical articles and insights
- Industry thoughts and analysis
- Learning experiences

### 📞 Contact
- Multiple ways to get in touch
- Social media links
- Professional networking

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/krishnakamalbaishnab/portfolioFeb.git
   cd portfolioFeb
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `out` directory.

## 📁 Project Structure

```
portfolioFeb/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── achievements/      # Achievements page
│   ├── blog/              # Blog section
│   ├── businesses/        # Business ventures
│   ├── contact/           # Contact page
│   ├── experience/        # Work experience
│   ├── projects/          # Projects showcase
│   ├── research/          # Research work
│   ├── sports/            # Sports activities
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/                # UI component library
│   ├── footer.tsx         # Site footer
│   ├── hero.tsx           # Hero section
│   ├── navbar.tsx         # Navigation bar
│   └── ...
├── content/               # MDX content files
├── lib/                   # Utility functions
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS config
├── netlify.toml           # Netlify deployment config
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for design system changes
- Update `app/globals.css` for global styles
- Components use Tailwind classes for styling

### Content
- Update personal information in respective page files
- Add new projects in `app/projects/page.tsx`
- Modify achievements in `app/achievements/page.tsx`
- Add blog posts as MDX files in `content/blog/`

### Components
- UI components are built with Radix UI primitives
- Custom components are in the `components/` directory
- Fully typed with TypeScript interfaces

## 🚀 Deployment

This website is deployed on Netlify with automatic deployments from the main branch.

### Netlify Configuration
- **Build Command**: `npm run build`
- **Publish Directory**: `out`
- **Node Version**: 18

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `out` directory to your hosting provider

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Please feel free to:

1. Open an issue for bugs or suggestions
2. Submit a pull request for improvements
3. Share feedback on design or functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email**: ht785618@gmail.com
- **LinkedIn**: [Krishna Kamal Baishnab](https://linkedin.com/in/krishnakamalbaishnab)
- **GitHub**: [krishnakamalbaishnab](https://github.com/krishnakamalbaishnab)
- **Website**: [Live Portfolio](https://your-netlify-site.netlify.app)

---

⭐ If you find this project helpful or interesting, please consider giving it a star!

**Built with ❤️ by Krishna Kamal Baishnab** 