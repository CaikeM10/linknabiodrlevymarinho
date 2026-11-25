'use client'

import { ChevronRight, MapPin, Stethoscope } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

interface LinkCardProps {
  href?: string
  icon: 'whatsapp' | 'professional' | 'location'
  title: string
  description: string
  index: number
  prominent?: boolean
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path d="M20.2 11.8a8.2 8.2 0 0 1-12 7.1l-4.4 1.2L5 15.8a8.2 8.2 0 1 1 15.2-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9.1 8.2c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1 0 1.2.9 2.4 1.1 2.6.1.2 1.8 2.9 4.5 4 .6.3 1.1.4 1.5.5.6.2 1.1.1 1.5.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.4l-1.8-.8c-.2-.1-.4-.1-.6.2-.2.3-.7.8-.9 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.3-1.6-1.5-1.9-.1-.3 0-.4.1-.6l.5-.5c.2-.2.3-.3.4-.5.1-.2.1-.4 0-.5l-.8-1.7Z" fill="currentColor" />
    </svg>
  )
}

export function LinkCard({ href, icon, title, description, index, prominent = false }: LinkCardProps) {
  const reduceMotion = useReducedMotion()
  const Icon = icon === 'professional' ? Stethoscope : icon === 'location' ? MapPin : null
  const iconElement = icon === 'whatsapp' ? <WhatsAppIcon /> : Icon ? <Icon size={23} strokeWidth={1.8} aria-hidden="true" /> : null
  const cardClassName = `link-card${prominent ? ' link-card-primary' : ''}`
  const content = (
    <>
      <span className="link-icon">{iconElement}</span>
      <span className="link-icon-divider" aria-hidden="true" />
      <span className="link-copy">
        <span className="link-title">{title}</span>
        <span className="link-description">{description}</span>
      </span>
      <ChevronRight className="link-arrow" size={19} strokeWidth={1.8} aria-hidden="true" />
    </>
  )

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.24 + index * 0.1, duration: 0.55, ease: 'easeOut' }}
      whileHover={href && !reduceMotion ? { y: -2 } : undefined}
      whileTap={href && !reduceMotion ? { scale: 0.985 } : undefined}
    >
      {href ? (
        <a className={cardClassName} href={href} target={href.startsWith('https://') ? '_blank' : undefined} rel={href.startsWith('https://') ? 'noreferrer' : undefined}>
          {content}
        </a>
      ) : (
        <div className={`${cardClassName} link-card-disabled`} aria-disabled="true" title="Este link será habilitado quando os dados de contato forem informados.">
          {content}
        </div>
      )}
    </motion.div>
  )
}
