'use client'

import { Button, ToastProvider, useToast } from '@chloe0592/pebble'
import styles from './Demo.module.css'
import toastStyles from './ToastDemo.module.css'

// ── Variants & titles section ──────────────────────────────────

function ToastTriggers() {
  const { addToast } = useToast()

  return (
    <>
      <div>
        <div className={styles.label}>Variants</div>
        <div className={styles.row}>
          <Button variant="primary" size="sm" onClick={() => addToast({ variant: 'success', message: 'Component installed successfully.' })}>
            Success
          </Button>
          <Button variant="secondary" size="sm" onClick={() => addToast({ variant: 'error', message: 'Something went wrong. Please try again.' })}>
            Error
          </Button>
          <Button variant="secondary" size="sm" onClick={() => addToast({ variant: 'warning', message: 'Unsaved changes will be lost.' })}>
            Warning
          </Button>
          <Button variant="secondary" size="sm" onClick={() => addToast({ variant: 'info', message: 'A new version is available.' })}>
            Info
          </Button>
        </div>
      </div>

      <div>
        <div className={styles.label}>With title</div>
        <div className={styles.row}>
          <Button variant="secondary" size="sm" onClick={() => addToast({ variant: 'success', title: 'Saved', message: 'Your changes have been saved.' })}>
            With title
          </Button>
          <Button variant="secondary" size="sm" onClick={() => addToast({ variant: 'error', title: 'Upload failed', message: 'The file exceeds the 10 MB limit.' })}>
            With title + error
          </Button>
        </div>
      </div>
    </>
  )
}

// ── Position section ───────────────────────────────────────────

type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'

const POSITIONS: ToastPosition[] = [
  'top-left', 'top-center', 'top-right',
  'bottom-left', 'bottom-center', 'bottom-right',
]

const LABELS: Record<ToastPosition, string> = {
  'top-left': 'Top left',
  'top-center': 'Top center',
  'top-right': 'Top right',
  'bottom-left': 'Bottom left',
  'bottom-center': 'Bottom center',
  'bottom-right': 'Bottom right',
}

function PositionTrigger({ position }: { position: ToastPosition }) {
  const { addToast } = useToast()
  return (
    <button
      className={toastStyles.positionBtn}
      onClick={() => addToast({ variant: 'info', message: `Appearing at ${LABELS[position].toLowerCase()}.` })}
    >
      {LABELS[position]}
    </button>
  )
}

function PositionGrid() {
  return (
    <div>
      <div className={styles.label}>Position</div>
      <div className={toastStyles.screen}>
        {POSITIONS.map(pos => (
          <ToastProvider key={pos} position={pos}>
            <PositionTrigger position={pos} />
          </ToastProvider>
        ))}
      </div>
    </div>
  )
}

// ── Main ───────────────────────────────────────────────────────

export default function ToastDemo() {
  return (
    <div className={styles.container}>
      <ToastProvider position="bottom-right">
        <ToastTriggers />
      </ToastProvider>
      <PositionGrid />
    </div>
  )
}
