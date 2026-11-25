'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { siteConfig } from '@/lib/site-config'
import styles from './profile-header.module.css'

export function ProfileHeader() {
  const reduceMotion = useReducedMotion()

  return (
    <header className="profile-header">
      <motion.div
        className={`brand-lockup${siteConfig.logoPath ? ' has-logo' : ''}`}
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {siteConfig.logoPath ? (
          <span className={styles.logoSlot}>
            <span className={styles.logoCircle}>
              <Image src={siteConfig.logoPath} alt="Logo do Dr. Levy Marinho com identificação profissional CRO-CE 13084" width={2172} height={724} priority className={styles.logoImage} />
            </span>
          </span>
        ) : (
          <span className="logo-placeholder">Logo oficial</span>
        )}
      </motion.div>
      <motion.div
        className="profile-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.14, duration: 0.7, ease: 'easeOut' }}
      >
        <h1>{siteConfig.name}</h1>
        <p className="professional-title">{siteConfig.title}<span aria-hidden="true"> · </span>{siteConfig.registration}</p>
        <span className="champagne-divider" aria-hidden="true" />
        <p className="tagline">{siteConfig.tagline}</p>
      </motion.div>
    </header>
  )
}
