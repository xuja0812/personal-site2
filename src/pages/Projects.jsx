import { useState, useEffect } from 'react';

const projects = [
  {
    title: "Class Scheduler",
    description: "Full-stack web app that allows students to create schedules and have administrators leave comments on them in real-time.",
    image: "/scheduler.png",
    frameworks: ["React","Node.js","Express.js","OAuth 2.0","PostgreSQL"],
    githubLink: "https://github.com/xuja0812/scheduling-app"
  },
  {
    title: "Review Scraper",
    description: "Full-stack web app that scrapes reviews from a specified company using Selenium, extracts the sentiment using a BERT model, and posts it to a Flask and MySQL backend.",
    image: "/scraper2.png",
    frameworks: ["React","Python", "Selenium", "Flask", "Pandas",  "PyTorch", "MySQL"],
    githubLink: "https://github.com/xuja0812/scraper-flask-app"
  },
  {
    title: "Sudoku Solver",
    description: "SwiftUI app that uses camera input to scan Sudoku puzzles, sends the image to a FastAPI backend for digit recognition via TensorFlow and OpenCV, and solves the board with a backtracking algorithm.",
    image: "/sudoku2.png",
    frameworks: ["Swift","Python","FastAPI","TensorFlow","OpenCV", "NumPy"],
    githubLink: "https://github.com/xuja0812/sudoku-solver"
  },
  {
    title: "Dynamic Memory Allocator",
    description: "Dynamic memory allocator that implements the functions free() and malloc() in C.",
    frameworks: ["C"]
  },
  {
    title: "CyberLearn",
    description: "Virtual cybersecurity tutor that includes and NPC for user interaction, modals for each topic, and an AI-powered chatbot to personalize learning.",
    image: "/cyberlearn.png",
    frameworks: ["React","TypeScript","Next.js","Firebase","Tailwind"],
    githubLink: "https://github.com/xuja0812/cyberlearn2"
  },
  {
    title: "Trading Bot",
    description: "Trading bot designed to maximize profit in a market-making environment. Generated $1M+ over the course of 6 hours during Jane Street's Electronic Trading Challenge.",
    frameworks: ["Python"]
  },
  
];

export default function Projects() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(15, 32, 56, 0.7), rgba(0, 21, 41, 0.8))`,
  };

  return (
    <div className="w-screen min-h-screen text-white px-6 py-48" style={gradientStyle}>
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="space-y-12 max-w-2xl mx-auto">
      {projects.map((project, index) => (
        <div
            key={index}
            className="bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-pink-500 transition transform"
        >
            {project.image && (
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-contain rounded-xl mb-4"
            />
            )}
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-zinc-400 mb-2">{project.description}</p>
            <div className="text-sm text-pink-400 mb-2">
            {project.frameworks.join(" · ")}
            </div>
            <div className="flex space-x-4">
            {project.githubLink && (<a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
            >
                GitHub Repo
            </a>)}
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}
