import React, { useState } from 'react';

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
  return (
    <ToastContext.Provider
      value={{ toasts, createToast, setToasts, handleDismiss }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
