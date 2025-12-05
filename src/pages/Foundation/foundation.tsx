import React from 'react'
import styles from './foundation.module.css'
import { Button } from '../../components/Button/Button'

const colors = [
  { name: 'Primary', varName: '--color-primary' },
  { name: 'Primary 600', varName: '--color-primary-600' },
  { name: 'Text', varName: '--color-text' },
  { name: 'Muted', varName: '--color-muted' },
  { name: 'Surface', varName: '--color-surface' },
  { name: 'Border', varName: '--color-border' },
  { name: 'Success', varName: '--color-success' },
  { name: 'Danger', varName: '--color-danger' },
]

const spacing = [
  { name: '--space-1' },
  { name: '--space-2' },
  { name: '--space-3' },
  { name: '--space-4' },
  { name: '--space-5' },
]

const FoundationPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Foundation — Component Library</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Colors</h2>
          <div className={styles.colors}>
            {colors.map(c => (
              <div key={c.varName} className={styles.colorCard}>
                <div
                  className={styles.swatch}
                  style={{ background: `var(${c.varName})` }}
                />
                <div className={styles.colorMeta}>
                  <div className={styles.colorName}>{c.name}</div>
                  <div className={styles.colorVar}>{c.varName}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Typography</h2>
          <div className={styles.typography}>
            <div>
              <h1 className={styles.h1}>Heading 1 — 22px</h1>
              <h2 className={styles.h2}>Heading 2 — 18px</h2>
              <p className={styles.p}>Body / paragraph — 15px</p>
              <small className={styles.small}>Caption — 12px</small>
            </div>
            <div className={styles.previewBox}>
              <p className={styles.sampleText}>Sample text to validate rhythm and spacing.</p>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary" style={{ marginLeft: 12 }}>Secondary</Button>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Spacing</h2>
          <div className={styles.spacingGrid}>
            {spacing.map(s => (
              <div key={s.name} className={styles.spaceRow}>
                <div className={styles.spaceBox} style={{ height: `var(${s.name})`, width: `var(${s.name})` }} />
                <div className={styles.spaceLabel}>{s.name}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default FoundationPage
