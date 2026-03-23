'use client'

import { Badge, Button } from '@chloe0592/pebble'
import styles from './ButtonDemo.module.css'

export default function ProductCardDemo() {
  return (
    <div className={styles.container}>
      <div className={styles.label}>Product Card</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: 340,
          borderRadius: 20,
          overflow: 'hidden',
          background: '#fff',
          boxShadow: '0 8px 40px rgba(99, 102, 241, 0.12), 0 2px 8px rgba(0,0,0,0.06)',
        }}>
          {/* Hero area */}
          <div style={{
            background: 'linear-gradient(160deg, #e8e4f8 0%, #d4d0f0 100%)',
            height: 220,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ fontSize: 96, lineHeight: 1, userSelect: 'none' }}>🪨</div>
          </div>

          {/* Content area */}
          <div style={{ padding: '20px 24px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontSize: 22, fontWeight: 700, color: '#0f0d1a', letterSpacing: '-0.03em' }}>
                Pebble Pro
              </span>
              <Badge variant="success">New</Badge>
            </div>
            <p style={{ fontSize: 15, color: '#4a4570', lineHeight: 1.55, margin: '0 0 20px' }}>
              The complete design system starter kit for your next project.
            </p>
            <Button variant="primary" fullWidth>Get started</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
