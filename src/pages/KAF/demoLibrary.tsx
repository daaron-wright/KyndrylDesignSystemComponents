import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from './Layout'
import Search from '../../components/Search/Search'
import DropDown from '../../components/DropDown/DropDown'
import DemoCard, { DemoCardProps } from '../../components/Cards/DemoCard'
import Pagination from '../../components/Pagination/Pagination'
import styles from './demoLibrary.module.css'

// Sample demo cards data
const sampleDemos: DemoCardProps[] = [
  {
    id: 'agentic-ai-demo',
    title: 'Agentic AI Demo',
    description: 'Explore how autonomous agents plan, decide, and act. Explore how autonomous agents plan, decide, and act. Explore how autonomous agents plan, decide, and act.',
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
    meta: [{ label: 'AI' }, { label: 'Internal', variant: 'info' }, { label: 'Updated Nov 2025' }],
    variant: 'elevated',
  },
  {
    id: 'cloud-migration-demo',
    title: 'Cloud Migration Demo',
    description: 'See migration in action with step-by-step workflows.',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    meta: [{ label: 'Cloud' }, { label: 'External', variant: 'success' }],
    variant: 'outlined',
  },
  {
    id: 'data-analytics-dashboard',
    title: 'Data Analytics Dashboard',
    description: 'Real-time insights and visualization tools for your data.',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    meta: [{ label: 'Analytics' }, { label: 'Internal', variant: 'info' }],
    variant: 'default',
  },
  {
    id: 'security-framework',
    title: 'Security Framework',
    description: 'Comprehensive security protocols and best practices.',
    imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop',
    meta: [{ label: 'Security' }, { label: 'Internal', variant: 'warning' }],
    variant: 'elevated',
  },
  {
    id: 'automation-workflow',
    title: 'Automation Workflow',
    description: 'Streamline your processes with intelligent automation.',
    imageSrc: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop',
    meta: [{ label: 'Automation' }, { label: 'External', variant: 'success' }],
    variant: 'outlined',
  },
  {
    id: 'integration-hub',
    title: 'Integration Hub',
    description: 'Connect and integrate all your tools in one place.',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    meta: [{ label: 'Integration' }, { label: 'Internal', variant: 'info' }],
    variant: 'default',
  },
]

const filterOptions = [
  { value: 'all', label: 'All Categories' },
  { value: 'ai', label: 'AI & Machine Learning' },
  { value: 'cloud', label: 'Cloud Services' },
  { value: 'security', label: 'Security' },
  { value: 'automation', label: 'Automation' },
  { value: 'analytics', label: 'Analytics' },
]

const DemoLibrary: React.FC = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [filteredDemos, setFilteredDemos] = useState(sampleDemos)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    filterDemos(query, selectedFilter)
  }

  const handleFilterChange = (filterValue: string) => {
    setSelectedFilter(filterValue)
    filterDemos(searchQuery, filterValue)
  }

  const filterDemos = (query: string, filter: string) => {
    let filtered = [...sampleDemos]

    // Filter by category
    if (filter !== 'all') {
      filtered = filtered.filter((demo) =>
        demo.meta?.some((m) => m.label.toLowerCase().includes(filter.toLowerCase()))
      )
    }

    // Filter by search query
    if (query) {
      filtered = filtered.filter(
        (demo) =>
          demo.title.toLowerCase().includes(query.toLowerCase()) ||
          demo.description?.toLowerCase().includes(query.toLowerCase())
      )
    }

    setFilteredDemos(filtered)
  }

  return (
    <Layout pageTitle="Library">
      <div className={styles.page}>
        {/* Top section with Search and Filter */}
        <div className={styles.topSection}>
          <div className={styles.searchContainer}>
            <Search
              placeholder="Search demos..."
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={handleSearch}
            />
          </div>
          <div className={styles.filterContainer}>
            <DropDown
              options={filterOptions}
              value={selectedFilter}
              onChange={handleFilterChange}
              placeholder="Filter by category"
            />
          </div>
        </div>

        {/* Main section with demo cards grid */}
        <div className={styles.cardsGrid}>
          {filteredDemos.length > 0 ? (
            filteredDemos.map((demo, index) => (
              <DemoCard
                key={demo.id || index}
                {...demo}
                onCardClick={() => navigate(`/demo/${demo.id}`)}
              />
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No demos found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className={styles.paginationContainer}>
          <Pagination />
        </div>
      </div>
    </Layout>
  )
}

export default DemoLibrary
