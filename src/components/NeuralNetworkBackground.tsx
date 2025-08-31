"use client";
import React, { useRef, useEffect } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  glow: number;
}

interface Connection {
  from: number;
  to: number;
}

const NODE_COUNT = 24;
const CONNECTION_DISTANCE = 180;
const NODE_RADIUS = 6;
const GLOW_MAX = 0.8;
const GLOW_MIN = 0.2;
const PULSE_RADIUS = 16;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const NeuralNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  // Initialize nodes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    const w = canvas.width;
    const h = canvas.height;
    nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
      x: randomBetween(NODE_RADIUS * 2, w - NODE_RADIUS * 2),
      y: randomBetween(NODE_RADIUS * 2, h - NODE_RADIUS * 2),
      vx: randomBetween(-0.25, 0.25),
      vy: randomBetween(-0.25, 0.25),
      radius: NODE_RADIUS,
      baseRadius: NODE_RADIUS,
      glow: GLOW_MIN,
    }));
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    let w = canvas.offsetWidth * dpr;
    let h = canvas.offsetHeight * dpr;
    canvas.width = w;
    canvas.height = h;

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      // Move nodes
      for (const node of nodesRef.current) {
        node.x += node.vx;
        node.y += node.vy;
        // Bounce off edges
        if (node.x < NODE_RADIUS || node.x > w - NODE_RADIUS) node.vx *= -1;
        if (node.y < NODE_RADIUS || node.y > h - NODE_RADIUS) node.vy *= -1;
      }
      // Draw connections
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const a = nodesRef.current[i];
          const b = nodesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const glow = Math.max(a.glow, b.glow);
            ctx.save();
            ctx.globalAlpha = 0.18 + 0.22 * glow;
            ctx.shadowColor = `#00bfff`;
            ctx.shadowBlur = 12 * glow;
            ctx.strokeStyle = `#00bfff`;
            ctx.lineWidth = 1.5 + 1.5 * glow;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw nodes
      for (const node of nodesRef.current) {
        // Interactivity: pulse if mouse is near
        let pulse = false;
        if (mouseRef.current.active) {
          const dx = node.x - mouseRef.current.x;
          const dy = node.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < PULSE_RADIUS * 2) {
            node.glow = Math.min(GLOW_MAX, node.glow + 0.08);
            node.radius = Math.min(node.baseRadius * 1.7, node.radius + 0.5);
            pulse = true;
          }
        }
        if (!pulse) {
          node.glow = Math.max(GLOW_MIN, node.glow - 0.02);
          node.radius = Math.max(node.baseRadius, node.radius - 0.2);
        }
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
        ctx.shadowColor = `#00bfff`;
        ctx.shadowBlur = 18 * node.glow + 8;
        ctx.fillStyle = `rgba(0,191,255,${0.7 + 0.3 * node.glow})`;
        ctx.fill();
        ctx.restore();
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Mouse interactivity
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    function handleMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      mouseRef.current.x = (e.clientX - rect.left) * dpr;
      mouseRef.current.y = (e.clientY - rect.top) * dpr;
      mouseRef.current.active = true;
    }
    function handleLeave() {
      mouseRef.current.active = false;
    }
    function handleClick(e: MouseEvent) {
      handleMove(e);
      // Pulse nearby nodes strongly
      for (const node of nodesRef.current) {
        const dx = node.x - mouseRef.current.x;
        const dy = node.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < PULSE_RADIUS * 2.5) {
          node.glow = GLOW_MAX;
          node.radius = node.baseRadius * 2.1;
        }
      }
    }
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseleave", handleLeave);
    canvas.addEventListener("click", handleClick);
    return () => {
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", handleLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  // Responsive resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    function handleResize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      // Reposition nodes within new bounds
      const w = canvas.width;
      const h = canvas.height;
      for (const node of nodesRef.current) {
        node.x = Math.max(NODE_RADIUS, Math.min(node.x, w - NODE_RADIUS));
        node.y = Math.max(NODE_RADIUS, Math.min(node.y, h - NODE_RADIUS));
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-[#0a192f] dark:bg-[#0a192f]">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
};

export default NeuralNetworkBackground;
