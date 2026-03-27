"use client";

import { useEffect, useState } from "react";

const services = [
  {
    icon: '💻',
    title: 'Web Design',
    description:
      'Custom websites built to look professional, load fast, and help your business win more customers.',
  },
  {
    icon: '🔄',
    title: 'Website Redesign',
    description:
      'Refresh outdated websites with a cleaner look, better structure, and stronger conversion flow.',
  },
  {
    icon: '📈',
    title: 'SEO Optimization',
    description:
      'On-page SEO foundations that help your business show up better and get found by local customers.',
  },
  {
    icon: '📱',
    title: 'Mobile Optimization',
    description:
      'Mobile-first layouts that look great and work smoothly on phones, tablets, and desktops.',
  },
  {
    icon: '⚡',
    title: 'Fast Hosting & Deployment',
    description:
      'Reliable deployment and performance-focused builds so your website stays quick and dependable.',
  },
  {
    icon: '🏪',
    title: 'Small Business Websites',
    description:
      'Professional websites tailored for service businesses that need trust, clarity, and more leads.',
  },
];

const heroImages = [
  {
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80',
    title: 'Modern websites for service businesses',
  },
  {
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80',
    title: 'Professional design that builds trust',
  },
  {
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1800&q=80',
    title: 'Fast, mobile-friendly sites that convert',
  },
  {
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80',
    title: 'Websites built to help you grow',
  },
];

const portfolio = [
  {
    title: 'Edwin’s Repair Shop',
    category: 'Auto Repair Website',
    image: 'https://image.thum.io/get/width/1200/https://edwinsrepairshop.com/',
    url: 'https://edwinsrepairshop.com/',
  },
  {
    title: 'Rush Wheel & Tire',
    category: 'Wheel & Tire Website',
    image: 'https://image.thum.io/get/width/1200/https://rushwheelandtire.com/',
    url: 'https://rushwheelandtire.com/',
  },
  {
    title: 'Plumb Daddy Texas',
    category: 'Plumbing Website',
    image: 'https://image.thum.io/get/width/1200/https://plumbdaddy-texas.com/',
    url: 'https://plumbdaddy-texas.com/',
  },
  {
    title: 'Cowboy Ready Mix & Pumping On Demand',
    category: 'Concrete Website',
    image: 'https://image.thum.io/get/width/1200/https://www.cowboyreadymixandpumpingondemand.com/',
    url: 'https://www.cowboyreadymixandpumpingondemand.com/',
  },
  {
    title: 'Texas Stitch Worx',
    category: 'Custom Apparel Website',
    image: 'https://image.thum.io/get/width/1200/https://texasstitchworx.com/',
    url: 'https://texasstitchworx.com/',
  },
  {
    title: 'Coast To Coast Construction Group',
    category: 'Construction Website',
    image: 'https://image.thum.io/get/width/1200/https://www.cccg-us.com/',
    url: 'https://www.cccg-us.com/',
  },
];

const testimonials = [
  {
    name: 'Maria G.',
    review:
      'Jay completely transformed our website. We started getting calls within days and the new site looks so much more professional.',
  },
  {
    name: 'Carlos R.',
    review:
      'Fast, responsive, and easy to work with. Jay made the process simple and delivered a website that feels premium.',
  },
  {
    name: 'Ashley M.',
    review:
      'Our old site felt outdated. The redesign gave our business a fresh look and made it easier for customers to contact us.',
  },
  {
    name: 'Daniel T.',
    review:
      'Great communication, clean design, and strong attention to detail. The site works beautifully on mobile too.',
  },
];

const whyChooseUs = [
  'Results-driven design',
  'Fast delivery',
  'Affordable packages',
  'Personalized service',
  'Built to convert',
];

const seoHighlights = [
  'San Antonio web design for small businesses',
  'Fast-loading websites built for local SEO',
  'Mobile-first design that converts calls and leads',
  'Clean on-page SEO structure with strong local keyword targeting',
];

const serviceAreas = [
  'San Antonio',
  'Schertz',
  'Cibolo',
  'New Braunfels',
  'Converse',
  'Universal City',
  'Selma',
  'Garden Ridge',
];

const faqs = [
  {
    question: 'Do you build websites for small businesses in San Antonio?',
    answer:
      'Yes. Jay’s Web Design specializes in high-quality websites for San Antonio small businesses that need a professional online presence and more leads.',
  },
  {
    question: 'Will my website be SEO-friendly?',
    answer:
      'Yes. Every site is built with clean structure, fast loading pages, mobile optimization, keyword-focused content, and local SEO foundations to help your business rank better.',
  },
  {
    question: 'How fast can you build my website?',
    answer:
      'Turnaround depends on the size of the project, but most small business websites can be completed quickly with a streamlined process and clear communication.',
  },
  {
    question: 'Can you redesign my current website?',
    answer:
      'Absolutely. If your site looks outdated, loads slowly, or is not bringing in customers, we can redesign it with a cleaner, more conversion-focused layout.',
  },
  {
    question: 'Do you work outside San Antonio too?',
    answer:
      'Yes. While San Antonio is a major focus, Jay’s Web Design also works with surrounding areas and businesses throughout Texas.',
  },
];

const brand = {
  navy: '#0A2540',
  blue: '#1E90FF',
  orange: '#F59E0B',
  orangeDark: '#EA580C',
  light: '#F8FAFC',
};

function BrandLogo({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,#1E90FF_0%,#0A2540_65%,#081a2c_100%)] text-white">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Jay&apos;s</div>
          <div className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.18em] text-blue-100">Web Design</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#1E90FF_0%,#0A2540_62%,#071521_100%)] text-white">
      <div className="absolute inset-x-0 bottom-0 h-5 bg-gradient-to-r from-[#F59E0B] to-[#EA580C]" />
      <div className="absolute inset-x-0 bottom-5 h-1 bg-white/15" />
      <div className="relative z-10 flex flex-col items-center justify-center px-2 text-center">
        <div className="rounded-full border border-orange-300/70 bg-white/10 px-2 py-1 text-sm shadow-lg backdrop-blur-sm">💻</div>
        <div className="mt-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-orange-300">Jay&apos;s</div>
        <div className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-blue-100">Web Design</div>
      </div>
    </div>
  );
}

function DotButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-2.5 rounded-full transition-all duration-300 ${
        active ? 'w-10 bg-[#F59E0B]' : 'w-2.5 bg-white/50 hover:bg-white/80'
      }`}
      aria-label={label}
    />
  );
}

function Section({
  id,
  className = '',
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`reveal-section ${className}`}>
      {children}
    </section>
  );
}

function PortfolioCard({
  project,
}: {
  project: { title: string; category: string; image: string; url: string };
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-lg ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-100"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/95 via-[#0A2540]/30 to-transparent opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.35),transparent_35%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-sm font-medium text-orange-300">{project.category}</p>
        <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
        <span className="mt-4 inline-flex rounded-full border border-white/15 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur transition group-hover:border-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-slate-950">
          Visit Website
        </span>
      </div>
    </a>
  );
}

export default function JaysWebDesignLandingPage() {
  // SEO: set title, description, canonical, and local business schema
  useEffect(() => {
    document.title = 'Jay’s Web Design | San Antonio Web Design Company';

    const ensureMeta = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        if (property) tag.setAttribute('property', name);
        else tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    ensureMeta(
      'description',
      'Jay’s Web Design is a San Antonio web design company creating fast, high-quality, SEO-friendly websites for small businesses that want more calls, leads, and customers.'
    );
    ensureMeta('keywords', 'san antonio web design, web design san antonio tx, small business website design san antonio, seo san antonio web designer');
    ensureMeta('og:title', 'Jay’s Web Design | San Antonio Web Design Company', true);
    ensureMeta(
      'og:description',
      'Professional web design in San Antonio, Texas for small businesses that need a modern website built to rank and convert.',
      true
    );

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://jayswebdesign.com/');

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Jay’s Web Design',
      image: 'https://jayswebdesign.com/og-image.jpg',
      url: 'https://jayswebdesign.com/',
      telephone: '+1-830-290-5856',
      areaServed: serviceAreas,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Antonio',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      description:
        'San Antonio web design company building fast, mobile-friendly, SEO-optimized small business websites.',
      priceRange: '$$',
    };

    let script = document.getElementById('jwd-localbusiness-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'jwd-localbusiness-schema';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, []);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.reveal-section')) as HTMLElement[];

    const revealSections = () => {
      const viewportHeight = window.innerHeight;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const shouldReveal = rect.top <= viewportHeight * 0.88;
        if (shouldReveal) {
          section.classList.add('revealed');
          section.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
        }
      });
    };

    revealSections();
    const timeout = window.setTimeout(revealSections, 150);
    window.addEventListener('scroll', revealSections, { passive: true });
    window.addEventListener('resize', revealSections);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener('scroll', revealSections);
      window.removeEventListener('resize', revealSections);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 scroll-smooth">
      <style>{`
        html { scroll-behavior: smooth; }
        .reveal-section {
          opacity: 0;
          transform: translate3d(0, 56px, 0) scale(0.985);
          filter: blur(8px);
          transition:
            opacity 900ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 900ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform, filter;
        }
        .reveal-section.revealed {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          filter: blur(0);
        }
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseSoft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes drift {
          0% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(0,-10px,0); }
          100% { transform: translate3d(0,0,0); }
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
        .animate-floatIn { animation: floatIn 0.9s ease forwards; }
        .animate-fadeUp { animation: fadeUp 0.8s ease forwards; }
        .animate-pulseSoft { animation: pulseSoft 2.8s ease-in-out infinite; }
        .animate-drift { animation: drift 6s ease-in-out infinite; }
        .text-shine {
          background: linear-gradient(90deg, #ffffff 0%, #f59e0b 45%, #ffffff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shine 5s linear infinite;
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-3">
            <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-orange-300 bg-white shadow-lg shadow-orange-100 ring-2 ring-blue-100">
              <BrandLogo compact />
            </div>
            <div>
              <p className="text-base font-extrabold tracking-tight text-[#0A2540]">Jay’s Web Design</p>
              <p className="text-xs text-slate-500">Websites That Turn Visitors Into Customers</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#about" className="text-sm font-medium text-slate-700 transition hover:text-[#F59E0B]">About</a>
            <a href="#services" className="text-sm font-medium text-slate-700 transition hover:text-[#F59E0B]">Services</a>
            <a href="#portfolio" className="text-sm font-medium text-slate-700 transition hover:text-[#F59E0B]">Portfolio</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-700 transition hover:text-[#F59E0B]">Testimonials</a>
            <a href="#contact" className="rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:shadow-xl">
              Call 830-290-5856
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Section id="hero" className="relative isolate overflow-hidden bg-slate-950 !opacity-100 !translate-y-0">
          <div className="absolute inset-0">
            {heroImages.map((item, index) => (
              <img
                key={item.image}
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ${
                  heroIndex === index ? 'opacity-35 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/92 via-[#0A2540]/82 to-[#0A2540]/62" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_28%)]" />
            <div className="absolute -left-12 top-28 h-44 w-44 rounded-full bg-orange-400/20 blur-3xl" />
            <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />
          </div>

          <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="max-w-2xl animate-floatIn">
              <span className="inline-flex rounded-full border border-orange-300/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-orange-200 shadow-sm backdrop-blur">
                San Antonio Web Design Experts
              </span>
              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-shine">Websites That Turn Visitors Into Customers</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
                Professional web design in San Antonio, Texas. Fast, affordable, and built to help your business rank on Google and turn visitors into paying customers.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:8302905856"
                  className="rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] px-7 py-4 text-center text-sm font-bold text-white shadow-xl shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Call Now (830-290-5856)
                </a>
                <a
                  href="#portfolio"
                  className="rounded-full border border-white/25 bg-white/10 px-7 py-4 text-center text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#F59E0B] hover:bg-white/20"
                >
                  View Our Work
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-200">
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" /> High-converting design</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#1E90FF]" /> Mobile-first builds</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-white" /> Built for San Antonio SEO</div>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {seoHighlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-100 backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-2">
                {heroImages.map((item, index) => (
                  <DotButton
                    key={item.title}
                    active={heroIndex === index}
                    onClick={() => setHeroIndex(index)}
                    label={`Show slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="animate-fadeUp lg:justify-self-end">
              <div className="animate-drift overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-slate-950/40 backdrop-blur-sm">
                <div className="rounded-[1.5rem] border border-orange-100 bg-white p-4 shadow-2xl">
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                    <div className="h-16 w-16 overflow-hidden rounded-2xl border border-orange-200 shadow-md shadow-orange-100 ring-1 ring-blue-100">
                      <BrandLogo compact />
                    </div>
                    <div>
                      <p className="text-lg font-extrabold text-[#0A2540]">Jay’s Web Design</p>
                      <p className="text-sm text-slate-500">Small business websites that look premium and convert.</p>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
                    alt="Modern workspace and website planning"
                    className="mt-4 h-[320px] w-full rounded-[1.5rem] object-cover lg:w-[520px]"
                  />
                  <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#EA580C]">Fast turnaround</p>
                      <p className="text-sm text-slate-600">Modern sites built for leads</p>
                    </div>
                    <div className="rounded-full bg-[#0A2540] px-3 py-1 text-xs font-semibold text-white">SEO-ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="about" className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                alt="Person working on a website"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EA580C]">About Us</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A2540] sm:text-4xl">
                Clean websites built to help small businesses grow.
              </h2>
              <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#1E90FF]" />
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Jay’s Web Design is a San Antonio web design company helping small businesses stand out online with modern, high-performing websites that rank on Google and convert traffic into leads. We focus on clean design, fast load speeds, and strategies that convert visitors into paying customers.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Fast turnaround', 'Affordable pricing', 'SEO-ready websites', 'Mobile-first design'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-100">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-[#EA580C]">✔</span>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="services" className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EA580C]">Services</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A2540] sm:text-4xl">
                Website services designed for growth
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                Everything you need from a San Antonio web design company — websites that look professional, load fast, rank on Google, and turn visitors into real customers.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-100/70"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 to-blue-50 text-2xl shadow-sm ring-1 ring-orange-100">
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#0A2540]">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                  <div className="mt-5 h-1 w-0 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#1E90FF] transition-all duration-300 group-hover:w-20" />
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="portfolio" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EA580C]">Portfolio</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A2540] sm:text-4xl">
                  San Antonio Website Projects & Client Work
                </h2>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-orange-200 px-5 py-3 text-sm font-semibold text-[#EA580C] transition hover:-translate-y-0.5 hover:bg-orange-50"
              >
                Start Your Project
              </a>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {portfolio.map((project) => (
                <PortfolioCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </Section>

        <Section id="testimonials" className="bg-[#0A2540] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Testimonials</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Trusted by San Antonio Business Owners
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                Real feedback from businesses that wanted a website that looked more professional and turned more visitors into leads.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-orange-300/30 hover:bg-white/10">
                  <div className="text-lg text-orange-300">★★★★★</div>
                  <p className="mt-4 leading-7 text-slate-200">“{item.review}”</p>
                  <p className="mt-6 text-sm font-semibold text-white">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="why-choose-us" className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EA580C]">Why Choose Us</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A2540] sm:text-4xl">
                Built for business owners who need results, not just a pretty site
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Every website we build is designed to rank in San Antonio search results, build trust instantly, and make it easy for customers to call or message your business.
              </p>
              <div className="mt-8 space-y-4">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl bg-slate-50 px-5 py-4 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-blue-50 text-[#EA580C] shadow-sm">✓</span>
                    <span className="text-base font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
                alt="Small business team in office"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Section>

        <Section id="seo-content" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EA580C]">San Antonio SEO Content</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A2540] sm:text-4xl">
                High-quality websites for businesses in San Antonio, TX
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                If you are searching for web design in San Antonio, you need more than a nice-looking homepage. You need a website that loads fast, clearly explains your services, builds trust with local customers, and makes it easy for people to call, text, or request a quote. Jay’s Web Design builds websites for San Antonio businesses that want quality design, stronger Google visibility, and more leads.
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our approach combines modern design, local SEO strategy, mobile-first layouts, strong calls to action, and conversion-focused content. That means your website is not only attractive — it is structured to help you rank for searches like <span className="font-semibold text-[#0A2540]">San Antonio web design</span>, <span className="font-semibold text-[#0A2540]">website design San Antonio TX</span>, and <span className="font-semibold text-[#0A2540]">small business website designer in San Antonio</span>.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.75rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-black text-[#0A2540]">Why local businesses choose Jay’s Web Design</h3>
                <div className="mt-6 space-y-4 text-slate-600 leading-7">
                  <p>We create websites for contractors, repair shops, service companies, local brands, and other small businesses that need a site built to convert. Every page is designed to support trust, clarity, speed, and local search visibility.</p>
                  <p>We focus on homepage structure, service page wording, local keyword placement, mobile responsiveness, clear contact options, and content that helps customers understand why they should choose your business.</p>
                  <p>That gives your company a stronger foundation for long-term SEO while also improving conversion rates right away.</p>
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-[#0A2540] p-8 text-white shadow-xl">
                <h3 className="text-2xl font-black">Areas We Serve Around San Antonio</h3>
                <p className="mt-4 text-slate-300 leading-7">
                  Jay’s Web Design works with businesses in San Antonio and nearby areas across South Central Texas.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {serviceAreas.map((area) => (
                    <span key={area} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-orange-200">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="faqs" className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EA580C]">FAQs</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A2540] sm:text-4xl">
                San Antonio web design questions
              </h2>
            </div>
            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-lg font-bold text-[#0A2540]">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="bg-[#0A2540] p-8 text-white sm:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Contact Us</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight">Get Your Website Started Today</h2>
                  <p className="mt-5 text-slate-300">
                    Looking for a San Antonio web design company that actually brings you customers? Reach out today and let’s talk about your project.
                  </p>
                  <div className="mt-8 rounded-2xl border border-orange-300/20 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-sm uppercase tracking-wide text-orange-200">Call us</p>
                    <a href="tel:8302905856" className="mt-2 block text-2xl font-black text-white transition hover:text-orange-300">
                      830-290-5856
                    </a>
                  </div>
                </div>

                <form className="space-y-5 p-8 sm:p-10">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
                    <input type="text" placeholder="Your name" className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-[#F59E0B] focus:ring-4 focus:ring-orange-100" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                      <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-[#F59E0B] focus:ring-4 focus:ring-orange-100" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Phone</label>
                      <input type="tel" placeholder="(830) 290-5856" className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-[#F59E0B] focus:ring-4 focus:ring-orange-100" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                    <textarea rows={5} placeholder="Tell us about your website project..." className="w-full rounded-2xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-[#F59E0B] focus:ring-4 focus:ring-orange-100" />
                  </div>
                  <button type="button" className="w-full rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-orange-100 transition hover:-translate-y-1 hover:shadow-xl">
                    Get Your Website Started Today
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <a
        href="sms:+18302905856?body=Hi%20Jay%E2%80%99s%20Web%20Design%2C%20I%E2%80%99m%20interested%20in%20getting%20a%20website%20for%20my%20business."
        className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] px-5 py-4 text-white shadow-2xl shadow-orange-200 transition hover:-translate-y-1 hover:shadow-orange-300 animate-pulseSoft"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#EA580C] shadow-sm">💬</span>
        <span>
          <span className="block text-sm font-bold leading-tight">Text Us</span>
          <span className="block text-xs text-orange-100">Start your website project</span>
        </span>
      </a>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-orange-200 bg-white ring-1 ring-blue-100">
              <BrandLogo compact />
            </div>
            <div>
              <p className="font-semibold text-[#0A2540]">Jay’s Web Design</p>
              <p>Websites That Turn Visitors Into Customers</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#about" className="transition hover:text-[#EA580C]">About</a>
            <a href="#services" className="transition hover:text-[#EA580C]">Services</a>
            <a href="#portfolio" className="transition hover:text-[#EA580C]">Portfolio</a>
            <a href="#contact" className="transition hover:text-[#EA580C]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function __testCases() {
  const seoTitle = document?.title || "";
  const smsLink =
    'sms:+18302905856?body=Hi%20Jay%E2%80%99s%20Web%20Design%2C%20I%E2%80%99m%20interested%20in%20getting%20a%20website%20for%20my%20business.';

  return {
    serviceCount: services.length,
    heroImageCount: heroImages.length,
    portfolioCount: portfolio.length,
    testimonialCount: testimonials.length,
    whyChooseUsCount: whyChooseUs.length,
    hasSmsLink: smsLink.startsWith('sms:'),
    hasVisibleLogoComponent: typeof BrandLogo === 'function',
    usesOrangeBranding: Boolean(brand.orange && brand.orangeDark),
    usesBlueBranding: Boolean(brand.blue && brand.navy),
    uniquePortfolioUrls: new Set(portfolio.map((item) => item.url)).size === portfolio.length,
    faqCount: faqs.length,
    serviceAreaCount: serviceAreas.length,
    seoHighlightCount: seoHighlights.length,
    revealLogicAttached: true,
  };
}
