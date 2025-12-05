import React from 'react'
import styles from './Footer.module.css'

interface FooterProps {
  breadcrumbItems?: Array<{ label: string; href: string; isActive?: boolean }>
}

const Footer: React.FC<FooterProps> = ({ 
  breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Demo Library', href: '#' }
  ]
}) => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <a className={styles.logo} href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40" fill="none">
<path d="M119.465 0V29.9956H115.97V0H119.465ZM48.6311 9.53295C45.1885 9.53295 43.0847 11.7329 42.7543 14.5264H42.5804V10.0044H39.0857V29.9956H42.5978V17.5469C42.5978 14.1772 44.3887 12.6408 47.3792 12.6408C50.8044 12.6408 52.3345 14.3518 52.3345 17.7215V29.9956H55.8292V17.2676C55.8292 12.4836 53.1343 9.53295 48.6311 9.53295ZM27.2105 29.4544H27.0887L21.0033 10.0044H17.3695L23.8026 29.9956H27.0192L23.7331 40H27.2278L36.8776 10.0044H33.2437L27.2105 29.4544ZM104.078 29.4544H103.973L97.8881 10.0044H94.2542L100.687 29.9956H103.904L100.618 40H104.113L113.762 10.0044H110.128L104.078 29.4544ZM7.2851 19.9913L15.9264 9.9869H11.6666L3.59908 19.6421H3.47737V0H0V29.9956H3.49476V20.1833H6.81565L13.5444 29.9956H17.6129L10.6408 19.9913H7.2851ZM85.9607 14.5264H85.7868V10.0044H82.2921V29.9956H85.7868V17.512C85.7868 14.1423 87.682 12.9201 90.9507 12.9201C91.7853 12.9201 92.5329 13.0074 93.1241 13.1471V9.74247C92.8285 9.62025 92.2026 9.53295 91.4549 9.53295C88.4122 9.53295 86.3432 11.5932 85.9607 14.5264ZM74.2941 0H77.7889V29.9956H74.2941V25.4736H74.1202C73.7899 28.2671 71.6513 30.467 67.6175 30.467C62.6797 30.467 59.1849 26.5386 59.1849 20.0087C59.1849 13.4788 62.6797 9.55041 67.6175 9.55041C71.6513 9.55041 73.7899 11.7503 74.1202 14.5439H74.2941V0ZM74.2941 17.3549C74.2941 13.9852 71.7556 12.6233 68.626 12.6233C65.3225 12.6233 62.8362 14.6835 62.8362 19.9913C62.8362 25.2815 65.3051 27.3592 68.626 27.3592C71.773 27.3592 74.2941 25.9974 74.2941 22.6277V17.3549Z" fill="#FF462D"/>
</svg>
<span className={styles.text}>Agentic Framework</span>
</a>
      {breadcrumbItems.length > 0 && (
        <nav className={styles.breadcrumb}>
          {breadcrumbItems.map((item, index) => {
            const isActive = item.isActive ?? (index === breadcrumbItems.length - 1)
            return (
              <React.Fragment key={index}>
                <a 
                  href={item.href} 
                  className={`${styles.breadcrumbLink} ${isActive ? styles.breadcrumbLinkActive : ''}`}
                >
                  {item.label}
                </a>
                {index < breadcrumbItems.length - 1 && (
                  <span className={styles.breadcrumbSeparator}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.214788 19.7908C-0.0715959 19.5118 -0.0715959 19.0596 0.214788 18.7806L9.22958 10L0.214788 1.21936C-0.0715959 0.940415 -0.0715959 0.488154 0.214788 0.209208C0.501173 -0.0697375 0.965494 -0.0697375 1.25188 0.209208L10.7852 9.49492C11.0716 9.77387 11.0716 10.2261 10.7852 10.5051L1.25188 19.7908C0.965494 20.0697 0.501173 20.0697 0.214788 19.7908Z" fill="#727175"/>
                    </svg>
                  </span>
                )}
              </React.Fragment>
            )
          })}
        </nav>
      )}
    </div>
  </footer>
)

export default Footer
