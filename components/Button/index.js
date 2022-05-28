import clsx from 'clsx';
import styles from './Button.module.scss';

export const Button = ({ children, className, color, disabled }) => {
  return (
    <button className={clsx(className, styles.button)}>{children}</button>
  )
}
