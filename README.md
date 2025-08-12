# Marco Boucas Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing Marco Boucas' work as a Data Scientist and AI Engineer.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS 4
- **Responsive Design**: Mobile-first design that works on all devices
- **Interactive Animations**: Smooth hover effects and subtle animations
- **SEO Optimized**: Individual project pages with proper metadata
- **Type Safety**: Full TypeScript integration with proper interfaces
- **Static Export**: Optimized for GitHub Pages deployment
- **Accessibility**: ARIA labels and semantic HTML throughout

## 🎨 Design

- **Blue gradient hero section** with floating animations
- **Modern card-based layout** with hover effects
- **Professional color scheme** using blue primary colors
- **Clean typography** with Inter font and proper fallbacks
- **Micro-interactions** for enhanced user experience

## 🛠️ Development

### Prerequisites

- Node.js 20 or later
- npm or yarn

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/marcoboucas/marcoboucas.github.io.git
cd marcoboucas.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
```

This generates a static export in the `out/` directory ready for deployment.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── projects/[id]/     # Dynamic project pages
├── components/            # Reusable components
│   ├── ProjectCard.tsx    # Project card component
│   └── CertificationCard.tsx
├── data/                  # Portfolio data
│   └── portfolio.ts       # TypeScript portfolio data
└── types/                 # TypeScript type definitions
    └── portfolio.ts       # Portfolio interfaces
```

## 🚀 Deployment

The project uses GitHub Actions for automatic deployment to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions builds and deploys automatically
3. Site is available at `https://marcoboucas.github.io`

## 📄 Legacy

This project replaces the previous Python + Jinja2 templating system with a modern React/Next.js stack. The original files are preserved for reference:

- `generate_website.py` - Legacy Python generator
- `templates/` - Legacy Jinja2 templates
- `index.html` - Legacy generated output

## 🔧 Technical Details

- **Framework**: Next.js 15.4.6 with App Router
- **Styling**: Tailwind CSS 4 with custom configuration
- **TypeScript**: Full type safety with custom interfaces
- **Images**: Next.js Image component with optimization
- **Deployment**: Static export for GitHub Pages
- **CI/CD**: GitHub Actions workflow

## 📝 Content Management

Portfolio content is managed through TypeScript files in `src/data/portfolio.ts`. Update this file to add new projects, certifications, or modify content.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is personal portfolio of Marco Boucas. All rights reserved.
