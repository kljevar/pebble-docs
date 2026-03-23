'use client'

import { Tooltip, Button } from '@chloe0592/pebble'
import styles from './ButtonDemo.module.css'

export default function TooltipDemo() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>Positions</div>
        <div className={styles.row}>
          <Tooltip content="Tooltip on top" placement="top">
            <Button variant="outline" size="sm">Top</Button>
          </Tooltip>
          <Tooltip content="Tooltip on bottom" placement="bottom">
            <Button variant="outline" size="sm">Bottom</Button>
          </Tooltip>
          <Tooltip content="Tooltip on left" placement="left">
            <Button variant="outline" size="sm">Left</Button>
          </Tooltip>
          <Tooltip content="Tooltip on right" placement="right">
            <Button variant="outline" size="sm">Right</Button>
          </Tooltip>
        </div>
      </div>

      <div>
        <div className={styles.label}>Variants</div>
        <div className={styles.row}>
          <Tooltip content="Short tip" placement="top">
            <Button variant="secondary" size="sm">Default</Button>
          </Tooltip>
          <Tooltip
            content="This is a longer tooltip with more descriptive text to explain the feature in detail."
            placement="top"
          >
            <Button variant="secondary" size="sm">Long text</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
