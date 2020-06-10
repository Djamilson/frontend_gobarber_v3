import React from 'react';

import { AuthProvider } from './auth';
import { LoadingProvider } from './loading';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <LoadingProvider>
        <ToastProvider>{children}</ToastProvider>
      </LoadingProvider>
    </AuthProvider>
  );
};
export default AppProvider;
