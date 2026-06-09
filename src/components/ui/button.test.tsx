import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './button';

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);

    // We use getByRole for accessibility-first testing.
    // If a screen reader can't find it, the test fails.
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('is disabled when the disabled prop is true', () => {
    render(<Button disabled>Click Me</Button>);

    expect(screen.getByRole('button', { name: /click me/i })).toBeDisabled();
  });

  it('displays a loading spinner and disables the button when isLoading is true', () => {
    // We extract 'container' to query for specific DOM classes when ARIA roles aren't enough
    const { container } = render(<Button isLoading>Submit</Button>);

    const button = screen.getByRole('button', { name: /submit/i });

    // 1. The button MUST be disabled to prevent double-submissions
    expect(button).toBeDisabled();

    // 2. Check for the lucide-react loader icon by looking for the Tailwind 'animate-spin' class
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });
});
