'use client'

import { Card, Button } from '@chloe0592/pebble'
import styles from './ButtonDemo.module.css'

export default function CardDemo() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>Variants</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            <Card.Header>Basic card</Card.Header>
            <Card.Body>This is a default card with a title and some description text inside the body.</Card.Body>
          </Card>

          <Card style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            <Card.Header>Card with footer</Card.Header>
            <Card.Body>A card with a header, body content, and a footer containing actions.</Card.Body>
            <Card.Footer>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                <Button variant="ghost" size="sm">Cancel</Button>
                <Button variant="primary" size="sm">Confirm</Button>
              </div>
            </Card.Footer>
          </Card>

          <Card variant="elevated" hoverable style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            <Card.Header>Elevated card</Card.Header>
            <Card.Body>Adds a stronger shadow and a lift effect on hover.</Card.Body>
          </Card>

          <Card variant="bordered" clickable style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
            <Card.Header>Clickable card</Card.Header>
            <Card.Body>The entire card surface is interactive — useful for navigation or selection.</Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
