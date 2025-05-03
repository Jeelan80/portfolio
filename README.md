# Modern Portfolio Website

A professional portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Smooth animations with Framer Motion
- Multi-page navigation with React Router
- Contact form with EmailJS integration
- TypeScript for type safety
- Tailwind CSS for styling

## Project Structure

```
modern-portfolio/
├── public/
│   └── assets/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   └── utils/
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/modern-portfolio.git
   cd modern-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

### Deploying to Netlify

1. Create a new site on Netlify
2. Connect your GitHub repository
3. Set the build command to `npm run build` or `yarn build`
4. Set the publish directory to `dist`
5. Click "Deploy site"

### Deploying to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

## Customization

- Update the content in the pages directory to personalize your portfolio
- Modify the theme colors in `tailwind.config.js`
- Add your own assets to the `public/assets` directory

## License

MIT