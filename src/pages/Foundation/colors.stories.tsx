import type { Meta, StoryObj } from '@storybook/react';
import ColorsPage from './colors';

const meta: Meta<typeof ColorsPage> = {
  title: 'Foundation/Colors',
  component: ColorsPage,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof ColorsPage>;

export const Palette: Story = {};
