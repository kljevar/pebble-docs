'use client'

import { Spinner } from '@chloe0592/pebble'
import styles from './Demo.module.css'

export default function SpinnerDemo() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>Sizes</div>
        <div className={styles.row} style={{ alignItems: 'center' }}>
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </div>
      </div>

      <div>
        <div className={styles.label}>Colors</div>
        <div className={styles.row} style={{ alignItems: 'center' }}>
          <Spinner size="md" color="indigo" />
          <Spinner size="md" color="white" />
        </div>
      </div>

      <div>
        <div className={styles.label}>With Label</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Spinner size="md" label="Loading..." />
          <Spinner size="md" label="Fetching data..." />
        </div>
      </div>
    </div>
  )
}
