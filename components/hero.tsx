"use client";

import { useEffect, useRef, useState } from "react";

function StatCount({ target }: { target: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return;
          started = true;
          observer.unobserve(entry.target);
          let cur = 0;
          const step = Math.max(1, Math.ceil(target / 30));
          const timer = window.setInterval(() => {
            cur += step;
            if (cur >= target) {
              cur = target;
              window.clearInterval(timer);
            }
            setValue(cur);
          }, 34);
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="num" ref={ref}>
      {value}
    </div>
  );
}

function TrussCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let t = 0;
    let frame = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = canvas.width = canvas.offsetWidth * dpr;
      H = canvas.height = canvas.offsetHeight * dpr;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const cols = 14;
      const baseY = H * 0.86;
      const topY = H * 0.4;
      const span = W / cols;
      const dpr = window.devicePixelRatio || 1;
      ctx.lineWidth = 1 * dpr;
      ctx.strokeStyle = "rgba(46,134,200,0.45)";
      ctx.beginPath();
      for (let i = 0; i <= cols; i++) {
        const x = i * span;
        const wob = Math.sin(i * 0.6 + t * 0.012) * 10 * dpr;
        if (i === 0) ctx.moveTo(x, topY + wob);
        else ctx.lineTo(x, topY + wob);
      }
      ctx.stroke();
      ctx.beginPath();
      for (let i = 0; i <= cols; i++) {
        const x = i * span;
        if (i === 0) ctx.moveTo(x, baseY);
        else ctx.lineTo(x, baseY);
      }
      ctx.stroke();
      ctx.strokeStyle = "rgba(20,80,127,0.22)";
      for (let i = 0; i <= cols; i++) {
        const x = i * span;
        const wob = Math.sin(i * 0.6 + t * 0.012) * 10 * dpr;
        ctx.beginPath();
        ctx.moveTo(x, topY + wob);
        ctx.lineTo(x, baseY);
        ctx.stroke();
        if (i < cols) {
          const x2 = (i + 1) * span;
          const wob2 = Math.sin((i + 1) * 0.6 + t * 0.012) * 10 * dpr;
          ctx.beginPath();
          if (i % 2 === 0) {
            ctx.moveTo(x, baseY);
            ctx.lineTo(x2, topY + wob2);
          } else {
            ctx.moveTo(x, topY + wob);
            ctx.lineTo(x2, baseY);
          }
          ctx.stroke();
        }
        ctx.fillStyle = "rgba(46,134,200,0.75)";
        ctx.beginPath();
        ctx.arc(x, topY + wob, 2 * dpr, 0, 7);
        ctx.fill();
      }
      t += 1;
      frame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="truss" aria-hidden="true" />;
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <TrussCanvas />
      <div className="hero-inner">
        <div className="wrap">
          <div className="hero-meta">
            <div>
              EST. <b>2025</b> — BANGALORE
            </div>
            <div>
              INFRA DIVISION <b>MAY 2026</b>
            </div>
            <div>EPC · CIVIL · ENERGY</div>
          </div>
          <h1 className="hero-title">
            <span className="ln">
              <span>Building</span>
            </span>
            <span className="ln">
              <span>Tomorrow&apos;s</span>
            </span>
            <span className="ln">
              <span>
                <span className="o">Infrastructure.</span>
              </span>
            </span>
          </h1>
          <p className="hero-sub">
            The Infrastructure Division of Auttonotech Solutions Pvt Ltd delivers
            EPC, civil construction, renewable energy, industrial and government
            projects across India with engineering precision, safety, and
            execution discipline.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn">
              Discuss Your Project
            </a>
            <a href="#sectors" className="btn ghost">
              View Capabilities
            </a>
          </div>
        </div>
      </div>
      <div className="wrap hero-stats">
        <div className="stat-strip">
          <div className="s">
            <StatCount target={8} />
            <div className="cap">Core Sectors</div>
          </div>
          <div className="s">
            <StatCount target={8} />
            <div className="cap">Service Lines</div>
          </div>
          <div className="s">
            <StatCount target={2} />
            <div className="cap">States Focused</div>
          </div>
          <div className="s">
            <div className="num">
              <span className="u">∞</span>
            </div>
            <div className="cap">Zero-Compromise Safety</div>
          </div>
        </div>
      </div>
    </section>
  );
}
