/* eslint-disable */
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskGroup } from './TaskGroup';

test('renders the task group name', () => {
  const name = 'Test Group';
  const tasks: [] = [];
  render(<TaskGroup name={name} tasks={tasks} />);
  const groupElement = screen.getByText(name);
  expect(groupElement).toBeInTheDocument();
});

test('toggles show/hide when header is clicked', () => {
  const name = 'Test Group';
  const tasks: [] = [];
  render(<TaskGroup name={name} tasks={tasks} />);
  const header = screen.getByText(name);
  fireEvent.click(header);
  expect(screen.getByText('Hide')).toBeInTheDocument();
  fireEvent.click(header);
  expect(screen.getByText('Show')).toBeInTheDocument();
});
