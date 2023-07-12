/* eslint-disable */

import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

const tasksGroup = [
  {
    name: 'Group 1',
    tasks: [
      { description: 'Task 1', checked: true, value: 10 },
      { description: 'Task 2', checked: false, value: 20 },
    ],
  },
  {
    name: 'Group 2',
    tasks: [
      { description: 'Task 3', checked: true, value: 5 },
      { description: 'Task 4', checked: true, value: 15 },
    ],
  },
];
const progressBar = 75;
// Mock the useUserWidgetContext hook
vi.mock('../hooks', () => ({
  useUserWidgetContext: () => ({
    tasks: { progressBar, tasksGroup },
    setTasks: vi.fn(),
  }),
}));

describe('ProgressBar', () => {
  test('displays the progress bar with the correct width and text', () => {
    render(<ProgressBar />);

    const progressBarElement = screen.getByTestId('progress-bar__bar');
    expect(progressBarElement).toHaveStyle('width: 75%');
    expect(progressBarElement).toHaveTextContent('75%');
  });
});
