import React from 'react'
import styles from './Pagination.module.css'

const Pagination: React.FC = () => (
  <div className={styles.pagination}>
    <button className={styles.button}>Previous</button>
    <span className={styles.pageNumber}>1</span>
    <button className={styles.button}>Next</button>
  </div>
)

export default Pagination
