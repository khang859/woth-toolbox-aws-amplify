import classnames from 'classnames';
import { TextEllipsisProps } from './types';
import styles from './TextEllipsis.module.css';

export const TextEllipsis = (props: TextEllipsisProps) => {
  const { children, className } = props;

  return (
    <div className={classnames(styles.TextEllipsis, className)}>{children}</div>
  );
};