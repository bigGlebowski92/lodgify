import { useState } from 'react';
import { TaskGroupProps } from '../types';
import { TaskItem } from './task-item';
import { ListIcon, ArrowLineDownIcon, ArrowLineUpIcon } from '../icons';
import * as S from './TaskGroup.styles';

export const TaskGroup = ({ name, tasks }: TaskGroupProps) => {
  const [isShow, setIsShow] = useState(false);
  const isCompleted = () => !tasks.filter(({ checked }) => !checked).length;

  return (
    <S.TaskGroupWrapper className="task-group">
      <S.HeaderWrapper onClick={() => setIsShow(!isShow)}>
        <S.TitleWrapper
          className={`task-group__title ${
            isCompleted() ? 'task-group__title--tasks-completed' : ''
          } `}
        >
          <ListIcon className="task-group__list-icon" />
          <S.HeaderTitle className="task-group__header-title">
            {name}
          </S.HeaderTitle>
        </S.TitleWrapper>
        {isShow ? (
          <S.ShowHideWrapper className="task-group__show-hide">
            Hide
            <ArrowLineUpIcon className="task-group__arrow-up-icon" />
          </S.ShowHideWrapper>
        ) : (
          <S.ShowHideWrapper className="task-group__show-hide">
            Show
            <ArrowLineDownIcon className="task-group__arrow-down-icon" />
          </S.ShowHideWrapper>
        )}
      </S.HeaderWrapper>
      {isShow && (
        <ul className="task-group__task-list">
          {tasks.map((task, index) => (
            <TaskItem key={index} {...task} />
          ))}
        </ul>
      )}
    </S.TaskGroupWrapper>
  );
};
