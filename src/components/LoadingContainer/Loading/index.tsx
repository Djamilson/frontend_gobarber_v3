import React from 'react';
import { FiInfo } from 'react-icons/fi';

import { LoadingMessage } from '../../../hooks/loading';
import { Container } from './styles';

interface LoadingProps {
  message: LoadingMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
};

const Loading: React.FC<LoadingProps> = ({ message, style }) => {
  return (
    <Container
      style={style}
      load={message.loading}
      hasDescription={!!message.description}
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
