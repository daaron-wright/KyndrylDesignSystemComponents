import React, { useEffect, useState } from 'react'
import styles from './colors.module.css'

const tokenList = [
  '--color-primary',
  '--color-primary-600',
  '--color-text',
  '--color-muted',
  '--color-bg',
  '--color-surface',
  '--color-border',
  '--color-success',
  '--color-danger',
]

function readToken(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || ''
}

const ColorsPage: React.FC = () => {
  const [tokens, setTokens] = useState<Record<string, string>>({})

  useEffect(() => {
    const values: Record<string, string> = {}
    tokenList.forEach(t => {
      values[t] = readToken(t)
    })
    setTokens(values)
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Colors — Foundation</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Palette</h2>
          <div className={styles.grid}>
            {tokenList.map(name => (
              <div key={name} className={styles.card}>
                <div className={styles.swatch} style={{ background: `var(${name})` }} />
                <div className={styles.meta}>
                  <div className={styles.varName}>{name}</div>
                  <div className={styles.hex}>{tokens[name] || '—'}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Usage examples</h2>
          <div className={styles.examples}>
            <div className={styles.cardExample}>
              <div className={styles.cardHeader} style={{ background: 'var(--color-primary)' }}>
                <div className={styles.cardTitle}>Primary Card</div>
              </div>
              <div className={styles.cardBody}>Use the primary color for calls to action and primary emphasis.</div>
            </div>

            <div className={styles.cardExample}>
              <div className={styles.cardHeader} style={{ background: 'var(--color-surface)' }}>
                <div className={styles.cardTitle}>Surface Card</div>
              </div>
              <div className={styles.cardBody}>Surface tokens are for backgrounds and panels.</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ColorsPage
