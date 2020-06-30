import React from 'react';

import { LoadingMessage } from '../../../hooks/loading';
import { Container } from './styles';

interface LoadingProps {
  message: LoadingMessage;
  style: object;
}

const Loading: React.FC<LoadingProps> = ({ message, style }) => {
  console.log('message', message);
  console.log('styles', style);

  return (
    <Container
      style={style}
      load={Number(!!message.loading)}
      hasDescription={Number(!!message.description)}
    >
      <div>
        <article>
          <span />
        </article>

        {message.description && <p>{message.description}</p>}
      </div>
    </Container>
  );
};

export default Loading;
