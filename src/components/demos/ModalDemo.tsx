'use client'

import { useState } from 'react'
import { Modal, Button } from '@chloe0592/pebble'
import styles from './Demo.module.css'

export default function ModalDemo() {
  const [defaultOpen, setDefaultOpen] = useState(false)
  const [destructiveOpen, setDestructiveOpen] = useState(false)

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.label}>Interactive</div>
        <div className={styles.row}>
          <Button variant="primary" onClick={() => setDefaultOpen(true)}>
            Open modal
          </Button>
          <Button variant="danger" onClick={() => setDestructiveOpen(true)}>
            Delete modal
          </Button>
        </div>
      </div>

      <Modal
        isOpen={defaultOpen}
        onClose={() => setDefaultOpen(false)}
        title="Confirm action"
        description="Are you sure you want to proceed? This will apply the changes immediately."
        footer={
          <>
            <Button variant="ghost" onClick={() => setDefaultOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setDefaultOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p>Any additional content can go here inside the modal body.</p>
      </Modal>

      <Modal
        isOpen={destructiveOpen}
        onClose={() => setDestructiveOpen(false)}
        title="Delete item"
        description="This action cannot be undone. The item will be permanently removed."
        footer={
          <>
            <Button variant="ghost" onClick={() => setDestructiveOpen(false)}>Cancel</Button>
            <Button variant="danger" onClick={() => setDestructiveOpen(false)}>Delete</Button>
          </>
        }
      >
        <p>All associated data will also be deleted. Make sure you have a backup before continuing.</p>
      </Modal>
    </div>
  )
}
