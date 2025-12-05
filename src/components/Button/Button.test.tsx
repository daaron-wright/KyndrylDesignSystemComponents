
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders label', () => {
    render(<Button>Press</Button>);
    expect(screen.getByText('Press')).toBeInTheDocument();
  });
});
