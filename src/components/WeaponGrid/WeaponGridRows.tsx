import { WeaponGridRow } from './WeaponGridRow';
import { WeaponGridRowsProps } from './types';
import styles from './WeaponGridRows.module.css';

export const WeaponGridRows = (props: WeaponGridRowsProps) => {
  const { animal, weapons } = props;

  return (
    <div className={styles.WeaponGridRows}>
      {weapons.map(weapon => (
        <WeaponGridRow animal={animal} key={weapon.id} weapon={weapon} />
      ))}
    </div>
  );
};
