import { render, screen } from '@testing-library/react';
import { TaskItem } from './TaskItem';

it('renders the task description', () => {
  const description = 'Test task';
  render(<TaskItem description={description} checked={false} value={32} />);
  const taskElement = screen.getByText(description);
  expect(taskElement).toBeInTheDocument();
});

it('displays checked checkbox when checked prop is true', () => {
  render(<TaskItem description="Test task" checked={true} value={32} />);
  const checkbox = screen.getByRole('checkbox', { hidden: true });
  expect(checkbox).toBeChecked();
});
