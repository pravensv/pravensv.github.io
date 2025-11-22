# Welcome to the Praveen Voruganti Portfolio Wiki!

This wiki documents the architecture, setup, and features of my personal portfolio website.

## 🚀 Project Overview

This project is a modern, responsive personal portfolio website built to showcase my skills, experience, and projects as a **Java Full Stack Developer**.

- **Live Demo**: [https://pravensv.github.io/](https://pravensv.github.io/)
- **Repository**: [https://github.com/pravensv/pravensv.github.io](https://github.com/pravensv/pravensv.github.io)

---

## 🛠 Tech Stack

The project is built using the following technologies:

### Core
- **React 19**: For building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Vite**: For fast development and optimized production builds.

### Styling & UI
- **SCSS (Sass)**: For modular and maintainable styles.
- **Framer Motion**: For smooth animations and transitions.
- **HTML5 Canvas**: For the dynamic "Tech Network" background.

### SEO & Performance
- **React Helmet / React Head**: For managing document head tags.
- **JSON-LD**: For Structured Data (Rich Snippets).
- **Vite Plugin React**: For optimized React builds.

---

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI components
│   ├── Background/   # Dynamic Canvas-based background
│   ├── Header/       # Navigation header
│   ├── Footer/       # Site footer
│   ├── SEO/          # Reusable SEO component
│   └── SectionWrapper/ # Wrapper for scroll sections
├── pages/            # Page components
│   ├── Home/         # Landing page
│   ├── Projects/     # Project listing and details
│   ├── Experience/   # Work experience timeline
│   ├── Education/    # Education details
│   ├── Skills/       # Technical skills display
│   └── Contact/      # Contact form and info
├── App.tsx           # Main application component with routing
├── main.tsx          # Entry point
└── index.css         # Global styles
```

---

## 🔧 Setup & Installation

To run this project locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/pravensv/pravensv.github.io.git
    cd pravensv.github.io
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

4.  **Build for production**:
    ```bash
    npm run build
    ```

---

## 🌟 Features

### Dynamic Background
A custom HTML5 Canvas background (`src/components/Background/Background.tsx`) that simulates a "Tech Network". Nodes connect with lines when close, creating a living, breathing data-transfer effect.

### SEO Optimized
The site features a dedicated `SEO` component that handles:
- Dynamic Title and Meta Descriptions.
- Open Graph tags for social sharing.
- JSON-LD Structured Data for Google Search "Person" results.
- Sitemap generation.

### Verified Profile
Includes a "Verified" blue checkmark badge on the logo and profile picture to establish authenticity.

---

## 📬 Contact

- **LinkedIn**: [Praveen Shetty](https://www.linkedin.com/in/praveen-shetty-014940183/)
- **GitHub**: [pravensv](https://github.com/pravensv)


# React + TypeScript + Vite

npm run build 
npm run deploy 

