import { styled } from 'styled-components';

export const TaskGroupWrapper = styled.div`
  border: 1px solid #ddd;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  &.task-group__title--tasks-completed {
    color: #00b797;
  }
`;

export const HeaderTitle = styled.div`
  font-size: clamp(9px, 1.5vw, 18px);
  line-height: 22px;
  margin-left: 16px;
`;

export const ShowHideWrapper = styled.div`
  font-size: clamp(9px, 1.5vw, 16px);

  color: #999999;
  svg {
    margin-left: 16px;
  }
`;
