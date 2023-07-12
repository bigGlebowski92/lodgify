import { styled } from 'styled-components';

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
`;

export const Checkbox = styled.div<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  margin-right: 16px;
  border: 1px solid #999;
  border-radius: 4px;
  background: ${(props) => (props.checked ? '#00B797' : 'transparent')};
  transition: all 0.3s ease-in-out;
`;

export const CheckboxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  color: white;
  transition: all 0.3s ease-in-out;
`;
export const Input = styled.input`
  &:checked + ${Checkbox} ${CheckboxIcon} {
    opacity: 1;
  }
`;
