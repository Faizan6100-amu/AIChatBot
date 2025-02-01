import React, { useEffect } from 'react';

const Confetti = () => {
  useEffect(() => {
    const colors = ['#FF69B4', '#4B0082', '#9370DB', '#6A5ACD'];
    const numConfetti = 100;

    const createConfetti = () => {
      for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.className = 'absolute w-2 h-2 bg-purple-500 rotate-45';
        confetti.style.backgroundColor = color;
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.getElementById('confetti-container')?.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
      }
    };

    createConfetti();
  }, []);

  return (
    <div
      id="confetti-container"
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        ['--confetti-fall' as string]: `
          @keyframes confetti-fall {
            0% {
              transform: translateY(-10vh) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
        `,
      }}
    />
  );
};

export default Confetti;