import { updateTasks } from '../../helpers';
import { useUserWidgetContext } from '../../hooks';
import { CheckIcon } from '../../icons';
import { TaskItemProps } from '../../types';
import * as S from './TaskItem.styles';

export const TaskItem = ({ description, checked }: TaskItemProps) => {
  const { tasks, setTasks } = useUserWidgetContext();

  const handleCheckTask = (description: string) => {
    const groupedTask = updateTasks(tasks.tasksGroup, description);

    setTasks((prev) => ({
      ...prev,
      tasksGroup: groupedTask,
    }));
  };
  return (
    <S.CheckboxWrapper className="task-item">
      <S.Input
        type="checkbox"
        hidden
        checked={checked}
        onChange={() => handleCheckTask(description)}
        className="task-item__input"
      />
      <S.Checkbox checked={checked} className="task-item__checkbox">
        <S.CheckboxIcon className="task-item__checkbox-icon">
          <CheckIcon />
        </S.CheckboxIcon>
      </S.Checkbox>
      {description}
    </S.CheckboxWrapper>
  );
};
