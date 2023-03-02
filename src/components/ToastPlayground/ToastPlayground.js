import React, { useState } from 'react';

import Button from '../Button';

import { ToastContext } from '../ToastProvider/ToastProvider';
import ToastShelf from '../ToastShelf';
import styles from './ToastPlayground.module.css';

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

const initialToast = {
  variant: 'notice',
  message: '',
};
function ToastPlayground() {
  const [message, setMessage] = useState(initialToast.message);
  const [variant, setVariant] = useState(initialToast.variant);

  const { createToast } = React.useContext(ToastContext);

  const onMessageChange = (e) => setMessage(e.target.value);
  const onVariantChange = (e) => setVariant(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    createToast(message, variant);
    setMessage(initialToast.message);
    setVariant(initialToast.variant);
  };

  return (
    <main className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor='message'
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              value={message}
              onChange={onMessageChange}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variantType, index) => {
              const id = `variant-${variantType}`;
              return (
                <label key={`${variantType}-${index}`} htmlFor={id}>
                  <input
                    id={id}
                    type='radio'
                    name='variant'
                    value={variantType}
                    checked={variant === variantType}
                    onChange={onVariantChange}
                  />
                  {variantType}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default ToastPlayground;
