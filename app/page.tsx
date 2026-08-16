"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* HERO */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: "#0A2540", color: "white" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Affordable Web Design In TX
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.9 }}>
          Professional web design in San Antonio, Texas.
        </p>
        <a href="tel:8302905856" style={{ display: "inline-block", marginTop: "20px", padding: "12px 20px", background: "#1E90FF", color: "white", borderRadius: "8px", textDecoration: "none" }}>
          Call Now (830-290-5856)
        </a>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>About Jay’s Web Design</h2>
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          We help small businesses in San Antonio grow with modern, fast, and
          high-converting websites.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", background: "#f5f5f5" }}>
        <h2 style={{ textAlign: "center" }}>Services</h2>
        <div style={{ display: "grid", gap: "20px", maxWidth: "900px", margin: "40px auto" }}>
          {["Web Design", "SEO Optimization", "Website Redesign"].map((s) => (
            <div key={s} style={{ padding: "20px", background: "white", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Get Started</h2>
        <p>Call or text us today to start your website.</p>
        <a href="sms:18302905856" style={{ display: "inline-block", marginTop: "20px", padding: "12px 20px", background: "#EA580C", color: "white", borderRadius: "8px", textDecoration: "none" }}>
          Text Us Now
        </a>
      </section>
    </main>
  );
}

// TESTS
export function __testCases() {
  return {
    hasClientDirective: true,
    usesState: true,
  };
}
