'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button, Badge } from '@chloe0592/pebble'
import styles from './LandingPage.module.css'

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  return (
    <button
      className={styles.navIconBtn}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {isDark
        ? <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        : <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      }
    </button>
  )
}

const COMPONENTS = [
  { name: 'Button', desc: 'Five variants, three sizes, loading state', href: '/components/button' },
  { name: 'Input', desc: 'Labels, icons, helper and error text', href: '/components/input' },
  { name: 'Textarea', desc: 'Auto-resize, configurable resize handle', href: '/components/textarea' },
  { name: 'Select', desc: 'Custom dropdown with keyboard navigation', href: '/components/select' },
  { name: 'Checkbox', desc: 'Checked, indeterminate, helper text', href: '/components/checkbox' },
  { name: 'Card', desc: 'Elevated, bordered, flat and hoverable variants', href: '/components/card' },
  { name: 'Modal', desc: 'Four sizes, backdrop dismiss, custom footer', href: '/components/modal' },
  { name: 'Spinner', desc: 'Five sizes, indigo and white color modes', href: '/components/spinner' },
  { name: 'Tooltip', desc: 'Four placements, rich content support', href: '/components/tooltip' },
]

export default function LandingPage() {
  return (
    <div className={styles.page}>

      {/* ── Navbar ── */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>Pebble</Link>
        <div className={styles.navRight}>
          <Link href="/getting-started" className={styles.navLink}>Docs</Link>
          <Link href="/components" className={styles.navLink}>Components</Link>
          <a href="https://github.com/kljevar/pebble" target="_blank" rel="noopener noreferrer" className={styles.navIconBtn} aria-label="GitHub">
            <GitHubIcon />
          </a>
          <ThemeToggle />
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <span className={styles.heroEyebrow}>
          iOS 26 Liquid Glass · v0.1.7
        </span>
        <h1 className={styles.heroHeadline}>
          Glass-native components<br />
          <span className={styles.heroAccent}>for the web.</span>
        </h1>
        <p className={styles.heroSubline}>
          A React + TypeScript design system inspired by iOS 26 liquid glass — built for the modern web.
        </p>
        <div className={styles.heroCtas}>
          <Button variant="primary" onClick={() => window.location.href = '/getting-started'}>
            Get started
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/components'}>
            View components
          </Button>
        </div>

        {/* Live component preview */}
        <div className={styles.preview}>
          <div className={styles.previewLabel}>Buttons</div>
          <div className={styles.previewRow}>
            <Button variant="primary" size="sm">Primary</Button>
            <Button variant="secondary" size="sm">Secondary</Button>
            <Button variant="ghost" size="sm">Ghost</Button>
            <Button variant="outline" size="sm">Outline</Button>
            <Button variant="danger" size="sm">Danger</Button>
          </div>
          <div className={styles.previewDivider} />
          <div className={styles.previewLabel}>Card</div>
          <div className={styles.previewCard}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <p className={styles.previewCardTitle}>Pebble Pro</p>
              <Badge variant="success">New</Badge>
            </div>
            <p className={styles.previewCardBody}>
              The complete design system starter for your next project.
            </p>
            <Button variant="primary" size="sm" fullWidth>Get started</Button>
          </div>
          <div className={styles.previewDivider} />
          <div className={styles.previewLabel}>Badges</div>
          <div className={styles.previewRow}>
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </div>
      </section>

      {/* ── Components strip ── */}
      <section className={styles.strip}>
        <div className={styles.stripInner}>
          <p className={styles.sectionEyebrow}>Components</p>
          <h2 className={styles.sectionHeading}>Explore the system</h2>
          <p className={styles.sectionSubline}>
            Every component built with the same glass aesthetic and attention to detail.
          </p>
          <div className={styles.componentsGrid}>
            {COMPONENTS.map(({ name, desc, href }) => (
              <Link key={name} href={href} className={styles.componentCard}>
                <p className={styles.componentCardName}>{name}</p>
                <p className={styles.componentCardDesc}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value props ── */}
      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <p className={styles.sectionEyebrow}>Why Pebble</p>
          <h2 className={styles.sectionHeading}>Craft meets system</h2>
          <p className={styles.sectionSubline}>
            Built from first principles with a single question: what if every detail was considered?
          </p>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>✦</span>
              <p className={styles.valueName}>iOS-inspired</p>
              <p className={styles.valueDesc}>
                Liquid glass aesthetic designed for the web — frosted surfaces, iridescent gradients, spring animations.
              </p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>◐</span>
              <p className={styles.valueName}>Dark mode first</p>
              <p className={styles.valueDesc}>
                Built dark first, always beautiful. Every component looks intentional in both light and dark.
              </p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>✦</span>
              <p className={styles.valueName}>Craft-first</p>
              <p className={styles.valueDesc}>
                Every detail considered — from bloom effects to spring physics, nothing is left to defaults.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <div className={styles.footer}>
          <span className={styles.footerWordmark}>Pebble — Built by Klaudija</span>
          <div className={styles.footerLinks}>
            <a
              href="https://github.com/kljevar/pebble"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              GitHub
            </a>
            <Link href="/components" className={styles.footerLink}>Components</Link>
            <Link href="/getting-started" className={styles.footerLink}>Get started</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
