'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useId } from 'react'

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion()
  const gradientId = useId()

  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="decorative-tooth" aria-hidden="true" />
      <motion.div
        className="ambient-glow ambient-glow-top"
        animate={reduceMotion ? undefined : { opacity: [0.42, 0.62, 0.42], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="ambient-glow ambient-glow-bottom"
        animate={reduceMotion ? undefined : { opacity: [0.2, 0.36, 0.2], scale: [1.04, 1, 1.04] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      {['top', 'bottom'].map((corner) => (
        <svg key={corner} className={`organic-line organic-line-${corner}`} viewBox="0 0 420 440" fill="none" focusable="false">
          <defs>
            <linearGradient id={`${gradientId}-${corner}`} x1="0" y1="0" x2="420" y2="440" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--champagne)" stopOpacity="0" />
              <stop offset=".35" stopColor="var(--champagne)" stopOpacity=".38" />
              <stop offset=".7" stopColor="var(--champagne)" stopOpacity=".22" />
              <stop offset="1" stopColor="var(--champagne)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke={`url(#${gradientId}-${corner})`}>
            <path d="M-40 28C240 0 305 78 202 174S40 293 100 370S262 428 390 470" />
            <path d="M-40 45C219 18 280 87 185 181S24 303 85 381S244 444 378 485" opacity=".8" />
            <path d="M-40 62C198 36 255 96 168 188S8 313 70 392S226 460 366 500" opacity=".6" />
          </g>
        </svg>
      ))}
    </div>
  )
}
