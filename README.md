# 📰 News Section Layout Implementation

A pixel-perfect, fully responsive implementation of a news section layout based on the [JNews City News](https://jnews.io/citynews/) design. Built with **Next.js (App Router)** and **Tailwind CSS**.

🔗 **Live Demo:** [https://dhaka-post-task.vercel.app/](https://dhaka-post-task.vercel.app/)

![Project Preview](/public/Screenshot_1.png)

## 🚀 features

- **Pixel-Perfect Design**: Meticulously crafted to match the reference template including typography, spacing, and shadows.
- **Fully Responsive**: seamless adaptation across all devices:
  - 🖥️ **Desktop**: 12-column grid layout with dual sidebars.
  - 📱 **Tablet/Mobile**: vertical stacking with optimized touch targets and spacing.
- **Dynamic Content**: Data-driven components powered by structured mock data, making the UI easy to connect to an API.
- **Modern Tech Stack**:
  - **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
  - **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
  - **Icons**: [Lucide React](https://lucide.dev/)
  - **Fonts**: [Geist & Roboto Condensed](https://fonts.google.com/)
- **Optimized Performance**:
  - Next.js `Image` component for automatic image optimization.
  - Semantic HTML structure.
  - Clean, component-based architecture.

## 🛠️ Technology Stack

- **Next.js**: Latest stable version (App Router).
- **React**: Functional components and Hooks.
- **TypeScript**: For type safety and better developer experience.
- **Tailwind CSS**: Utility-first CSS for rapid and consistent styling.
- **pnpm**: Fast, disk space efficient package manager.

## 📂 Project Structure

```
├── components/          # Reusable UI components
│   ├── NewsGrid.tsx     # Main layout container
│   ├── ArticleCard.tsx  # Versatile card component with multiple variants
│   ├── NewsSlider.tsx   # Interactive news carousel
│   ├── Header.tsx       # Dynamic header navigation
│   └── ...
├── data/
│   └── mockData.ts      # Centralized mock data source
├── app/                 # Next.js App Router pages
└── public/              # Static assets (images)
```

## ⚡ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ataullah1/dhaka-post-task.git
   cd dhaka-post-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 🎨 Design Implementation Details

- **Typography**: Uses 'Roboto Condensed' for headings and 'Geist' for body text to match the journalistic aesthetic.
- **Components**:
  - `ArticleCard`: Handles 5 different visual variants (`hero`, `sidebar-left`, `sidebar-right`, `opinion`, `hero-sub`) via a single robust interface.
  - `NewsGrid`: Implements the complex nested grid structure using Tailwind's `grid-cols-12` system.
- **Responsiveness**: Custom breakpoints ensure smooth transitions from 3-column (desktop) to 2-column (tablet) to 1-column (mobile) layouts.

## 📝 License

This project is created for a job task assessment. All design rights belong to the original reference template owners.
