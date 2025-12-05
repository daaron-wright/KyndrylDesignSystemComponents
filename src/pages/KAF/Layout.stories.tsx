import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout'

const meta = {
  title: 'Layout/Page Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Layout>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Kyndryl Design System</h1>
        <p>This is the main content area wrapped by the Layout component.</p>
        <p>The header and footer are rendered automatically.</p>
      </div>
    </Layout>
  ),
}

export const WithContent: Story = {
  render: () => (
    <Layout>
      <div style={{ padding: '2rem' }}>
        <h2>Content Example</h2>
        <p>This demonstrates how content is centered within the Layout.</p>
        <section style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h3>Feature Section</h3>
          <p>The header includes navigation links to different pages:</p>
          <ul>
            <li>Home - Main landing page</li>
            <li>Library - Component library showcase</li>
            <li>Sign In - Authentication page</li>
          </ul>
        </section>
      </div>
    </Layout>
  ),
}
