# Shiren Bioenergy - Premium Industrial Biomass Fuel Supply Portal

[![Deploy to GitHub Pages](https://github.com/ShirenBioenergy/shiren-bioenergy/actions/workflows/deploy.yml/badge.svg)](https://github.com/ShirenBioenergy/shiren-bioenergy/actions/workflows/deploy.yml)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A modern, high-performance web application for **Shiren Bioenergy**, based in Gandhidham, Kutch, Gujarat. Built for industrial B2B clients, boiler plant directors, and procurement managers seeking reliable, high-calorific Biomass Pellets and Biomass Briquettes.

---

## 🌟 Key Features

- **Industrial Biomass Catalog**: Complete specifications for 90mm/70mm Briquettes, Wood Pellets, Sawdust Bio-Pellets, Groundnut Shell Briquettes & Agro-Waste Pellets.
- **Interactive Fuel Savings Calculator**: Real-time GCV and cost calculation comparison against Coal and Furnace Oil.
- **Verified Client Reviews & Case Studies**: Testimonials from 120+ boiler plants across Gujarat with expandable client reviews and case study modals.
- **Quick Inquiry & WhatsApp Integration**: One-click instant inquiry modal and interactive WhatsApp chat assistant with pre-filled business prompts.
- **B2B LocalBusiness JSON-LD Schema**: Embedded SEO structured data for high search engine visibility in Gujarat and India industrial supply markets.
- **Mobile Responsive & High Performance**: Clean Tailwind CSS layout with dark mode glassmorphism theme and smooth animations.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19, JavaScript (ESNext)
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4, Lucide React Icons, Framer Motion
- **SEO & Schema**: JSON-LD B2B WholesaleStore Schema, OpenGraph Meta Tags

---

## 🚀 Quick Start (Local Development)

To run the project locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_GITHUB_USERNAME/shiren-bioenergy.git
cd shiren-bioenergy

# 2. Install dependencies
npm install

# 3. Start local dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

To test the production build locally:

```bash
npm run build
npm run preview
```

---

## 🌐 Launch & Deploy to GitHub Pages (Step-by-Step)

Follow these simple steps to publish this website to GitHub:

### Step 1: Create a New GitHub Repository
1. Log in to [GitHub.com](https://github.com/).
2. Click the **`+`** icon at the top right and select **New repository**.
3. Name your repository `shiren-bioenergy` (or your preferred name).
4. Leave it **Public** (or Private) and **do not** check "Add a README" (since we already have one).
5. Click **Create repository**.

### Step 2: Push Your Code to GitHub
Open your terminal/command prompt inside this project folder and run:

```bash
# Initialize git repository
git init

# Add all project files
git add .

# Create initial commit
git commit -m "Initial commit: Shiren Bioenergy official website"

# Rename branch to main
git branch -M main

# Link to your new GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/shiren-bioenergy.git

# Push code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages (Automated Deployment)
1. Go to your repository on GitHub.
2. Click on **Settings** > **Pages** (on the left menu).
3. Under **Build and deployment** > **Source**, select **`GitHub Actions`**.
4. That's it! Every time you push changes to `main`, GitHub Actions will automatically build and publish your website live to:
   `https://YOUR_GITHUB_USERNAME.github.io/shiren-bioenergy/`

---

## ⚡ Alternative One-Click Deployments

### Deploy to Vercel
1. Import repository to [Vercel.com](https://vercel.com).
2. Framework Preset: **Vite**
3. Click **Deploy**.

### Deploy to Netlify
1. Import repository to [Netlify.com](https://netlify.com).
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Click **Deploy Site**.

---

## 📁 Repository Structure

```text
SHIREN BIOENERGY/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions auto-deployment workflow
├── public/                     # Static assets & icons
├── src/
│   ├── assets/                 # High-res product & plant photos
│   ├── components/             # Header, Hero, Products, Testimonials, Calc, Footer
│   ├── pages/                  # HomePage, AboutPage, ProductsPage, etc.
│   ├── App.jsx                 # Main application layout & routing
│   ├── main.jsx                # React app entry point
│   └── index.css               # Design system & Tailwind CSS rules
├── .gitignore                  # Git exclusion rules
├── index.html                  # Main HTML entry point & SEO Schema
├── netlify.toml                # Netlify deployment configuration
├── package.json                # Dependencies & build scripts
├── README.md                   # Repository documentation & guide
├── vercel.json                 # Vercel deployment configuration
└── vite.config.js              # Vite build configuration
```

---

## 📄 License

Copyright © 2026 Shiren Bioenergy. All Rights Reserved.
