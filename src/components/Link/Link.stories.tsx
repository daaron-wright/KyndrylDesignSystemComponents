import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Link, { LinkProps } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: { layout: 'centered' },
  args: { label: 'Learn more', href: '#' },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Inline: Story = {
  args: { variant: 'inline', size: 'md' } as Partial<LinkProps>,
};

export const InlineSecondary: Story = {
  args: { variant: 'inlineSecondary', size: 'md' } as Partial<LinkProps>,
};

export const WithIcons: Story = {
  args: { startIcon: '🔗', endIcon: '↗', external: true, href: 'https://example.com' } as Partial<LinkProps>,
};
