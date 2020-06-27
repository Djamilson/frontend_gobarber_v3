import styled, { css } from 'styled-components';

interface ContainerProps {
  load: number;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  right: 0%;
  top: 40%;
  padding: 0;
  overflow: hidden;

  ${(props) =>
    !props.load &&
    css`
      display: none !important;
    `}
  ${(props) =>
    props.load &&
    css`
      display: flex !important;
    `}
`;
