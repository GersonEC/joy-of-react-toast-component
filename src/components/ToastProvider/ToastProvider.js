import React, { useState } from 'react';
import useKeydown from '../../hooks/useKeydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const createToast = (message, variant) => {
    const nextToast = {
      id: crypto.randomUUID(),
      variant,
      message,
    };
    setToasts([...toasts, nextToast]);
  };

  const handleDismiss = (id) => {
    const nextToastList = toasts.filter((item) => item.id !== id);
    setToasts(nextToastList);
  };

  useKeydown('Escape', () => setToasts([]));

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, setToasts, handleDismiss }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
