import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: { layout: 'centered' },
  args: {
    label: 'Email',
    placeholder: 'you@company.com',
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

export const NoLabel: Story = {
  args: { label: undefined, placeholder: 'no label example' },
};
