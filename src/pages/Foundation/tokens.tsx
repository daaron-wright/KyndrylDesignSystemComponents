import React from 'react'
import styles from './tokens.module.css'

const radii = [
  { name: '--radius-xs' },
  { name: '--radius-sm' },
  { name: '--radius-md' },
  { name: '--radius-lg' },
]

const elevations = [
  { name: 'Shadow Small', varName: '--shadow-sm' },
  { name: 'Shadow Medium', varName: '--shadow-md' },
]

const TokensPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Foundation Tokens — Elevation & Radii</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Radii</h2>
          <div className={styles.radiiGrid}>
            {radii.map(r => (
              <div key={r.name} className={styles.radiusCard}>
                <div className={styles.radiusPreview} style={{ borderRadius: `var(${r.name})` }} />
                <div className={styles.radiusMeta}>{r.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Elevation / Shadows</h2>
          <div className={styles.elevationGrid}>
            {elevations.map(e => (
              <div key={e.varName} className={styles.elevationCard}>
                <div className={styles.elevationPreview} style={{ boxShadow: `var(${e.varName})` }}>
                  <div className={styles.previewInner}>Layer</div>
                </div>
                <div className={styles.elevationMeta}>{e.name}</div>
                <div className={styles.elevationVar}>{e.varName}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default TokensPage
