import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
  pulsePhase: number;
  layer: number;
}

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        connections: [],
        pulsePhase: Math.random() * Math.PI * 2,
        layer: Math.floor(Math.random() * 4),
      }));

      // Build connections (each node connects to closest N nodes)
      nodes.forEach((node, i) => {
        const distances = nodes
          .map((other, j) => ({
            idx: j,
            dist: Math.hypot(node.x - other.x, node.y - other.y),
          }))
          .filter((d) => d.idx !== i)
          .sort((a, b) => a.dist - b.dist)
          .slice(0, 3);
        node.connections = distances.filter(d => d.dist < 180).map((d) => d.idx);
      });
    };

    const layerColors = ['#00EFFF', '#00B5C5', '#7C3AED', '#FF5A0A'];

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        node.pulsePhase += 0.02;
      });

      // Rebuild connections dynamically for close neighbors
      nodes.forEach((node, i) => {
        const distances = nodes
          .map((other, j) => ({
            idx: j,
            dist: Math.hypot(node.x - other.x, node.y - other.y),
          }))
          .filter((d) => d.idx !== i && d.dist < 160)
          .sort((a, b) => a.dist - b.dist)
          .slice(0, 3);
        node.connections = distances.map((d) => d.idx);
      });

      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach((targetIdx) => {
          if (targetIdx <= i) return; // avoid drawing twice
          const target = nodes[targetIdx];
          const dist = Math.hypot(node.x - target.x, node.y - target.y);
          const opacity = Math.max(0, 1 - dist / 160) * 0.15;

          // Animated data flow along connections
          const pulse = (Math.sin(frame * 0.02 + node.pulsePhase) + 1) / 2;
          const lineColor = layerColors[node.layer];

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = `${lineColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Data packet traveling on connection
          if (pulse > 0.95) {
            const t = (frame % 100) / 100;
            const px = node.x + (target.x - node.x) * t;
            const py = node.y + (target.y - node.y) * t;
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = lineColor;
            ctx.globalAlpha = 0.8;
            ctx.fill();
            ctx.globalAlpha = 1;
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        const pulseFactor = (Math.sin(node.pulsePhase) + 1) / 2;
        const glowRadius = node.radius + pulseFactor * 3;
        const color = layerColors[node.layer];

        // Glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius * 4
        );
        gradient.addColorStop(0, `${color}40`);
        gradient.addColorStop(1, `${color}00`);

        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.6 + pulseFactor * 0.4;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
};

export default NeuralBackground;
