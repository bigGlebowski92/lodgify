export interface TaskItemProps {
  description: string;
  value: number;
  checked: boolean;
}

export interface TaskGroupProps {
  name: string;
  tasks: TaskItemProps[];
}

export interface TasksProps {
  progressBar: number;
  totaTasksValue: number;
  tasksGroup: TaskGroupProps[];
}
