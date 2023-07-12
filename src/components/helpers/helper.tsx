import { TaskGroupProps, TaskItemProps } from '../types';

const totalAllTaskValue = (allTasks: TaskGroupProps[]) => {
  const allValues: number[] = [];
  allTasks.forEach(({ tasks }) => {
    tasks.forEach(({ value }) => {
      allValues.push(value);
    });
  });

  return allValues.reduce((a, b) => a + b);
};

const updateTasks = (tasksGroup: TaskGroupProps[], description: string) =>
  tasksGroup.map((item) => {
    item.tasks.forEach((task) => {
      if (task?.description === description) {
        task.checked = !task.checked;
      }
      return task;
    });
    return item;
  });

const totalByTaskChecked = (task: TaskItemProps[]) =>
  task
    .map(({ value, checked }) => (checked ? value : 0))
    .reduce((a, b) => a + b);

export { totalAllTaskValue, totalByTaskChecked, updateTasks };
