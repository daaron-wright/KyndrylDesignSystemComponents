import type { Meta, StoryObj } from '@storybook/react';
import TokensPage from './tokens';

const meta: Meta<typeof TokensPage> = {
  title: 'Foundation/Tokens',
  component: TokensPage,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof TokensPage>;

export const ElevationAndRadii: Story = {};
