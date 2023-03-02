import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastList, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast
              id={toast.id}
              variant={toast.variant}
              handleDismiss={handleDismiss}
            >
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
