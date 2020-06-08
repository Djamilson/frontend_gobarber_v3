import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 10px;
  height: 56px;
  border: 0;
  padding: 16px;
  width: 100%;
  color: #312e38;
  font-weight: 5000;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
