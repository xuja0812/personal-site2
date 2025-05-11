import { useState, useEffect } from 'react';

const blogPosts = [
  {
    title: "freshman year review",
    date: "May 10 2025",
    summary: "24-25",
    content: `
      Fall 2024
        - 15-122: Principles of Imperative Computation
        - 15-151: Mathematical Foundations for Computer Science
        - 21-241: Matrices and Linear Transformations
        - 80-180: Nature of Language
        - 07-128: Freshman Immigration Course

        Reflection: 
        Most of the courses I took this semester were pretty standard for all SCS freshmen. Even though I found the specs-style grading of 80-180 difficult, I still really liked the content of the class. 
    
      Spring 2025
        15-122 TA
        - 15-150: Principles of Functional Programming
        - 15-213: Introduction to Computer Systems
        - 21-259: Calculus in 3 Dimensions
        - 76-106: Writing about Literature and Art
        - 76-108: Writing about Public Problems
        - 07-180: Concepts in AI
        - 16-180: Concepts of Robotics

        Reflection:
        150 and 213 took up most of my time, but it wasn’t too heavy of a semester. If anything I wish I didn’t take both writing classes at 8am since they have mandatory attendance, but it worked out. TAing 122 was definitely the highlight of this semester :)

        `,
  }
];

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(15, 32, 56, 0.7), rgba(0, 21, 41, 0.8))`,
  };

  const togglePost = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  return (
    <div className="w-screen min-h-screen text-white px-6 py-48" style={gradientStyle}>
      <h2 className="text-4xl font-bold text-center mb-12">Blog</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => togglePost(index)}
          >
            <h3 className="text-2xl font-semibold">{post.title}</h3>
            <p className="text-zinc-400 text-sm mb-2">{post.date}</p>
            <p className="text-zinc-300 mb-2">{post.summary}</p>

            {expandedPost === index && (
              <div className="text-zinc-200 whitespace-pre-line mt-4 border-t border-zinc-700 pt-4">
                {post.content}
              </div>
            )}

            <p className="text-pink-400 mt-4 text-sm">
              {expandedPost === index ? "Read less ▲" : "Read more ▼"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
