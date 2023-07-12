import { useUserWidgetContext } from './hooks';
import { ProgressBar } from './progressbar';
import { TaskGroup } from './task-group';
import * as S from './UserCard.styles';

export const UserCard = () => {
  const { tasks } = useUserWidgetContext();
  const { tasksGroup } = tasks;

  return (
    <S.UserCardWrapper className="user-card">
      <S.CardWrapper className="card">
        <S.Header className="card__header">
          <S.Title className="card__title">Lodgify User Card</S.Title>
          <ProgressBar />
        </S.Header>

        {tasksGroup.map((group, index) => (
          <TaskGroup key={index} {...group} />
        ))}
      </S.CardWrapper>
    </S.UserCardWrapper>
  );
};
