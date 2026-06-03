'use client'
import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const HEADLINE = ['Recover 10 hours a week', 'without becoming', 'a tech person.']
const SUBTITLE = "We audit your operations and find the exact repetitive work that should be automated, so you get time back without needing to become a tech expert."
const META = ['Results in days, not months', 'No long-term contracts', 'Built for real SMB operations']

function splitWords(line: string, lineIdx: number) {
  return line.split(' ').map((word, i) => (
    <span key={`${lineIdx}-${i}`} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', lineHeight: 1.1 }}>
      <span className="hero-word" style={{ display: 'inline-block' }}>
        {word}{i < line.split(' ').length - 1 ? ' ' : ''}
      </span>
    </span>
  ))
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const clockRef = useRef<SVGSVGElement>(null)

  // Mouse-tracking glow
  useEffect(() => {
    const hero = containerRef.current
    if (!hero) return
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          '--gx': `${x}%`,
          '--gy': `${y * 0.6 + 10}%`,
          duration: 1.8,
          ease: 'power1.out',
          overwrite: 'auto',
        } as gsap.TweenVars)
      }
    }
    hero.addEventListener('mousemove', handleMouseMove)
    return () => hero.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useGSAP(() => {
    const ease = 'cubic-bezier(0.2, 0.8, 0.2, 1)'
    const tl = gsap.timeline()

    // Ambient glow entrance
    gsap.set(glowRef.current, { opacity: 0, scale: 0.75 })
    tl.to(glowRef.current, { opacity: 1, scale: 1, duration: 1.4, ease })

    // Eyebrow
    tl.from('.hero-eyebrow', { y: 16, opacity: 0, duration: 0.55, ease }, '-=0.9')

    // Words rising from below (clip animation)
    tl.from('.hero-word', {
      yPercent: 110,
      duration: 0.75,
      stagger: 0.055,
      ease: 'power3.out',
    }, '-=0.7')

    // Subtitle
    tl.from('.hero-subtitle', { y: 24, opacity: 0, duration: 0.65, ease }, '-=0.3')

    // CTAs
    tl.from('.hero-cta', { y: 16, opacity: 0, duration: 0.5, stagger: 0.1, ease }, '-=0.45')

    // Meta strip
    tl.from('.hero-meta-item', { opacity: 0, duration: 0.45, stagger: 0.08 }, '-=0.3')

    // Scroll indicator
    tl.from('.scroll-indicator', { opacity: 0, y: -10, duration: 0.5 }, '-=0.1')

    // Clock SVG entrance
    tl.from(clockRef.current, { opacity: 0, scale: 0.85, duration: 1, ease }, 0.3)

    // Pulsing glow
    gsap.to(glowRef.current, {
      scale: 1.12,
      duration: 4.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 1.5,
    })

    // Slow clock rotation
    gsap.to('.clock-hand-minute', {
      rotation: 360,
      duration: 24,
      ease: 'none',
      repeat: -1,
      transformOrigin: '50% 100%',
    })
    gsap.to('.clock-hand-hour', {
      rotation: 30,
      duration: 120,
      ease: 'none',
      repeat: -1,
      transformOrigin: '50% 100%',
    })

    // Parallax on scroll
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        gsap.set(contentRef.current, { y: self.progress * -70 })
      },
    })

    // Scroll indicator bounce
    gsap.to('.scroll-indicator', {
      y: 6,
      duration: 1.2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100svh',
        background: '#2C2722',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: 64,
      }}
    >
      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Ambient amber glow */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 65% 50% at var(--gx, 50%) var(--gy, 30%), rgba(217, 119, 66, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          willChange: 'transform, opacity',
        } as React.CSSProperties}
      />

      {/* Decorative hand-drawn clock SVG */}
      <svg
        ref={clockRef}
        className="hero-clock"
        width="320" height="320"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          right: '6%',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.07,
          pointerEvents: 'none',
        }}
      >
        <circle cx="100" cy="100" r="88" stroke="#D97742" strokeWidth="1.75" />
        <circle cx="100" cy="100" r="3" fill="#D97742" />
        {/* Hour marks */}
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
          const rad = (deg - 90) * Math.PI / 180
          const inner = i % 3 === 0 ? 76 : 82
          return (
            <line
              key={deg}
              x1={100 + Math.cos(rad) * inner}
              y1={100 + Math.sin(rad) * inner}
              x2={100 + Math.cos(rad) * 88}
              y2={100 + Math.sin(rad) * 88}
              stroke="#D97742"
              strokeWidth={i % 3 === 0 ? 1.75 : 1}
              strokeLinecap="round"
            />
          )
        })}
        {/* Minute hand */}
        <line className="clock-hand-minute" x1="100" y1="100" x2="100" y2="28" stroke="#D97742" strokeWidth="1.75" strokeLinecap="round" />
        {/* Hour hand */}
        <line className="clock-hand-hour" x1="100" y1="100" x2="100" y2="48" stroke="#D97742" strokeWidth="2.5" strokeLinecap="round" />
        {/* Arc accent — a looped arrow going back */}
        <path d="M 56 100 A 44 44 0 0 1 144 100" stroke="#D97742" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 6" />
      </svg>

      {/* Content */}
      <div
        ref={contentRef}
        className="gbt-container hero-content-inner"
        style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '6rem 2rem 5rem' }}
      >
        {/* Eyebrow */}
        <p className="hero-eyebrow gbt-eyebrow gbt-eyebrow-amber" style={{ marginBottom: '1.75rem' }}>
          For small business owners
        </p>

        {/* Headline */}
        <h1
          className="gbt-display gbt-h1"
          style={{ color: '#fff', marginBottom: '1.75rem', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}
        >
          {HEADLINE.map((line, li) => (
            <span key={li} style={{ display: 'block' }}>
              {splitWords(line, li)}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          className="hero-subtitle"
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 560,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '2.5rem',
          }}
        >
          {SUBTITLE}
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <a href="/contact" className="hero-cta gbt-btn gbt-btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
            Book Assessment
            <ArrowRight size={16} strokeWidth={2} />
          </a>
          <a href="#how-it-works" className="hero-cta gbt-btn gbt-btn-ghost-dark" style={{ fontSize: '1rem', padding: '0.875rem 1.75rem' }}>
            See how it works
          </a>
        </div>

        {/* Meta strip */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          {META.map((item, i) => (
            <span key={item} className="hero-meta-item" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)' }}>
                {item}
              </span>
              {i < META.length - 1 && (
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>·</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.375rem',
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={16} strokeWidth={1.5} />
      </div>
    </section>
  )
}
