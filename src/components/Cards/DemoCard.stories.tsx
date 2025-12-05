
// src/components/cards/DemoCard/DemoCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import DemoCard, { DemoCardProps } from './DemoCard';

const meta: Meta<typeof DemoCard> = {
  title: 'Cards/DemoCard',
  component: DemoCard,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof DemoCard>;

export const Default: Story = {
  args: {
    title: 'Agentic AI Demo',
    description: 'Explore how autonomous agents plan, decide, and act.Explore how autonomous agents plan, decide, and act.Explore how autonomous agents plan, decide, and act.',
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
    meta: [{ label: 'AI' }, { label: 'Internal', variant: 'info' }, { label: 'Updated Nov 2025' }],
    primaryAction: { label: 'View Demo' },
    secondaryAction: { label: 'Docs' },
    variant: 'elevated',
  } as DemoCardProps,
};

export const ClickableCard: Story = {
  args: {
    title: 'Cloud Migration Demo',
    description: 'See migration in action with step-by-step workflows.',
    imageSrc: 'https://images.unsplash.com/photo-1547112693-235a5b24a29c?w=800&h=450&fit=crop',
    meta: [{ label: 'Cloud' }, { label: 'External', variant: 'success' }],
    onCardClick: () => alert('Card clicked'),
    variant: 'outlined',
  } as DemoCardProps,
};

export const Loading: Story = {
  args: { loading: true } as DemoCardProps,
};
