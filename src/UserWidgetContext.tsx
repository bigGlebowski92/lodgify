import { createContext, useEffect, useState, ReactNode } from 'react';
import { fetchData } from './api';
import { totalAllTaskValue } from './components/helpers';
import { LoadingIcon } from './components/icons';
import { TasksProps } from './components/types';

export type UserWidgetContextProps = {
  tasks: TasksProps;
  setTasks: React.Dispatch<React.SetStateAction<TasksProps>>;
};

type UserWidgetProviderProps = {
  children: ReactNode;
};

export const UserWidgetContext = createContext<UserWidgetContextProps>({
  tasks: {
    progressBar: 0,
    totaTasksValue: 0,
    tasksGroup: [],
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTasks: () => {},
});

export const UserWidgetProvider = ({ children }: UserWidgetProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<TasksProps>({
    progressBar: 0,
    totaTasksValue: 0,
    tasksGroup: [],
  });

  useEffect(() => {
    const callApi = async () => {
      try {
        const allTasks = await fetchData();
        setTasks((prev) => ({
          ...prev,
          totaTasksValue: totalAllTaskValue(allTasks),
          tasksGroup: allTasks,
        }));
        setIsLoading(false);
      } catch (error) {
        setIsError('Error fetching data');
      }
    };

    callApi().catch((error) => {
      console.error('Unhandled promise rejection:', error);
    });
  }, []);

  if (isError) return <h1>{isError}</h1>;

  if (isLoading) return <LoadingIcon />;

  return (
    <UserWidgetContext.Provider value={{ tasks, setTasks }}>
      {children}
    </UserWidgetContext.Provider>
  );
};
