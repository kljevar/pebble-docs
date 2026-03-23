'use client'

import { Checkbox } from '@chloe0592/pebble'
import styles from './ButtonDemo.module.css'

export default function CheckboxDemo() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>States</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Indeterminate" indeterminate />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled checked" disabled defaultChecked />
        </div>
      </div>

      <div>
        <div className={styles.label}>Variants</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Checkbox
            label="With helper text"
            helperText="This is a helpful description for this option."
          />
          <Checkbox label="Option one" />
          <Checkbox label="Option two" defaultChecked />
          <Checkbox label="Option three" />
        </div>
      </div>
    </div>
  )
}
