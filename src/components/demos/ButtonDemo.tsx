'use client'

import { Button } from '@chloe0592/pebble'

const containerStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.6)',
  borderRadius: 16,
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
}

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  alignItems: 'center',
}

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'rgba(99, 102, 241, 0.6)',
  marginBottom: 4,
}

export default function ButtonDemo() {
  return (
    <div style={containerStyle}>
      <div>
        <div style={labelStyle}>Variants</div>
        <div style={rowStyle}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>

      <div>
        <div style={labelStyle}>Sizes</div>
        <div style={rowStyle}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </div>

      <div>
        <div style={labelStyle}>States</div>
        <div style={rowStyle}>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" isLoading>Loading</Button>
        </div>
      </div>
    </div>
  )
}
