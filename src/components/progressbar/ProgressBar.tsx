import { useEffect } from 'react';
import { totalAllTaskValue, totalByTaskChecked } from '../helpers';
import { useUserWidgetContext } from '../hooks';
import * as S from './ProgressBar.styles';

export const ProgressBar = () => {
  const { tasks, setTasks } = useUserWidgetContext();

  const { progressBar, tasksGroup } = tasks;

  useEffect(() => {
    if (!tasksGroup?.length) return;
    const abc: number[] = [];
    tasksGroup.forEach((item) => {
      abc.push(
        (totalByTaskChecked(item.tasks) * 100) / totalAllTaskValue(tasksGroup)
      );
    });

    setTasks((prev) => ({
      ...prev,
      progressBar: abc.reduce((a, b) => a + b),
    }));
  }, [tasksGroup, setTasks]);

  return (
    <S.ProgressBarWrapper className="progress-bar">
      {progressBar > 0 && (
        <S.ProgressBar
          style={{ width: `${progressBar}%` }}
          className="progress-bar__bar"
          data-testid="progress-bar__bar"
        >
          <S.ProgressBarText className="progress-bar__text">
            {progressBar.toFixed(0)}%
          </S.ProgressBarText>
        </S.ProgressBar>
      )}
      {progressBar === 0 && <div className="progress-bar__text">0%</div>}
    </S.ProgressBarWrapper>
  );
};
