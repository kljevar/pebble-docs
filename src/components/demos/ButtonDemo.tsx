'use client'

import { Button } from '@chloe0592/pebble'
import styles from './Demo.module.css'

export default function ButtonDemo() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>Variants</div>
        <div className={styles.row}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>

      <div>
        <div className={styles.label}>Sizes</div>
        <div className={styles.row}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </div>

      <div>
        <div className={styles.label}>States</div>
        <div className={styles.row}>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" isLoading>Loading</Button>
        </div>
      </div>
    </div>
  )
}
