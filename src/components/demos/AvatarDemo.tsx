'use client'

import { Avatar, AvatarGroup } from '@chloe0592/pebble'
import styles from './Demo.module.css'

export default function AvatarDemo() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>Sizes</div>
        <div className={styles.row} style={{ alignItems: 'center' }}>
          <Avatar name="Klaudija Ljevar" size="xs" />
          <Avatar name="Klaudija Ljevar" size="sm" />
          <Avatar name="Klaudija Ljevar" size="md" />
          <Avatar name="Klaudija Ljevar" size="lg" />
          <Avatar name="Klaudija Ljevar" size="xl" />
        </div>
      </div>

      <div>
        <div className={styles.label}>Status indicators</div>
        <div className={styles.row}>
          <Avatar name="Online" size="md" status="online" />
          <Avatar name="Busy" size="md" status="busy" />
          <Avatar name="Away" size="md" status="away" />
          <Avatar name="Offline" size="md" status="offline" />
        </div>
      </div>

      <div>
        <div className={styles.label}>Avatar group</div>
        <div className={styles.row}>
          <AvatarGroup max={3} size="md">
            <Avatar name="Klaudija Ljevar" />
            <Avatar name="Alex Kim" />
            <Avatar name="Sam Patel" />
            <Avatar name="Jordan Lee" />
            <Avatar name="Casey Morgan" />
          </AvatarGroup>
        </div>
      </div>
    </div>
  )
}
