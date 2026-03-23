'use client'

import { Textarea } from '@chloe0592/pebble'
import styles from './ButtonDemo.module.css'

export default function TextareaDemo() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>States</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Textarea placeholder="Enter text..." />
          <Textarea defaultValue="This is some filled content in the textarea." />
          <Textarea placeholder="Disabled" disabled />
          <Textarea placeholder="Something went wrong" errorText="This field is required" />
        </div>
      </div>

      <div>
        <div className={styles.label}>Variants</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Textarea label="Label" placeholder="With label" />
          <Textarea label="Label" helperText="Helpful hint about this field" placeholder="With helper text" />
        </div>
      </div>
    </div>
  )
}
