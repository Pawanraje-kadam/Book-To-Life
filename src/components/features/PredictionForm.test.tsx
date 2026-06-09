import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { PredictionForm } from './PredictionForm';
import * as apiModule from '@/lib/api';

// 1. Mock the API to prevent actual network calls during testing
vi.mock('@/lib/api', () => ({
  generateReport: vi.fn(),
}));

const mockReportData = {
  thirtyDay: "You establish a baseline.",
  sixMonth: "You see compounding returns.",
  oneYear: "Major career shift.",
  fiveYear: "Mastery achieved.",
  realityScore: 85,
  keyPrinciple: "Consistency over intensity.",
  risks: ["Burnout"],
  tradeoffs: ["Less TV"],
  top3Actions: ["Wake up early", "Plan day", "Execute"],
  roadmap: [{ phase: "Phase 1", focus: "Foundation" }]
};

describe('PredictionForm Integration', () => {
  it('shows validation errors when submitting an empty form', async () => {
    render(<PredictionForm />);
    const user = userEvent.setup();

    const submitBtn = screen.getByRole('button', { name: /generate my future reality/i });
    await user.click(submitBtn);

    // waitFor is strictly required here because React Hook Form resolves validation asynchronously
    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument();
      expect(screen.getByText('Must be a number')).toBeInTheDocument();
    });
  });

  it('successfully submits the form and displays the ReportView', async () => {
    // 2. Setup the mock to return our fake report data successfully
    const generateReportMock = vi.spyOn(apiModule, 'generateReport').mockResolvedValue(mockReportData);

    render(<PredictionForm />);
    const user = userEvent.setup();

    // 3. Simulate realistic user typing across the entire form
    await user.type(screen.getByLabelText(/book title/i), 'Deep Work');
    await user.type(screen.getByLabelText(/your age/i), '30');
    await user.type(screen.getByLabelText(/daily dedicated hours/i), '2');
    await user.type(screen.getByLabelText(/current role/i), 'Developer');
    await user.type(screen.getByLabelText(/main goal/i), 'I want to focus for longer periods.');

    // 4. Trigger submission
    const submitBtn = screen.getByRole('button', { name: /generate my future reality/i });
    await user.click(submitBtn);

    // 5. Assert the API was called exactly once with the correctly parsed and coerced data
    await waitFor(() => {
      expect(generateReportMock).toHaveBeenCalledWith({
        bookTitle: 'Deep Work',
        age: 30, // Note: Asserting it was coerced to a Number, not a string
        availableHours: 2,
        currentRole: 'Developer',
        mainGoal: 'I want to focus for longer periods.',
      });
    });

    // 6. Assert the UI gracefully transitioned away from the form to the Dashboard/ReportView
    await waitFor(() => {
      expect(screen.getByText('Your Projected Reality')).toBeInTheDocument();
      expect(screen.getByText('"Consistency over intensity."')).toBeInTheDocument();
    });
  });
});
