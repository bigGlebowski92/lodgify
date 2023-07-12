import styled from 'styled-components';

export const ProgressBarWrapper = styled.div`
  height: 20px;
  width: 100%;
  background-color: #f2fbfa;
  border-radius: 24px;
`;

export const ProgressBar = styled.div`
  position: relative;
  height: 100%;
  border-radius: 16px;
  background-color: #00b797;
  transition: width 0.4s ease-in-out;
`;

export const ProgressBarText = styled.span`
  position: absolute;
  right: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  color: #fff;
`;
