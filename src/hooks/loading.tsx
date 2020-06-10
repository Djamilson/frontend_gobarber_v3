import React, { createContext, useState, useCallback, useContext } from 'react';

import LoadingContainer from '../components/LoadingContainer';

export interface LoadingMessage {
  loading: boolean;
  description?: string;
}

interface LoadingContexData {
  addLoading(message: LoadingMessage): void;
  removeLoading(): void;
}

const LoadingContext = createContext<LoadingContexData>(
  {} as LoadingContexData,
);

const LoadingProvider: React.FC = ({ children }) => {
  const [message, setMessage] = useState<LoadingMessage>({} as LoadingMessage);

  const addLoading = useCallback(({ loading, description }: LoadingMessage) => {
    const load = {
      loading,
      description,
    };

    setMessage(load);
  }, []);

  const removeLoading = useCallback(() => {
    setMessage({} as LoadingMessage);
  }, []);

  return (
    <LoadingContext.Provider value={{ addLoading, removeLoading }}>
      {children}
      <LoadingContainer message={message} />
    </LoadingContext.Provider>
  );
};

function useLoading(): LoadingContexData {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingPorivider');
  }

  return context;
}

export { LoadingProvider, useLoading };
