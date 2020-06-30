import React from 'react';
import { useTransition } from 'react-spring';

import { LoadingMessage } from '../../hooks/loading';
import Load from './Loading';
import { Container } from './styles';

interface LoadingContainerProps {
  message: LoadingMessage;
}

const LoadingContainer: React.FC<LoadingContainerProps> = ({ message }) => {
  const messageWithTransition = useTransition(message, null, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container load={Number(!!message.loading)}>
      {messageWithTransition.map(({ item, key, props }) => (
        <Load key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default LoadingContainer;
