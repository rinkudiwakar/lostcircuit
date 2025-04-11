
import React, { useEffect, useRef } from 'react';

interface ConfettiProps {
  active: boolean;
}

const ConfettiEffect: React.FC<ConfettiProps> = ({ active }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const particles = useRef<Array<Particle>>([]);

  interface Particle {
    x: number;
    y: number;
    radius: number;
    color: string;
    velocity: {
      x: number;
      y: number;
    };
    gravity: number;
    drag: number;
    shrink: number;
    alpha: number;
  }

  useEffect(() => {
    if (!active) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full width and height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create confetti particles
    const colors = [
      '#f44336', '#e91e63', '#9c27b0', '#673ab7', 
      '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', 
      '#009688', '#4CAF50', '#8BC34A', '#CDDC39', 
      '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'
    ];
    
    const createParticles = () => {
      particles.current = [];
      const particleCount = Math.min(200, Math.floor(window.innerWidth / 5));
      
      for (let i = 0; i < particleCount; i++) {
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        const radius = Math.random() * 6 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const velocity = {
          x: (Math.random() - 0.5) * 12,
          y: (Math.random() - 0.5) * 12
        };
        const gravity = 0.1;
        const drag = 0.96;
        const shrink = 0.97;
        const alpha = 1;
        
        particles.current.push({
          x, y, radius, color, velocity, gravity, drag, shrink, alpha
        });
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((particle, index) => {
        particle.velocity.x *= particle.drag;
        particle.velocity.y *= particle.drag;
        particle.velocity.y += particle.gravity;
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        particle.radius *= particle.shrink;
        particle.alpha -= 0.005;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        // Remove small or invisible particles
        if (particle.radius < 0.5 || particle.alpha <= 0) {
          particles.current.splice(index, 1);
        }
      });
      
      // Continue animation if there are particles
      if (particles.current.length > 0) {
        animationFrameId.current = requestAnimationFrame(drawParticles);
      }
    };
    
    // Start the confetti
    createParticles();
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [active]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default ConfettiEffect;
