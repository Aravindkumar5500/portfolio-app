# Aravind Kumar — Developer Portfolio

A responsive personal portfolio built with React and Tailwind CSS. It presents an introduction, skills, experience, selected projects, resume information, and contact details.

<div align="center">

**Live site:** https://portfolio-app-swart-eta.vercel.app

</div>

## Highlights

- Responsive portfolio layout for desktop and mobile
- Hero, About, Experience, Skills, Projects, Resume, and Contact sections
- Reusable React components
- Scroll-reveal interactions and a custom cursor experience
- Framer Motion animations
- Project cards with technology tags and links
- Contact form UI with component-level tests

## Tech stack

- React 18
- Tailwind CSS 3
- Framer Motion
- React Icons
- Create React App / react-scripts

## Run locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/Aravindkumar5500/portfolio-app.git
cd portfolio-app
npm install
npm start
```

The development server opens at `http://localhost:3000`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start the local development server |
| `npm test` | Run the React test runner |
| `npm run build` | Create a production build |

## Project structure

```text
src/
  Components/
    Header.jsx
    Hero.jsx
    About.jsx
    Project.jsx
    Experience.jsx
    Skillset.jsx
    Resume.jsx
    Contact.jsx
    Footer.jsx
    CustomCursor.jsx
    ScrollJourney.jsx
  App.js
  App.css
public/
  Assets/     Portfolio and project imagery
```

## Notes

The Projects component includes local fallback project data and attempts to fetch dynamic project data from a development API at `http://localhost:5000/api/projects`. If that local endpoint is unavailable, the fallback cards are used.

Before presenting this as a production portfolio, verify that every project description, screenshot, and destination URL reflects work you can publicly show. Keep private client materials and credentials out of this repository.

## Contact

- LinkedIn: https://www.linkedin.com/in/aravind-kumar-r-dev5500/
- GitHub: https://github.com/Aravindkumar5500
