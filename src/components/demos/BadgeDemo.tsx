'use client'

import { Badge } from '@chloe0592/pebble'
import styles from './Demo.module.css'

export default function BadgeDemo() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>Variants</div>
        <div className={styles.row}>
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </div>

      <div>
        <div className={styles.label}>Sizes</div>
        <div className={styles.row} style={{ alignItems: 'center' }}>
          <Badge variant="primary" size="sm">Small</Badge>
          <Badge variant="primary" size="md">Medium</Badge>
        </div>
      </div>

      <div>
        <div className={styles.label}>With dot</div>
        <div className={styles.row}>
          <Badge variant="success" dot>Online</Badge>
          <Badge variant="warning" dot>Away</Badge>
          <Badge variant="danger" dot>Offline</Badge>
        </div>
      </div>
    </div>
  )
}
