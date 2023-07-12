import { totalAllTaskValue, updateTasks, totalByTaskChecked } from './';
import { TaskGroupProps, TaskItemProps } from '../types';

describe('totalAllTaskValue', () => {
  test('returns the sum of all task values', () => {
    const allTasks: TaskGroupProps[] = [
      {
        name: 'Group 1',
        tasks: [
          { description: 'Task 1', checked: false, value: 10 },
          { description: 'Task 2', checked: true, value: 20 },
        ],
      },
      {
        name: 'Group 2',
        tasks: [
          { description: 'Task 3', checked: false, value: 5 },
          { description: 'Task 4', checked: true, value: 15 },
        ],
      },
    ];

    const result = totalAllTaskValue(allTasks);
    expect(result).toBe(50);
  });
});

describe('updateTasks', () => {
  test('toggles the checked status of a specific task', () => {
    const tasksGroup: TaskGroupProps[] = [
      {
        name: 'Group 1',
        tasks: [
          { description: 'Task 1', checked: false, value: 10 },
          { description: 'Task 2', checked: true, value: 20 },
        ],
      },
    ];
    const description = 'Task 1';

    const result = updateTasks(tasksGroup, description);
    expect(result[0].tasks[0].checked).toBe(true);
  });
});

describe('totalByTaskChecked', () => {
  test('returns the sum of values for checked tasks', () => {
    const tasks: TaskItemProps[] = [
      { description: 'Task 1', checked: false, value: 10 },
      { description: 'Task 2', checked: true, value: 20 },
      { description: 'Task 3', checked: true, value: 5 },
      { description: 'Task 4', checked: false, value: 15 },
    ];

    const result = totalByTaskChecked(tasks);
    expect(result).toBe(25);
  });
});
