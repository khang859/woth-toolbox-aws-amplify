import { SectionHeader } from 'components/SectionHeader';
import { useTranslator } from 'hooks';
import { getTierKey } from 'lib/i18n';
import { AnimalListItem } from './AnimalListItem';
import { AnimalListGroupProps } from './types';

export const AnimalListGroup = (props: AnimalListGroupProps) => {
  const { group, selected, onAnimalClick } = props;

  // Retrieve application translator
  const translate = useTranslator();

  return (
    <>
      <li>
        <SectionHeader>{translate(getTierKey(group.tier))}</SectionHeader>
      </li>

      {group.entities.map(animal => (
        <AnimalListItem
          active={animal.type === selected?.type}
          animal={animal}
          key={animal.type}
          onClick={onAnimalClick}
        />
      ))}
    </>
  );
};
