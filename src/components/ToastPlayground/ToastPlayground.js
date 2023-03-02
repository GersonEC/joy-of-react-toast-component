import { useState } from 'react';

import Button from '../Button';

import Toast from '../Toast/Toast';
import styles from './ToastPlayground.module.css';

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [isVisible, setIsVisible] = useState(false);

  const onMessageChange = (e) => setMessage(e.target.value);
  const onVariantChange = (e) => setVariant(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 2000);
  };

  return (
    <main className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      {isVisible && (
        <Toast variant={variant} handleDismiss={setIsVisible}>
          {message}
        </Toast>
      )}

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
