'use client'

import { Select } from '@chloe0592/pebble'
import styles from './ButtonDemo.module.css'

const options = (
  <>
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="cherry">Cherry</option>
    <option value="mango">Mango</option>
  </>
)

export default function SelectDemo() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>States</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Select placeholder="Select an option">{options}</Select>
          <Select defaultValue="banana">{options}</Select>
          <Select placeholder="Disabled" disabled>{options}</Select>
          <Select placeholder="Select an option" errorText="Please select a valid option.">{options}</Select>
        </div>
      </div>

      <div>
        <div className={styles.label}>Variants</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Select label="Fruit" placeholder="Select a fruit">{options}</Select>
          <Select
            label="Fruit"
            helperText="Choose your favourite fruit from the list."
            placeholder="Select a fruit"
          >{options}</Select>
        </div>
      </div>
    </div>
  )
}
