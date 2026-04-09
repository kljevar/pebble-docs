'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { Button, Badge, Input, Card, Checkbox } from '@chloe0592/pebble'
import { SiteNavbar } from '@/src/components/SiteNavbar'
import styles from './LandingPage.module.css'

function FadeIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.fadeIn} ${visible ? styles.fadeInVisible : ''} ${className ?? ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

const extraLinks = (
  <>
    <Link href="/getting-started" className={styles.navLink}>Docs</Link>
    <Link href="/components" className={styles.navLink}>Components</Link>
  </>
)

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
  const heroRef = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = heroRef.current
    if (!el) return
    const x = (e.clientX / window.innerWidth) * 100
    const y = (e.clientY / window.innerHeight) * 100
    el.style.setProperty('--cursor-x', x + '%')
    el.style.setProperty('--cursor-y', y + '%')
  }

  return (
    <div className={styles.page}>

      {/* ── Animated gradient blobs ── */}
      <div className={styles.blobLayer} aria-hidden="true">
        <div className={styles.blob0} />
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>

      {/* ── Content (above blob layer) ── */}
      <div className={styles.content}>

      {/* ── Navbar ── */}
      <SiteNavbar extraLinks={extraLinks} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <FadeIn delay={0}>
          <span className={styles.heroEyebrow}>iOS 26 Liquid Glass · v0.1.7</span>
        </FadeIn>
        <FadeIn delay={100}>
          <h1 className={styles.heroHeadline}>
            Glass-native components<br />
            <span className={styles.heroAccent}>for the web.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className={styles.heroSubline}>
            A React + TypeScript design system inspired by iOS 26 liquid glass — built for the modern web.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <div className={styles.heroCtas}>
            <Button variant="primary" onClick={() => window.location.href = '/getting-started'}>
              Get started
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/components'}>
              View components
            </Button>
          </div>
        </FadeIn>

        {/* Live component preview */}
        <FadeIn delay={400}>
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
        </FadeIn>
      </section>

      {/* ── Components strip ── */}
      <section className={styles.strip}>
        <div className={styles.stripInner}>
          <FadeIn>
            <p className={styles.sectionEyebrow}>Components</p>
            <h2 className={styles.sectionHeading}>Explore the system</h2>
            <p className={styles.sectionSubline}>
              Every component built with the same glass aesthetic and attention to detail.
            </p>
          </FadeIn>
          <div className={styles.componentsGrid}>
            {COMPONENTS.map(({ name, desc, href }, i) => (
              <FadeIn key={name} delay={i * 60}>
                <Link href={href} className={styles.componentCard}>
                  <p className={styles.componentCardName}>{name}</p>
                  <p className={styles.componentCardDesc}>{desc}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark mode showcase ── */}
      <section className={styles.darkShowcase}>
        <div className={styles.darkShowcaseInner}>
          <FadeIn>
            <p className={styles.darkShowcaseEyebrow}>Dark mode</p>
            <h2 className={styles.darkShowcaseHeading}>Beautiful in the dark.</h2>
            <p className={styles.darkShowcaseSubline}>
              Every component is designed dark-first — glass surfaces glow on deep backgrounds.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className={`dark ${styles.darkShowcaseGrid}`}>

              {/* Top left: Buttons */}
              <div className={styles.glassBox} style={{ minHeight: 180, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
                <p className={styles.glassBoxLabel}>Buttons</p>
                <div className={styles.glassBoxRow} style={{ gap: 12 }}>
                  <Button variant="primary" size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                  <Button variant="danger" size="sm">Danger</Button>
                  <Button variant="outline" size="sm">Outline</Button>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                  Five variants, three sizes, spring animations.
                </p>
              </div>

              {/* Top right: Inputs */}
              <div className={styles.glassBox} style={{ minHeight: 180 }}>
                <p className={styles.glassBoxLabel}>Inputs</p>
                <div className={styles.glassBoxStack}>
                  <Input label="Email address" placeholder="you@example.com" />
                  <Input label="Username" placeholder="klaudija" errorText="This username is already taken." />
                </div>
              </div>

              {/* Bottom left: Card */}
              <div className={styles.glassBox} style={{ minHeight: 220 }}>
                <Card variant="elevated" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <Card.Header><strong style={{ color: 'rgba(255,255,255,0.9)', fontSize: 15 }}>Liquid Glass Card</strong></Card.Header>
                  <Card.Body><p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, margin: 0 }}>Glass surfaces feel alive — frosted, luminous, and responsive to light.</p></Card.Body>
                  <Card.Footer><Button variant="primary" size="sm">Explore</Button></Card.Footer>
                </Card>
              </div>

              {/* Bottom right: Checkboxes */}
              <div className={styles.glassBox} style={{ minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p className={styles.glassBoxLabel}>Preferences</p>
                <div className={styles.glassBoxStack}>
                  <Checkbox label="Enable animations" defaultChecked />
                  <Checkbox label="Reduce motion" />
                  <Checkbox label="High contrast mode" />
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Value props ── */}
      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <FadeIn>
            <p className={styles.sectionEyebrow}>Why Pebble</p>
            <h2 className={styles.sectionHeading}>Craft meets system</h2>
            <p className={styles.sectionSubline}>
              Built from first principles with a single question: what if every detail was considered?
            </p>
          </FadeIn>
          <div className={styles.valuesGrid}>
            <FadeIn delay={0}>
              <div className={styles.valueCard}>
                <span className={styles.valueIcon}>✦</span>
                <p className={styles.valueName}>iOS-inspired</p>
                <p className={styles.valueDesc}>
                  Liquid glass aesthetic designed for the web — frosted surfaces, iridescent gradients, spring animations.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className={styles.valueCard}>
                <span className={styles.valueIcon}>◐</span>
                <p className={styles.valueName}>Dark mode first</p>
                <p className={styles.valueDesc}>
                  Built dark first, always beautiful. Every component looks intentional in both light and dark.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className={styles.valueCard}>
                <span className={styles.valueIcon}>✦</span>
                <p className={styles.valueName}>Craft-first</p>
                <p className={styles.valueDesc}>
                  Every detail considered — from bloom effects to spring physics, nothing is left to defaults.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <FadeIn>
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
      </FadeIn>

      </div>{/* end .content */}

    </div>
  )
}
