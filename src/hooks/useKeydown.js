import React from 'react';

const useKeydown = (key, callback) => {
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === key) {
        callback();
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, [callback, key]);
};

export default useKeydown;
