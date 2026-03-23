'use client'

import { Input } from '@chloe0592/pebble'
import styles from './ButtonDemo.module.css'

export default function InputDemo() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>States</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Input placeholder="Enter text..." />
          <Input value="Filled value" readOnly />
          <Input placeholder="Disabled" disabled />
          <Input placeholder="Something went wrong" errorText="This field is required" />
        </div>
      </div>

      <div>
        <div className={styles.label}>Variants</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Input label="Label" placeholder="With label" />
          <Input label="Label" helperText="Helpful hint about this field" placeholder="With helper text" />
          <Input
            label="Label"
            helperText="Helpful hint about this field"
            errorText="This field has an error"
            placeholder="With error"
          />
        </div>
      </div>
    </div>
  )
}
