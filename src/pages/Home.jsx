import { useState, useEffect } from 'react';

export default function Home() {
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

  return (
    <>
      <div className="min-h-screen" style={gradientStyle}>
        <div className="w-screen relative z-10 pt-40 text-white flex flex-col items-center justify-center px-4">
          <img
            src="/jasmine.jpg"
            alt="Jasmine Xu"
            className="w-60 h-60 rounded-full object-cover border-4 border-pink-400 mb-6"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Jasmine 👋</h2>
          <p className="text-xl text-zinc-300 text-center max-w-2xl">
            I'm a student at Carnegie Mellon University studying computer science with a planned concentration in machine learning. 
            I'm especially interested in natural language processing (NLP).
          </p>
          <p className="text-xl text-zinc-300 text-center max-w-2xl mt-8">
            Currently, I'm working as a Software Developer Intern at <a href="https://www.fermyon.com/#" target="_blank" className="hover:text-pink-400">Fermyon</a>.
            Over the summer, I'm also doing research on value extraction from conversations at CMU's Robotics Institute.
          </p>
          <p className="text-xl text-zinc-300 text-center max-w-2xl mt-8">
            I post computer science related videos on TikTok! You can check them out <a href="https://www.tiktok.com/@thecodebreakdown" target="_blank" className="hover:text-pink-400">here</a>.
          </p>
        </div>
      </div>
    </>
  );
}
