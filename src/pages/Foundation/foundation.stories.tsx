import type { Meta, StoryObj } from '@storybook/react';
import FoundationPage from './foundation';

const meta: Meta<typeof FoundationPage> = {
  title: 'Foundation/Overview',
  component: FoundationPage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof FoundationPage>;

export const Overview: Story = {};
