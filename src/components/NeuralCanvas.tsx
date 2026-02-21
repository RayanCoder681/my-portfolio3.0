import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Signal {
  sourceIdx: number;
  targetIdx: number;
  progress: number;
  speed: number;
}

export const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let nodes: Node[] = [];
    let signals: Signal[] = [];
    const N = 55;
    const DIST = 180; // Slightly increased for more connections
    const isDark = theme === 'dark';

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      nodes = Array.from({ length: N }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }));
      signals = [];
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const nodeColor = isDark ? '0,191,255' : '14,165,233';
      const linkColor = isDark ? '139,92,246' : '99,102,241';
      const signalColor = isDark ? '16, 185, 129' : '5, 150, 105'; // Accent green
      const nodeAlpha = isDark ? 0.6 : 0.4;

      // Update Node positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.random() > 0.98 ? 3.5 : 2, 0, Math.PI * 2); // Randomly pulse nodes
        ctx.fillStyle = `rgba(${nodeColor},${nodeAlpha})`;
        ctx.fill();

        // Add glowing shadow to nodes
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${nodeColor}, 0.5)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Track valid edges for signals
      const validEdges: [number, number][] = [];

      // Draw Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < DIST) {
            validEdges.push([i, j]);
            const a = (1 - d / DIST) * (isDark ? 0.25 : 0.15);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${linkColor},${a})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Generate random signals
      if (Math.random() < 0.15 && validEdges.length > 0) { // 15% chance per frame to fire a new signal
        const edge = validEdges[Math.floor(Math.random() * validEdges.length)];
        signals.push({
          sourceIdx: Math.random() > 0.5 ? edge[0] : edge[1],
          targetIdx: Math.random() > 0.5 ? edge[1] : edge[0],
          progress: 0,
          speed: 0.02 + Math.random() * 0.03, // varied speed
        });
      }

      // Update and Draw Signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const sig = signals[i];
        sig.progress += sig.speed;

        if (sig.progress >= 1) {
          signals.splice(i, 1);
          continue;
        }

        const source = nodes[sig.sourceIdx];
        const target = nodes[sig.targetIdx];

        // Verify nodes still exist and are within distance
        if (!source || !target) {
          signals.splice(i, 1);
          continue;
        }

        const dx = source.x - target.x;
        const dy = source.y - target.y;
        if (Math.sqrt(dx * dx + dy * dy) > DIST) {
          signals.splice(i, 1);
          continue;
        }

        const currentX = source.x + (target.x - source.x) * sig.progress;
        const currentY = source.y + (target.y - source.y) * sig.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${signalColor}, 1)`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(${signalColor}, 1)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        opacity: theme === 'dark' ? 0.7 : 0.4,
        pointerEvents: 'none',
      }}
    />
  );
};

