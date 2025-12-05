import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Layout from './Layout'

// This should match the sampleDemos from demoLibrary
// In a real app, you'd fetch this data or use a shared data source
const demoData: Record<string, { title: string; description: string }> = {
  'agentic-ai-demo': {
    title: 'Agentic AI Demo',
    description: 'Explore how autonomous agents plan, decide, and act.',
  },
  'cloud-migration-demo': {
    title: 'Cloud Migration Demo',
    description: 'See migration in action with step-by-step workflows.',
  },
  'data-analytics-dashboard': {
    title: 'Data Analytics Dashboard',
    description: 'Real-time insights and visualization tools for your data.',
  },
  'security-framework': {
    title: 'Security Framework',
    description: 'Comprehensive security protocols and best practices.',
  },
  'automation-workflow': {
    title: 'Automation Workflow',
    description: 'Streamline your processes with intelligent automation.',
  },
  'integration-hub': {
    title: 'Integration Hub',
    description: 'Connect and integrate all your tools in one place.',
  },
}

const DemoPage: React.FC = () => {
  const { demoId } = useParams<{ demoId: string }>()
  const navigate = useNavigate()
  const demo = demoId ? demoData[demoId] : null

  if (!demo) {
    return (
      <Layout pageTitle="Demo Not Found">
        <div style={{ padding: 40 }}>
          <h1>Demo Not Found</h1>
          <p>The requested demo could not be found.</p>
          <button onClick={() => navigate('/library')}>Back to Library</button>
        </div>
      </Layout>
    )
  }

  return (
    <Layout pageTitle={demo.title}>
      <div style={{ padding: 40 }}>
        <button onClick={() => navigate('/library')} style={{ marginBottom: 20 }}>
          ← Back to Library
        </button>
        <h1>{demo.title}</h1>
        <p>{demo.description}</p>
        <p>Demo content placeholder.</p>
      </div>
    </Layout>
  )
}

export default DemoPage
