import clsx from 'clsx';
import { Button } from 'components/Button';
import { useTranslator } from 'hooks';
import { AnimalActivityGridFilterProps } from './types';
import styles from './AnimalActivityGridFilter.module.css';
import { MapType } from 'types/cartography';
import { TranslationKey } from 'types/i18n';

export const AnimalActivityGridFilter = (
  props: AnimalActivityGridFilterProps,
) => {
  const { mapType, onChange } = props;

  // Retrieve application translator
  const translate = useTranslator();

  const renderButton = (
    translationKey: TranslationKey,
    targetType?: MapType,
  ) => (
    <Button
      className={clsx(styles.AnimalActivityGridFilterButton, {
        [styles.AnimalActivityGridFilterButtonActive]: targetType === mapType,
      })}
      onClick={() => onChange(targetType)}
    >
      {translate(translationKey)}
    </Button>
  );

  return (
    <div className={styles.AnimalActivityGridFilter}>
      {renderButton('UI:ALL')}
      {renderButton('POI:MAP_NAME_IDAHO', 'idaho')}
      {renderButton('POI:MAP_NAME_TRANSYLVANIA', 'transylvania')}
      {renderButton('POI:MAP_NAME_ALASKA', 'alaska')}
      {renderButton('POI:MAP_NAME_AFRICA', 'africa')}
    </div>
  );
};